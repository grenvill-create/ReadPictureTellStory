# 看图说话学习助手 (ReadPictureTellStory)

`ReadPictureTellStory` 是一款专为 5 岁左右儿童（特别是小女孩）设计的交互式“看图说话”学习网页应用。通过精美的视觉画面、生动有趣的交互动效、由浅入深的引导式学习以及激励机制，帮助孩子提升词汇量、口头表达能力、逻辑思维与想象力。

---

## 1. 核心设计理念

### 1.1 儿童友好型视觉设计（WOW Aesthetics）
- **配色方案**：采用温馨、柔和、梦幻的马卡龙色调（如粉红、独角兽紫、阳光黄、薄荷绿），符合小女孩的审美，界面温馨防刺眼。
- **微交互与动效**：按钮悬浮有弹性缩放（bounce）、点击有星星/彩屑喷洒效果，页面吉祥物（如可爱的小精灵或小动物）会眨眼或打招呼。
- **大卡片与圆角**：所有交互元素均采用大尺寸和超大圆角（`24px`+），防止视觉拥挤，便于触控或鼠标点击。

### 1.2 核心学习交互流程（Core Learning Flow - 双语教学版）
软件围绕孩子的表达认知规律，采用**中英双语沉浸式教学**，设计了以下三个学习步骤：

1. **第一步：看图观察与双语探索 (Look & Explore)**
   - **画面呈现**：首先展示精美的插图，无多余文字干扰，引导孩子进行视觉观察。
   - **双语词汇认知**：孩子可以点击图中的各种元素（如：小狗、风筝、爸爸），点击后该物体会被柔和高亮，并同时显示中英文词卡（如 `小狗 / Puppy`）。
   - **双语发音**：系统自动播放中英双语的清脆语音朗读（例如先读中文“小狗”，再读英文“Puppy”），帮助孩子建立图像、中文和英文的三维联想记忆。

2. **第二步：自由表达与录音 (Speak Freely & Record)**
   - **启发引导**：小精灵会用亲切的声音提问：“宝贝，你在图片里看到了什么呢？用中文或英文大声说一下吧！”
   - **自我录音**：孩子点击“麦克风”按钮，用自己的话描述看到的画面（如“There is a dog”，“爸爸和风筝”等），并可随时回放。系统会给予奖励星星，激发开口的成就感。

3. **第三步：双语组织语句描绘 (Organize & Describe)**
   - **中英模式切换**：提供中/英文拼句切换键。
   - **中文拼句积木**：提供中文“词卡积木”（如：`[小女孩]` `[在草地上]` `[放风筝]`），孩子组合成功后，系统朗读标准中文句子。
   - **英文拼句积木**：提供英文“词卡积木”（如：`[The little girl]` `[is flying]` `[a kite]` `[on the grass]`），帮助孩子理解英文的语序（主谓宾+地点状语后置），拼对后系统用纯正的英文发音朗读。
   - **对比与学习**：双语拼接完成，系统大声朗读，并闪烁金色光芒，强化语法语感。

4. **第四步：双语范文朗读与复述 (Read & Repeat)**
   - **双语对照展示**：完成拼句后解锁“双语故事书卡片”，左右或上下对照展示中英文范文故事。
   - **双语跟读与复述**：孩子可以任意点击中文句子或英文句子进行高亮点读。系统使用对应的中文童声/英文童声发音，引导孩子复述和模仿，逐步培养双语思维。

---

## 2. 功能模块规划

### 2.1 主界面 (Home Dashboard)
- **梦幻画卷关卡选择**：以旋转木马或卷轴形式展示的关卡选择器（Story Maps）。
- **互动精灵（Mascot）**：点击会发出鼓励声音（例如：“今天我们去哪儿讲故事呢？”）。
- **我的奖章墙（Sticker Book）**：展示孩子收集到的卡通贴纸，可进行二次拖拽贴图。

### 2.2 故事学习核心舱 (Story Canvas)
- **主插图区**：展示精美手绘或高质量卡通图片，内嵌点击热区（Hotspots）。
- **引导式提问区**：提供中英双语启发性问题（例如：“图片里有谁呀？Who is in the picture?”）。
- **中英双语切换器**：方便随时一键切换当前界面的主要教学语言（中文/英文/双语）。
- **语音控制面板**：
  - **喇叭按钮**：朗读当前提示或故事。
  - **麦克风按钮**：录制孩子的声音，波形图动画展示录制状态。
  - **播放按钮**：播放录音，供孩子和家长回听。
- **任务目标区**：用可爱的星星表示学习任务完成度（词汇认知 ⭐、句子组装 ⭐、录音表达 ⭐）。

### 2.3 双语拼句积木 (Sentence Builder)
- 提供磁性贴纸般的词汇卡片，支持**中文**和**英文**两种拼句模式。
- 支持拖拽或点击排序。
- 拼对后卡片闪烁金色光芒，并根据所选语言，自动通过 Web Speech API 的对应发音人（中文女声/英文女声）播报句子。

