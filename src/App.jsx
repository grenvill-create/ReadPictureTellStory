import React, { useState, useEffect, useRef } from "react";
import { storiesData } from "./data/storiesData";
import "./App.css";

// Decorative Stickers mapped to Story IDs
const STICKERS = {
  kite_flying: "🪁",
  beach_sandcastle: "🏰",
  forest_picnic: "🍉",
  rainbow_puddle: "🌈",
  hidden_cat: "🐱",
  zoo_visit: "🦒",
  bunny_birthday: "🍰",
  space_adventure: "🚀",
  building_snowman: "⛄",
  pond_concert: "🐸"
};

const DB_NAME = "ReadPictureTellStoryDB";
const STORE_NAME = "recordings";

const initDB = () => {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB is not supported in this browser"));
      return;
    }
    try {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = (e) => resolve(e.target.result);
      request.onerror = (e) => reject(e.target.error);
    } catch (err) {
      reject(err);
    }
  });
};

const saveAudioBlob = async (storyId, blob) => {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(blob, storyId);
      request.onsuccess = () => resolve();
      request.onerror = (e) => reject(e.target.error);
    });
  } catch (err) {
    console.error("Failed to save to IndexedDB:", err);
  }
};

const getAllAudioBlobs = async () => {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.openCursor();
      const results = {};
      request.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          results[cursor.key] = cursor.value;
          cursor.continue();
        } else {
          resolve(results);
        }
      };
      request.onerror = (e) => reject(e.target.error);
    });
  } catch (err) {
    console.error("Failed to get all from IndexedDB:", err);
    return {};
  }
};

const getImageUrl = (path) => {
  if (!path) return "";
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  return import.meta.env.BASE_URL + cleanPath;
};

