import React, { useState, useEffect } from 'react';
import { pinyinLessons } from '../data/pinyinData';
import { playBaiduAudio, playBaiduAudioSequence, PINYIN_SOUND_MAP } from '../utils/baiduAudio';
import './PinyinLearning.css';

const getImageUrl = (path) => {
  if (!path) return "";
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  return import.meta.env.BASE_URL + cleanPath;
};

export default function PinyinLearning({ onBack }) {
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = localStorage.getItem('pinyin_completed_lessons');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [currentMode, setCurrentMode] = useState('lessons'); // 'lessons', 'study', 'quiz', 'completed'
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [studyIndex, setStudyIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerState, setAnswerState] = useState(null); // 'correct', 'wrong', null
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedFormulaKey, setSelectedFormulaKey] = useState('ba');

  const formulas = {
    ba: { initial: 'b', final: 'ā', result: 'bā', initialSound: '波', finalSound: '啊', resultSound: '八', label: 'b + ā = bā (八)' },
    ma: { initial: 'm', final: 'ā', result: 'mā', initialSound: '摸', finalSound: '啊', resultSound: '妈', label: 'm + ā = mā (妈)' },
    da: { initial: 'd', final: 'ǎ', result: 'dǎ', initialSound: '得', finalSound: '啊', resultSound: '打', label: 'd + ǎ = dǎ (打)' },
    lu: { initial: 'l', final: 'ù', result: 'lù', initialSound: '乐', finalSound: '啊', resultSound: '路', label: 'l + ù = lù (路)' }
  };

  // Play single pinyin letter / Chinese sound via Baidu Hanyu CDN
  const playLetterAudio = (letter, sound) => {
    const textToPlay = sound || PINYIN_SOUND_MAP[letter] || letter;
    playBaiduAudio(textToPlay);
  };

  // Play example word via Baidu Hanyu CDN
  const playWordAudio = (exampleWord) => {
    const chineseWord = exampleWord.split('(')[0].trim();
    playBaiduAudio(chineseWord);
  };

  // Play feedback audio via Baidu Hanyu CDN
  const playFeedbackAudio = (type) => {
    const texts = {
      correct:  "答对啦！太棒了！",
      wrong:    "选错啦，再试一次吧！",
      pass:     "恭喜你，顺利通关！",
      tryagain: "差一点点就通关了，再复习一下吧！",
    };
    playBaiduAudio(texts[type] || "");
  };

  // Baidu Hanyu CDN Concatenation method for Syllable Magic Formulas (百度汉语词典真人发音 CDN 拼接法)
  const playFormulaSequence = (formulaKey) => {
    const f = formulas[formulaKey];
    if (f) {
      playBaiduAudioSequence([f.initialSound, f.finalSound, f.resultSound], 350);
    }
  };

  const handleSelectLesson = (lesson) => {
    setSelectedLesson(lesson);
    setStudyIndex(0);
    setCurrentMode('study');
    // Speak first letter name automatically
    setTimeout(() => {
      playLetterAudio(lesson.items[0].letter, lesson.items[0].sound);
    }, 300);
  };

  const handleNextStudy = () => {
    if (studyIndex < selectedLesson.items.length - 1) {
      const nextIndex = studyIndex + 1;
      setStudyIndex(nextIndex);
      // Auto speak next letter
      playLetterAudio(selectedLesson.items[nextIndex].letter, selectedLesson.items[nextIndex].sound);
    } else {
      // Start quiz
      setQuizIndex(0);
      setQuizScore(0);
      setSelectedAnswer(null);
      setAnswerState(null);
      setCurrentMode('quiz');
    }
  };

  const handlePrevStudy = () => {
    if (studyIndex > 0) {
      const prevIndex = studyIndex - 1;
      setStudyIndex(prevIndex);
      playLetterAudio(selectedLesson.items[prevIndex].letter, selectedLesson.items[prevIndex].sound);
    }
  };

  // Compile all questions for the current lesson
  const getLessonQuestions = () => {
    if (!selectedLesson) return [];
    return selectedLesson.items.flatMap((item, idx) => {
      // Map questions with source item context (like audio sound)
      return item.questions.map(q => ({
        ...q,
        letter: item.letter,
        itemSound: item.sound,
        itemImage: item.image
      }));
    });
  };

  const currentQuestions = getLessonQuestions();
  const currentQuestion = currentQuestions[quizIndex];

  // Play audio sound for audio questions
  useEffect(() => {
    if (currentMode === 'quiz' && currentQuestion && currentQuestion.type === 'choose_sound') {
      playLetterAudio(currentQuestion.letter, currentQuestion.audioText);
    }
  }, [currentMode, quizIndex]);

  const handleAnswerSubmit = (option) => {
    if (answerState !== null) return; // Block double answer
    setSelectedAnswer(option);

    const isCorrect = option === currentQuestion.answer;
    if (isCorrect) {
      setAnswerState('correct');
      setQuizScore(prev => prev + 1);
      playFeedbackAudio('correct');
      // Trigger a small burst of confetti
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    } else {
      setAnswerState('wrong');
      playFeedbackAudio('wrong');
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      setAnswerState(null);
      if (quizIndex < currentQuestions.length - 1) {
        setQuizIndex(prev => prev + 1);
      } else {
        // Quiz completed
        const finalScore = isCorrect ? quizScore + 1 : quizScore;
        const total = currentQuestions.length;
        
        if (finalScore >= Math.ceil(total * 0.6)) {
          // Pass! Unlock next lesson
          const updated = [...completedLessons];
          if (!updated.includes(selectedLesson.id)) {
            updated.push(selectedLesson.id);
            setCompletedLessons(updated);
            localStorage.setItem('pinyin_completed_lessons', JSON.stringify(updated));
          }
          playFeedbackAudio('pass');
        } else {
          playFeedbackAudio('tryagain');
        }
        setCurrentMode('completed');
      }
    }, 2000);
  };

  const getConfettiParticles = () => {
    return Array.from({ length: 40 }).map((_, i) => {
      const styles = {
        left: `${Math.random() * 100}%`,
        backgroundColor: ['#ff4b5c', '#ffca28', '#26a69a', '#29b6f6', '#ab47bc'][Math.floor(Math.random() * 5)],
        animationDelay: `${Math.random() * 1.5}s`,
        animationDuration: `${1 + Math.random() * 2}s`
      };
      return <div key={i} className="confetti-particle" style={styles}></div>;
    });
  };

  return (
    <div className="pinyin-container">
      {showConfetti && <div className="confetti-overlay">{getConfettiParticles()}</div>}
      
      {/* 1. LESSON SELECT DASHBOARD */}
      {currentMode === 'lessons' && (
        <div className="pinyin-dashboard">
          <div className="pinyin-header">
            <button onClick={onBack} className="pinyin-back-btn bounce-hover">⬅ 返回主页</button>
            <h2 className="pinyin-main-title">🧸 拼音学乐园 / Pinyin Playground</h2>
            <p className="pinyin-main-subtitle">循序渐进，轻松搞定拼音基础！</p>
          </div>

          {/* Beginner Classroom Promo Card */}
          <div className="beginner-classroom-promo bounce-hover" onClick={() => setCurrentMode('beginner_intro')}>
            <div className="beginner-promo-badge">🐣 零基础第一课</div>
            <div className="beginner-promo-content">
              <h3>拼音声母与韵母启蒙课堂 🚀</h3>
              <p>什么是声母？什么是韵母？点一点、听一听，轻松揭开拼音发音的秘密！</p>
            </div>
            <button className="beginner-promo-btn">开始学习 ➔</button>
          </div>

          <div className="pinyin-lessons-grid">
            {pinyinLessons.map((lesson, index) => {
              const isLocked = index > 0 && !completedLessons.includes(pinyinLessons[index - 1].id);
              const isCompleted = completedLessons.includes(lesson.id);

              return (
                <div 
                  key={lesson.id} 
                  className={`pinyin-lesson-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''} bounce-hover`}
                  onClick={() => !isLocked && handleSelectLesson(lesson)}
                >
                  <div className="lesson-badge-wrapper">
                    {isCompleted && <span className="lesson-completed-badge">🎉 已通关</span>}
                    {isLocked && <span className="lesson-locked-badge">🔒 锁住</span>}
                  </div>
                  <div className="lesson-card-header">
                    <span className="lesson-number">第 {index + 1} 课</span>
                    <h3 className="lesson-title">{lesson.title}</h3>
                  </div>
                  <p className="lesson-subtitle">{lesson.subtitle}</p>
                  <div className="lesson-letter-preview">
                    {lesson.items.map(item => (
                      <span key={item.letter} className="preview-letter">{item.letter}</span>
                    ))}
                  </div>
                  <button className="lesson-action-btn" disabled={isLocked}>
                    {isCompleted ? "再次挑战" : isLocked ? "前一课完成解锁" : "开始学习 🚀"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. STUDY MODE */}
      {currentMode === 'study' && selectedLesson && (
        <div className="pinyin-study">
          <div className="pinyin-header">
            <button onClick={() => setCurrentMode('lessons')} className="pinyin-back-btn bounce-hover">⬅ 退出学习</button>
            <h2 className="pinyin-main-title">{selectedLesson.title}</h2>
            <span className="study-progress">进度: {studyIndex + 1} / {selectedLesson.items.length}</span>
          </div>

          <div className="study-card-container">
            {/* Left side: AI Image Illustration */}
            <div className="study-image-box">
              <img 
                src={getImageUrl(selectedLesson.items[studyIndex].image)} 
                alt={selectedLesson.items[studyIndex].letter} 
                className="study-illust-image" 
              />
            </div>

            {/* Right side: Study details */}
            <div className="study-info-box">
              <div className="study-letter-display">
                <span className="huge-pinyin">{selectedLesson.items[studyIndex].letter}</span>
                <button 
                  onClick={() => playLetterAudio(selectedLesson.items[studyIndex].letter, selectedLesson.items[studyIndex].sound)}
                  className="pinyin-speak-btn bounce-hover"
                >
                  🔊 听发音
                </button>
              </div>

              <div className="study-description">
                <h4>💡 巧记儿歌/口诀</h4>
                <p>{selectedLesson.items[studyIndex].description}</p>
              </div>

              <div className="study-tips">
                <h4>👄 发音要领</h4>
                <p>{selectedLesson.items[studyIndex].tips}</p>
              </div>

              <div className="study-example">
                <h4>🍎 词语示范</h4>
                <div className="example-row">
                  <span className="example-char">{selectedLesson.items[studyIndex].example}</span>
                  <span className="example-word" onClick={() => playWordAudio(selectedLesson.items[studyIndex].exampleWord)}>
                    {selectedLesson.items[studyIndex].exampleWord} 🔊
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="study-navigation">
            <button 
              onClick={handlePrevStudy} 
              disabled={studyIndex === 0} 
              className={`study-nav-btn prev ${studyIndex === 0 ? 'disabled' : ''} bounce-hover`}
            >
              上一字
            </button>
            <button 
              onClick={handleNextStudy} 
              className="study-nav-btn next bounce-hover"
            >
              {studyIndex === selectedLesson.items.length - 1 ? "去通关测试 📝" : "下一字"}
            </button>
          </div>
        </div>
      )}

      {/* 3. QUIZ MODE */}
      {currentMode === 'quiz' && selectedLesson && currentQuestion && (
        <div className="pinyin-quiz">
          <div className="pinyin-header">
            <button onClick={() => setCurrentMode('study')} className="pinyin-back-btn bounce-hover">⬅ 返回复习</button>
            <h2 className="pinyin-main-title">📝 通关大挑战 - {selectedLesson.title}</h2>
            <span className="quiz-progress">题目: {quizIndex + 1} / {currentQuestions.length}</span>
          </div>

          <div className="quiz-card-box">
            <div className="quiz-question-title">
              {currentQuestion.question}
            </div>

            {/* If it's an audio question, show a giant replay sound button */}
            {currentQuestion.type === 'choose_sound' && (
              <div className="quiz-audio-trigger">
                <button 
                  onClick={() => playLetterAudio(currentQuestion.letter, currentQuestion.audioText)}
                  className="quiz-sound-btn bounce-hover"
                >
                  🎵 点击播放声音 🔊
                </button>
              </div>
            )}

            {/* If it has an image or related helper illustration */}
            {currentQuestion.type === 'choose_image' && (
              <div className="quiz-illustration">
                <img 
                  src={getImageUrl(currentQuestion.itemImage)} 
                  alt="question hint" 
                  className="quiz-hint-image" 
                />
              </div>
            )}

            <div className="quiz-options-list">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === currentQuestion.answer;
                
                let optionClass = "";
                if (isSelected) {
                  optionClass = answerState === 'correct' ? 'correct' : 'wrong';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSubmit(option)}
                    disabled={answerState !== null}
                    className={`quiz-option-btn ${optionClass} bounce-hover`}
                  >
                    <span className="option-index">{['A', 'B', 'C'][idx]}</span>
                    <span className="option-text">{option}</span>
                    {answerState !== null && isCorrect && <span className="option-status-icon">✅</span>}
                    {answerState !== null && isSelected && !isCorrect && <span className="option-status-icon">❌</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 4. COMPLETED / RESULTS MODE */}
      {currentMode === 'completed' && selectedLesson && (
        <div className="pinyin-completed">
          <div className="completed-card bounce-in">
            {quizScore >= Math.ceil(currentQuestions.length * 0.6) ? (
              <>
                <div className="completed-badge-icon">🏆</div>
                <h2 className="completed-title">太棒了！顺利通关！</h2>
                <p className="completed-desc">你成功学会了 {selectedLesson.title}！</p>
                <div className="score-badge">
                  得分: <span>{quizScore}</span> / {currentQuestions.length}
                </div>
                <p className="cheer-text">真聪明！继续保持，挑战下一关吧！🌟</p>
              </>
            ) : (
              <>
                <div className="completed-badge-icon error">💪</div>
                <h2 className="completed-title">继续加油！</h2>
                <p className="completed-desc">离通关只差一点点啦！</p>
                <div className="score-badge error">
                  得分: <span>{quizScore}</span> / {currentQuestions.length}
                </div>
                <p className="cheer-text">别灰心，重新复习一遍，你一定行的！👍</p>
              </>
            )}

            <div className="completed-actions">
              <button 
                onClick={() => handleSelectLesson(selectedLesson)} 
                className="action-btn retry bounce-hover"
              >
                🔄 重新挑战
              </button>
              <button 
                onClick={() => setCurrentMode('lessons')} 
                className="action-btn back bounce-hover"
              >
                🏠 返回拼音列表
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. BEGINNER INTRO / BASICS CLASSROOM */}
      {currentMode === 'beginner_intro' && (
        <div className="pinyin-beginner-intro">
          <div className="pinyin-header">
            <button onClick={() => setCurrentMode('lessons')} className="pinyin-back-btn bounce-hover">⬅ 返回列表</button>
            <h2 className="pinyin-main-title">🐣 拼音新手启蒙课 / Pinyin Basics</h2>
            <p className="pinyin-main-subtitle">声母、韵母和声调的奇妙世界！点一点听听发音吧！</p>
          </div>

          <div className="beginner-classroom-body">
            {/* 1. Magic Spell Formula Card */}
            <div className="beginner-section-card magic-formula">
              <div className="section-title-row">
                <span className="section-icon">🪄</span>
                <h4>拼音魔法算式 / Syllable Blender</h4>
              </div>
              <p className="section-instruction">点击下面的魔法算式，看一看声母和韵母是怎么组合在一起发音的：</p>
              
              <div className="formula-selector">
                {Object.keys(formulas).map(key => (
                  <button 
                    key={key} 
                    className={`formula-select-btn ${selectedFormulaKey === key ? 'active' : ''} bounce-hover`}
                    onClick={() => {
                      setSelectedFormulaKey(key);
                      playFormulaSequence(key);
                    }}
                  >
                    {formulas[key].label}
                  </button>
                ))}
              </div>

              <div className="magic-formula-display">
                <div 
                  className="formula-box initial bounce-hover"
                  onClick={() => playLetterAudio(formulas[selectedFormulaKey].initial, formulas[selectedFormulaKey].initialSound)}
                >
                  <span className="formula-letter">{formulas[selectedFormulaKey].initial}</span>
                  <span className="formula-label">声母 (Initial)</span>
                  <span className="formula-sound-hint">🔊 {formulas[selectedFormulaKey].initialSound}</span>
                </div>

                <div className="formula-operator">＋</div>

                <div 
                  className="formula-box final bounce-hover"
                  onClick={() => playLetterAudio(formulas[selectedFormulaKey].final, formulas[selectedFormulaKey].finalSound)}
                >
                  <span className="formula-letter">{formulas[selectedFormulaKey].final}</span>
                  <span className="formula-label">韵母 (Final)</span>
                  <span className="formula-sound-hint">🔊 {formulas[selectedFormulaKey].finalSound}</span>
                </div>

                <div className="formula-operator">＝</div>

                <div 
                  className="formula-box result bounce-hover"
                  onClick={() => playLetterAudio(formulas[selectedFormulaKey].result, formulas[selectedFormulaKey].resultSound)}
                >
                  <span className="formula-letter highlight">{formulas[selectedFormulaKey].result}</span>
                  <span className="formula-label">拼读结果 (Syllable)</span>
                  <span className="formula-sound-hint">🔊 {formulas[selectedFormulaKey].resultSound}</span>
                </div>
              </div>
            </div>

            {/* 2. 23 Initials Grid Card */}
            <div className="beginner-section-card initials-section">
              <div className="section-title-row">
                <span className="section-icon">火车</span>
                <h4>声母小火车 (23个) / 23 Initials</h4>
              </div>
              <p className="section-instruction">声母就像是字音的“火车头”，在最前面发音，又轻又短：</p>
              <div className="letters-bubble-grid">
                {[
                  { l: 'b', s: '播' }, { l: 'p', s: '坡' }, { l: 'm', s: '摸' }, { l: 'f', s: '佛' },
                  { l: 'd', s: '得' }, { l: 't', s: '特' }, { l: 'n', s: '讷' }, { l: 'l', s: '乐' },
                  { l: 'g', s: '哥' }, { l: 'k', s: '科' }, { l: 'h', s: '喝' },
                  { l: 'j', s: '鸡' }, { l: 'q', s: '七' }, { l: 'x', s: '西' },
                  { l: 'zh', s: '知' }, { l: 'ch', s: '吃' }, { l: 'sh', s: '狮' }, { l: 'r', s: '日' },
                  { l: 'z', s: '滋' }, { l: 'c', s: '疵' }, { l: 's', s: '丝' },
                  { l: 'y', s: '衣' }, { l: 'w', s: '乌' }
                ].map(item => (
                  <button 
                    key={item.l}
                    onClick={() => playLetterAudio(item.l, item.s)}
                    className="letter-bubble-btn initials bounce-hover"
                  >
                    <span className="bubble-letter">{item.l}</span>
                    <span className="bubble-sound">{item.s}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Finals Grid Card */}
            <div className="beginner-section-card finals-section">
              <div className="section-title-row">
                <span className="section-icon">气球</span>
                <h4>韵母乐园 / Finals</h4>
              </div>
              <p className="section-instruction">韵母是拼音字音的“身体”，在声母后面发音，声音响亮拉长：</p>
              
              <h5 className="sub-section-title">🍓 6个单韵母 (Simple Finals):</h5>
              <div className="letters-bubble-grid single-finals">
                {[
                  { l: 'a', s: '啊' }, { l: 'o', s: '喔' }, { l: 'e', s: '鹅' },
                  { l: 'i', s: '衣' }, { l: 'u', s: '乌' }, { l: 'ü', s: '迂' }
                ].map(item => (
                  <button 
                    key={item.l}
                    onClick={() => playLetterAudio(item.l, item.s)}
                    className="letter-bubble-btn finals bounce-hover"
                  >
                    <span className="bubble-letter">{item.l}</span>
                    <span className="bubble-sound">{item.s}</span>
                  </button>
                ))}
              </div>

              <h5 className="sub-section-title">🍒 常用复韵母 (Compound Finals):</h5>
              <div className="letters-bubble-grid compound-finals">
                {[
                  { l: 'ai', s: '挨' }, { l: 'ei', s: '诶' }, { l: 'ui', s: '危' }, { l: 'ao', s: '熬' }
                ].map(item => (
                  <button 
                    key={item.l}
                    onClick={() => playLetterAudio(item.l, item.s)}
                    className="letter-bubble-btn compound-btn bounce-hover"
                  >
                    <span className="bubble-letter">{item.l}</span>
                    <span className="bubble-sound">{item.s}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Tones Card */}
            <div className="beginner-section-card tones-section">
              <div className="section-title-row">
                <span className="section-icon">👑</span>
                <h4>声调小帽子 (4个) / 4 Tones</h4>
              </div>
              <p className="section-instruction">声调就像不同的魔术帽，戴在韵母头上会改变字音的升降：</p>
              <div className="letters-bubble-grid tones">
                {[
                  { l: 'ā', char: '妈', pinyin: 'mā', desc: '一声高高平又平', desc2: '———' },
                  { l: 'á', char: '麻', pinyin: 'má', desc: '二声就像往上扬', desc2: '↗' },
                  { l: 'ǎ', char: '马', pinyin: 'mǎ', desc: '三声下坡又上坡', desc2: '∨' },
                  { l: 'à', char: '骂', pinyin: 'mà', desc: '四声就像下快活', desc2: '↘' }
                ].map(item => (
                  <button 
                    key={item.l}
                    onClick={() => playLetterAudio(item.l, item.char)}
                    className="letter-bubble-btn tone-btn bounce-hover"
                  >
                    <span className="bubble-letter">{item.l}</span>
                    <span className="tone-char-label">{item.char} ({item.pinyin})</span>
                    <span className="bubble-desc">{item.desc}</span>
                    <span className="tone-contour">{item.desc2}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
