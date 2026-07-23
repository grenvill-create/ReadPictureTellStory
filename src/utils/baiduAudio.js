// Baidu Hanyu Real-Person Pronunciation - Local Audio Player (百度汉语词典真人发音)
// Audio files pre-downloaded from Baidu CDN and served as static assets
// This avoids CORS issues while maintaining high-quality real-person pronunciation

// === Text-to-filename mapping ===
// Maps Chinese text to the local MP3 filename (without extension)
const TEXT_TO_FILE = {
  // Initials (声母)
  "波": "bo", "坡": "po", "摸": "mo", "佛": "fo",
  "得": "de", "特": "te", "讷": "ne", "勒": "le",
  "哥": "ge", "科": "ke", "喝": "he",
  "鸡": "ji", "七": "qi", "西": "xi",
  "知": "zhi", "吃": "chi", "狮": "shi", "日": "ri",
  "滋": "zi", "疵": "ci", "丝": "si",
  "播": "bo", // alias for 波
  "乐": "le", // alias for 勒 (used in pinyinData.js for letter l)

  // Simple vowels (单韵母)
  "啊": "a", "喔": "o", "鹅": "e",
  "衣": "yi", "乌": "wu", "迂": "yu2",

  // Compound finals (复韵母)
  "挨": "ai", "诶": "ei", "危": "ui", "熬": "ao",

  // Tones (四声调)
  "妈": "ma1", "麻": "ma2", "马": "ma3", "骂": "ma4",
  "啊？": "a", "啊！": "a", // aliases for tone lesson sounds

  // Syllable results
  "八": "ba1", "打": "da3", "路": "lu4", "鱼": "yu_fish",

  // Example words (词语示范)
  "阿姨": "w_ayi", "喔喔啼": "w_ooti", "白鹅": "w_baie",
  "衣服": "w_yifu", "乌龟": "w_wugui", "小鱼": "w_xiaoyu",
  "拔河": "w_bahe", "打鼓": "w_dagu", "爸爸": "w_baba",
  "皮球": "w_piqiu", "妈妈": "w_mama", "风车": "w_fengche",
  "兔子": "w_tuzi", "你好": "w_nihao", "梅花鹿": "w_meihualu",
  "数字八": "w_shuziba", "打皮球": "w_dapiqiu",

  // Feedback phrases (反馈语音)
  "答对啦！太棒了！": "fb_correct",
  "选错啦，再试一次吧！": "fb_wrong",
  "恭喜你，顺利通关！": "fb_pass",
  "差一点点就通关了，再复习一下吧！": "fb_tryagain",
};

// Sound text mapping for pinyin letters to Chinese pronunciation characters
export const PINYIN_SOUND_MAP = {
  // Consonants (声母)
  "b": "波", "p": "坡", "m": "摸", "f": "佛",
  "d": "得", "t": "特", "n": "讷", "l": "勒",
  "g": "哥", "k": "科", "h": "喝",
  "j": "鸡", "q": "七", "x": "西",
  "zh": "知", "ch": "吃", "sh": "狮", "r": "日",
  "z": "滋", "c": "疵", "s": "丝",
  "y": "衣", "w": "乌",

  // Simple Vowels (单韵母)
  "a": "啊", "o": "喔", "e": "鹅",
  "i": "衣", "u": "乌", "ü": "迂",

  // Compound Finals (复韵母)
  "ai": "挨", "ei": "诶", "ui": "危", "ao": "熬",

  // Tones (四声调)
  "ā": "啊", "á": "麻", "ǎ": "马", "à": "骂",

  // Syllable Spells (拼音拼读卡片)
  "bā": "八", "mā": "妈", "dǎ": "打", "lù": "路"
};

let currentAudio = null;

/**
 * Get the base URL for audio files
 */
const getAudioBaseUrl = () => {
  return (import.meta.env.BASE_URL || '/') + 'audio/pinyin/';
};

/**
 * Play a single text sound using pre-downloaded Baidu real-person audio files
 * Falls back to Web Speech API if no local file is found
 * @param {string} text - Chinese text or pinyin symbol
 * @param {object} options - { onEnded: function, onError: function }
 */
export const playBaiduAudio = (text, options = {}) => {
  const { onEnded = null, onError = null } = options;
  if (!text) return null;

  // Cancel Web Speech synthesis if active
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  // Stop any currently playing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }

  // Resolve text to mapped pronunciation character
  const resolvedText = PINYIN_SOUND_MAP[text] || text;
  
  // Look up local file
  const filename = TEXT_TO_FILE[resolvedText] || TEXT_TO_FILE[text];

  if (filename) {
    // Play from local pre-downloaded file
    const audioUrl = getAudioBaseUrl() + filename + '.mp3';
    const audio = new Audio(audioUrl);
    currentAudio = audio;

    audio.onended = () => {
      currentAudio = null;
      if (onEnded) onEnded();
    };

    audio.onerror = () => {
      console.warn(`[Local Audio] Failed to load: ${audioUrl}, falling back to WebSpeech`);
      currentAudio = null;
      playWebSpeechFallback(resolvedText, onEnded, onError);
    };

    audio.play().catch((err) => {
      console.warn(`[Local Audio] Play failed: ${err.message}, falling back to WebSpeech`);
      currentAudio = null;
      playWebSpeechFallback(resolvedText, onEnded, onError);
    });

    return audio;
  } else {
    // No local file found, use Web Speech API
    console.warn(`[Audio] No local file for "${text}" (resolved: "${resolvedText}"), using WebSpeech`);
    playWebSpeechFallback(resolvedText, onEnded, onError);
    return null;
  }
};

/**
 * Web Speech API fallback for texts that don't have pre-downloaded audio
 */
const playWebSpeechFallback = (text, onEnded, onError) => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.8;
      
      // Try to find a Chinese voice
      const voices = window.speechSynthesis.getVoices();
      const zhVoice = voices.find(v => v.lang.includes('zh') || v.lang.includes('ZH'));
      if (zhVoice) utterance.voice = zhVoice;
      
      if (onEnded) utterance.onend = onEnded;
      if (onError) utterance.onerror = () => onError(new Error('WebSpeech failed'));
      
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error('[WebSpeech] Failed:', e);
      if (onError) onError(e);
    }
  } else {
    if (onError) onError(new Error('No audio engine available'));
  }
};

/**
 * Audio Concatenation Method (拼接法)
 * Plays a sequence of texts with custom delays between items
 * @param {Array<string>} textList - List of texts/sounds to play in order
 * @param {number} delayMs - Delay between pronunciations in ms
 * @param {function} onComplete - Callback when the entire sequence finishes
 */
export const playBaiduAudioSequence = (textList, delayMs = 350, onComplete = null) => {
  if (!textList || textList.length === 0) {
    if (onComplete) onComplete();
    return;
  }

  let index = 0;

  const playNext = () => {
    if (index >= textList.length) {
      if (onComplete) onComplete();
      return;
    }

    const currentText = textList[index];
    index++;

    playBaiduAudio(currentText, {
      onEnded: () => {
        setTimeout(playNext, delayMs);
      },
      onError: () => {
        setTimeout(playNext, delayMs);
      }
    });
  };

  playNext();
};