export default function App() {
  const [currentStoryId, setCurrentStoryId] = useState(null);
  const [currentStep, setCurrentStep] = useState(1); // 1: Explore, 2: Speak, 3: Assemble, 4: Storybook
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [exploredHotspots, setExploredHotspots] = useState([]);
  const [recordingState, setRecordingState] = useState("idle"); // idle, recording, has_audio
  const [audioUrl, setAudioUrl] = useState(null);
  const [builderLanguage, setBuilderLanguage] = useState("zh"); // zh, en
  const [assembledCards, setAssembledCards] = useState([]);
  const [cardsPool, setCardsPool] = useState([]);
  const [isSentenceCorrect, setIsSentenceCorrect] = useState(false);
  const [activeBookSentence, setActiveBookSentence] = useState(null);
  const [showParentGuide, setShowParentGuide] = useState(false);
  
  // Audio playback state
  const [isPlaying, setIsPlaying] = useState(false);
  const [activePlaybackUrl, setActivePlaybackUrl] = useState(null);
  
  // Persistent recordings state for the active session (restored from IndexedDB)
  const [recordings, setRecordings] = useState({});

  // Parent comments/encouragement messages
  const [encouragements, setEncouragements] = useState(() => {
    try {
      const saved = localStorage.getItem("story_encouragements");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.warn("localStorage is not available:", e);
      return {};
    }
  });

  // Parent Dashboard Modal State
  const [showParentModal, setShowParentModal] = useState(false);
  const [parentLockPassed, setParentLockPassed] = useState(false);
  const [mathNum1, setMathNum1] = useState(0);
  const [mathNum2, setMathNum2] = useState(0);
  const [parentLockAnswer, setParentLockAnswer] = useState("");
  const [tempComments, setTempComments] = useState({});

  // App Progress state
  const [starsCollected, setStarsCollected] = useState(() => {
    try {
      const saved = localStorage.getItem("story_stars");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.warn("localStorage is not available:", e);
      return {};
    }
  });
  
  // Read status tracking
  const [readStories, setReadStories] = useState(() => {
    try {
      const saved = localStorage.getItem("story_read_status");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [showDirectoryModal, setShowDirectoryModal] = useState(false);
  const [directoryType, setDirectoryType] = useState(""); // "daily" or "fable"

  const handleStartReading = (storyId) => {
    setCurrentStoryId(storyId);
    setCurrentStep(1);
    setExploredHotspots([]);
    setShowDirectoryModal(false); // Fix: close modal when starting to read
    
    const existingAudio = recordings[storyId];
    setAudioUrl(existingAudio || null);
    setRecordingState(existingAudio ? "has_audio" : "idle");
    
    setActiveHotspot(null);
    setIsSentenceCorrect(false);
    setAssembledCards([]);
    setActiveBookSentence(null);
    setShowParentGuide(false);

    if (!readStories.includes(storyId)) {
      const newReadStatus = [...readStories, storyId];
      setReadStories(newReadStatus);
      localStorage.setItem("story_read_status", JSON.stringify(newReadStatus));
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dailyCarouselRef = useRef(null);
  const fableCarouselRef = useRef(null);

  const handleScrollCarousel = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const [unlockedStickers, setUnlockedStickers] = useState(() => {
    try {
      const saved = localStorage.getItem("story_stickers");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn("localStorage is not available:", e);
      return [];
    }
  });

  const [showConfetti, setShowConfetti] = useState(false);
  const [mascotText, setMascotText] = useState("欢迎来到看图说话乐园！选一幅画我们开始吧！");

  // Audio refs
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioStreamRef = useRef(null);
  const playbackAudioRef = useRef(null);
  const recordingMimeTypeRef = useRef("audio/webm");

  const currentStory = storiesData.find(s => s.id === currentStoryId);

  // Load recordings from IndexedDB on startup
  useEffect(() => {
    const loadRecordings = async () => {
      const storedBlobs = await getAllAudioBlobs();
      const loadedRecordings = {};
      for (const [storyId, blob] of Object.entries(storedBlobs)) {
        if (blob instanceof Blob) {
          loadedRecordings[storyId] = URL.createObjectURL(blob);
        }
      }
      setRecordings(loadedRecordings);
    };
    loadRecordings();
  }, []);

  // Sync Progress to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem("story_stars", JSON.stringify(starsCollected));
      localStorage.setItem("story_stickers", JSON.stringify(unlockedStickers));
      localStorage.setItem("story_encouragements", JSON.stringify(encouragements));
    } catch (e) {
      console.warn("Failed to sync progress to localStorage:", e);
    }
  }, [starsCollected, unlockedStickers, encouragements]);

  // Load SpeechSynthesis voices safely
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  // Pause audio playback when changing stories
  useEffect(() => {
    if (playbackAudioRef.current) {
      playbackAudioRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentStoryId]);


  // Set Mascot text on step change
  useEffect(() => {
    if (!currentStory) {
      setMascotText("欢迎来到看图说话乐园！选一幅画，跟小精灵一起学习吧！");
      return;
    }

    // Check if there is a parent comment/encouragement for this story
    const parentMsg = encouragements[currentStoryId];

    if (currentStep === 1) {
      setMascotText("第一步：点一点图片，看看你认识哪些宝贝？跟读一下哦！");
    } else if (currentStep === 2) {
      if (parentMsg) {
        setMascotText(`🦄 妈妈的鼓励寄语：“${parentMsg}”！来，点击红色的麦克风，把你看到的画面大声说出来吧！`);
      } else {
        setMascotText("第二步：大声点！点击红色的麦克风，把你看到的画面自己说出来吧！");
      }
    } else if (currentStep === 3) {
      setMascotText("第三步：我们来玩拼词积木！把下面的卡片按照顺序点上去吧！");
    } else if (currentStep === 4) {
      setMascotText("第四步：太棒了！点击故事书里的句子，一起来听听看，跟读模仿一下吧！");
    }
  }, [currentStep, currentStoryId, encouragements]);

  // TTS Reader
  const speakText = (text, lang = "zh-CN") => {
    if (typeof window === "undefined" || !window.speechSynthesis || !window.SpeechSynthesisUtterance) {
      console.warn("Speech synthesis not supported in this browser:", text);
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      
      // Choose appropriate voice
      const voices = window.speechSynthesis.getVoices();
      const matchingVoice = voices.find(v => 
        lang.startsWith("zh") ? (v.lang.includes("zh") || v.lang.includes("ZH")) 
                              : (v.lang.includes("en") || v.lang.includes("EN"))
      );
      if (matchingVoice) utterance.voice = matchingVoice;
      
      // Adjust rate for kids
      utterance.rate = lang.startsWith("zh") ? 0.85 : 0.75;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error("Speech synthesis failed:", e);
    }
  };

  // Trigger Hotspot Click
  const handleHotspotClick = (hotspot) => {
    setActiveHotspot(hotspot.id);
    if (!exploredHotspots.includes(hotspot.id)) {
      const updated = [...exploredHotspots, hotspot.id];
      setExploredHotspots(updated);
      
      // Award first star if all hotspots explored
      if (updated.length === currentStory.hotspots.length) {
        awardStar(currentStoryId, 1);
      }
    }

    // Speak bilingual vocabulary
    speakText(hotspot.name, "zh-CN");
    setTimeout(() => {
      speakText(hotspot.nameEn, "en-US");
    }, 1200);
  };

  // Award Stars helper
  const awardStar = (storyId, starIndex) => {
    setStarsCollected(prev => {
      const current = prev[storyId] || [false, false, false];
      const next = [...current];
      next[starIndex - 1] = true;
      
      // If all stars collected, unlock sticker
      if (next.every(Boolean)) {
        const sticker = STICKERS[storyId];
        if (sticker && !unlockedStickers.includes(sticker)) {
          setUnlockedStickers(old => [...old, sticker]);
          triggerConfetti();
        }
      }
      return { ...prev, [storyId]: next };
    });
  };

  // Trigger Confetti Celebration
  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  // Playback Toggle Control
  const handleTogglePlay = (url) => {
    if (!url) return;
    
    if (playbackAudioRef.current) {
      if (activePlaybackUrl === url && isPlaying) {
        playbackAudioRef.current.pause();
        setIsPlaying(false);
      } else {
        playbackAudioRef.current.pause();
        playbackAudioRef.current.src = url;
        playbackAudioRef.current.play().catch(err => {
          console.error("回听录音失败:", err);
        });
        setActivePlaybackUrl(url);
        setIsPlaying(true);
      }
    }
  };

  // Audio Recording handlers
  const startRecording = async () => {
    try {
      // Pause any active playback before starting a new recording
      if (playbackAudioRef.current) {
        playbackAudioRef.current.pause();
        setIsPlaying(false);
      }

      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
      setAudioUrl(null);
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioStreamRef.current = stream;
      
      // Select supported MIME type
      let mimeType = "audio/webm";
      if (MediaRecorder.isTypeSupported("audio/webm")) {
        mimeType = "audio/webm";
      } else if (MediaRecorder.isTypeSupported("audio/mp4")) {
        mimeType = "audio/mp4";
      } else if (MediaRecorder.isTypeSupported("audio/wav")) {
        mimeType = "audio/wav";
      } else if (MediaRecorder.isTypeSupported("audio/ogg")) {
        mimeType = "audio/ogg";
      }
      
      recordingMimeTypeRef.current = mimeType;
      console.log("Selected MIME type for MediaRecorder:", mimeType);
      
      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: recordingMimeTypeRef.current });
        
        // Save to IndexedDB
        await saveAudioBlob(currentStoryId, audioBlob);
        
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        setRecordings(prev => {
          if (prev[currentStoryId]) {
            URL.revokeObjectURL(prev[currentStoryId]);
          }
          return { ...prev, [currentStoryId]: url };
        });
        setRecordingState("has_audio");
        awardStar(currentStoryId, 2);
      };

      mediaRecorder.start();
      setRecordingState("recording");
    } catch (err) {
      console.error("无法启动录音:", err);
      alert("无法启动录音，请确保麦克风权限已开启并且没有被其他程序占用！");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recordingState === "recording") {
      mediaRecorderRef.current.stop();
      if (audioStreamRef.current) {
        audioStreamRef.current.getTracks().forEach(track => track.stop());
      }
    }
  };

  const downloadAudio = async (url, storyName) => {
    if (!url) return;
    
    let ext = "webm";
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      if (blob.type.includes("mp4") || blob.type.includes("m4a")) {
        ext = "m4a";
      } else if (blob.type.includes("wav")) {
        ext = "wav";
      } else if (blob.type.includes("ogg")) {
        ext = "ogg";
      } else if (blob.type.includes("webm")) {
        ext = "webm";
      } else if (blob.type.includes("mpeg") || blob.type.includes("mp3")) {
        ext = "mp3";
      }
    } catch (e) {
      console.warn("Could not fetch blob to determine mime type, falling back:", e);
      if (recordingMimeTypeRef.current.includes("mp4")) {
        ext = "m4a";
      } else if (recordingMimeTypeRef.current.includes("wav")) {
        ext = "wav";
      }
    }

    const a = document.createElement("a");
    a.href = url;
    a.download = `看图说话_${storyName}_宝贝录音.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Next Story Handler
  const handleNextStory = () => {
    const currentIndex = storiesData.findIndex(s => s.id === currentStoryId);
    const nextIndex = (currentIndex + 1) % storiesData.length;
    const nextStory = storiesData[nextIndex];

    // Pause any active playback when switching stories
    if (playbackAudioRef.current) {
      playbackAudioRef.current.pause();
      setIsPlaying(false);
    }

    setCurrentStoryId(nextStory.id);
    setCurrentStep(1);
    setExploredHotspots([]);
    
    // Restore recording from active session if exists
    const existingAudio = recordings[nextStory.id];
    setAudioUrl(existingAudio || null);
    setRecordingState(existingAudio ? "has_audio" : "idle");
    
    setActiveHotspot(null);
    setIsSentenceCorrect(false);
    setAssembledCards([]);
    setActiveBookSentence(null);
    setShowParentGuide(false);

    // Smooth scroll to top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sentence Builder Setup
  const initializeSentenceBuilder = (lang) => {
    setBuilderLanguage(lang);
    setAssembledCards([]);
    setIsSentenceCorrect(false);
    
    const targetBlocks = lang === "zh" ? currentStory.sentenceBlocksZh : currentStory.sentenceBlocksEn;
    // Shuffle cards
    const shuffled = [...targetBlocks].sort(() => Math.random() - 0.5);
    setCardsPool(shuffled);
  };

  useEffect(() => {
    if (currentStory && currentStep === 3) {
      initializeSentenceBuilder(builderLanguage);
    }
  }, [currentStep, currentStoryId, builderLanguage]);

  const selectWordCard = (word) => {
    if (isSentenceCorrect) return;
    setAssembledCards(prev => [...prev, word]);
    setCardsPool(prev => prev.filter(w => w !== word));
  };

  const removeWordCard = (word) => {
    if (isSentenceCorrect) return;
    setAssembledCards(prev => prev.filter(w => w !== word));
    setCardsPool(prev => [...prev, word]);
  };

  const checkSentence = () => {
    const targetBlocks = builderLanguage === "zh" ? currentStory.sentenceBlocksZh : currentStory.sentenceBlocksEn;
    const isCorrect = assembledCards.join(" ") === targetBlocks.join(" ") || 
                     assembledCards.join("") === targetBlocks.join("");
    
    if (isCorrect) {
      setIsSentenceCorrect(true);
      triggerConfetti();
      const sentenceText = targetBlocks.join(builderLanguage === "zh" ? "" : " ");
      speakText(sentenceText, builderLanguage === "zh" ? "zh-CN" : "en-US");
      
      // Award the third star
      awardStar(currentStoryId, 3);
    } else {
      speakText("拼错了哦，再试一次吧！", "zh-CN");
      // Reset
      initializeSentenceBuilder(builderLanguage);
    }
  };

  // Book reader
  const handleReadSentence = (zhText, enText, index) => {
    setActiveBookSentence(index);
    speakText(zhText, "zh-CN");
    
    // Speak English sentence after Chinese
    setTimeout(() => {
      speakText(enText, "en-US");
    }, 3000);
  };

  // Parent Dashboard Handlers
  const handleOpenParentDashboard = () => {
    const n1 = Math.floor(Math.random() * 8) + 2; // 2 to 9
    const n2 = Math.floor(Math.random() * 8) + 2; // 2 to 9
    setMathNum1(n1);
    setMathNum2(n2);
    setParentLockAnswer("");
    setParentLockPassed(false);
    setShowParentModal(true);

    // Initialize temp comments state
    const currentComments = {};
    storiesData.forEach(s => {
      currentComments[s.id] = encouragements[s.id] || "";
    });
    setTempComments(currentComments);
  };

  const handleVerifyParentLock = () => {
    if (parseInt(parentLockAnswer) === mathNum1 + mathNum2) {
      setParentLockPassed(true);
    } else {
      speakText("答错了哦，再试一次！", "zh-CN");
      setParentLockAnswer("");
    }
  };

  const handleSaveComment = (storyId) => {
    setEncouragements(prev => ({
      ...prev,
      [storyId]: tempComments[storyId] || ""
    }));
    speakText("寄语保存成功", "zh-CN");
  };

  const handleImportAudio = async (e, storyId) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    try {
      // Save the uploaded file (which is a Blob) to IndexedDB
      await saveAudioBlob(storyId, file);
      
      // Create local object URL
      const url = URL.createObjectURL(file);
      
      // Update recordings state
      setRecordings(prev => {
        if (prev[storyId]) {
          URL.revokeObjectURL(prev[storyId]);
        }
        return { ...prev, [storyId]: url };
      });
      
      // If we are currently looking at this story, update the audioUrl and recordingState
      if (currentStoryId === storyId) {
        setAudioUrl(url);
        setRecordingState("has_audio");
      }
      
      // Award the recording star since they now have a recording
      awardStar(storyId, 2);
      
      speakText("录音导入成功", "zh-CN");
    } catch (err) {
      console.error("导入录音失败:", err);
      alert("导入录音文件失败，请重试！");
    }
  };

  return (
    <div className="app-container">
      {/* Confetti Overlay */}
      {showConfetti && (
        <div className="confetti-canvas">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="confetti-piece"
              style={{
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: ["#ff7ebb", "#9a7dfa", "#ffd043", "#67e1a3"][Math.floor(Math.random() * 4)]
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <header className="app-header">
        <div className="logo-container">
          <span className="logo-icon">🌟</span>
          <h1 className="logo-text">看图说话小乐园</h1>
        </div>
        <button onClick={handleOpenParentDashboard} className="parent-btn bounce-hover">
          <span>🧸</span> 家长专区 / Dashboard
        </button>
      </header>

      {/* Mascot Speech Bubble */}
      <div className="mascot-helper">
        <div className="mascot-avatar">🦄</div>
        <div className="mascot-speech-bubble">{mascotText}</div>
      </div>

      {/* Main Content Area */}
      {currentStoryId === null ? (
        /* Dashboard Scene Selection */
        <div className="dashboard-container">
          <div className="dashboard-header-row">
            <div>
              <h2 className="dashboard-title" style={{marginBottom: 0}}>日常图画 / Daily Life</h2>
              <p className="dashboard-subtitle" style={{marginBottom: 0}}>点击一幅画，开始我们的探索之旅吧！</p>
            </div>
            <button className="directory-btn" onClick={() => {setDirectoryType("daily"); setShowDirectoryModal(true);}}>
              📚 查看目录
            </button>
          </div>
          
          <div className="carousel-wrapper" style={{ position: 'relative' }}>
            <button className="carousel-nav-btn left" onClick={() => handleScrollCarousel(dailyCarouselRef, 'left')}>
              &#10094;
            </button>
            <button className="carousel-nav-btn right" onClick={() => handleScrollCarousel(dailyCarouselRef, 'right')}>
              &#10095;
            </button>
            <div 
              className="story-carousel"
              ref={dailyCarouselRef}
            >
            {storiesData.filter(s => s.type !== "fable").map(story => {
              const stars = starsCollected[story.id] || [false, false, false];
              const score = stars.filter(Boolean).length;
              return (
                <div key={story.id} className="story-card">
                  <div className="story-card-image-wrapper">
                    <img src={getImageUrl(story.image)} alt={story.title.split("/")[0]} className="story-card-image" />
                    {score === 3 && <div className="story-card-badge">已通关 🎉</div>}
                    {readStories.includes(story.id) ? (
                      <div className="read-badge">✅ 已读</div>
                    ) : (
                      <div className="new-badge">🆕</div>
                    )}
                  </div>
                  <div className="story-card-info">
                    <h3 className="story-card-title">{story.title.split("/")[0]}</h3>
                    <p className="story-card-description">{story.title.split("/")[1]}</p>
                    <div className="story-card-footer">
                      <div className="stars-collected">
                        {stars.map((active, idx) => (
                          <span key={idx}>{active ? "⭐" : "☆"}</span>
                        ))}
                      </div>
                      <button 
                        onClick={() => handleStartReading(story.id)} 
                        className="play-btn bounce-hover"
                      >
                        出发 / Start
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

          <div className="dashboard-header-row" style={{ marginTop: '40px' }}>
            <div>
              <h2 className="dashboard-title" style={{marginBottom: 0}}>寓言绘本 / Fables</h2>
              <p className="dashboard-subtitle" style={{marginBottom: 0}}>爸爸妈妈亲自为你读的睡前故事！</p>
            </div>
            <button className="directory-btn" onClick={() => {setDirectoryType("fable"); setShowDirectoryModal(true);}}>
              📚 查看目录
            </button>
          </div>
          
          <div className="carousel-wrapper" style={{ position: 'relative' }}>
            <button className="carousel-nav-btn left" onClick={() => handleScrollCarousel(fableCarouselRef, 'left')}>
              &#10094;
            </button>
            <button className="carousel-nav-btn right" onClick={() => handleScrollCarousel(fableCarouselRef, 'right')}>
              &#10095;
            </button>
            <div 
              className="story-carousel"
              ref={fableCarouselRef}
            >
            {storiesData.filter(s => s.type === "fable").map(story => {
              return (
                <div key={story.id} className="story-card">
                  <div className="story-card-image-wrapper">
                    <img src={getImageUrl(story.image)} alt={story.title.split("/")[0]} className="story-card-image" />
                    {readStories.includes(story.id) ? (
                      <div className="read-badge">✅ 已读</div>
                    ) : (
                      <div className="new-badge">🆕</div>
                    )}
                  </div>
                  <div className="story-card-info">
                    <h3 className="story-card-title">{story.title.split("/")[0]}</h3>
                    <p className="story-card-description">{story.title.split("/")[1]}</p>
                    <div className="story-card-footer" style={{ justifyContent: 'flex-end' }}>
                      <button 
                        onClick={() => handleStartReading(story.id)} 
                        className="play-btn bounce-hover"
                        style={{ backgroundColor: 'var(--color-yellow)', color: 'var(--color-text-dark)' }}
                      >
                        📖 开始共读
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

          {/* Sticker Book / Achievement shelf */}
          <div className="stickers-panel">
            <h3 className="stickers-header">🏆 我的糖果贴纸盒 (Stickers collected: {unlockedStickers.length})</h3>
            <div className="stickers-shelf">
              {unlockedStickers.length === 0 ? (
                <p style={{ color: "var(--color-text-light)", width: "100%", textAlign: "center", alignSelf: "center" }}>
                  你还没有收集到贴纸哦！完成故事里的 3 个小任务，就能获得可爱贴纸啦！
                </p>
              ) : (
                unlockedStickers.map((sticker, idx) => (
                  <div key={idx} className="sticker-item" title="可爱的贴纸">
                    {sticker}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Directory Modal */}
          {showDirectoryModal && (
            <div className="modal-overlay" onClick={() => setShowDirectoryModal(false)}>
              <div className="modal-content directory-modal" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setShowDirectoryModal(false)}>×</button>
                <h3>{directoryType === 'daily' ? '日常图画 / Daily Life 目录' : '寓言绘本 / Fables 目录'}</h3>
                <div className="directory-list">
                  {storiesData.filter(s => directoryType === 'daily' ? s.type !== 'fable' : s.type === 'fable').map((s, idx) => (
                    <div 
                      key={s.id} 
                      className={`directory-item ${readStories.includes(s.id) ? 'read' : 'unread'}`}
                      onClick={() => handleStartReading(s.id)}
                    >
                      <span className="idx">{idx + 1}.</span>
                      <img src={getImageUrl(s.image)} alt="" className="directory-thumbnail" />
                      <div className="directory-item-info">
                        <span className="title">{s.title.split("/")[0]}</span>
                        <span className="status">{readStories.includes(s.id) ? '✅ 已读' : '🆕 未读'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Inside Learning Story */
        <div className="workspace-layout">
          
          {/* Left Canvas: Main picture with click zones */}
          <div className="canvas-panel">
            <div className="canvas-header">
              <button 
                onClick={() => {
                  if (playbackAudioRef.current) {
                    playbackAudioRef.current.pause();
                    setIsPlaying(false);
                  }
                  setCurrentStoryId(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }} 
                className="back-link bounce-hover"
              >
                ⬅ 返回画册
              </button>
              
              <h2 className="canvas-title">{currentStory.title.split("/")[0]}</h2>
              
              <button 
                onClick={() => handleTogglePlay(audioUrl)} 
                disabled={!audioUrl}
                className={`header-audio-play-btn ${audioUrl ? "active" : "disabled"} ${activePlaybackUrl === audioUrl && isPlaying ? "playing" : ""}`}
                title={audioUrl ? "回听我的录音" : "还没有录音哦"}
              >
                {activePlaybackUrl === audioUrl && isPlaying ? "⏸️ 停止" : "🔊 回听录音"}
              </button>
              
              <div className="stars-collected">
                {(starsCollected[currentStory.id] || [false, false, false]).map((active, idx) => (
                  <span key={idx} style={{ fontSize: "24px" }}>{active ? "⭐" : "☆"}</span>
                ))}
              </div>
              
              {currentStep === 1 && (
                <button 
                  onClick={() => setShowParentGuide(!showParentGuide)} 
                  className="parent-guide-toggle"
                >
                  👶 亲子共读锦囊
                </button>
              )}
            </div>

            <div className="image-canvas-wrapper">
              <img 
                src={getImageUrl(currentStory.image)} 
                alt={currentStory.title} 
                className="interactive-image" 
              />
              
              {/* Hotspots Overlay */}
              {currentStep === 1 && currentStory.hotspots.map(hotspot => {
                const isExplored = exploredHotspots.includes(hotspot.id);
                return (
                  <div
                    key={hotspot.id}
                    className={`hotspot-trigger ${activeHotspot === hotspot.id ? "active" : ""}`}
                    style={{
                      left: `${hotspot.x}%`,
                      top: `${hotspot.y}%`,
                      width: `${hotspot.radius * 2}%`,
                      paddingTop: `${hotspot.radius * 2}%`
                    }}
                    onClick={() => handleHotspotClick(hotspot)}
                  >
                    {!isExplored && <div className="hotspot-pulse"></div>}
                  </div>
                );
              })}

              {/* Speech bubble popup */}
              {currentStep === 1 && activeHotspot && (
                (() => {
                  const hotspot = currentStory.hotspots.find(h => h.id === activeHotspot);
                  return (
                    <div 
                      className="vocab-bubble"
                      style={{
                        left: `${hotspot.x}%`,
                        top: `${hotspot.y}%`
                      }}
                      onClick={() => {
                        speakText(hotspot.name, "zh-CN");
                        setTimeout(() => speakText(hotspot.nameEn, "en-US"), 1200);
                      }}
                    >
                      <span className="vocab-zh">{hotspot.name}</span>
                      <span className="vocab-en">{hotspot.nameEn}</span>
                      <span className="vocab-speaker-icon">🔊 点读</span>
                    </div>
                  );
                })()
              )}
            </div>

            {/* Step 1 exploration progress */}
            {currentStep === 1 && (
              <div className="exploration-progress">
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar-fill"
                    style={{ width: `${(exploredHotspots.length / currentStory.hotspots.length) * 100}%` }}
                  />
                </div>
                <div className="progress-text">
                  <span>已经发现了 {exploredHotspots.length} / {currentStory.hotspots.length} 个单词</span>
                  {exploredHotspots.length === currentStory.hotspots.length && <span>🎉 寻找完成！任务1星级已获得</span>}
                </div>
              </div>
            )}
            
            {/* Parent Guide Panel (Visible only when toggled in Step 1) */}
            {currentStep === 1 && showParentGuide && (
              <div className="parent-guide-panel">
                <div className="guide-section">
                  <h4 className="guide-title">📖 看图猜故事 (Picture Walk)</h4>
                  <p className="guide-text">{currentStory.parentGuide}</p>
                </div>
                
                {currentStory.dialogicQuestions && currentStory.dialogicQuestions.length > 0 && (
                  <div className="guide-section">
                    <h4 className="guide-title">💬 互动式提问 (Dialogic Questions)</h4>
                    <div className="question-list">
                      {currentStory.dialogicQuestions.map((q, i) => (
                        <div key={i} className="question-item">
                          <div className="question-badge" style={{ backgroundColor: q.color || "var(--color-purple)" }}>
                            {q.label}
                          </div>
                          <div className="question-text">{q.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {currentStory.lifeConnection && (
                  <div className="guide-section">
                    <h4 className="guide-title">🔗 生活连连看 (Life Connection)</h4>
                    <p className="guide-text" style={{ borderColor: "var(--color-green)", backgroundColor: "rgba(103, 225, 163, 0.05)" }}>
                      {currentStory.lifeConnection}
                    </p>
                  </div>
                )}
                
                {currentStory.retellingPrompt && (
                  <div className="guide-section" style={{ marginBottom: 0 }}>
                    <h4 className="guide-title">🎭 故事小舞台 (Retelling & Roleplay)</h4>
                    <p className="guide-text" style={{ borderColor: "var(--color-yellow)", backgroundColor: "rgba(255, 208, 67, 0.05)" }}>
                      {currentStory.retellingPrompt}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Control Panels */}
          <div className="control-panel">
            
            {currentStory.type === "fable" ? (
              <div className="step-content-card fable-teleprompter" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="step-heading">📖 故事提词器 (共读模式)</h3>
                <p className="step-instructions" style={{ marginBottom: '16px' }}>
                  请看着下面的文字，给宝贝讲一讲这个故事吧！遇到有趣的动物，还可以让宝贝在左边找一找点读哦。
                </p>
                
                <div className="fable-text-container" style={{ flexGrow: 1, overflowY: 'auto', background: 'rgba(255,255,255,0.6)', padding: '16px', borderRadius: '12px', border: '1px solid #eee' }}>
                  {currentStory.fableText && currentStory.fableText.map((paragraph, idx) => (
                    <p key={idx} className="fable-paragraph" style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '16px', color: '#333' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="fable-interactive-section" style={{ marginTop: '20px', background: 'rgba(154, 125, 250, 0.1)', padding: '16px', borderRadius: '12px' }}>
                  <h4 className="fable-subheading" style={{ margin: '0 0 8px 0', color: 'var(--color-purple)' }}>🎤 听完啦？小老师来发言！</h4>
                  <p className="step-instructions" style={{ fontSize: '15px', marginBottom: '12px', color: '#555' }}>
                    鼓励宝贝说一说：{currentStory.retellingPrompt || "你喜欢这个故事吗？为什么？"}
                  </p>
                  <div className="recording-container" style={{ minHeight: 'auto', padding: 0, gap: '12px', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    {recordingState === "idle" && (
                      <button onClick={startRecording} className="mic-button bounce-hover" style={{ width: '48px', height: '48px', fontSize: '20px' }}>🎙️</button>
                    )}
                    {recordingState === "recording" && (
                      <button onClick={stopRecording} className="mic-button recording" style={{ width: '48px', height: '48px', fontSize: '20px' }}>⏹️</button>
                    )}
                    {recordingState === "has_audio" && (
                      <>
                        <button onClick={startRecording} className="mic-button bounce-hover" style={{ width: '48px', height: '48px', fontSize: '20px' }}>🔄</button>
                        {audioUrl && (
                          <button 
                            onClick={() => handleTogglePlay(audioUrl)} 
                            className={`play-recording-btn bounce-hover ${activePlaybackUrl === audioUrl && isPlaying ? "playing" : ""}`}
                            style={{ margin: 0 }}
                          >
                            {activePlaybackUrl === audioUrl && isPlaying ? "⏸️ 停止" : "🔊 听宝宝讲"}
                          </button>
                        )}
                      </>
                    )}
                    <span className="recording-status" style={{ margin: 0, fontSize: '13px' }}>
                      {recordingState === "idle" && "点击麦克风，记录宝贝的话"}
                      {recordingState === "recording" && "录音中..."}
                      {recordingState === "has_audio" && "录音完成！"}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Step Navigator */}
            <div className="step-navigator">
              <div className="step-indicator">
                {[1, 2, 3, 4].map(step => {
                  const stars = starsCollected[currentStory.id] || [false, false, false];
                  const isCompleted = step === 1 ? exploredHotspots.length === currentStory.hotspots.length :
                                      step === 2 ? stars[1] :
                                      step === 3 ? stars[2] : false;
                  return (
                    <button
                      key={step}
                      className={`step-dot ${currentStep === step ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                      onClick={() => {
                        setCurrentStep(step);
                        setActiveHotspot(null);
                      }}
                    >
                      {step === 4 ? "📖" : step}
                    </button>
                  );
                })}
              </div>
              <div className="step-title-text">
                {currentStep === 1 && "第一步：看图探索"}
                {currentStep === 2 && "第二步：自由说说"}
                {currentStep === 3 && "第三步：词卡拼句"}
                {currentStep === 4 && "第四步：双语故事书"}
              </div>
            </div>

            {/* Step 1: Explore and find words */}
            {currentStep === 1 && (
              <div className="step-content-card">
                <h3 className="step-heading">🔍 奇妙发现探索镜</h3>
                <p className="step-instructions">
                  用你的小眼睛仔细看图，点击图片中闪亮的部分，一起认识词语吧！全部点完就可以解锁第二步。
                </p>
                <div style={{ marginTop: "auto" }}>
                  <button 
                    className="next-step-btn"
                    disabled={exploredHotspots.length < currentStory.hotspots.length}
                    onClick={() => setCurrentStep(2)}
                    style={{
                      opacity: exploredHotspots.length === currentStory.hotspots.length ? 1 : 0.6,
                      cursor: exploredHotspots.length === currentStory.hotspots.length ? "pointer" : "not-allowed"
                    }}
                  >
                    下一步：自由说说 ➡
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Record child speaking */}
            {currentStep === 2 && (
              <div className="step-content-card">
                <h3 className="step-heading">🎤 自由表达小喇叭</h3>
                <p className="step-instructions">
                  现在轮到宝贝了！用你自己的话，说说在画卷里看到了什么？可以大声用中文或者英文描述哦！
                </p>
                
                <div className="recording-container">
                  {recordingState === "idle" && (
                    <button onClick={startRecording} className="mic-button bounce-hover">
                      🎙️
                    </button>
                  )}
                  {recordingState === "recording" && (
                    <button onClick={stopRecording} className="mic-button recording">
                      ⏹️
                    </button>
                  )}
                  {recordingState === "has_audio" && (
                    <button onClick={startRecording} className="mic-button bounce-hover">
                      🔄 重录
                    </button>
                  )}
                  
                  <span className="recording-status">
                    {recordingState === "idle" && "点击麦克风开始说话"}
                    {recordingState === "recording" && "录音中... 再次点击即可停止"}
                    {recordingState === "has_audio" && "录制成功！可以回听哦"}
                  </span>

                  {audioUrl && (
                    <div className="audio-player-controls">
                      <button 
                        onClick={() => handleTogglePlay(audioUrl)} 
                        className={`play-recording-btn bounce-hover ${activePlaybackUrl === audioUrl && isPlaying ? "playing" : ""}`}
                      >
                        {activePlaybackUrl === audioUrl && isPlaying ? "⏸️ 停止播放" : "🔊 听我的录音 / Play"}
                      </button>
                      <button 
                        onClick={() => downloadAudio(audioUrl, currentStory.title.split("/")[0])} 
                        className="parent-btn bounce-hover"
                        style={{ padding: "10px 15px", borderRadius: "var(--radius-md)", display: "flex", gap: "6px" }}
                        title="下载录音文件"
                      >
                        📥 下载 / Save
                      </button>
                    </div>
                  )}
                </div>

                <div style={{ marginTop: "auto" }}>
                  <button 
                    className="next-step-btn"
                    disabled={!audioUrl}
                    onClick={() => setCurrentStep(3)}
                    style={{
                      opacity: audioUrl ? 1 : 0.6,
                      cursor: audioUrl ? "pointer" : "not-allowed"
                    }}
                  >
                    下一步：词卡拼句 ➡
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Sentence builder */}
            {currentStep === 3 && (
              <div className="step-content-card">
                <h3 className="step-heading">🧩 词语积木拼句子</h3>
                <p className="step-instructions">
                  小卡片被打乱啦！把卡片按照正确的顺序拼成一句话吧。支持切换中文和英文喔！
                </p>

                <div className="sentence-builder-workspace">
                  <div className="builder-mode-selector">
                    <button 
                      className={`builder-mode-btn ${builderLanguage === "zh" ? "active" : ""}`}
                      onClick={() => setBuilderLanguage("zh")}
                    >
                      🇨🇳 中文拼句
                    </button>
                    <button 
                      className={`builder-mode-btn ${builderLanguage === "en" ? "active" : ""}`}
                      onClick={() => setBuilderLanguage("en")}
                    >
                      🇬🇧 英文拼句
                    </button>
                  </div>

                  {/* Assembled Tray */}
                  <div className={`sentence-slots-tray ${isSentenceCorrect ? "completed" : ""}`}>
                    {assembledCards.length === 0 ? (
                      <span style={{ color: "#c1b5cc", fontSize: "14px" }}>将下方的词语点击到这里</span>
                    ) : (
                      assembledCards.map((word, idx) => (
                        <button 
                          key={idx} 
                          className="word-card-tag in-tray bounce-hover"
                          onClick={() => removeWordCard(word)}
                        >
                          {word}
                        </button>
                      ))
                    )}
                  </div>

                  {/* Cards Pool */}
                  <div className="words-cards-pool">
                    {cardsPool.map((word, idx) => (
                      <button 
                        key={idx} 
                        className="word-card-tag bounce-hover"
                        onClick={() => selectWordCard(word)}
                      >
                        {word}
                      </button>
                    ))}
                  </div>

                  {assembledCards.length > 0 && !isSentenceCorrect && (
                    <button onClick={checkSentence} className="next-step-btn" style={{ background: "var(--color-pink)" }}>
                      🔍 检查拼写
                    </button>
                  )}

                  {isSentenceCorrect && (
                    <div style={{ textAlign: "center", color: "var(--color-green)", fontWeight: 700, margin: "10px 0" }}>
                      🎉 拼对啦！获得了最后一颗星星！
                    </div>
                  )}
                </div>

                <div style={{ marginTop: "auto" }}>
                  <button 
                    className="next-step-btn"
                    disabled={!isSentenceCorrect}
                    onClick={() => setCurrentStep(4)}
                    style={{
                      opacity: isSentenceCorrect ? 1 : 0.6,
                      cursor: isSentenceCorrect ? "pointer" : "not-allowed"
                    }}
                  >
                    下一步：故事绘本 ➡
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Storybook Reading */}
            {currentStep === 4 && (
              <div className="step-content-card">
                <h3 className="step-heading">📖 双语范文故事书</h3>
                <p className="step-instructions">
                  恭喜通关！这里是故事的精美范文。点击任何句子，一起来听听看，跟读模仿！
                </p>

                <div className="storybook-card-container">
                  <div className="storybook-card">
                    <div className="storybook-paper">
                      <div 
                        className={`story-sentence-item ${activeBookSentence === 1 ? "active" : ""}`}
                        onClick={() => handleReadSentence(currentStory.sampleEssayZh, currentStory.sampleEssayEn, 1)}
                      >
                        <span className="sentence-zh">🇨🇳 {currentStory.sampleEssayZh}</span>
                        <span className="sentence-en">🇬🇧 {currentStory.sampleEssayEn}</span>
                      </div>
                    </div>
                  </div>

                  {/* Finish / Next book controls */}
                  <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                    <button 
                      onClick={() => setCurrentStoryId(null)} 
                      className="next-step-btn"
                      style={{ background: "var(--color-purple)", flex: 1, marginTop: 0 }}
                    >
                      ⬅ 返回画册
                    </button>
                    <button 
                      onClick={handleNextStory} 
                      className="next-step-btn"
                      style={{ background: "var(--color-green)", flex: 1, marginTop: 0 }}
                    >
                      下一本 ➡
                    </button>
                  </div>
                </div>
              </div>
            )}
            </>
          )}
          </div>

        </div>
      )}

      {/* Parent Dashboard Modal */}
      {showParentModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={() => setShowParentModal(false)} className="modal-close-btn">
              &times;
            </button>
            
            {!parentLockPassed ? (
              /* Parent Gate (Kid Lock) */
              <div className="parent-lock-container">
                <span style={{ fontSize: "48px" }}>🔒</span>
                <h3 className="parent-lock-title">进入家长专区 (防误触锁)</h3>
                <p style={{ color: "var(--color-text-light)" }}>小朋友请把设备递给爸爸妈妈哦</p>
                <div className="parent-lock-math">
                  {mathNum1} + {mathNum2} = ?
                </div>
                <input
                  type="text"
                  maxLength="3"
                  value={parentLockAnswer}
                  onChange={(e) => setParentLockAnswer(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleVerifyParentLock()}
                  className="parent-lock-input"
                  placeholder="答案"
                  autoFocus
                />
                <button onClick={handleVerifyParentLock} className="parent-lock-submit">
                  确认进入
                </button>
              </div>
            ) : (
              /* Parent Dashboard Content */
              <div>
                <h3 className="parent-dashboard-title">
                  <span>🧸</span> 家长控制台 - 宝贝学习档案
                </h3>
                <p className="parent-dashboard-subtitle">
                  在这里，您可以查看孩子所有的看图说话成果，回听录音并下载备份，也可以写下鼓励寄语。
                </p>

                <div className="parent-recordings-list">
                  {storiesData.map(story => {
                    const stars = starsCollected[story.id] || [false, false, false];
                    const audio = recordings[story.id];
                    return (
                      <div key={story.id} className="parent-record-item">
                        <div className="parent-record-info">
                          <span className="parent-record-title">{story.title.split("/")[0]}</span>
                          <div className="parent-record-stars">
                            {stars.map((active, idx) => (
                              <span key={idx}>{active ? "⭐" : "☆"}</span>
                            ))}
                          </div>
                        </div>

                        {/* Audio controls */}
                        <div className="parent-record-controls" style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                          {audio ? (
                            <>
                              <button 
                                onClick={() => handleTogglePlay(audio)} 
                                className={`play-recording-btn bounce-hover ${activePlaybackUrl === audio && isPlaying ? "playing" : ""}`}
                                style={{ padding: "6px 14px", fontSize: "13px" }}
                              >
                                {activePlaybackUrl === audio && isPlaying ? "⏸️ 停止播放" : "🔊 播放宝贝录音"}
                              </button>
                              <button 
                                onClick={() => downloadAudio(audio, story.title.split("/")[0])} 
                                className="parent-btn bounce-hover"
                                style={{ padding: "6px 14px", borderRadius: "10px", fontSize: "13px" }}
                              >
                                📥 下载音频
                              </button>
                            </>
                          ) : (
                            <span style={{ color: "var(--color-text-light)", fontSize: "14px" }}>
                              宝贝今天还没有在这个关卡录音
                            </span>
                          )}

                          {/* Import Audio Form */}
                          <div className="import-audio-wrapper">
                            <label className="import-audio-label bounce-hover">
                              📥 导入本地录音
                              <input 
                                type="file" 
                                accept="audio/*" 
                                onChange={(e) => handleImportAudio(e, story.id)}
                                style={{ display: "none" }}
                              />
                            </label>
                          </div>
                        </div>

                        {/* Encouragement message input */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <textarea
                            rows="2"
                            value={tempComments[story.id] || ""}
                            onChange={(e) => {
                              const val = e.target.value;
                              setTempComments(prev => ({ ...prev, [story.id]: val }));
                            }}
                            className="parent-comment-box"
                            placeholder="给宝贝的鼓励寄语（将由小精灵读出，如：宝贝说得太棒啦，继续加油！）"
                          />
                          <button 
                            onClick={() => handleSaveComment(story.id)} 
                            className="save-comment-btn"
                          >
                            保存寄语
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hidden Audio Player for playback controls */}
      <audio 
        ref={playbackAudioRef} 
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        style={{ display: "none" }} 
      />
    </div>
  );
}
