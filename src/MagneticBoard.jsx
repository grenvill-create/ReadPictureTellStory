import React, { useState, useRef } from 'react';
import './MagneticBoard.css';

const STICKERS_PALETTE = ['??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '?', '??', '??', '??'];

export default function MagneticBoard({ onBack }) {
  const [stickers, setStickers] = useState([]);
  const [recordingState, setRecordingState] = useState('idle'); // idle, recording, has_audio
  const [audioUrl, setAudioUrl] = useState(null);
  
  const boardRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleAddSticker = (emoji) => {
    setStickers([
      ...stickers, 
      { id: Date.now() + Math.random(), emoji, x: 50, y: 50, size: 60 }
    ]);
  };

  const [draggingId, setDraggingId] = useState(null);

  const handlePointerDown = (e, id) => {
    e.stopPropagation();
    e.preventDefault(); // Prevent text selection
    e.target.setPointerCapture(e.pointerId);
    setDraggingId(id);
  };

  const handlePointerMove = (e) => {
    if (!draggingId || !boardRef.current) return;
    const rect = boardRef.current.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // clamp
    x = Math.max(0, Math.min(100, x));
    y = Math.max(0, Math.min(100, y));

    setStickers(stickers.map(s => s.id === draggingId ? { ...s, x, y } : s));
  };

  const handlePointerUp = (e) => {
    if (draggingId) {
      e.target.releasePointerCapture(e.pointerId);
      setDraggingId(null);
    }
  };

  const removeSticker = (e, id) => {
    e.stopPropagation();
    setStickers(stickers.filter(s => s.id !== id));
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        setRecordingState('has_audio');
      };

      mediaRecorder.start();
      setRecordingState('recording');
    } catch (err) {
      console.error("Recording error:", err);
      alert("无法访问麦克风，请检查浏览器权限。");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
  };

  const playRecording = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  return (
    <div className="magnetic-board-container">
      <div className="scene-header">
        <button onClick={onBack} className="back-link bounce-hover">? 返回主页</button>
        <h2 className="scene-title">?? 磁力贴故事板</h2>
      </div>

      <div className="board-instructions">
        点击下方的贴纸添加到画布，你可以自由拖动它们摆放，然后按录音键讲一个属于你自己的故事！
      </div>

      <div 
        className="board-canvas" 
        ref={boardRef}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <img src="/images/storyboard_bg.png" alt="Storyboard Background" className="board-bg" />
        {stickers.map(sticker => (
          <div
            key={sticker.id}
            className="board-sticker"
            style={{
              left: \\%\,
              top: \\%\,
              fontSize: \\px\,
              cursor: draggingId === sticker.id ? 'grabbing' : 'grab',
              zIndex: draggingId === sticker.id ? 100 : 10
            }}
            onPointerDown={(e) => handlePointerDown(e, sticker.id)}
          >
            {sticker.emoji}
            {draggingId !== sticker.id && (
              <button 
                className="sticker-delete-btn"
                onClick={(e) => removeSticker(e, sticker.id)}
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="sticker-palette">
        {STICKERS_PALETTE.map((emoji, idx) => (
          <button 
            key={idx} 
            className="palette-item bounce-hover"
            onClick={() => handleAddSticker(emoji)}
          >
            {emoji}
          </button>
        ))}
        <button 
          className="palette-item clear-btn bounce-hover"
          onClick={() => setStickers([])}
        >
          ??? 清空
        </button>
      </div>

      <div className="storyboard-controls">
        <div className="recording-container" style={{ margin: '0 auto', background: 'white' }}>
          {recordingState === 'idle' && (
            <button onClick={startRecording} className="mic-button bounce-hover">??? 开始讲故事</button>
          )}
          {recordingState === 'recording' && (
            <button onClick={stopRecording} className="mic-button recording">?? 完成录音</button>
          )}
          {recordingState === 'has_audio' && (
            <>
              <button onClick={startRecording} className="mic-button bounce-hover" style={{ width: 'auto', padding: '0 20px', fontSize: '20px' }}>?? 重录</button>
              <button onClick={playRecording} className="play-recording-btn bounce-hover" style={{ margin: 0, padding: '0 20px', fontSize: '20px' }}>?? 听宝宝讲</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
