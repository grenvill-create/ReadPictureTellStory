import React, { useState, useRef } from "react";
import { PinyinText } from "../App";

export default function MultiPageBookViewer({ 
  story, 
  onBack, 
  showPinyin, 
  speakText, 
  getImageUrl, 
  saveAudioBlob 
}) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);
  
  // Recording State for current page
  const [recordingState, setRecordingState] = useState("idle");
  const [audioUrl, setAudioUrl] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const playbackAudioRef = useRef(null);

  const pages = story.pages || [];
  const currentPage = pages[currentPageIndex];

  if (!currentPage) return null;

  // Hotspot click
  const handleHotspotClick = (hotspot) => {
    setActiveHotspot(hotspot.id);
    speakText(hotspot.name, "zh-CN");
    setTimeout(() => {
      if (hotspot.nameEn) {
        speakText(hotspot.nameEn, "en-US");
      }
    }, 1000);
  };

  // Text paragraph click
  const handleTextClick = (text) => {
    speakText(text, "zh-CN");
  };

  // Navigation
  const goNext = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(prev => prev + 1);
      resetPageStates();
    }
  };

  const goPrev = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
      resetPageStates();
    }
  };

  const resetPageStates = () => {
    setActiveHotspot(null);
    setRecordingState("idle");
    setAudioUrl(null);
    setSavedSuccess(false);
    audioChunksRef.current = [];
    if (playbackAudioRef.current) {
      playbackAudioRef.current.pause();
    }
  };

  // Recording Logic
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        setRecordingState("has_audio");
        
        // Stop all tracks
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setRecordingState("recording");
      setSavedSuccess(false);
    } catch (err) {
      console.error("Microphone access denied or error:", err);
      alert("无法访问麦克风，请检查浏览器权限设置！");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
  };

  const playRecording = () => {
    if (audioUrl) {
      if (!playbackAudioRef.current) {
        playbackAudioRef.current = new Audio(audioUrl);
      } else {
        playbackAudioRef.current.src = audioUrl;
      }
      playbackAudioRef.current.play().catch(err => console.error(err));
    }
  };

  const saveRecording = async () => {
    if (!audioUrl) return;
    setIsSaving(true);
    try {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      // Important: Save using the main story.id so it shows up in dashboard as an array
      await saveAudioBlob(story.id, audioBlob);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    } catch (e) {
      console.error(e);
      alert("保存失败");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="multipage-viewer">
      {/* Header */}
      <div className="multipage-header">
        <button onClick={onBack} className="multipage-back-btn bounce-hover">
          ⬅ 返回画册
        </button>
        <h2 className="multipage-title">{story.title.split("/")[0]}</h2>
        <div className="multipage-progress">
          Page {currentPageIndex + 1} / {pages.length}
        </div>
      </div>

      {/* Main Content */}
      <div className="multipage-content">
        
        {/* Left Arrow */}
        <button 
          className={`multipage-nav-btn prev-btn bounce-hover ${currentPageIndex === 0 ? "disabled" : ""}`}
          onClick={goPrev}
          disabled={currentPageIndex === 0}
        >
          ◀
        </button>

        {/* Page Container */}
        <div className="multipage-page-container">
          <div className="multipage-image-wrapper">
            <img 
              src={getImageUrl(currentPage.image)} 
              alt={`Page ${currentPageIndex + 1}`} 
              className="multipage-image" 
            />
            {/* Hotspots */}
            {currentPage.hotspots && currentPage.hotspots.map(hotspot => (
              <div
                key={hotspot.id}
                className={`hotspot-circle pulse ${activeHotspot === hotspot.id ? "active" : ""}`}
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                  width: `${hotspot.radius * 2}px`,
                  height: `${hotspot.radius * 2}px`,
                  marginLeft: `-${hotspot.radius}px`,
                  marginTop: `-${hotspot.radius}px`
                }}
                onClick={() => handleHotspotClick(hotspot)}
              >
                {activeHotspot === hotspot.id && (
                  <div className="hotspot-tooltip">
                    <div className="tooltip-zh"><PinyinText text={hotspot.name} showPinyin={showPinyin} /></div>
                    {hotspot.nameEn && <div className="tooltip-en">{hotspot.nameEn}</div>}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Text Area */}
          <div className="multipage-text-area">
            {currentPage.fableText && currentPage.fableText.map((paragraph, idx) => (
              <p 
                key={idx} 
                className="multipage-paragraph bounce-hover"
                onClick={() => handleTextClick(paragraph)}
                style={{ cursor: 'pointer' }}
                title="点击朗读"
              >
                <PinyinText text={paragraph} showPinyin={showPinyin} />
              </p>
            ))}
          </div>
          
          {/* Audio Recording for this page */}
          <div className="multipage-recording-area">
            {recordingState === "idle" && (
              <button onClick={startRecording} className="record-btn bounce-hover" style={{ padding: "8px 16px" }}>
                🎙️ 录制本页配音
              </button>
            )}
            
            {recordingState === "recording" && (
              <button onClick={stopRecording} className="record-btn recording pulse" style={{ padding: "8px 16px" }}>
                ⏹️ 停止录音...
              </button>
            )}

            {recordingState === "has_audio" && (
              <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                <button onClick={playRecording} className="record-btn bounce-hover" style={{ backgroundColor: "var(--color-blue)", padding: "8px 16px" }}>
                  🔊 听听我的声音
                </button>
                <button onClick={startRecording} className="record-btn bounce-hover" style={{ backgroundColor: "#ff9800", padding: "8px 16px" }}>
                  🔄 重录
                </button>
                <button 
                  onClick={saveRecording} 
                  className="record-btn bounce-hover" 
                  style={{ backgroundColor: "var(--color-green)", padding: "8px 16px" }}
                  disabled={isSaving}
                >
                  {isSaving ? "保存中..." : (savedSuccess ? "✅ 已保存" : "💾 保存配音")}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          className={`multipage-nav-btn next-btn bounce-hover ${currentPageIndex === pages.length - 1 ? "disabled" : ""}`}
          onClick={goNext}
          disabled={currentPageIndex === pages.length - 1}
        >
          ▶
        </button>

      </div>
    </div>
  );
}
