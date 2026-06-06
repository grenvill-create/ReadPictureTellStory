# 看图说话双语学习助手 (ReadPictureTellStory)

`ReadPictureTellStory` 是一款专为 5 岁左右儿童设计的交互式中英双语“看图说话”学习网页应用。项目采用温暖的马卡龙色调与活泼的微交互动效，围绕儿童认知发展规律设计了“看图探索 -> 自由说说 -> 词卡拼句 -> 双语绘本”的引导式学习闭环。

本项目支持纯本地离线运行（单机版），通过 `IndexedDB` 和 `LocalStorage` 实现音频和进度的永久保存，并支持将录音文件以符合设备最佳格式（WebM/M4A/WAV）直接下载至电脑本地盘。

---

## 1. 项目架构与目录结构

为了方便在其他环境或平台继续开发，以下是本项目的完整文件目录树及核心模块说明：

```text
ReadPictureTellStory/
├── .git/                     # Git 版本控制
├── node_modules/             # 依赖包目录
├── public/                   # 静态资源目录
│   └── images/               # 经过优化压缩后的故事插画 (JPEG 格式)
│       ├── kite_flying.jpg
│       ├── beach_sandcastle.jpg
│       └── ... (共10个场景)
├── raw_images/               # 原始高清图片 (AI 生成的 PNG 格式，不直接部署)
├── src/                      # 前端源代码目录
│   ├── assets/               # 静态资源 (可选 SVG、小图标等)
│   ├── data/                 # 核心静态配置数据
│   │   └── storiesData.js    # 10 个故事场景的元数据 (包含热区、词卡、拼句、范文)
│   ├── App.css               # 全局及组件样式表 (包括色彩系统与核心动画)
│   ├── App.jsx               # 核心交互逻辑与状态管理器 (包含录音、播放、数据库和 UI 渲染)
│   ├── index.css             # 基础重置样式与 CSS 变量声明
│   └── main.jsx              # React 挂载入口文件 (支持 StrictMode)
├── index.html                # HTML 模板入口
├── vite.config.js            # Vite 配置文件 (基准 base 设为 './' 兼容多平台)
├── package.json              # 项目配置文件与 npm 脚本指令
├── compress_images.py        # Python 编写的自动化图片压缩转换工具
└── README.md                 # 项目详细说明文档 (当前文档)
```

---

## 2. 核心设计理念

### 2.1 儿童友好型视觉设计（WOW Aesthetics）
* **色彩体系**：定义了温馨防刺眼的马卡龙色调（粉红、独角兽紫、阳光黄、薄荷绿、奶油白）。
* **超大圆角与交互**：所有按钮及卡片均采用大尺寸和超大圆角（`var(--radius-lg)` 等），方便儿童使用平板或触屏操作，防止误触。
* **微交互动效**：
  * 卡片悬停具有缓动缩放 (`bounce-hover` 动效)。
  * 点击“拼句成功”或“收集满贴纸”会触发全屏彩色金屑飘落的庆祝动画 (`confetti-canvas` 动效)。
  * 主导学吉祥物小独角兽具有漂浮气泡的打招呼动画。

### 2.2 双语启发引导式学习流（Core Learning Flow）
每个故事均包含四个递进的学习步骤：
1. **第一步：看图观察与双语探索 (Look & Explore)**
   - 画面中藏有闪烁的相对坐标热区，点击对应物品（如“彩虹风筝 / Rainbow Kite”）会弹出浮动气泡，并利用 Web Speech API 顺次播放中英文朗读。
   - 找出全部热区后，孩子获得第一颗星星 ⭐ 并解锁下一步。
2. **第二步：自由表达与录音 (Speak Freely & Record)**
   - 启发性引导词鼓励孩子开口。点击麦克风开始录音，记录孩子对画面的自主描述。
   - 录制完成后激活本地回听，并提供“下载 / Save”按钮将音频保存到电脑本地盘，获得第二颗星星 ⭐。
3. **第三步：双语组织语句描绘 (Organize & Describe)**
   - 提供**中文拼句**和**英文拼句**两种语言积木块。
   - 乱序排列的积木卡片（如 `[小女孩]` `[和爸爸]` `[在草地上]` `[放风筝]`），孩子需要点击按正确语序拼接。拼对后大声朗读标准句，获得第三颗星星 ⭐ 并通关该书。
4. **第四步：双语故事书跟读 (Read & Repeat)**
   - 解锁精美的中英双语对照范文。孩子可以点击任意句子进行高点读朗读。
   - 底部提供“下一本”按钮，可平滑跳转到下一本书。

---

## 3. 技术方案与核心代码实现

### 3.1 本地盘下载方案（Download to Disk）

为了避免在没有后端服务器的情况下丢失录音，同时防止大体积 Blob 占用浏览器运行内存，我们采用了 **下载到电脑本地盘** 的方案：

