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
  
  // App Progress state
  const [starsCollected, setStarsCollected] = useState(() => {
    const saved = localStorage.getItem("story_stars");
    return saved ? JSON.parse(saved) : {};
  });
  
  const [unlockedStickers, setUnlockedStickers] = useState(() => {
    const saved = localStorage.getItem("story_stickers");
    return saved ? JSON.parse(saved) : [];
  });

  const [showConfetti, setShowConfetti] = useState(false);
  const [mascotText, setMascotText] = useState("欢迎来到看图说话乐园！选一幅画我们开始吧！");

  // Audio refs
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioStreamRef = useRef(null);

  const currentStory = storiesData.find(s => s.id === currentStoryId);

  // Sync Progress to LocalStorage
  useEffect(() => {
    localStorage.setItem("story_stars", JSON.stringify(starsCollected));
    localStorage.setItem("story_stickers", JSON.stringify(unlockedStickers));
  }, [starsCollected, unlockedStickers]);

  // Load SpeechSynthesis voices
  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  // Set Mascot text on step change
  useEffect(() => {
    if (!currentStory) {
      setMascotText("欢迎来到看图说话乐园！选一幅画，跟小精灵一起学习吧！");
      return;
    }
    if (currentStep === 1) {
      setMascotText("第一步：点一点图片，看看你认识哪些宝贝？跟读一下哦！");
    } else if (currentStep === 2) {
      setMascotText("第二步：大声点！点击红色的麦克风，把你看到的画面自己说出来吧！");
    } else if (currentStep === 3) {
      setMascotText("第三步：我们来玩拼词积木！把下面的卡片按照顺序点上去吧！");
    } else if (currentStep === 4) {
      setMascotText("第四步：太棒了！点击故事书里的句子，一起来听听看，跟读模仿一下吧！");
    }
  }, [currentStep, currentStoryId]);

  // TTS Reader
  const speakText = (text, lang = "zh-CN") => {
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

  // Audio Recording handlers
  const startRecording = async () => {
    try {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioStreamRef.current = stream;
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        setRecordingState("has_audio");
        awardStar(currentStoryId, 2);
      };

      mediaRecorder.start();
      setRecordingState("recording");
    } catch (err) {
      console.error("无法启动录音:", err);
      alert("请允许网页访问您的麦克风以进行录音表达游戏！");
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
        <button className="parent-btn bounce-hover">
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
        <>
          <h2 className="dashboard-title">小女孩的双语绘本画册</h2>
          <p className="dashboard-subtitle">点击一幅画，开始我们的探索之旅吧！</p>
          
          <div className="story-grid">
            {storiesData.map(story => {
              const stars = starsCollected[story.id] || [false, false, false];
              const score = stars.filter(Boolean).length;
              return (
                <div key={story.id} className="story-card">
                  <div className="story-card-image-wrapper">
                    <img src={getImageUrl(story.image)} alt={story.title.split("/")[0]} className="story-card-image" />
                    {score === 3 && <div className="story-card-badge">已通关 🎉</div>}
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
                        onClick={() => {
                          setCurrentStoryId(story.id);
                          setCurrentStep(1);
                          setExploredHotspots([]);
                          setAudioUrl(null);
                          setRecordingState("idle");
                          setActiveHotspot(null);
                        }} 
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
        </>
      ) : (
        /* Inside Learning Story */
        <div className="workspace-layout">
          
          {/* Left Canvas: Main picture with click zones */}
          <div className="canvas-panel">
            <div className="canvas-header">
              <button onClick={() => setCurrentStoryId(null)} className="back-link bounce-hover">
                ⬅ 返回画册
              </button>
              <h2 className="canvas-title">{currentStory.title.split("/")[0]}</h2>
              <div className="stars-collected">
                {(starsCollected[currentStory.id] || [false, false, false]).map((active, idx) => (
                  <span key={idx} style={{ fontSize: "24px" }}>{active ? "⭐" : "☆"}</span>
                ))}
              </div>
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
          </div>

          {/* Right Control Panels */}
          <div className="control-panel">
            
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
                        // Allow navigation
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
                      <audio src={audioUrl} controls style={{ width: "100%" }} />
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

                  <button 
                    onClick={() => setCurrentStoryId(null)} 
                    className="next-step-btn"
                    style={{ background: "var(--color-green)", marginTop: "20px" }}
                  >
                    🎉 完成故事！返回画册
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      )}
    </div>
  );
}
