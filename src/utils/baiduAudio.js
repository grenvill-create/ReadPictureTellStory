// Baidu Hanyu Real-Person Pronunciation CDN Helper (百度汉语词典真人发音 CDN 拼接法)

// Sound text mapping for pinyin letters to ensure standard Chinese pronunciation
export const PINYIN_SOUND_MAP = {
  // Consonants (声母)
  "b": "波",
  "p": "坡",
  "m": "摸",
  "f": "佛",
  "d": "得",
  "t": "特",
  "n": "讷",
  "l": "勒",
  "g": "哥",
  "k": "科",
  "h": "喝",
  "j": "鸡",
  "q": "七",
  "x": "西",
  "zh": "知",
  "ch": "吃",
  "sh": "狮",
  "r": "日",
  "z": "资",
  "c": "疵",
  "s": "思",
  "y": "衣",
  "w": "乌",

  // Simple Vowels (单韵母)
  "a": "啊",
  "o": "喔",
  "e": "鹅",
  "i": "衣",
  "u": "乌",
  "ü": "迂",

  // Compound Finals (复韵母)
  "ai": "挨",
  "ei": "诶",
  "ui": "危",
  "ao": "熬",

  // Tones (四声调)
  "ā": "啊",
  "á": "麻",
  "ǎ": "马",
  "à": "骂",

  // Syllable Spells (拼音拼读卡片)
  "bā": "八",
  "mā": "妈",
  "dǎ": "打",
  "lù": "路"
};

let currentAudio = null;

/**
 * Play a single text sound using Baidu Hanyu / Translate CDN real human voice
 * @param {string} text - Chinese text or pinyin symbol
 * @param {object} options - { spd: number, onEnded: function, onError: function }
 */
export const playBaiduAudio = (text, options = {}) => {
  const { spd = 3, onEnded = null, onError = null } = options;
  if (!text) return null;

  // Cancel Web Speech synthesis if active
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  // Stop any currently playing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  // Check if text is in mapping or clean text
  const cleanText = PINYIN_SOUND_MAP[text] || text.split('(')[0].replace(/[^\u4e00-\u9fa5a-zA-Zāáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ]/g, '').trim() || text;
  const encodedText = encodeURIComponent(cleanText);

  // Baidu CDN URLs
  const primaryUrl = `https://fanyi.baidu.com/gettts?lan=zh&text=${encodedText}&spd=${spd}&source=web`;
  const secondaryUrl = `https://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=${spd}&text=${encodedText}`;

  const audio = new Audio(primaryUrl);
  currentAudio = audio;

  if (onEnded) {
    audio.onended = () => {
      currentAudio = null;
      onEnded();
    };
  }

  audio.play().catch(() => {
    // Try secondary Baidu CDN URL
    const backupAudio = new Audio(secondaryUrl);
    currentAudio = backupAudio;

    if (onEnded) {
      backupAudio.onended = () => {
        currentAudio = null;
        onEnded();
      };
    }

    backupAudio.play().catch(err => {
      console.warn(`[Baidu Audio CDN] Fallback to WebSpeech for "${cleanText}":`, err);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'zh-CN';
        utterance.rate = 0.8;
        if (onEnded) utterance.onend = onEnded;
        window.speechSynthesis.speak(utterance);
      } else if (onError) {
        onError(err);
      }
    });
  });

  return audio;
};

/**
 * Baidu Hanyu CDN Audio Concatenation Method (百度汉语词典真人发音 CDN 拼接法)
 * Plays a sequence of texts with custom delays between items (e.g. ['播', '啊', '八'])
 * @param {Array<string>} textList - List of texts/sounds to play in order
 * @param {number} delayMs - Delay between pronunciations in ms
 * @param {function} onComplete - Callback when the entire sequence finishes
 */
export const playBaiduAudioSequence = (textList, delayMs = 320, onComplete = null) => {
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
      spd: 3,
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