1. **自动文件格式（MIME）解析**：
   - 不同的浏览器录制音频的格式有所不同。例如 Chrome/Firefox 常用 `audio/webm`，而 Safari (macOS/iOS) 仅支持 `audio/mp4` (或 `audio/m4a`)，部分设备使用 `audio/wav`。
   - 动态 MIME 协商代码：
     ```javascript
     let mimeType = "audio/webm";
     if (MediaRecorder.isTypeSupported("audio/webm")) {
       mimeType = "audio/webm";
     } else if (MediaRecorder.isTypeSupported("audio/mp4")) {
       mimeType = "audio/mp4";
     } else if (MediaRecorder.isTypeSupported("audio/wav")) {
       mimeType = "audio/wav";
     }
     ```
2. **精确后缀下载处理 (`downloadAudio` 逻辑)**：
   - 在触发下载时，使用 `fetch(url)` 在内存中读取 blob 的实际 MIME 类型。这保证了即便是从外部分享或导入的文件，也能得到正确的扩展名后缀：
     ```javascript
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
         }
       } catch (e) {
         // 回退机制
       }
       const a = document.createElement("a");
       a.href = url;
       a.download = `看图说话_${storyName}_宝贝录音.${ext}`;
       document.body.appendChild(a);
       a.click();
       document.body.removeChild(a);
     };
     ```

### 3.2 录音持久化回听（IndexedDB 离线数据库）

由于传统的 Blob URL（`blob:http://...`）只保存在当前页面会话的临时内存中，一旦刷新或关闭网页，录音便会失效。
我们通过浏览器本地的 **IndexedDB** 数据库实现了录音文件的永久封存：

1. **IndexedDB 工具函数**：
   - 数据库初始化、Blob 存入、全量读取均在前端异步完成：
     ```javascript
     const DB_NAME = "ReadPictureTellStoryDB";
     const STORE_NAME = "recordings";

     const initDB = () => {
       return new Promise((resolve, reject) => {
         const request = indexedDB.open(DB_NAME, 1);
         request.onupgradeneeded = (e) => {
           const db = e.target.result;
           if (!db.objectStoreNames.contains(STORE_NAME)) {
             db.createObjectStore(STORE_NAME);
           }
         };
         request.onsuccess = (e) => resolve(e.target.result);
         request.onerror = (e) => reject(e.target.error);
       });
     };

     // 保存音频数据
     const saveAudioBlob = async (storyId, blob) => {
       const db = await initDB();
       return new Promise((resolve, reject) => {
         const transaction = db.transaction(STORE_NAME, "readwrite");
         const store = transaction.objectStore(STORE_NAME);
         const request = store.put(blob, storyId);
         request.onsuccess = () => resolve();
         request.onerror = (e) => reject(e.target.error);
       });
     };

     // 加载所有音频数据
     const getAllAudioBlobs = async () => {
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
     };
     ```
2. **状态同步与生命周期**：
   - 页面首次挂载时，触发 `getAllAudioBlobs` 读取所有已录制的故事音频，通过 `URL.createObjectURL(blob)` 转换为可播放的 URL，填充至 `recordings` 全局对象。
   - 每次录制成功后，同步更新 IndexedDB 及当前页面的 `audioUrl`。

### 3.3 顶部标题栏回听功能（🔊 回听录音按钮）
* **界面表现**：位于工作舱上方，紧靠故事标题。如果还没有录音，按钮呈灰色不可点击状态（`opacity: 0.6; cursor: not-allowed`），引导孩子前往第二步录音。
* **状态联动**：绑定统一的 `<audio>` 播放控制器。点击后切换播放和暂停状态，按钮内容变为 `⏸️ 停止`，并配合 CSS 呼吸灯扫光动效 (`pulseBorder`)。播放结束时，按钮状态和动效自动复原。

### 3.4 家长控制台录音导入机制
* **痛点解决**：如果孩子换了浏览器、清理了浏览器缓存或在其他电脑上打开网页，导致 IndexedDB 数据清空，可以通过此导入功能进行恢复。
* **实现方案**：在“家长专区 / Dashboard”下，除了提供已录关卡的回听和本地盘备份，还为每一个故事提供了 `导入本地录音` 按钮。
* **数据流向**：家长选择之前保存在本地盘的音频文件 -> React 读取文件 Blob -> 写入本地 IndexedDB -> 生成新的 URL 更新状态并激活关卡中的回听功能 -> 重新点亮对应故事的录音任务星星 ⭐。

### 3.5 界面平滑滚动与导航修复 (`handleNextStory`)
* **导航痛点**：由于学习视图高度较高，且“下一本”按钮位于页面最下方，直接切换故事会导致页面停留在滚动条最底部，无法看到上方的新故事插画。
* **解决方案**：在 `handleNextStory` 和 story-card 切换方法中，添加 `window.scrollTo({ top: 0, behavior: 'smooth' })`。同时自动注销当前播放的音频，清空拼句积木池，保证下一个故事的状态是完全崭新且就绪的。

