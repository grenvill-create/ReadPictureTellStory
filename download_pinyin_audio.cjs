// Download all pinyin audio files from Baidu CDN
// Save as static MP3 files for local serving (avoids CORS issues in browser)

const https = require('https');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'public', 'audio', 'pinyin');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// All unique Chinese texts needed for the pinyin learning module
// Format: { filename: "chinese_text" }
const audioMap = {
  // Initials (声母) - 23个
  "bo": "\u6CE2",   // 波
  "po": "\u5761",   // 坡
  "mo": "\u6478",   // 摸
  "fo": "\u4F5B",   // 佛
  "de": "\u5F97",   // 得
  "te": "\u7279",   // 特
  "ne": "\u8BB7",   // 讷
  "le": "\u52D2",   // 勒
  "ge": "\u54E5",   // 哥
  "ke": "\u79D1",   // 科
  "he": "\u559D",   // 喝
  "ji": "\u9E21",   // 鸡
  "qi": "\u4E03",   // 七
  "xi": "\u897F",   // 西
  "zhi": "\u77E5",  // 知
  "chi": "\u5403",  // 吃
  "shi": "\u72EE",  // 狮
  "ri": "\u65E5",   // 日
  "zi": "\u6ECB",   // 滋
  "ci": "\u7579",   // 疵
  "si": "\u4E1D",   // 丝

  // Simple vowels (单韵母) - 6个
  "a": "\u554A",    // 啊
  "o": "\u5594",    // 喔
  "e": "\u9E45",    // 鹅
  "yi": "\u8863",   // 衣
  "wu": "\u4E4C",   // 乌
  "yu2": "\u8FC2",  // 迂

  // Compound finals (复韵母)
  "ai": "\u6328",   // 挨
  "ei": "\u8BF6",   // 诶
  "ui": "\u5371",   // 危
  "ao": "\u7174",   // 熬

  // Tones (四声调) - using ma tones
  "ma1": "\u5988",  // 妈
  "ma2": "\u9EBB",  // 麻
  "ma3": "\u9A6C",  // 马
  "ma4": "\u9A82",  // 骂

  // Syllable results
  "ba1": "\u516B",  // 八
  "da3": "\u6253",  // 打
  "lu4": "\u8DEF",  // 路
  "yu_fish": "\u9C7C", // 鱼

  // Example words (词语示范)
  "w_ayi": "\u963F\u59E8",       // 阿姨
  "w_ooti": "\u5594\u5594\u5565", // 喔喔啼
  "w_baie": "\u767D\u9E45",      // 白鹅
  "w_yifu": "\u8863\u670D",      // 衣服
  "w_wugui": "\u4E4C\u9F9F",     // 乌龟
  "w_xiaoyu": "\u5C0F\u9C7C",    // 小鱼
  "w_bahe": "\u62D4\u6CB3",      // 拔河
  "w_dagu": "\u6253\u9F13",      // 打鼓
  "w_baba": "\u7238\u7238",      // 爸爸
  "w_piqiu": "\u76AE\u7403",     // 皮球
  "w_mama": "\u5988\u5988",      // 妈妈
  "w_fengche": "\u98CE\u8F66",   // 风车
  "w_tuzi": "\u5154\u5B50",      // 兔子
  "w_nihao": "\u4F60\u597D",     // 你好
  "w_meihualu": "\u6885\u82B1\u9E7F", // 梅花鹿
  "w_shuziba": "\u6570\u5B57\u516B",  // 数字八
  "w_dapiqiu": "\u6253\u76AE\u7403",  // 打皮球

  // Feedback phrases (反馈语音)
  "fb_correct": "\u7B54\u5BF9\u5566\uFF01\u592A\u68D2\u4E86\uFF01",         // 答对啦！太棒了！
  "fb_wrong": "\u9009\u9519\u5566\uFF0C\u518D\u8BD5\u4E00\u6B21\u5427\uFF01", // 选错啦，再试一次吧！
  "fb_pass": "\u606D\u559C\u4F60\uFF0C\u987A\u5229\u901A\u5173\uFF01",       // 恭喜你，顺利通关！
  "fb_tryagain": "\u5DEE\u4E00\u70B9\u70B9\u5C31\u901A\u5173\u4E86\uFF0C\u518D\u590D\u4E60\u4E00\u4E0B\u5427\uFF01" // 差一点点就通关了，再复习一下吧！
};

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        https.get(response.headers.location, (res2) => {
          res2.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve(fs.statSync(filepath).size);
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(fs.statSync(filepath).size);
        });
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function main() {
  const entries = Object.entries(audioMap);
  const total = entries.length;
  let success = 0;
  let fail = 0;

  console.log(`Starting download of ${total} audio files...`);
  console.log(`Output directory: ${outputDir}\n`);

  for (let i = 0; i < entries.length; i++) {
    const [filename, text] = entries[i];
    const encoded = encodeURIComponent(text);
    const url = `https://fanyi.baidu.com/gettts?lan=zh&text=${encoded}&spd=3&source=web`;
    const outFile = path.join(outputDir, `${filename}.mp3`);

    process.stdout.write(`[${i + 1}/${total}] "${text}" -> ${filename}.mp3 ... `);

    try {
      const size = await downloadFile(url, outFile);
      if (size > 1000) {
        console.log(`OK (${size} bytes)`);
        success++;
      } else {
        console.log(`WARNING: too small (${size} bytes)`);
        fail++;
      }
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
      fail++;
    }

    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\n=== Download Complete ===`);
  console.log(`Success: ${success} / ${total}`);
  console.log(`Failed: ${fail} / ${total}`);
}

main();
