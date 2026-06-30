import React, { useState, useEffect } from 'react';
import { pinyinLessons } from '../data/pinyinData';
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

  // Audio speech synthesis helper
  const speak = (text, rate = 0.8) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Map every letter/spell key -> safe ASCII audio filename (no tone chars in filename)
  const LETTER_AUDIO_MAP = {
    // Vowels
    "a": "letter_a",
    "o": "letter_o",
    "e": "letter_e",
    "i": "letter_i",
    "u": "letter_u",
    "ü": "letter_v",
    // Consonants
    "b": "letter_b",
    "p": "letter_p",
    "m": "letter_m",
    "f": "letter_f",
    "d": "letter_d",
    "t": "letter_t",
    "n": "letter_n",
    "l": "letter_l",
    // Tones (lesson 3 uses ā á ǎ à as letter keys)
    "ā": "tone_1",
    "á": "tone_2",
    "ǎ": "tone_3",
    "à": "tone_4",
    // Spelling syllables (lesson 6)
    "bā": "spell_ba1",
    "mā": "spell_ma1",
    "dǎ": "spell_da3",
    "lù": "spell_lu4",
  };

  // Map example word display text -> safe ASCII audio filename
  const WORD_AUDIO_MAP = {
    "阿姨":   "word_ayi",
    "喔喔啼": "word_wowoti",
    "白鹅":   "word_baie",
    "衣服":   "word_yifu",
    "乌龟":   "word_wugui",
    "小鱼":   "word_xiaoyu",
    "拔河":   "word_bahe",
    "打鼓":   "word_dagu",
    "爸爸":   "word_baba",
    "皮球":   "word_piqiu",
    "妈妈":   "word_mama",
    "风车":   "word_fengche",
    "兔子":   "word_tuzi",
    "你好":   "word_nihao",
    "梅花鹿": "word_meihualu",
    "数字八": "word_shuziba",
    "打皮球": "word_dapiqiu",
  };

  // Play a local MP3 file; fall back to browser TTS on error
  const playAudioFile = (audioFileName, textFallback) => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    const audioPath = getImageUrl(`/audio/${audioFileName}.mp3`);
    const audio = new Audio(audioPath);
    audio.play().catch(err => {
      console.warn(`Audio file "${audioFileName}.mp3" not found, TTS fallback:`, err);
      speak(textFallback);
    });
  };

  const playLetterAudio = (letter, sound) => {
    const fileName = LETTER_AUDIO_MAP[letter];
    if (fileName) {
      playAudioFile(fileName, sound);
    } else {
      speak(sound);
    }
  };

  const playWordAudio = (exampleWord) => {
    // Extract the Chinese part before the parentheses e.g. "阿姨 (ā yí)" -> "阿姨"
    const chineseWord = exampleWord.split('(')[0].trim();
    const fileName = WORD_AUDIO_MAP[chineseWord];
    if (fileName) {
      playAudioFile(fileName, chineseWord);
    } else {
      speak(chineseWord);
    }
  };

  const playFeedbackAudio = (type) => {
    // type: 'correct' | 'wrong' | 'pass' | 'tryagain'
    const texts = {
      correct:  "答对啦！太棒了！",
      wrong:    "选错啦，再试一次吧！",
      pass:     "恭喜你，顺利通关！",
      tryagain: "差一点点就通关了，再复习一下吧！",
    };
    playAudioFile(`feedback_${type}`, texts[type] || "");
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
    </div>
  );
}