---

## 4. 样式与动画系统 (CSS Aesthetics)

项目全部采用 **Vanilla CSS** 进行高级定制，所有设计变量及动画效果均写在 `src/index.css` 和 `src/App.css` 中：

### 4.1 全局 CSS 自定义变量 (`index.css`)
```css
:root {
  --color-bg: #f5f5fc;                  /* 温馨粉糯背景色 */
  --color-text-dark: #4a375a;           /* 卡通深紫色文字 */
  --color-text-light: #8e7fa0;          /* 辅助淡紫灰色文字 */
  --color-pink: #ff7ebb;                /* 主题粉色 */
  --color-pink-hover: #ff60aa;
  --color-purple: #9a7dfa;              /* 吉祥物独角兽紫色 */
  --color-purple-hover: #8360f7;
  --color-yellow: #ffd043;              /* 星星金色 */
  --color-green: #67e1a3;               /* 成功薄荷绿 */
  
  --card-border: 4px solid #f0f0fa;
  --card-shadow: 0 12px 32px rgba(154, 125, 250, 0.08);
  --radius-md: 16px;
  --radius-lg: 28px;
}
```

### 4.2 核心微交互动画 Keyframes (`App.css`)
1. **小精灵/气泡漂浮动画 (`float`)**：
   ```css
   @keyframes float {
     0%, 100% { transform: translateY(0); }
     50% { transform: translateY(-8px); }
   }
   ```
2. **播放状态呼吸脉冲动画 (`pulseBorder`)**：
   ```css
   @keyframes pulseBorder {
     0% { box-shadow: 0 0 0 0 rgba(255, 75, 92, 0.4); }
     70% { box-shadow: 0 0 0 10px rgba(255, 75, 92, 0); }
     100% { box-shadow: 0 0 0 0 rgba(255, 75, 92, 0); }
   }
   ```
3. **缓动回弹过渡 (`bounce-hover`)**：
   所有交互卡片具有 `cubic-bezier(0.175, 0.885, 0.32, 1.275)` 贝塞尔曲线过渡，使悬停放大显得更富弹性、更具生命力。

---

## 5. 项目搭建与本地调试

### 5.1 运行前提
* 本地需安装 [Node.js](https://nodejs.org/) (推荐 LTS v20+ 或 v24 均可)。
* 建议使用 Chrome、Edge 或 Safari 浏览器以获得最流畅的麦克风录音与 Web Speech 朗读体验。

### 5.2 开发调试指令
1. **克隆项目并进入目录**：
   ```bash
   cd ReadPictureTellStory
   ```
2. **安装项目前端依赖项**：
   ```bash
   npm install
   ```
3. **启动本地开发调试服务器**：
   ```bash
   npm run dev
   ```
   * 终端将输出 `Local: http://localhost:5173/`。打开该链接即可在浏览器中实时开发 and 调试。

4. **进行生产打包校验**：
   ```bash
   npm run build
   ```
   * 校验项目是否存在静态资源引用缺失或语法报错。编译后的生产静态包将保存在 `dist/` 目录中。

---

## 6. GitHub Pages 自动化发布与部署

本项目已配置自动化构建发布功能。发布的目标分支为 `gh-pages`。

### 6.1 发布指令
在主分支代码开发完毕并验证无误后，运行以下指令完成打包与线上部署发布：
```bash
npm run deploy
```
* **执行步骤**：该命令会先触发 `npm run build` 进行打包，随后通过 `gh-pages` 依赖自动将 `dist/` 产物推送到远程 GitHub 的 `gh-pages` 分支上。
* **线上测试链接**：[https://grenvill-create.github.io/ReadPictureTellStory/](https://grenvill-create.github.io/ReadPictureTellStory/)

### 6.2 注意事项
* 项目中 Vite 的 `base` 路径配置在 `vite.config.js` 中设定为相对路径 `./`，这保证了不管是部署在 GitHub Pages（带子路径 `/ReadPictureTellStory/`），还是部署在 Cloudflare Pages（通常为根路径 `/`），静态资源（包含 `public/images/` 下的插画）都能被正确寻址加载，无需手动更改配置。

---

## 7. 开发者维护规范 🌟

> [!IMPORTANT]
> 1. **代码与文档保持完全一致**：为了保证团队或跨平台协作的效率，如果对 `App.jsx` 的状态参数、IndexedDB 结构、录音格式逻辑进行任何修改，请**同步更新本 README.md** 的对应章节。
> 2. **自动推送 GitHub**：在本地完成开发调试并通过 `npm run build` 编译验证后，运行 Git 命令及时同步到 GitHub 仓库：
>    ```bash
>    git add .
>    git commit -m "your commit message"
>    git push origin main
>    ```