### 2.4 双语范文参考书 (Bilingual Storybook Card)
- **中英绘本 UI**：通关拼句后解锁，呈现如翻开双语绘本般的卡片界面。
- **拼音与词义辅助**：中文部分上方标注拼音，英文部分支持单词悬停划词翻译。
- **双语高亮点读**：支持点击单句（中文或英文）播放对应语言的朗读发音，高亮当前句子，方便小女孩对比跟读。

### 2.5 家长控制与成就系统 (Parent Center)


- **成长手记**：记录孩子录音的历史轨迹，家长可以回听并写下鼓励语。
- **词汇库积累**：展示孩子已经掌握的词语和表达模式。
- **贴纸奖励**：每通关一个故事，获得一张可以自由贴在虚拟“贴纸板”上的可爱卡通贴纸（例如：小独角兽、城堡、草莓蛋糕等）。

---

## 3. 技术栈建议

- **前端框架**：Vite + React (配合现代 CSS 变量、CSS Flexbox/Grid，确保极高自定义性)。
- **动画库**：Framer Motion 或 Vanilla CSS Keyframes (用于极度流畅的小组件微动效)。
- **音频技术**：
  - **Web Speech API (SpeechSynthesis)**：提供实时的文本转语音功能（TTS），采用亲切的女声/童声发音。
  - **MediaRecorder API**：在浏览器端录音并根据运行设备动态选用最佳 MIME 类型格式（WebM/MP4/WAV）。
  - **IndexedDB 本地数据库**：用于在本地浏览器中持久化保存宝贝的音频录音，使得录音在页面刷新或关闭后依然能够回听。
  - **本地盘下载方案 (Download to Disk)**：支持将录音文件以正确的音频后缀（`.webm` / `.m4a` / `.wav`）直接下载保存至电脑本地盘。
  - **本地录音导入**：允许在家长专区导入本地电脑上的录音文件，随时恢复并回听历史记录。
- **状态存储**：使用 `localStorage` 保存关卡进度、贴纸册等轻量级状态，结合 `IndexedDB` 存储音频，实现纯本地离线持久化运行。

---

## 4. 推荐故事场景（第一期）
1. **《公园放风筝》**：包含人物（小女孩、爸爸）、小狗、天空、风筝、草地、野餐垫。
2. **《猫咪去哪了》**：包含小猫、纸箱、床底下、桌子旁、毛线球，培养空间方位词（上、下、里、外）。
3. **《小兔过生日》**：包含生日蛋糕、蜡烛、气球、礼物、兔子一家，培养情感词汇与社交表达。

---

## 5. 故事插画资源与压缩工具 (Story Illustrations & Compression Tool)

