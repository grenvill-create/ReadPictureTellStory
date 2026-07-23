import os
import re
import urllib.request
import pypinyin
import time

AUDIO_DIR = os.path.join(os.path.dirname(__file__), "public", "audio", "pinyin")
os.makedirs(AUDIO_DIR, exist_ok=True)

# The mappings based on ReadPictureTellStory TEXT_TO_FILE
MAPPINGS = {
    # Initials (声母) - use specific tones that exist on Baidu CDN
    # usually 1st tone, but if 1st tone doesn't exist we fall back to other tones
    "bo": "bo1", "po": "po1", "mo": "mo1", "fo": "fo2",
    "de": "de1", "te": "te4", "ne": "ne2", "le": "le1",
    "ge": "ge1", "ke": "ke1", "he": "he1",
    "ji": "ji1", "qi": "qi1", "xi": "xi1",
    "zhi": "zhi1", "chi": "chi1", "shi": "shi1", "ri": "ri4",
    "zi": "zi1", "ci": "ci1", "si": "si1",
    
    # Simple vowels (单韵母)
    "a": "a1", "o": "o1", "e": "e1",
    "yi": "yi1", "wu": "wu1", "yu2": "yu2",

    # Compound finals (复韵母)
    "ai": "ai1", "ei": "ei1", "ui": "wei1", "ao": "ao1",

    # Tones (四声调)
    "ma1": "ma1", "ma2": "ma2", "ma3": "ma3", "ma4": "ma4",

    # Syllable results
    "ba1": "ba1", "da3": "da3", "lu4": "lu4", "yu_fish": "yu2",
}

WORDS = {
    "w_ayi": "阿姨", "w_ooti": "喔喔啼", "w_baie": "白鹅",
    "w_yifu": "衣服", "w_wugui": "乌龟", "w_xiaoyu": "小鱼",
    "w_bahe": "拔河", "w_dagu": "打鼓", "w_baba": "爸爸",
    "w_piqiu": "皮球", "w_mama": "妈妈", "w_fengche": "风车",
    "w_tuzi": "兔子", "w_nihao": "你好", "w_meihualu": "梅花鹿",
    "w_shuziba": "数字八", "w_dapiqiu": "打皮球",

    "fb_correct": "答对啦太棒了",
    "fb_wrong": "选错啦再试一次吧",
    "fb_pass": "恭喜你顺利通关",
    "fb_tryagain": "差一点点就通关了再复习一下吧",
}

def get_baidu_syllables(chinese_text):
    # Remove punctuation
    clean_text = re.sub(r'[^\w\s]', '', chinese_text)
    pinyins = pypinyin.pinyin(clean_text, style=pypinyin.Style.TONE2)
    
    syllables = []
    for py_list in pinyins:
        py = py_list[0]
        # Extract digits
        digits = re.findall(r'\d', py)
        tone = digits[0] if digits else '5'
        # Remove digits from py
        letters = re.sub(r'\d', '', py)
        
        # Baidu mapping rules for letters
        if 'v' in letters or 'ü' in letters:
            letters = letters.replace('v', 'yu').replace('ü', 'yu')
            if 'nyu' in letters: letters = letters.replace('nyu', 'nv')
            if 'lyu' in letters: letters = letters.replace('lyu', 'lv')
            
        syllables.append(f"{letters}{tone}")
        
    return syllables

def download_and_concat(syllables, out_path):
    mp3_data = b''
    for syl in syllables:
        url = f"https://hanyu-word-pinyin.cdn.bcebos.com/{syl}.mp3"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response:
                data = response.read()
                # Strip ID3v2 tag (very basic, just skip if starts with ID3)
                if data.startswith(b'ID3'):
                    # Size is in bytes 6-9, 7 bits each
                    size = (data[6] << 21) | (data[7] << 14) | (data[8] << 7) | data[9]
                    data = data[10+size:]
                # Also strip ID3v1 at the end if present (128 bytes)
                if data[-128:].startswith(b'TAG'):
                    data = data[:-128]
                mp3_data += data
        except Exception as e:
            # try falling back to gtts if hanyu cdn doesn't have it (like for some tones 5)
            print(f"Failed to fetch {syl}.mp3: {e}")
            return False
            
    with open(out_path, 'wb') as f:
        f.write(mp3_data)
    return True

print("Replacing audios with Baidu true pinyin CDN MP3s...")
success, fail = 0, 0

# 1. Download basic syllables
for filename, bcebos_key in MAPPINGS.items():
    fpath = os.path.join(AUDIO_DIR, f"{filename}.mp3")
    if download_and_concat([bcebos_key], fpath):
        print(f"✅ {filename}.mp3 -> {bcebos_key}")
        success += 1
    else:
        print(f"❌ Failed {filename}.mp3 -> {bcebos_key}")
        fail += 1

# 2. Download and concatenate words
for filename, text in WORDS.items():
    syls = get_baidu_syllables(text)
    fpath = os.path.join(AUDIO_DIR, f"{filename}.mp3")
    if download_and_concat(syls, fpath):
        print(f"✅ {filename}.mp3 -> {syls} ({text})")
        success += 1
    else:
        print(f"❌ Failed {filename}.mp3 -> {syls} ({text})")
        fail += 1

print(f"Done. Success: {success}, Fail: {fail}")