为了保证网页加载速度和性能，本项目集成了自动图像压缩工具：
- **原始图片目录**：`raw_images/` （存放 AI 生成的高清 PNG 原始插画）
- **优化输出目录**：`public/images/` （自动转换并压缩后的轻量级 JPG 图片，限定最大尺寸为 1024px，质量 80%，单张图片由 ~1MB 降至约 200KB）
- **已生成并优化的 10 张核心学习场景插图**：
  1. `kite_flying.jpg` - 公园放风筝 (Kite Flying)
  2. `beach_sandcastle.jpg` - 海滩建城堡 (Beach Sandcastle)
  3. `forest_picnic.jpg` - 森林野餐会 (Forest Picnic)
  4. `rainbow_puddle.jpg` - 雨后彩虹 (Rainbow after the Rain)
  5. `hidden_cat.jpg` - 猫咪去哪了 (Where is the Cat?)
  6. `zoo_visit.jpg` - 欢乐动物园 (Fun Zoo Visit)
  7. `bunny_birthday.jpg` - 小兔过生日 (Bunny's Birthday Party)
  8. `space_adventure.jpg` - 太空旅行记 (Space Adventure)
  9. `building_snowman.jpg` - 雪地堆雪人 (Building a Snowman)
  10. `pond_concert.jpg` - 池塘音乐会 (Pond Concert)
- **压缩脚本**：`compress_images.py`
  - 使用说明：在终端运行 `python compress_images.py` 即可自动扫描并压缩 `raw_images/` 下的新增图片至 `public/images/`，支持单图压缩 `python compress_images.py <path_to_image>`。

### 5.2 后续新增故事与图片工作流 (Workflow for Adding New Stories)

项目在后续增加新故事和插画时，请按照以下标准流程执行以确保数据格式一致：

1. **生成与压缩图片**：
   - 使用 AI 图像生成工具生成儿童绘本风格的新插图。
   - 将原始图片命名为英文下划线格式（如 `bunny_garden.png`），存入 `raw_images/` 文件夹。
   - 运行终端命令进行自动优化压缩：
     ```powershell
     python compress_images.py
     ```
   - 优化后的 `bunny_garden.jpg` 将自动保存在 `public/images/` 目录中。

2. **在前端元数据中配置新关卡**：
   - 打开前端的故事数据文件 `src/data/storiesData.js`。
   - 在配置数组中添加新的一项，包含热区坐标、探索词汇、拼句卡片及故事范文，参考模板如下：
      ```javascript
      {
        id: "bunny_garden",
        title: "小兔子的菜园 / Little Bunny's Garden",
        image: "/images/bunny_garden.jpg",
        hotspots: [
          { id: "rabbit", name: "小兔子", nameEn: "Little Bunny", x: 30, y: 70, radius: 8 },
          { id: "carrot", name: "胡萝卜", nameEn: "Carrot", x: 60, y: 80, radius: 6 }
        ],
        words: [
          { zh: "小兔子", en: "Little Bunny" },
          { zh: "胡萝卜", en: "Carrot" },
          { zh: "菜园", en: "Garden" },
          { zh: "拔", en: "Pull" }
        ],
        sentenceBlocksZh: ["小兔子", "在菜园里", "拔胡萝卜"],
        sentenceBlocksEn: ["The little bunny", "is pulling up", "carrots", "in the garden"],
        sampleEssayZh: "清晨，太阳公公升起来了。可爱的小兔子来到它的菜园里。地里的胡萝卜长得又大又红，小兔子用力地拔呀拔，心里开心极了！",
        sampleEssayEn: "In the morning, the sun rises. The cute little bunny comes to its garden. The carrots in the soil are big and red. The little bunny pulls them up hard and feels very happy!"
      }
      ```
    - **配置字段说明**：
      - `hotspots`: 双语点击热区，包括中文名 `name` 和英文名 `nameEn`，以及百分比相对坐标。
      - `words`: 词汇卡对象数组，包含中文 `zh` 和英文 `en`。
      - `sentenceBlocksZh`: 中文拼句模式下打乱的词卡序列。
      - `sentenceBlocksEn`: 英文拼句模式下打乱的英文词卡序列。
      - `sampleEssayZh` 和 `sampleEssayEn`: 对应的中/英文范文，用于双语故事书卡片的高亮点读和跟读。

3. **同步更新文档与 GitHub**：
   - 在 `readme.md` 的插图列表中登记新关卡。
   - 运行 Git 命令将新资源和代码提交并推送至 GitHub：
     ```powershell
     git add .
     git commit -m "feat: add new story bunny_garden"
     git push origin main
     ```

---


## 6. 项目路线图 (Roadmap)

### 第一阶段：设计、图片生成与Readme定义 (已完成)
- [x] 确立面向 5 岁儿童的学习闭环方案。
- [x] 生成 `README.md` 项目愿景与规范文档。
- [x] 构思并使用 AI 生成第一批 10 张精美故事插画。
- [x] 编写并测试 `compress_images.py` 图片压缩工具，完成对 10 张图片的高效优化。
- [x] 对 10 张故事插画进行视觉坐标校对，精确校正全部 50 个点击热区坐标（修复了初版小狗定位点偏移至鞋子等坐标偏差问题）。

### 第二阶段：环境初始化与工程搭建 (已完成)
- [x] 初始化 Git 仓库并连接 GitHub 远程仓库 (`https://github.com/grenvill-create/ReadPictureTellStory.git`)。
- [x] 初始化 React 现代前端工程项目。
- [x] 配置并验证视觉风格基础变量（`index.css`）和全局双语布局。

### 第三阶段：核心功能开发 (已完成)
- [x] 实现看图查找（点击热区与双语词汇卡）。
- [x] 开发语音录音与本地播放组件。
- [x] 开发拖拽拼接句子的积木组件。
- [x] 实现故事卡片轮播和精灵语音引导。

### 第四阶段：视觉美化与音效融合 (已完成)
- [x] 融入精美的插图与图片优化资源。
- [x] 添加动画（金色星星飘落、关卡解锁、贴纸收集）。
- [x] 兼容移动端和平板设备的触控体验。
- [x] 优化中文字体渲染，去除过于厚重且笔画融合的卡通字体，使用更清晰易读的系统无衬线字体（PingFang SC / Microsoft YaHei），并将词汇与句式字重从 700 调低至 600，方便 5 岁幼儿看清字形结构。

### 第五阶段：录音播放、下载与导航优化 (已完成)
- [x] 新增 IndexedDB 录音本地持久化，刷新页面后仍可回听和管理录音。
- [x] 实现 "Download to Disk" 下载至电脑本地盘方案，自动分析 MIME 并以正确后缀保存音频。
- [x] 顶部标题栏增加 "回听录音" 播放按钮（无录音时暗淡不可点击，有录音时高亮且支持播放控制，同步播放状态）。
- [x] 家长控制台支持 "导入本地录音"，支持拖拽或选择本地已下载文件导入网页回听。
- [x] 修复 "下一本" 及画册跳转的响应体验（实现自动平滑滚动至顶部 `window.scrollTo` 及页面状态完全重置）。



---

## 7. 开发者维护规范 🌟

> [!IMPORTANT]
> 1. **代码与文档同步**：本项目的任何功能或结构修改，必须在同一轮修改中**同步更新本 `readme.md`** 中的对应章节，确保文档永远是最新的。
> 2. **自动推送 Github**：每次完成代码及文档修改并验证无误后，必须**自动/手动运行 git push 命令**，将最新版本推送到 Github：
>    `git push origin main`（或对应的当前开发分支）。

