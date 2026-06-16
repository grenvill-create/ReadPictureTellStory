export const storiesData = [
  {
    id: "kite_flying",
    title: "公园放风筝 / Flying a Kite",
    image: "/images/kite_flying.jpg",
    hotspots: [
      { id: "dad", name: "爸爸", nameEn: "Dad", x: 70, y: 55, radius: 10 },
      { id: "girl", name: "小女孩", nameEn: "Little Girl", x: 50, y: 70, radius: 8 },
      { id: "kite", name: "彩虹风筝", nameEn: "Rainbow Kite", x: 35, y: 20, radius: 10 },
      { id: "dog", name: "小狗", nameEn: "Puppy", x: 30, y: 80, radius: 8 },
      { id: "grass", name: "草地", nameEn: "Grass", x: 50, y: 92, radius: 8 }
    ],
    words: [
      { zh: "爸爸", en: "Dad" },
      { zh: "小女孩", en: "Little Girl" },
      { zh: "彩虹风筝", en: "Rainbow Kite" },
      { zh: "小狗", en: "Puppy" },
      { zh: "草地", en: "Grass" }
    ],
    sentenceBlocksZh: ["小女孩", "和爸爸", "在草地上", "放风筝"],
    sentenceBlocksEn: ["The little girl", "and her dad", "are flying a kite", "on the grass"],
    sampleEssayZh: "春天来了，天气真暖和。爸爸带小女孩去公园放彩虹风筝。草地绿油油的，小狗开心地跳来跳去。它们玩得太高兴啦！",
    sampleEssayEn: "Spring is here and the weather is warm. Dad takes the little girl to the park to fly a rainbow kite. The grass is green, and the puppy happily runs around. They are having so much fun!",
    parentGuide: "你看封面上有一对父女，天气看起来怎么样？他们在玩什么呢？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小女孩手里拉着什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "小狗一直围着小女孩跳，你觉得小狗现在心情怎么样？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果突然风停了，风筝会怎么样呢？", color: "#fa709a" }
    ],
    lifeConnection: "这和我们上次去公园玩的时候，有什么一样或者不一样的地方吗？你还记得我们上次在公园看到了什么？",
    retellingPrompt: "现在轮到你当小老师啦！你能用自己的话，把这个放风筝的故事讲给我听吗？先说说他们在哪里，然后发生了什么，最后大家开不开心？"
  },
  {
    id: "beach_sandcastle",
    title: "海滩建城堡 / Building a Sandcastle",
    image: "/images/beach_sandcastle.jpg",
    hotspots: [
      { id: "boy", name: "小男孩", nameEn: "Little Boy", x: 74, y: 56, radius: 10 },
      { id: "girl", name: "小女孩", nameEn: "Little Girl", x: 28, y: 56, radius: 10 },
      { id: "castle", name: "沙滩城堡", nameEn: "Sandcastle", x: 51, y: 63, radius: 10 },
      { id: "ocean", name: "大海", nameEn: "Ocean", x: 30, y: 33, radius: 12 },
      { id: "seagull", name: "海鸥", nameEn: "Seagull", x: 71, y: 15, radius: 6 }
    ],
    words: [
      { zh: "小男孩", en: "Little Boy" },
      { zh: "小女孩", en: "Little Girl" },
      { zh: "沙滩城堡", en: "Sandcastle" },
      { zh: "大海", en: "Ocean" },
      { zh: "海鸥", en: "Seagull" }
    ],
    sentenceBlocksZh: ["小朋友们", "在金色沙滩上", "建造了一座", "大城堡"],
    sentenceBlocksEn: ["The children", "are building", "a big sandcastle", "on the golden beach"],
    sampleEssayZh: "今天是个阳光灿烂的日子。小男孩和小女孩在沙滩上玩耍。他们用铲子和水桶堆建了一座漂亮的城堡。远处的浪花轻轻拍打着沙滩，海鸥在天空中自由飞翔。",
    sampleEssayEn: "Today is a sunny day. The little boy and girl are playing on the beach. They build a beautiful castle with shovels and buckets. Gentle waves pat the sand, and seagulls fly freely in the sky.",
    parentGuide: "哇，这里是哪里呀？小朋友们在沙地上做什么有趣的事情？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "这两个小朋友是用什么工具堆沙堡的呀？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "天上的海鸥飞来飞去，你觉得它们在看什么？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果等一下海浪涨潮了，冲到了沙堡这里，会发生什么事？", color: "#fa709a" }
    ],
    lifeConnection: "还记得我们去海边玩沙子吗？你当时用沙子堆了什么形状？",
    retellingPrompt: "假装你就是图里的小女孩，你能一边指着图片，一边告诉我你是怎么堆出这么漂亮的城堡的吗？"
  },
  {
    id: "forest_picnic",
    title: "森林野餐会 / Forest Picnic",
    image: "/images/forest_picnic.jpg",
    hotspots: [
      { id: "bunny", name: "小兔子", nameEn: "Little Bunny", x: 35, y: 65, radius: 9 },
      { id: "bear", name: "小熊", nameEn: "Bear Cub", x: 65, y: 65, radius: 10 },
      { id: "squirrel", name: "小松鼠", nameEn: "Little Squirrel", x: 23, y: 77, radius: 7 },
      { id: "blanket", name: "野餐垫", nameEn: "Picnic Blanket", x: 50, y: 83, radius: 10 },
      { id: "tree", name: "大橡树", nameEn: "Oak Tree", x: 50, y: 35, radius: 15 }
    ],
    words: [
      { zh: "小兔子", en: "Little Bunny" },
      { zh: "小熊", en: "Bear Cub" },
      { zh: "小松鼠", en: "Little Squirrel" },
      { zh: "野餐垫", en: "Picnic Blanket" },
      { zh: "西瓜", en: "Watermelon" }
    ],
    sentenceBlocksZh: ["小动物们", "在大树下", "开心地", "吃野餐"],
    sentenceBlocksEn: ["The little animals", "are having a picnic", "happily", "under the tree"],
    sampleEssayZh: "茂密的森林里有一棵巨大的橡树。小熊、小兔子和小松鼠围坐在红白格子的野餐垫上。它们分享着红红的西瓜、甜甜的蛋糕和红苹果，开心地唱起歌来。",
    sampleEssayEn: "There is a huge oak tree in the forest. The bear, bunny, and squirrel gather on a red-and-white picnic blanket. They share watermelon, sweet cake, and red apples, singing happily together.",
    parentGuide: "森林里有这么多小动物，它们好像在聚会呢，你看到了哪些小动物？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "野餐垫上都放了哪些好吃的水果？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "小熊吃西瓜的时候笑得这么开心，你觉得西瓜甜不甜呀？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "吃完野餐后，小动物们接下来会玩什么游戏呢？", color: "#fa709a" }
    ],
    lifeConnection: "周末我们也带上好吃的去草地上野餐好不好？你想带什么水果呢？",
    retellingPrompt: "我们来玩角色扮演吧！我当小兔子，你当小熊，我们一起演一遍这场森林野餐会的故事！"
  },
  {
    id: "rainbow_puddle",
    title: "雨后彩虹 / Rainbow after Rain",
    image: "/images/rainbow_puddle.jpg",
    hotspots: [
      { id: "girl", name: "小女孩", nameEn: "Little Girl", x: 50, y: 55, radius: 10 },
      { id: "raincoat", name: "黄色雨衣", nameEn: "Yellow Raincoat", x: 50, y: 50, radius: 8 },
      { id: "rainboots", name: "红雨鞋", nameEn: "Red Rainboots", x: 53, y: 76, radius: 6 },
      { id: "rainbow", name: "彩虹", nameEn: "Rainbow", x: 50, y: 28, radius: 15 },
      { id: "puddle", name: "水坑", nameEn: "Puddle", x: 50, y: 86, radius: 8 }
    ],
    words: [
      { zh: "黄色雨衣", en: "Yellow Raincoat" },
      { zh: "红雨鞋", en: "Red Rainboots" },
      { zh: "彩虹", en: "Rainbow" },
      { zh: "水坑", en: "Puddle" },
      { zh: "太阳", en: "Sun" }
    ],
    sentenceBlocksZh: ["小女孩", "穿着红雨鞋", "在水坑里", "快乐地踩水"],
    sentenceBlocksEn: ["The little girl", "is jumping", "in the puddle", "with her red rainboots"],
    sampleEssayZh: "雷雨停了，天空中挂起了一道美丽的七彩虹。太阳公公露出了笑脸。小女孩穿着漂亮的黄色雨衣和红色雨鞋，快乐地在水坑里踩水，溅起亮晶晶的水花。",
    sampleEssayEn: "The rain stops, and a beautiful seven-color rainbow hangs in the sky. The smiling sun peeks out. Wearing her yellow raincoat and red rainboots, the girl jumps in the water puddles happily.",
    parentGuide: "你看天上的七种颜色是什么？刚刚是不是下过雨啦？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小女孩穿的雨衣是什么颜色的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "她为什么要在踩水的时候穿雨鞋呢？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果她踩得很大力，水花溅到身上会怎么样？", color: "#fa709a" }
    ],
    lifeConnection: "下次下雨的时候，我们也穿上雨鞋去踩水坑好吗？你会像这个小女孩一样开心吗？",
    retellingPrompt: "你看图上的彩虹和水坑，你能把刚才雨停之后发生的事情重新讲一遍吗？"
  },
  {
    id: "hidden_cat",
    title: "猫咪去哪了 / Where is the Cat?",
    image: "/images/hidden_cat.jpg",
    hotspots: [
      { id: "box", name: "大纸箱", nameEn: "Cardboard Box", x: 65, y: 72, radius: 10 },
      { id: "tail", name: "猫尾巴", nameEn: "Cat's Tail", x: 77, y: 50, radius: 6 },
      { id: "boy", name: "好奇的男孩", nameEn: "Curious Boy", x: 27, y: 58, radius: 10 },
      { id: "sofa", name: "客厅沙发", nameEn: "Sofa", x: 82, y: 43, radius: 12 },
      { id: "carpet", name: "地毯", nameEn: "Carpet", x: 50, y: 90, radius: 8 }
    ],
    words: [
      { zh: "好奇的男孩", en: "Curious Boy" },
      { zh: "大纸箱", en: "Cardboard Box" },
      { zh: "小猫", en: "Cat" },
      { zh: "尾巴", en: "Tail" },
      { zh: "沙发", en: "Sofa" }
    ],
    sentenceBlocksZh: ["调皮的小猫", "躲在", "客厅的纸箱里", "只露出尾巴"],
    sentenceBlocksEn: ["The playful cat", "hides inside", "the cardboard box", "showing only its tail"],
    sampleEssayZh: "温馨的客厅里，小男孩正在找他的宠物猫。原来调皮的小橘猫躲在了一个空纸箱里。它以为自己藏得很好，却露出了长长的尾巴，真逗人喜欢！",
    sampleEssayEn: "In the cozy living room, the boy is looking for his pet cat. The playful orange cat hides inside a cardboard box. It thinks it is hidden well, but its long tail is showing. How cute!",
    parentGuide: "嘘，小男孩好像在找什么东西！你帮他找找看，藏在哪里了？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "纸箱外面露出了什么东西呀？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "小猫为什么要躲在纸箱里不出来呢？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "当小男孩走到纸箱旁边打开它的时候，小猫会做什么？", color: "#fa709a" }
    ],
    lifeConnection: "你在家里玩捉迷藏的时候，最喜欢躲在哪里？会不会也像小猫一样露出小脚丫？",
    retellingPrompt: "我们来演这出捉迷藏吧。找个纸箱子，你来当躲起来的小猫，我来找你！"
  },
  {
    id: "zoo_visit",
    title: "欢乐动物园 / Fun Zoo Visit",
    image: "/images/zoo_visit.jpg",
    hotspots: [
      { id: "giraffe", name: "长颈鹿", nameEn: "Giraffe", x: 80, y: 53, radius: 12 },
      { id: "boy", name: "小男孩", nameEn: "Little Boy", x: 37, y: 74, radius: 8 },
      { id: "parents", name: "爸爸妈妈", nameEn: "Parents", x: 27, y: 63, radius: 10 },
      { id: "redpanda", name: "小熊猫", nameEn: "Red Panda", x: 50, y: 31, radius: 8 },
      { id: "leaves", name: "树叶", nameEn: "Tree Leaves", x: 74, y: 20, radius: 9 }
    ],
    words: [
      { zh: "长颈鹿", en: "Giraffe" },
      { zh: "小熊猫", en: "Red Panda" },
      { zh: "小男孩", en: "Little Boy" },
      { zh: "树叶", en: "Leaves" },
      { zh: "大树", en: "Tree" }
    ],
    sentenceBlocksZh: ["一家人", "在动物园看", "高高的长颈鹿", "吃树叶"],
    sentenceBlocksEn: ["The family", "is watching", "the tall giraffe", "eating leaves at the zoo"],
    sampleEssayZh: "周末，爸爸妈妈带小男孩去动物园玩。长颈鹿的脖子真长呀，它正伸长着脖子吃树梢上的绿叶。旁边的树枝上，还有一只红褐色的小熊猫在呼呼大睡。",
    sampleEssayEn: "On the weekend, parents take the boy to the zoo. The giraffe has a very long neck. It stretches its head to eat green leaves. On a nearby branch, a fluffy red panda is sleeping soundly.",
    parentGuide: "你看这个动物好高好高，脖子长长的，它叫什么名字呀？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "长颈鹿现在正在吃什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "旁边树上还有一只小动物闭着眼睛，它在干嘛呢？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "看完了长颈鹿，你觉得这家人接下来还会去看什么动物？", color: "#fa709a" }
    ],
    lifeConnection: "我们上次去动物园的时候，你最喜欢的动物是什么？它和长颈鹿有什么不一样？",
    retellingPrompt: "现在你是这个小男孩，跟其他没去过动物园的小朋友介绍一下，你今天看到了什么有趣的事情？"
  },
  {
    id: "bunny_birthday",
    title: "小兔过生日 / Bunny's Birthday",
    image: "/images/bunny_birthday.jpg",
    hotspots: [
      { id: "bunny", name: "寿星兔", nameEn: "Birthday Bunny", x: 47, y: 47, radius: 10 },
      { id: "cake", name: "生日蛋糕", nameEn: "Birthday Cake", x: 65, y: 68, radius: 9 },
      { id: "hat", name: "生日帽", nameEn: "Birthday Hat", x: 44, y: 35, radius: 6 },
      { id: "bear", name: "熊拍手", nameEn: "Clapping Bear", x: 18, y: 63, radius: 10 },
      { id: "fox", name: "狐狸朋友", nameEn: "Fox Friend", x: 87, y: 59, radius: 10 }
    ],
    words: [
      { zh: "小兔子", en: "Little Bunny" },
      { zh: "生日蛋糕", en: "Birthday Cake" },
      { zh: "生日帽", en: "Birthday Hat" },
      { zh: "蜡烛", en: "Candles" },
      { zh: "狐狸", en: "Fox" }
    ],
    sentenceBlocksZh: ["小兔子", "准备吹灭", "大蛋糕上的", "五支蜡烛"],
    sentenceBlocksEn: ["The little bunny", "is going to blow out", "five candles", "on the birthday cake"],
    sampleEssayZh: "今天小兔子满五岁啦！在温馨的木屋里，它戴着漂亮的生日帽站在大蛋糕前。小熊和狐狸围在旁边拍手唱着歌，小兔子正准备吹灭蛋糕上的五支红蜡烛呢！",
    sampleEssayEn: "Today the little bunny is five years old! In the cozy cabin, it stands before a big cake wearing a birthday hat. The bear and fox clap and sing, while the bunny gets ready to blow out five red candles!",
    parentGuide: "桌子上放着一个好大的蛋糕，今天是谁的生日呀？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "蛋糕上面插了多少根蜡烛？我们一起来数一数吧！", color: "#4facfe" },
      { type: "inference", label: "推理", text: "小熊和狐狸都在拍手，你觉得他们在给小兔子唱什么歌？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "小兔子吹灭蜡烛之后，大家会一起做什么呢？", color: "#fa709a" }
    ],
    lifeConnection: "你上次过生日的时候，也吃了大蛋糕吗？你许了什么愿望？",
    retellingPrompt: "我们来演小兔子的生日派对！你当小兔子准备吹蜡烛，我当小熊给你唱生日歌好不好？"
  },
  {
    id: "space_adventure",
    title: "太空旅行记 / Space Adventure",
    image: "/images/space_adventure.jpg",
    hotspots: [
      { id: "girl", name: "小宇航员", nameEn: "Astronaut Girl", x: 63, y: 49, radius: 10 },
      { id: "alien", name: "小外星人", nameEn: "Little Alien", x: 36, y: 61, radius: 8 },
      { id: "planet", name: "行星", nameEn: "Planet", x: 50, y: 85, radius: 12 },
      { id: "earth", name: "地球", nameEn: "Earth", x: 25, y: 23, radius: 10 },
      { id: "stars", name: "发光的星星", nameEn: "Glowing Stars", x: 52, y: 19, radius: 6 }
    ],
    words: [
      { zh: "宇航服", en: "Spacesuit" },
      { zh: "外星人", en: "Alien" },
      { zh: "地球", en: "Earth" },
      { zh: "星星", en: "Stars" },
      { zh: "宇宙", en: "Space" }
    ],
    sentenceBlocksZh: ["小宇航员", "在太空里", "和绿色的外星人", "高兴地打招呼"],
    sentenceBlocksEn: ["The little astronaut", "is greeting", "a friendly green alien", "in space"],
    sampleEssayZh: "小女孩穿着白色的宇航服，降落在一颗紫色行星上。深蓝色的太空中，地球像一颗美丽的蓝宝石。一个绿皮肤、大眼睛的小外星人正高兴地朝她挥手呢！",
    sampleEssayEn: "Wearing a white spacesuit, the girl lands on a purple planet. In deep space, the Earth shines like a blue sapphire. A green alien with big eyes waves at her happily!",
    parentGuide: "哇，这可是神奇的太空！你看那个全身绿色的奇怪朋友是谁？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小女孩头上戴着什么保护自己？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "小女孩和外星人正在挥手，你觉得他们成为好朋友了吗？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果你也穿上宇航服去了太空，你想去哪颗星星上看看？", color: "#fa709a" }
    ],
    lifeConnection: "你晚上抬头看天空的时候，能看到星星月亮吗？和图画里的一样吗？",
    retellingPrompt: "现在请你戴上隐形的宇航员头盔，用你最神气的语气，告诉大家你在太空中遇到了谁？"
  },
  {
    id: "building_snowman",
    title: "雪地堆雪人 / Building a Snowman",
    image: "/images/building_snowman.jpg",
    hotspots: [
      { id: "snowman", name: "雪人", nameEn: "Snowman", x: 50, y: 62, radius: 12 },
      { id: "scarf", name: "红围巾", nameEn: "Red Scarf", x: 51, y: 60, radius: 6 },
      { id: "nose", name: "胡萝卜鼻子", nameEn: "Carrot Nose", x: 55, y: 49, radius: 4 },
      { id: "girl", name: "小女孩", nameEn: "Little Girl", x: 30, y: 54, radius: 10 },
      { id: "boy", name: "小男孩", nameEn: "Little Boy", x: 69, y: 54, radius: 10 }
    ],
    words: [
      { zh: "雪人", en: "Snowman" },
      { zh: "红围巾", en: "Red Scarf" },
      { zh: "胡萝卜", en: "Carrot" },
      { zh: "雪地", en: "Snowfield" },
      { zh: "雪花", en: "Snowflakes" }
    ],
    sentenceBlocksZh: ["两个小朋友", "在雪地上", "堆了一个", "可爱的雪人"],
    sentenceBlocksEn: ["Two children", "are building", "a cute snowman", "on the snowy ground"],
    sampleEssayZh: "冬天到了，天空下起了白茫茫的大雪。地面上盖了厚厚一层。小男孩和小女孩在雪地上跑着跳着，堆起了一个大雪人。他们给雪人系上了红围巾，插上了胡萝卜鼻子。",
    sampleEssayEn: "Winter comes, and heavy snow falls from the sky. The ground is covered in white. The little boy and girl run around and build a snowman, giving it a red scarf and a carrot nose.",
    parentGuide: "到处都是白茫茫的雪，这两个小朋友堆了一个什么出来？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "雪人的鼻子是用什么做的呀？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "天气这么冷，他们为什么还要在外面玩雪呢？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果太阳出来了，天气变热了，雪人会发生什么变化？", color: "#fa709a" }
    ],
    lifeConnection: "冬天很冷的时候我们会穿什么衣服出门？和图里的小朋友穿的一样吗？",
    retellingPrompt: "假装外面下大雪了，我们一边做堆雪人的动作，一边把你刚才看到的故事讲出来好不好？"
  },
  {
    id: "pond_concert",
    title: "池塘音乐会 / Pond Concert",
    image: "/images/pond_concert.jpg",
    hotspots: [
      { id: "frogs", name: "歌唱青蛙", nameEn: "Singing Frogs", x: 50, y: 56, radius: 12 },
      { id: "lilypads", name: "绿色荷叶", nameEn: "Lilypads", x: 50, y: 67, radius: 12 },
      { id: "lotus", name: "粉色荷花", nameEn: "Lotus Flowers", x: 18, y: 78, radius: 10 },
      { id: "fireflies", name: "发光萤火虫", nameEn: "Fireflies", x: 41, y: 29, radius: 8 }
    ],
    words: [
      { zh: "青蛙", en: "Frog" },
      { zh: "荷叶", en: "Lilypad" },
      { zh: "荷花", en: "Lotus" },
      { zh: "萤火虫", en: "Firefly" },
      { zh: "池塘", en: "Pond" }
    ],
    sentenceBlocksZh: ["小青蛙", "站在荷叶上", "在夏天的夜晚", "唱歌"],
    sentenceBlocksEn: ["The little frogs", "are singing", "on the lilypads", "on a summer night"],
    sampleEssayZh: "夏天的夜晚静悄悄。池塘里的粉色荷花盛开着。几只戴着红色小领结的绿色青蛙，站在大大的荷叶上呱呱唱歌。亮晶晶的萤火虫在花叶间飞来飞去，给它们伴舞呢！",
    sampleEssayEn: "The summer night is quiet. Pink lotus flowers bloom in the pond. Wearing little red bowties, green frogs stand on lilypads singing loudly. Glowing fireflies fly around, dancing along with their songs.",
    parentGuide: "天黑了，池塘里怎么有这么多亮闪闪的小点点呀？那是什么？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "青蛙们站在什么叶子上面唱歌？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "青蛙们张大嘴巴唱歌，你猜它们唱的是什么声音？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果小雨滴落下来，青蛙们会躲到哪里去躲雨呢？", color: "#fa709a" }
    ],
    lifeConnection: "夏天晚上的公园里，你能听到什么虫子叫吗？和青蛙的叫声一样吗？",
    retellingPrompt: "请你假装是一只快乐的小青蛙，跳到沙发上，大声地告诉大家今晚的音乐会是怎么举办的！"
  },
  {
    id: "supermarket_shopping",
    title: "去超市买东西 / Shopping at the Supermarket",
    image: "/images/supermarket_shopping.png",
    hotspots: [
      { id: "mom", name: "妈妈", nameEn: "Mom", x: 60, y: 50, radius: 15 },
      { id: "kid", name: "小朋友", nameEn: "Kid", x: 40, y: 65, radius: 12 },
      { id: "cart", name: "购物车", nameEn: "Shopping Cart", x: 50, y: 70, radius: 15 },
      { id: "apple", name: "苹果", nameEn: "Apple", x: 48, y: 65, radius: 8 },
      { id: "shelf", name: "货架", nameEn: "Shelf", x: 20, y: 40, radius: 20 }
    ],
    words: [
      { zh: "超市", en: "Supermarket" },
      { zh: "购物车", en: "Shopping Cart" },
      { zh: "妈妈", en: "Mom" },
      { zh: "苹果", en: "Apple" },
      { zh: "货架", en: "Shelf" }
    ],
    sentenceBlocksZh: ["妈妈和孩子", "推着购物车", "在明亮的超市里", "买东西"],
    sentenceBlocksEn: ["Mom and the kid", "are pushing a cart", "in the bright supermarket", "buying things"],
    sampleEssayZh: "周末到了，妈妈带着小朋友去逛大超市。超市里亮堂堂的，货架上摆满了各种各样的商品。他们推着购物车，挑了红红的大苹果。买东西真是一件开心的事！",
    sampleEssayEn: "It is the weekend, and mom takes the kid to the big supermarket. The supermarket is bright, and the shelves are full of various goods. They push a shopping cart and pick some big red apples. Shopping is so much fun!",
    parentGuide: "你看他们在什么地方呀？购物车里装了什么好吃的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小朋友帮妈妈推着什么东西？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "他们脸上的表情看起来开心吗？为什么？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "买完苹果之后，你觉得他们还会去买什么？", color: "#fa709a" }
    ],
    lifeConnection: "我们平时去超市的时候，你最喜欢推购物车还是选零食呢？",
    retellingPrompt: "你能假装自己是去买菜的大人，推着购物车给大家介绍一下你买了什么吗？"
  },
  {
    id: "fable_tortoise_hare",
    type: "fable",
    title: "龟兔赛跑 / The Tortoise and the Hare",
    image: "/images/tortoise_and_hare.jpg",
    hotspots: [
      { id: "hare", name: "兔子", nameEn: "Hare", x: 70, y: 65, radius: 12 },
      { id: "tortoise", name: "乌龟", nameEn: "Tortoise", x: 30, y: 75, radius: 10 },
      { id: "tree", name: "大树", nameEn: "Tree", x: 80, y: 40, radius: 15 }
    ],
    words: [
      { zh: "兔子", en: "Hare" },
      { zh: "乌龟", en: "Tortoise" }
    ],
    fableText: [
      "森林里要举行一场赛跑，骄傲的兔子和慢吞吞的乌龟站在了起跑线上。",
      "“砰！”的一声，兔子像离弦的箭一样飞奔出去，把乌龟远远地甩在后面。",
      "兔子跑了一半，回头一看，连乌龟的影子都没见到。它心想：“反正乌龟那么慢，我先在树下睡一觉再说吧！”于是，兔子呼呼大睡起来。",
      "可是，小乌龟虽然慢，但它一步一步，从来没有停下过脚步。它爬呀爬，终于越过了睡着的兔子，第一个到达了终点！",
      "等兔子醒来跑到终点时，小乌龟已经戴上了金牌。骄傲使人落后，坚持才能胜利！"
    ],
    parentGuide: "你看这幅图里，谁跑得快？谁跑得慢？但是最后谁赢了呢？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "兔子在半路上做什么了？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "乌龟明明爬得很慢，为什么它能赢呢？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果你是兔子，醒来之后发现乌龟赢了，你会说什么？", color: "#fa709a" }
    ],
    lifeConnection: "这就好像我们平时学骑自行车，一开始可能很慢很慢，但只要不放弃，最后一定能学会！",
    retellingPrompt: "你能不能假装自己是那只跑到终点的小乌龟，告诉我你赢了比赛开不开心？"
  },
  {
    id: "fable_crow_pitcher",
    type: "fable",
    title: "乌鸦喝水 / The Crow and the Pitcher",
    image: "/images/crow_and_pitcher.jpg",
    hotspots: [
      { id: "crow", name: "乌鸦", nameEn: "Crow", x: 45, y: 35, radius: 10 },
      { id: "pitcher", name: "水瓶", nameEn: "Pitcher", x: 55, y: 70, radius: 12 },
      { id: "pebble", name: "石子", nameEn: "Pebble", x: 35, y: 85, radius: 8 }
    ],
    words: [
      { zh: "乌鸦", en: "Crow" },
      { zh: "水瓶", en: "Pitcher" },
      { zh: "石子", en: "Pebble" }
    ],
    fableText: [
      "一只口渴的乌鸦到处找水喝。找呀找，它终于在一个院子里发现了一个装有水的玻璃瓶。",
      "可是，瓶子很高，里面的水却很少，乌鸦的嘴巴不够长，怎么也喝不到水。它急得团团转。",
      "忽然，它看到地上有许多小石子，它想出了一个好主意！",
      "乌鸦用嘴叼起小石子，一颗一颗地扔进瓶子里。随着石子越来越多，瓶子里的水也一点一点地升高了。",
      "最后，水升到了瓶口，聪明的乌鸦终于喝到了甘甜的水！"
    ],
    parentGuide: "乌鸦想喝水，但是水太低了喝不到，它想到了什么好办法？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "乌鸦往水瓶里丢了什么东西？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么往瓶子里丢石子，水就会升上来呢？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果旁边没有小石子，只有一根吸管，乌鸦能喝到水吗？", color: "#fa709a" }
    ],
    lifeConnection: "遇到困难的时候，我们要像乌鸦一样动动脑筋想办法。你上次遇到困难是怎么解决的？",
    retellingPrompt: "假装你是一只口渴的小乌鸦，你能一边做动作，一边给大家讲讲你是怎么喝到水的吗？"
  },
  {
    id: "fable_lion_mouse",
    type: "fable",
    title: "狮子和老鼠 / The Lion and the Mouse",
    image: "/images/lion_and_mouse.jpg",
    hotspots: [
      { id: "lion", name: "狮子", nameEn: "Lion", x: 45, y: 55, radius: 15 },
      { id: "mouse", name: "老鼠", nameEn: "Mouse", x: 60, y: 80, radius: 8 },
      { id: "net", name: "大网", nameEn: "Net", x: 20, y: 30, radius: 10 }
    ],
    words: [
      { zh: "狮子", en: "Lion" },
      { zh: "老鼠", en: "Mouse" },
      { zh: "网", en: "Net" }
    ],
    fableText: [
      "一天，森林之王大狮子正在树下睡觉，一只小老鼠不小心跑到了它的鼻子上。",
      "狮子醒了，一把抓住小老鼠，生气地说：‘我要把你吃掉！’小老鼠害怕地求饶：‘求求您放了我吧，总有一天我会报答您的！’狮子觉得很好笑：‘你这么小，怎么可能帮得到我？’但它还是放了小老鼠。",
      "几天后，狮子不小心掉进了猎人的陷阱，被一张大网紧紧地缠住了，怎么也挣脱不开。",
      "就在这时，小老鼠听到了狮子的吼声，急忙跑过来。它用尖尖的牙齿，把大网咬出了一个大洞！",
      "狮子终于得救了。它感激地对小老鼠说：‘原来，小小的朋友也能帮大忙呀！’"
    ],
    parentGuide: "大狮子那么厉害，小老鼠那么小，你觉得小老鼠能帮狮子什么忙呢？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "狮子一开始为什么想吃掉小老鼠？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "小老鼠是用什么把大网弄破的？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "狮子被救了以后，它和小老鼠会变成什么样？", color: "#fa709a" }
    ],
    lifeConnection: "这就告诉我们，不要看不起任何人，每个人都有自己的长处。你在幼儿园里有没有帮助过比你大的小朋友？",
    retellingPrompt: "你来当威风的大狮子，我来当小老鼠，我们演一下狮子被网住的那段好不好？"
  },
  {
    id: "fable_fox_grapes",
    type: "fable",
    title: "狐狸和葡萄 / The Fox and the Grapes",
    image: "/images/fox_and_grapes.jpg",
    hotspots: [
      { id: "fox", name: "狐狸", nameEn: "Fox", x: 50, y: 70, radius: 12 },
      { id: "grapes", name: "葡萄", nameEn: "Grapes", x: 65, y: 25, radius: 10 },
      { id: "vine", name: "藤蔓", nameEn: "Vine", x: 30, y: 20, radius: 10 }
    ],
    words: [
      { zh: "狐狸", en: "Fox" },
      { zh: "葡萄", en: "Grapes" },
      { zh: "跳", en: "Jump" }
    ],
    fableText: [
      "一个炎热的夏天，一只口渴的狐狸走进了一个葡萄园。",
      "它抬头一看，葡萄藤上挂着一串串紫红色的葡萄，看起来又大又甜，馋得狐狸直流口水。",
      "狐狸用力往上一跳，想摘一串葡萄，可是葡萄太高了，它没够着。",
      "它后退了几步，深吸一口气，再次使劲跳了起来！哎呀，还是差一点点。",
      "狐狸跳了又跳，累得气喘吁吁，却一颗葡萄也没摘到。最后，它只好一边走一边安慰自己说：‘哼，那些葡萄肯定是酸的，我才不稀罕吃呢！’"
    ],
    parentGuide: "你看这只狐狸，它想吃什么？它够得到吗？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "葡萄是什么颜色的？长在哪里？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "狐狸为什么说葡萄是酸的？葡萄真的是酸的吗？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果狐狸这时候遇到了一只长颈鹿，它会怎么做？", color: "#fa709a" }
    ],
    lifeConnection: "有时候我们自己做不到一件事情，就会找借口说那件事情不好。下次遇到困难，我们可以找人帮忙，不要像狐狸一样找借口哦。",
    retellingPrompt: "你能学狐狸跳起来抓葡萄的样子吗？跳不到的时候，狐狸说了什么？"
  },
  {
    id: "fable_boy_wolf",
    type: "fable",
    title: "狼来了 / The Boy Who Cried Wolf",
    image: "/images/boy_who_cried_wolf.jpg",
    hotspots: [
      { id: "boy", name: "男孩", nameEn: "Boy", x: 40, y: 50, radius: 12 },
      { id: "sheep", name: "绵羊", nameEn: "Sheep", x: 60, y: 65, radius: 10 },
      { id: "wolf_shadow", name: "狼的影子", nameEn: "Wolf Shadow", x: 80, y: 35, radius: 10 }
    ],
    words: [
      { zh: "男孩", en: "Boy" },
      { zh: "绵羊", en: "Sheep" },
      { zh: "狼", en: "Wolf" }
    ],
    fableText: [
      "从前，有个放羊的小男孩，他每天都在山上放羊，觉得很无聊。",
      "有一天，他为了好玩，突然对着山下的村子大喊：‘狼来了！狼来了！狼来吃羊啦！’",
      "村民们听到呼救，急忙拿着锄头和棍子跑上山来。可是山上根本没有狼，只有小男孩在哈哈大笑：‘我骗你们的！’",
      "过了几天，小男孩又故技重施，再次骗了村民。村民们生气极了。",
      "结果有一天，狼真的来了！狼张开大嘴扑向羊群。小男孩吓坏了，拼命地喊：‘狼来了！救命啊！’可是这一次，不管他怎么喊，再也没有人上山来救他了。"
    ],
    parentGuide: "小男孩觉得无聊的时候，做了什么不好的事情？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小男孩第一次喊狼来了的时候，村民们是怎么做的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "最后狼真的来了，为什么没有人来救他呢？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "经过这次教训，你觉得小男孩以后还会撒谎吗？", color: "#fa709a" }
    ],
    lifeConnection: "经常撒谎的孩子，即使最后说了真话，别人也不会相信了。所以我们要做一个诚实的好孩子。",
    retellingPrompt: "假装你是村长，当小男孩第二次骗人被揭穿时，你会怎么教育他？"
  },
  {
    id: "fable_ant_grasshopper",
    type: "fable",
    title: "蚂蚁和蝈蝈 / The Ant and the Grasshopper",
    image: "/images/ant_and_grasshopper.jpg",
    hotspots: [
      { id: "ant", name: "蚂蚁", nameEn: "Ant", x: 35, y: 75, radius: 10 },
      { id: "grasshopper", name: "蝈蝈", nameEn: "Grasshopper", x: 70, y: 55, radius: 12 },
      { id: "seed", name: "种子", nameEn: "Seed", x: 30, y: 65, radius: 8 }
    ],
    words: [
      { zh: "蚂蚁", en: "Ant" },
      { zh: "蝈蝈", en: "Grasshopper" },
      { zh: "种子", en: "Seed" }
    ],
    fableText: [
      "炎热的夏天，一只蝈蝈在树荫下乘凉，拉着小提琴，唱着歌，开心极了。",
      "这时，一只小蚂蚁背着一颗重重的种子，满头大汗地从它面前走过。蝈蝈嘲笑说：‘这么热的天，你为什么不歇会儿，和我一起唱歌呢？’",
      "蚂蚁摇摇头说：‘不行，我得为冬天准备粮食。如果你现在不准备，冬天会挨饿的。’蝈蝈根本不听，继续唱歌。",
      "转眼间，寒冷的冬天来了，大雪覆盖了地面。蝈蝈找不到任何吃的东西，冻得发抖，饿得头晕。",
      "它只好去敲蚂蚁的门。小蚂蚁打开门，屋子里暖烘烘的，还有满满的粮食。蚂蚁叹了口气，还是把蝈蝈请进了屋子。"
    ],
    parentGuide: "夏天的时候，蚂蚁在做什么？蝈蝈在做什么？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "蚂蚁为什么要在那么热的天气里搬粮食？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "冬天到了，蝈蝈为什么要去找蚂蚁？它心里在想什么？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "到了第二年的夏天，你觉得蝈蝈会怎么做？", color: "#fa709a" }
    ],
    lifeConnection: "就像我们平时要先写完作业再看动画片一样，如果只顾着玩不努力，最后是要吃苦头的哦。",
    retellingPrompt: "来，你演那只在夏天满头大汗搬东西的蚂蚁，告诉我你为什么这么辛苦？"
  },
  {
    id: "fable_pony_river",
    type: "fable",
    title: "小马过河 / The Little Pony Crossing the River",
    image: "/images/pony_crossing_river.jpg",
    hotspots: [
      { id: "pony", name: "小马", nameEn: "Pony", x: 30, y: 60, radius: 12 },
      { id: "squirrel", name: "松鼠", nameEn: "Squirrel", x: 75, y: 35, radius: 8 },
      { id: "ox", name: "老牛", nameEn: "Ox", x: 60, y: 75, radius: 15 }
    ],
    words: [
      { zh: "小马", en: "Pony" },
      { zh: "河水", en: "River" },
      { zh: "松鼠", en: "Squirrel" }
    ],
    fableText: [
      "小马长大了，妈妈让它把半口袋麦子驮到磨坊去。可是，去磨坊要过一条河，河水哗哗地流着，小马不知道水有多深，不敢过。",
      "小马看到河边有一头老牛，就问：‘牛伯伯，我能过河吗？’老牛说：‘水很浅，刚没过小腿，能过去。’",
      "小马听了正要过河，突然树上跳下一只小松鼠，大叫着：‘别过河，别过河！水深得很，昨天我的一个小伙伴都被淹死了！’",
      "小马一下子没主意了，只好跑回家问妈妈。妈妈说：‘孩子，光听别人说是不行的。老牛那么高大，当然觉得水浅；松鼠那么矮小，当然觉得水深。你得自己去试一试。’",
      "小马回到河边，小心翼翼地走到水里。原来，河水既不像老牛说的那么浅，也不像松鼠说的那么深。小马顺利地过了河！"
    ],
    parentGuide: "老牛说水浅，松鼠说水深，你觉得水到底是深还是浅呀？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小马要背着麦子去哪里？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么同样一条河，老牛觉得浅，松鼠觉得深呢？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "小马过了河之后，回来会怎么跟妈妈说？", color: "#fa709a" }
    ],
    lifeConnection: "遇到不知道该怎么办的事情，不能只听别人说，要自己勇敢地去试一试才知道结果！",
    retellingPrompt: "假装你是一只正在过河的小马，你能边走边说水深不深吗？"
  },
  {
    id: "fable_ugly_duckling",
    type: "fable",
    title: "丑小鸭 / The Ugly Duckling",
    image: "/images/ugly_duckling.jpg",
    hotspots: [
      { id: "duckling", name: "丑小鸭", nameEn: "Duckling", x: 40, y: 65, radius: 12 },
      { id: "swan", name: "天鹅", nameEn: "Swan", x: 75, y: 40, radius: 10 },
      { id: "pond", name: "池塘", nameEn: "Pond", x: 50, y: 80, radius: 15 }
    ],
    words: [
      { zh: "丑小鸭", en: "Duckling" },
      { zh: "天鹅", en: "Swan" },
      { zh: "池塘", en: "Pond" }
    ],
    fableText: [
      "鸭妈妈孵出了一群小鸭子，其中有一只灰乎乎的，长得特别丑，大家都叫他‘丑小鸭’。",
      "农场里的动物都不喜欢他，兄弟姐妹们也总是欺负他，小鸡啄他，连喂鸡的女孩也用脚踢他。",
      "丑小鸭非常伤心，只好偷偷地离开了家。冬天来了，天气非常冷，他在冰天雪地里差点被冻死。",
      "春天终于来了，丑小鸭在水里看到几只美丽的白天鹅，他害怕地低下头，却在水面的倒影里看到了一只雪白美丽的鸟！",
      "原来，他不是一只丑陋的小鸭子，而是一只高贵的白天鹅！他张开宽阔的翅膀，和同伴们一起飞向了蓝天。"
    ],
    parentGuide: "大家都不喜欢丑小鸭，他心里一定很难过。但是最后他变成了什么呀？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "丑小鸭离开家的时候，是什么季节？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "当丑小鸭在水里看到自己的倒影时，他为什么会觉得惊讶？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果当初那些嘲笑他的小动物现在看到他，会说些什么呢？", color: "#fa709a" }
    ],
    lifeConnection: "有的小朋友可能长得胖一点或者瘦一点，但每个孩子都有自己闪光的地方，我们不能嘲笑别人，要相信自己是最棒的！",
    retellingPrompt: "假装你是那只刚刚发现自己变成天鹅的丑小鸭，你现在的心情是怎么样的？"
  },
  {
    id: "fable_frog_in_well",
    type: "fable",
    title: "井底之蛙 / The Frog in the Well",
    image: "/images/frog_in_well.jpg",
    hotspots: [
      { id: "frog", name: "青蛙", nameEn: "Frog", x: 50, y: 80, radius: 10 },
      { id: "well", name: "水井", nameEn: "Well", x: 50, y: 50, radius: 25 },
      { id: "turtle", name: "海龟", nameEn: "Turtle", x: 50, y: 15, radius: 10 }
    ],
    words: [
      { zh: "青蛙", en: "Frog" },
      { zh: "水井", en: "Well" },
      { zh: "海龟", en: "Turtle" }
    ],
    fableText: [
      "一口废井里住着一只青蛙，它觉得自己在井里非常自由，一会儿在水里游，一会儿在泥里跳，觉得整个世界都在自己的掌控之中。",
      "有一天，一只来自东海的大海龟来到了井边。青蛙得意地对海龟说：‘你看我住的地方多宽敞，多舒服！你快下来看看吧！’",
      "海龟试着往下走，可是它的左脚还没进去，右脚就被井口卡住了。海龟后退了几步，对青蛙说：‘你见过大海吗？’",
      "青蛙摇摇头。海龟说：‘大海非常深，非常广阔，就算下几年的雨，水也不会变多；旱上几年，水也不会变少。那才是真正的好地方呢。’",
      "青蛙听了，惊讶得张大了嘴巴，觉得自己实在是太渺小了。"
    ],
    parentGuide: "小青蛙一直住在井里，它看到的天空有多大？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "是谁来到了井边，告诉青蛙关于大海的事情？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "青蛙为什么会觉得自己住的地方很大很舒服？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "听了海龟的话，你觉得青蛙接下来会做什么打算？", color: "#fa709a" }
    ],
    lifeConnection: "世界很大，我们要多去外面看看，多学习新知识，千万不要像井底的小青蛙一样哦。",
    retellingPrompt: "如果你是那只海龟，你会怎么跟小青蛙描述大海的样子？"
  },
  {
    id: "fable_farmer_and_snake",
    type: "fable",
    title: "农夫和蛇 / The Farmer and the Snake",
    image: "/images/farmer_and_snake.jpg",
    hotspots: [
      { id: "farmer", name: "农夫", nameEn: "Farmer", x: 50, y: 40, radius: 15 },
      { id: "snake", name: "蛇", nameEn: "Snake", x: 45, y: 60, radius: 10 },
      { id: "snow", name: "白雪", nameEn: "Snow", x: 80, y: 80, radius: 10 }
    ],
    words: [
      { zh: "农夫", en: "Farmer" },
      { zh: "蛇", en: "Snake" },
      { zh: "雪", en: "Snow" }
    ],
    fableText: [
      "一个寒冷的冬天，一位善良的农夫在路边看到了一条被冻僵的蛇。",
      "农夫看它可怜，觉得它快要冻死了，就把它捡起来，放在自己的怀里，想用自己的体温去温暖它。",
      "过了一会儿，蛇在农夫温暖的怀抱里渐渐苏醒了过来。",
      "可是，这只蛇的本性非常凶恶，它刚一醒来，不仅没有感谢农夫，反而狠狠地咬了农夫一口！",
      "农夫中了剧毒，在倒下之前，他叹息着说：‘我真是太糊涂了，竟然去同情这样一个邪恶的坏家伙，这是我罪有应得啊。’"
    ],
    parentGuide: "农夫做了什么好事？但是那条蛇是怎么回报他的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "农夫在哪里发现了这条蛇？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "蛇为什么要咬救它的农夫？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果你在路边遇到了一只有危险的野生动物，你会怎么做？", color: "#fa709a" }
    ],
    lifeConnection: "我们虽然要做善良的人，但是帮助别人之前，一定要分清楚好人和坏人，首先要保护好自己。",
    retellingPrompt: "如果你是农夫的朋友，你会怎么劝阻他去捡那条蛇？"
  },
  {
    id: "fable_fox_and_tiger",
    type: "fable",
    title: "狐假虎威 / The Fox and the Tiger",
    image: "/images/fox_and_tiger.jpg",
    hotspots: [
      { id: "fox", name: "狐狸", nameEn: "Fox", x: 30, y: 60, radius: 10 },
      { id: "tiger", name: "老虎", nameEn: "Tiger", x: 60, y: 55, radius: 15 },
      { id: "animals", name: "小动物", nameEn: "Animals", x: 80, y: 40, radius: 8 }
    ],
    words: [
      { zh: "狐狸", en: "Fox" },
      { zh: "老虎", en: "Tiger" },
      { zh: "害怕", en: "Scared" }
    ],
    fableText: [
      "一天，老虎在森林里抓住了一只狐狸，正准备把它吃掉。",
      "狐狸眼珠一转，大声对老虎说：‘你敢吃我？我可是老天爷派来的森林之王！你要是不信，就跟在我后面走一趟，看看小动物们怕不怕我！’",
      "老虎觉得很奇怪，半信半疑地答应了，跟在狐狸的后面走。",
      "森林里的兔子、小鹿、猴子看到他们走过来，吓得四处逃窜。",
      "老虎以为小动物们真的是害怕狐狸，吓得赶紧跑掉了。其实，小动物们害怕的根本不是狐狸，而是狐狸身后的老虎！"
    ],
    parentGuide: "老虎跟在狐狸后面走，森林里的小动物们都吓跑了，它们到底在怕谁？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "老虎一开始抓住了谁？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "狐狸为什么要让老虎跟在自己后面走？它聪明吗？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果老虎回头发现了真相，会发生什么事情？", color: "#fa709a" }
    ],
    lifeConnection: "生活中也有这样借着别人的厉害来吓唬人的事情，我们要学会动脑筋，不要被骗了哦。",
    retellingPrompt: "你能学狐狸那种非常神气的走路样子给大家看看吗？"
  },
  {
    id: "fable_pulling_seedlings",
    type: "fable",
    title: "拔苗助长 / Pulling Up Seedlings",
    image: "/images/pulling_seedlings.jpg",
    hotspots: [
      { id: "farmer", name: "农夫", nameEn: "Farmer", x: 50, y: 40, radius: 15 },
      { id: "seedlings", name: "禾苗", nameEn: "Seedlings", x: 50, y: 75, radius: 12 },
      { id: "sun", name: "太阳", nameEn: "Sun", x: 80, y: 20, radius: 10 }
    ],
    words: [
      { zh: "农夫", en: "Farmer" },
      { zh: "禾苗", en: "Seedlings" },
      { zh: "长高", en: "Grow Taller" }
    ],
    fableText: [
      "古时候有个农夫，他在田里种下了禾苗，每天都去看它们有没有长高。",
      "可是过了好几天，禾苗好像一点儿也没有长。农夫心里非常着急，心想：‘有什么办法能让它们长得快一点呢？’",
      "终于，他想到了一个“好”办法！他跑到田里，把每一棵禾苗都往上拔高了一截。他从早拔到晚，累得腰酸背痛，但心里却很高兴。",
      "回到家，他气喘吁吁地对儿子说：‘今天可把我累坏了，不过我帮禾苗长高了好多！’",
      "儿子听了觉得很奇怪，跑到田里一看，结果发现那些被拔高的禾苗，因为根离开了泥土，全都干枯死掉了！"
    ],
    parentGuide: "农夫想让禾苗快点长大，他用了什么办法？这个办法有用吗？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "农夫把禾苗往上拔了以后，禾苗怎么样了？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么禾苗被拔高之后反而死掉了呢？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果农夫第二年再种禾苗，他还会去拔吗？", color: "#fa709a" }
    ],
    lifeConnection: "就像小朋友长身体一样，要好好吃饭、睡觉，一点一滴地长大，不能着急，着急是没有用的。",
    retellingPrompt: "假装你是农夫的儿子，看到田里的禾苗都死了，你会怎么跟爸爸说？"
  },
  {
    id: "fable_emperors_clothes",
    type: "fable",
    title: "皇帝的新装 / The Emperor's New Clothes",
    image: "/images/emperors_clothes.jpg",
    hotspots: [
      { id: "emperor", name: "皇帝", nameEn: "Emperor", x: 50, y: 50, radius: 20 },
      { id: "boy", name: "小男孩", nameEn: "Boy", x: 80, y: 70, radius: 10 },
      { id: "crowd", name: "人群", nameEn: "Crowd", x: 20, y: 60, radius: 15 }
    ],
    words: [
      { zh: "皇帝", en: "Emperor" },
      { zh: "新衣服", en: "New Clothes" },
      { zh: "笑", en: "Laugh" }
    ],
    fableText: [
      "从前有个皇帝，他非常喜欢穿新衣服。有两个骗子跑来告诉他：‘我们能织出世界上最美的衣服，但愚蠢的人是看不见它的。’",
      "皇帝听了非常高兴，给了骗子很多金银财宝。几天后，骗子假装捧着做好的衣服给皇帝穿上。其实，他们手里什么都没有！",
      "皇帝什么也没看见，但他怕别人说他愚蠢，就假装夸奖衣服很漂亮。大臣们也都不敢说真话，纷纷夸赞新衣服。",
      "于是，皇帝穿着这套‘看不见的新衣服’，光着身子去大街上游行。老百姓们也都不敢说实话，假装欢呼。",
      "突然，一个小男孩指着皇帝大声笑了起来：‘可是，他明明什么也没穿呀！’大家听了，终于忍不住都笑了起来。"
    ],
    parentGuide: "皇帝明明光着身子，为什么大家一开始都不敢说真话呢？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "骗子说他们的衣服有什么神奇的地方？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "大臣们什么也没看到，为什么还要夸奖衣服漂亮？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "听到小男孩的话之后，皇帝心里会怎么想？", color: "#fa709a" }
    ],
    lifeConnection: "做人要诚实，不要为了面子去说假话，勇敢地说出真相才是最棒的！就像那个小男孩一样。",
    retellingPrompt: "假装你是那个勇敢的小男孩，你会怎么指着皇帝告诉大家真相？"
  },
  {
    id: "fable_blind_men_elephant",
    type: "fable",
    title: "盲人摸象 / The Blind Men and the Elephant",
    image: "/images/blind_men_elephant.jpg",
    hotspots: [
      { id: "elephant", name: "大象", nameEn: "Elephant", x: 50, y: 50, radius: 25 },
      { id: "trunk", name: "象鼻子", nameEn: "Trunk", x: 20, y: 60, radius: 10 },
      { id: "leg", name: "象腿", nameEn: "Leg", x: 45, y: 80, radius: 10 }
    ],
    words: [
      { zh: "大象", en: "Elephant" },
      { zh: "盲人", en: "Blind Man" },
      { zh: "摸", en: "Touch" }
    ],
    fableText: [
      "古时候有几个盲人，他们从来没有见过大象，很想知道大象长什么样。于是，他们一起去摸一头大象。",
      "第一个人摸到了大象的牙齿，说：‘大象就像一根大萝卜！’第二个人摸到了大象的耳朵，说：‘不对，大象像一把大扇子！’",
      "第三个人摸到了大象的腿，大声说：‘你们都错了，大象明明像一根大柱子！’",
      "第四个人摸到了大象的背，说：‘大象像一堵墙！’最后一个人摸到了大象的尾巴，笑着说：‘大象其实像一根绳子！’",
      "他们每个人都觉得自己是对的，争吵不休。其实，他们每个人都只摸到了大象的一部分，没有了解大象的全部。"
    ],
    parentGuide: "他们为什么会觉得大象长得不一样呢？他们摸到了哪里？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "摸到大象腿的人说大象像什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么每个人说出的大象形状都不一样？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果要让他们知道大象真正的样子，应该怎么办？", color: "#fa709a" }
    ],
    lifeConnection: "看问题不能只看一部分，要全面地了解事物，不然就会闹笑话的。",
    retellingPrompt: "假装你是其中一个盲人，你摸到了大象的哪里，觉得它像什么？"
  },
  {
    id: "fable_making_up_number",
    type: "fable",
    title: "滥竽充数 / Making up the Number",
    image: "/images/making_up_number.jpg",
    hotspots: [
      { id: "musician", name: "乐师", nameEn: "Musician", x: 50, y: 50, radius: 15 },
      { id: "flute", name: "竽 (乐器)", nameEn: "Flute", x: 45, y: 55, radius: 8 },
      { id: "orchestra", name: "乐队", nameEn: "Orchestra", x: 80, y: 40, radius: 15 }
    ],
    words: [
      { zh: "乐器", en: "Instrument" },
      { zh: "吹", en: "Blow" },
      { zh: "假装", en: "Pretend" }
    ],
    fableText: [
      "古时候有个国王非常喜欢听大家一起吹竽（一种乐器）。他有一个三百人的大乐队。",
      "有个叫南郭先生的人，根本不会吹竽。但他听说在乐队里能得到很多奖赏，就混了进去。",
      "每次演奏的时候，南郭先生就坐在队伍里，鼓着腮帮子，捂着竽眼儿，装出非常投入的样子。其实，他一点声音也没吹出来！",
      "就这样，他混了好几年，拿到了很多奖赏。后来，老国王去世了，新国王继位。",
      "新国王不喜欢大家一起吹，他要求乐师们一个一个地单独吹给他听。南郭先生一听，吓得连夜逃跑了！"
    ],
    parentGuide: "南郭先生不会吹乐器，他刚开始是怎么拿到奖赏的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "新国王想怎么听乐师们演奏？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "南郭先生为什么要逃跑？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果南郭先生没有逃跑，轮到他演奏的时候会发生什么？", color: "#fa709a" }
    ],
    lifeConnection: "我们要有真正的本领，不能靠骗人混日子，总有一天会被发现的。",
    retellingPrompt: "你能表演一下南郭先生是怎么假装用力吹乐器的吗？"
  },
  {
    id: "fable_marking_boat",
    type: "fable",
    title: "刻舟求剑 / Marking the Boat to Find the Sword",
    image: "/images/marking_boat.jpg",
    hotspots: [
      { id: "man", name: "男人", nameEn: "Man", x: 50, y: 40, radius: 15 },
      { id: "boat", name: "小船", nameEn: "Boat", x: 50, y: 70, radius: 20 },
      { id: "water", name: "河水", nameEn: "Water", x: 80, y: 80, radius: 15 }
    ],
    words: [
      { zh: "小船", en: "Boat" },
      { zh: "剑", en: "Sword" },
      { zh: "河水", en: "Water" }
    ],
    fableText: [
      "古时候有个人坐船过河。船开到河中央时，他一不小心，身上的宝剑掉进了河里！",
      "周围的人都替他着急，但他却一点也不慌张，不紧不慢地从口袋里拿出一把小刀。",
      "他在船舷上掉剑的地方刻了一个深深的记号，得意地说：‘我的剑是从这个地方掉下去的，我已经做好记号了！’",
      "船继续往前开，过了很久才靠岸。那个人顺着船舷上的记号，跳进水里去捞他的宝剑。",
      "他在水里摸了半天，什么也没摸到。他非常纳闷：‘明明就是从这个记号处掉下去的，怎么会找不到呢？’"
    ],
    parentGuide: "他的剑掉进水里了，他在哪里做了记号？这样做有用吗？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "那个人是在什么时候去捞剑的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "他为什么顺着记号找不到自己的剑？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果他想找回自己的剑，当时应该怎么做？", color: "#fa709a" }
    ],
    lifeConnection: "世界是一直在变化的，我们思考问题不能死脑筋，要学会根据变化来想办法。",
    retellingPrompt: "假装你是船上的乘客，你会怎么提醒那个刻记号的人？"
  },
  {
    id: "fable_waiting_for_hare",
    type: "fable",
    title: "守株待兔 / Waiting for a Hare by the Tree",
    image: "/images/waiting_for_hare.jpg",
    hotspots: [
      { id: "farmer", name: "农夫", nameEn: "Farmer", x: 40, y: 60, radius: 15 },
      { id: "tree", name: "大树", nameEn: "Tree", x: 70, y: 40, radius: 20 },
      { id: "tools", name: "农具", nameEn: "Tools", x: 20, y: 80, radius: 10 }
    ],
    words: [
      { zh: "农夫", en: "Farmer" },
      { zh: "大树", en: "Tree" },
      { zh: "等", en: "Wait" }
    ],
    fableText: [
      "古时候有个农夫，他每天都在田里辛勤地干活。有一天，一只兔子突然从草丛里窜出来。",
      "兔子跑得太快了，一头撞在了田边的一个大树桩上，扭断了脖子，死掉了。",
      "农夫高兴极了，没有花一点力气就捡到了一只又肥又大的兔子，美美地吃了一顿。",
      "从那以后，农夫心想：‘既然不用干活就能捡到兔子，我还种地干什么呢？’",
      "于是，他每天什么活都不干，只是守在大树桩旁边，等着下一只兔子撞过来。可是，再也没有兔子撞在树桩上了，而他的田地也因为荒芜长满了杂草。"
    ],
    parentGuide: "农夫为什么不干活了？他一直在等什么？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "第一只兔子是怎么死掉的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么后来再也没有兔子撞到树桩上了？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果农夫一直这样等下去，冬天到了他会怎么样？", color: "#fa709a" }
    ],
    lifeConnection: "成功是需要靠自己努力劳动的，不能总是想着不劳而获，靠运气的事情是不会天天发生的！",
    retellingPrompt: "你能表演一下农夫坐在树边等兔子时，无聊又期待的表情吗？"
  },
  {
    id: "fable_fox_and_crow",
    type: "fable",
    title: "狐狸和乌鸦 / The Fox and the Crow",
    image: "/images/fox_and_crow.png",
    hotspots: [
      { id: "fox", name: "狐狸", nameEn: "Fox", x: 30, y: 80, radius: 15 },
      { id: "crow", name: "乌鸦", nameEn: "Crow", x: 60, y: 30, radius: 15 },
      { id: "cheese", name: "奶酪", nameEn: "Cheese", x: 60, y: 35, radius: 10 }
    ],
    words: [
      { zh: "狐狸", en: "Fox" },
      { zh: "乌鸦", en: "Crow" },
      { zh: "肉", en: "Meat/Cheese" }
    ],
    fableText: [
      "有一天，乌鸦得到了一块美味的肉，她高兴地停在树枝上准备享用。",
      "一只饥饿的狐狸路过，看到了乌鸦嘴里的肉，口水直流。",
      "狐狸眼珠一转，对乌鸦说：‘亲爱的乌鸦，你的羽毛多漂亮啊！我想你的嗓音一定也像百灵鸟一样动听，你能给我唱首歌吗？’",
      "乌鸦听了狐狸的赞美，心里得意极了，她张开嘴巴，想要大声歌唱。",
      "可是，她刚一张嘴，嘴里的肉就掉了下来。狐狸马上叼起肉，头也不回地跑掉了。"
    ],
    parentGuide: "乌鸦为什么会张开嘴巴？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "狐狸看到了什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "狐狸真的是想听乌鸦唱歌吗？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "乌鸦发现肉被骗走后，心里会怎么想？", color: "#fa709a" }
    ],
    lifeConnection: "不要被好听的谎话骗了，别人夸你的时候，一定要保持清醒的头脑哦！",
    retellingPrompt: "你能学一学狐狸骗人时那狡猾的表情吗？"
  },
  {
    id: "fable_wolf_and_lamb",
    type: "fable",
    title: "狼和小羊 / The Wolf and the Lamb",
    image: "/images/wolf_and_lamb.png",
    hotspots: [
      { id: "wolf", name: "狼", nameEn: "Wolf", x: 30, y: 50, radius: 20 },
      { id: "lamb", name: "小羊", nameEn: "Lamb", x: 70, y: 60, radius: 15 },
      { id: "stream", name: "小溪", nameEn: "Stream", x: 50, y: 70, radius: 15 }
    ],
    words: [
      { zh: "狼", en: "Wolf" },
      { zh: "小羊", en: "Lamb" },
      { zh: "水", en: "Water" }
    ],
    fableText: [
      "一只小羊在小溪边喝水。一只凶恶的狼走过来，想要吃掉小羊，但又想找个借口。",
      "狼故意找茬说：‘你为什么把我要喝的水弄脏了？’",
      "小羊委屈地回答：‘狼先生，你在上游，我在下游，我怎么会弄脏你的水呢？’",
      "狼气急败坏地说：‘就算水没弄脏，那你去年为什么要偷偷骂我？’",
      "小羊害怕地说：‘可是，我去年还没有出生呢！’狼不再讲理，大吼一声，直接扑向了小羊。"
    ],
    parentGuide: "狼为什么要找各种借口？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "狼先是用什么借口责怪小羊的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么狼的借口都不成立？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果你是小羊，你会怎么逃跑？", color: "#fa709a" }
    ],
    lifeConnection: "对于那些故意找茬的坏人，跟他们讲道理是没有用的，要想办法保护自己！",
    retellingPrompt: "你能分别模仿一下大灰狼凶狠的声音和小羊害怕的声音吗？"
  },
  {
    id: "fable_monkeys_fishing_moon",
    type: "fable",
    title: "猴子捞月 / Monkeys Fishing for the Moon",
    image: "/images/monkeys_fishing_moon.png",
    hotspots: [
      { id: "monkey", name: "猴子", nameEn: "Monkey", x: 50, y: 40, radius: 20 },
      { id: "moon_water", name: "水中的月亮", nameEn: "Moon in Water", x: 50, y: 80, radius: 15 },
      { id: "tree", name: "大树", nameEn: "Tree", x: 20, y: 30, radius: 20 }
    ],
    words: [
      { zh: "猴子", en: "Monkey" },
      { zh: "月亮", en: "Moon" },
      { zh: "水", en: "Water" }
    ],
    fableText: [
      "一天晚上，一群猴子在树上玩耍。突然，一只小猴子指着井里大喊：‘不好了，月亮掉进井里啦！’",
      "老猴子一看，水里真的有一个圆圆的月亮，赶紧招呼大家：‘快，我们赶紧把月亮捞上来！’",
      "于是，猴子们一只抓着一只的尾巴，从树上倒挂下来，一直伸到水面上。",
      "最下面的猴子伸出手去捞月亮，可是手一碰到水面，月亮就碎了。等水面平静下来，月亮又出现了。",
      "猴子们捞了半天也没捞着。这时，老猴子抬头一看，拍着大腿说：‘哎呀，月亮好好的挂在天上呢，水里的只是倒影啊！’"
    ],
    parentGuide: "猴子们最后捞到月亮了吗？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小猴子在井里看到了什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么猴子一碰水，月亮就碎了？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "猴子们知道真相后会是什么表情？", color: "#fa709a" }
    ],
    lifeConnection: "遇到事情要先动脑筋想一想，看清楚是不是真的，不能盲目跟着别人做哦！",
    retellingPrompt: "你能表演一下猴子们是怎么一只抓着一只挂在树上的吗？"
  },
  {
    id: "fable_weighing_elephant",
    type: "fable",
    title: "曹冲称象 / Cao Chong Weighing the Elephant",
    image: "/images/weighing_elephant.png",
    hotspots: [
      { id: "caochong", name: "曹冲", nameEn: "Cao Chong", x: 30, y: 50, radius: 15 },
      { id: "elephant", name: "大象", nameEn: "Elephant", x: 60, y: 45, radius: 25 },
      { id: "boat", name: "船", nameEn: "Boat", x: 50, y: 70, radius: 20 }
    ],
    words: [
      { zh: "大象", en: "Elephant" },
      { zh: "船", en: "Boat" },
      { zh: "石头", en: "Stone" }
    ],
    fableText: [
      "古时候，有人送给曹操一头大象。曹操想知道这头大象有多重，可是却没有那么大的秤。",
      "大臣们想了很多办法，有的说砍一棵大树做秤，有的说把大象宰了切成块称，大家议论纷纷。",
      "这时候，曹操七岁的儿子曹冲站了出来说：‘我有办法！把大象赶到船上，看船沉下多少，在船舷上做个记号。’",
      "‘然后把大象牵上岸，往船里装石头，等船下沉到刚才的记号那里，再把石头的重量加起来，不就知道大象的重量了吗？’",
      "曹操听了非常高兴，大家照着曹冲的办法，果然称出了大象的重量。"
    ],
    parentGuide: "曹冲是怎么想到这个好办法的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "大人想出了哪些称大象的办法？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么石头的重量加起来就是大象的重量？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果你在现场，你还能想出别的好办法吗？", color: "#fa709a" }
    ],
    lifeConnection: "遇到难题不要慌，多动脑筋换个角度思考，很多问题就能迎刃而解！",
    retellingPrompt: "假装你是小曹冲，自豪地给大人们讲讲你的好办法吧！"
  },
  {
    id: "fable_smashing_vat",
    type: "fable",
    title: "司马光砸缸 / Sima Guang Smashing the Vat",
    image: "/images/smashing_vat.png",
    hotspots: [
      { id: "simaguang", name: "司马光", nameEn: "Sima Guang", x: 30, y: 60, radius: 15 },
      { id: "vat", name: "水缸", nameEn: "Water Vat", x: 60, y: 55, radius: 20 },
      { id: "child", name: "小孩", nameEn: "Child", x: 65, y: 65, radius: 10 }
    ],
    words: [
      { zh: "石头", en: "Stone" },
      { zh: "水缸", en: "Vat" },
      { zh: "救人", en: "Save" }
    ],
    fableText: [
      "司马光小时候，常常和小朋友们在院子里玩耍。院子里有一口大水缸，里面装满了水。",
      "有个小朋友调皮，爬到了缸沿上，结果一不小心扑通一声掉进了水缸里。",
      "水缸又高又大，别的小朋友都吓坏了，有的哭，有的跑去喊大人。",
      "司马光却没有慌。他冷静地四处看了一下，搬起地上的一块大石头，使劲向水缸砸去。",
      "哐当一声，水缸被砸破了一个大洞，水哗啦啦地流了出来，掉进缸里的小朋友得救了！"
    ],
    parentGuide: "别的小朋友遇到危险时是怎么做的？司马光是怎么做的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "那个小朋友是怎么掉进水缸里的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "司马光为什么要砸水缸而不是伸手去拉那个小朋友？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "大人赶来后会对司马光说什么？", color: "#fa709a" }
    ],
    lifeConnection: "遇到突发事件和危险的时候，不要害怕和慌张，要像司马光一样冷静勇敢地想办法！",
    retellingPrompt: "你能表演一下司马光举起大石头砸缸的勇敢动作吗？"
  },
  {
    id: "fable_drawing_legs_snake",
    type: "fable",
    title: "画蛇添足 / Drawing Legs on a Snake",
    image: "/images/drawing_legs_snake.png",
    hotspots: [
      { id: "painter", name: "画画的人", nameEn: "Painter", x: 40, y: 50, radius: 20 },
      { id: "snake", name: "蛇", nameEn: "Snake", x: 60, y: 70, radius: 15 },
      { id: "brush", name: "毛笔", nameEn: "Brush", x: 50, y: 60, radius: 10 }
    ],
    words: [
      { zh: "画画", en: "Draw" },
      { zh: "蛇", en: "Snake" },
      { zh: "脚", en: "Legs" }
    ],
    fableText: [
      "古时候有几个人得到了一壶好酒，但是酒不够大家分。于是他们决定：每个人在地上画一条蛇，谁先画完，酒就给谁喝。",
      "有个人画得特别快，一眨眼就画好了一条蛇。他端起酒壶准备喝酒。",
      "但是他看了看别人，发现大家都没画完。他得意洋洋地想：‘我还有时间，不如给我的蛇添上几只脚吧！’",
      "于是他拿起笔，开始给蛇画脚。就在这个时候，另一个人也画完了蛇，一把抢过酒壶说：‘蛇本来就没有脚，你画的根本不是蛇！’",
      "说完，那个人把酒喝光了，而那个给蛇画脚的人只能在一旁干瞪眼。"
    ],
    parentGuide: "画画最快的那个人最后喝到酒了吗？为什么？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "他们是怎么决定谁喝酒的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么给蛇画脚反而输了比赛？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果他画完蛇直接喝酒，会怎么样？", color: "#fa709a" }
    ],
    lifeConnection: "做事情完成了就好，不要自作聪明去增加不必要的东西，有时候反而会弄巧成拙！",
    retellingPrompt: "如果你是那个被抢走酒壶的人，你现在心情怎么样？"
  },
  {
    id: "fable_stealing_bell",
    type: "fable",
    title: "掩耳盗铃 / Plugging Ears to Steal a Bell",
    image: "/images/stealing_bell.png",
    hotspots: [
      { id: "thief", name: "小偷", nameEn: "Thief", x: 40, y: 50, radius: 20 },
      { id: "bell", name: "铃铛", nameEn: "Bell", x: 60, y: 40, radius: 15 },
      { id: "ears", name: "耳朵", nameEn: "Ears", x: 35, y: 45, radius: 10 }
    ],
    words: [
      { zh: "铃铛", en: "Bell" },
      { zh: "耳朵", en: "Ears" },
      { zh: "捂住", en: "Cover" }
    ],
    fableText: [
      "从前有个小偷，他看到一户人家门前挂着一口精美的大钟，就想把它偷走。",
      "可是钟太重了，他打算用锤子把钟砸碎再搬走。但是锤子一敲，钟就发出了巨大的响声。",
      "小偷吓了一跳，心想：‘这么大的声音，肯定会被别人听见的，这可怎么办？’",
      "他灵机一动：‘对了！如果我捂住自己的耳朵，不就听不见了吗？这样别人肯定也听不见了！’",
      "于是他紧紧捂住自己的耳朵，继续用力砸钟。结果，钟声把全村的人都引来了，把他抓了个正着。"
    ],
    parentGuide: "小偷为什么要把自己的耳朵捂起来？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小偷想偷什么东西？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "小偷捂住自己的耳朵，别人真的听不见了吗？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "村里人看到小偷捂着耳朵砸钟，会觉得他怎么样？", color: "#fa709a" }
    ],
    lifeConnection: "做错事想掩饰是没用的，欺骗自己并不能改变事实，只能骗自己，骗不了别人！",
    retellingPrompt: "你能表演一下小偷捂着耳朵砸铃铛的滑稽动作吗？"
  },
  {
    id: "fable_mending_fold",
    type: "fable",
    title: "亡羊补牢 / Mending the Fold",
    image: "/images/mending_fold.png",
    hotspots: [
      { id: "farmer", name: "农夫", nameEn: "Farmer", x: 40, y: 50, radius: 20 },
      { id: "sheep", name: "羊", nameEn: "Sheep", x: 70, y: 60, radius: 15 },
      { id: "fence", name: "羊圈围栏", nameEn: "Fence", x: 50, y: 45, radius: 20 }
    ],
    words: [
      { zh: "羊", en: "Sheep" },
      { zh: "狼", en: "Wolf" },
      { zh: "修补", en: "Mend" }
    ],
    fableText: [
      "有个牧羊人养了一群羊。有一天早上，他发现羊圈破了一个洞，少了一只羊，原来是夜里被狼叼走了。",
      "邻居劝他说：‘赶快把羊圈修好吧，把那个洞堵上。’",
      "牧羊人却不在乎地说：‘反正羊已经丢了，修羊圈还有什么用呢？’于是他没有听邻居的劝告。",
      "第二天早上，他去放羊，发现又少了一只羊！原来狼又顺着那个破洞钻进来把羊叼走了。",
      "这下牧羊人后悔极了，他马上拿起工具，把羊圈修得结结实实的。从此以后，他的羊再也没有丢过。"
    ],
    parentGuide: "牧羊人第一天为什么不修羊圈？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "牧羊人的羊为什么会丢失？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "如果他第二天还不修羊圈，会发生什么事情？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "狼第三天晚上再来的时候会怎么样？", color: "#fa709a" }
    ],
    lifeConnection: "做错事情或者出了问题不要紧，只要及时发现并改正，就能避免更大的损失！",
    retellingPrompt: "你能表演一下牧羊人第二天发现又丢了一只羊时后悔的表情吗？"
  },
  {
    id: "fable_proud_peacock",
    type: "fable",
    title: "骄傲的孔雀 / The Proud Peacock",
    image: "/images/proud_peacock.png",
    hotspots: [
      { id: "peacock", name: "孔雀", nameEn: "Peacock", x: 50, y: 50, radius: 25 },
      { id: "feathers", name: "尾羽", nameEn: "Feathers", x: 50, y: 30, radius: 20 },
      { id: "birds", name: "小鸟", nameEn: "Birds", x: 20, y: 70, radius: 15 }
    ],
    words: [
      { zh: "孔雀", en: "Peacock" },
      { zh: "羽毛", en: "Feathers" },
      { zh: "骄傲", en: "Proud" }
    ],
    fableText: [
      "森林里有一只孔雀，她有长长的美丽的尾羽，走起路来总是高高地昂着头，非常骄傲。",
      "每当她展开绚丽的尾巴，其他的小鸟都会惊叹地说：‘哇，太美了！’这让孔雀更加目中无人了。",
      "有一天，一只仙鹤落在湖边。孔雀走过去嘲笑仙鹤：‘看看你那灰白色的羽毛，多难看啊，看看我多美！’",
      "仙鹤平静地说：‘你的羽毛确实很漂亮，可是它太笨重了。’",
      "仙鹤说完，展开双翅，轻盈地飞上了高高的蓝天。而孔雀只能站在地上，看着仙鹤在云端飞翔，再也骄傲不起来了。"
    ],
    parentGuide: "孔雀有什么值得骄傲的地方？仙鹤有什么本领？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "孔雀是怎么嘲笑仙鹤的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么孔雀最后再也骄傲不起来了？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "从那以后，孔雀对待其他小鸟的态度会有变化吗？", color: "#fa709a" }
    ],
    lifeConnection: "每个人都有自己的长处和短处，不要总是拿自己的长处去嘲笑别人的短处，要学会谦虚。",
    retellingPrompt: "假装你是一只骄傲的孔雀，给大家展示一下你走路的样子吧！"
  },
  {
    id: "fable_golden_goose",
    type: "fable",
    title: "生金蛋的鹅 / The Goose That Laid the Golden Eggs",
    image: "/images/golden_goose.png",
    hotspots: [
      { id: "farmer", name: "农夫", nameEn: "Farmer", x: 30, y: 50, radius: 20 },
      { id: "goose", name: "鹅", nameEn: "Goose", x: 60, y: 60, radius: 15 },
      { id: "golden_egg", name: "金蛋", nameEn: "Golden Egg", x: 45, y: 65, radius: 10 }
    ],
    words: [
      { zh: "鹅", en: "Goose" },
      { zh: "金子", en: "Gold" },
      { zh: "贪心", en: "Greedy" }
    ],
    fableText: [
      "从前，有一对贫穷的农夫夫妇，他们养了一只神奇的鹅。这只鹅每天都会生下一只闪闪发光的金蛋！",
      "靠着每天卖掉一只金蛋，农夫夫妇很快就变得非常富有，买了新房子和很多好吃的。",
      "可是，农夫越来越贪心。他心想：‘这只鹅每天只生一只金蛋，太慢了！它的肚子里肯定装满了一大块金子。’",
      "为了把肚子里的金子一次性全都拿出来，农夫残忍地把这只神奇的鹅杀掉了。",
      "当他剖开鹅的肚子时，却发现里面和普通的鹅一模一样，根本没有金块。就这样，他们再也得不到金蛋了。"
    ],
    parentGuide: "农夫为什么要杀掉那只鹅？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "这只神奇的鹅每天会生出什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "鹅的肚子里为什么没有装满金块？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "失去鹅之后，农夫一家的生活会变成什么样？", color: "#fa709a" }
    ],
    lifeConnection: "做人不能太贪心，如果为了眼前的一点小利益而毁掉长远的好处，最后只会一无所有。",
    retellingPrompt: "如果你是农夫的朋友，你会怎么劝告他不要杀这只鹅？"
  },
  {
    id: "fable_spear_and_shield",
    type: "fable",
    title: "自相矛盾 / The Spear and the Shield",
    image: "/images/spear_and_shield.png",
    hotspots: [
      { id: "merchant", name: "商人", nameEn: "Merchant", x: 40, y: 50, radius: 20 },
      { id: "spear", name: "长矛", nameEn: "Spear", x: 30, y: 40, radius: 15 },
      { id: "shield", name: "盾牌", nameEn: "Shield", x: 60, y: 50, radius: 15 }
    ],
    words: [
      { zh: "商人", en: "Merchant" },
      { zh: "矛", en: "Spear" },
      { zh: "盾", en: "Shield" }
    ],
    fableText: [
      "古时候有个楚国人，他在集市上卖长矛和盾牌。",
      "他先举起自己的盾牌，大声夸口说：‘我的盾牌非常坚固，无论什么尖锐的东西都刺不穿它！’",
      "过了一会儿，他又举起自己的长矛，大声叫卖：‘我的长矛非常锋利，无论什么坚固的东西，它都能刺穿！’",
      "旁边看热闹的人听了，笑着问他：‘如果用你的长矛，去刺你的盾牌，结果会怎么样呢？’",
      "那个卖兵器的人听了，张口结舌，半天说不出一句话来。"
    ],
    parentGuide: "大家为什么会笑话这个卖兵器的人？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "商人是怎么夸赞自己的长矛和盾牌的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么他无法回答路人的问题？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "你觉得他的长矛能不能刺穿他的盾牌？", color: "#fa709a" }
    ],
    lifeConnection: "我们说话做事要前后一致，不能互相冲突，不然就会像这个商人一样闹笑话！",
    retellingPrompt: "你能学着商人的语气，夸张地叫卖一下长矛和盾牌吗？"
  },
  {
    id: "fable_buying_shoes",
    type: "fable",
    title: "郑人买履 / A Man from Zheng Buying Shoes",
    image: "/images/buying_shoes.png",
    hotspots: [
      { id: "man", name: "郑人", nameEn: "Man", x: 30, y: 50, radius: 20 },
      { id: "shoes", name: "鞋子", nameEn: "Shoes", x: 60, y: 60, radius: 15 },
      { id: "string", name: "尺码绳", nameEn: "Measuring String", x: 45, y: 55, radius: 10 }
    ],
    words: [
      { zh: "买鞋", en: "Buy Shoes" },
      { zh: "尺子", en: "Measure" },
      { zh: "脚", en: "Foot" }
    ],
    fableText: [
      "古时候，郑国有一个人想去集市上买一双新鞋。",
      "他在家里先量好了自己脚的尺寸，并把尺码记在了一根绳子上。可是出门的时候，他走得太急，把绳子忘在家里了。",
      "到了集市的鞋店，他挑中了一双鞋，正准备试穿，突然说：‘哎呀，我忘了带量好的尺码了！’说完转身就往家里跑。",
      "等他拿了绳子满头大汗地跑回集市时，鞋店已经关门了。他一双鞋也没买成。",
      "有人问他：‘你为什么不直接用自己的脚去试穿鞋子呢？’他认真地回答：‘我只相信尺码，不相信自己的脚！’"
    ],
    parentGuide: "郑国人买到鞋子了吗？为什么没买到？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "郑国人回家拿什么东西去了？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么大家觉得他很可笑？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果他相信自己的脚，那天他能买到鞋吗？", color: "#fa709a" }
    ],
    lifeConnection: "规矩和工具是死的，人是活的，遇到问题要知道变通，不能死脑筋哦！",
    retellingPrompt: "假装你是那个郑国人，你会怎么回答别人的疑问？"
  },
  {
    id: "fable_bow_and_snake",
    type: "fable",
    title: "杯弓蛇影 / Mistaking a Bow for a Snake",
    image: "/images/bow_and_snake.png",
    hotspots: [
      { id: "man", name: "男人", nameEn: "Man", x: 40, y: 50, radius: 20 },
      { id: "cup", name: "酒杯", nameEn: "Cup", x: 50, y: 60, radius: 15 },
      { id: "bow", name: "弓", nameEn: "Bow", x: 70, y: 30, radius: 15 }
    ],
    words: [
      { zh: "弓", en: "Bow" },
      { zh: "蛇", en: "Snake" },
      { zh: "酒杯", en: "Cup" }
    ],
    fableText: [
      "古时候有个叫乐广的人，请朋友到家里喝酒。朋友端起酒杯，突然发现杯子里有一条小蛇在游动。",
      "朋友心里很害怕，但又不好意思说，只好硬着头皮把酒喝了下去。回家后，他就因为害怕生了一场大病。",
      "乐广去看望他，问他为什么生病。朋友说：‘那天在你家喝酒，杯子里有一条小蛇，我喝下去以后觉得肚子里很不舒服。’",
      "乐广觉得很奇怪，回家后坐在朋友坐过的地方一看，原来墙上挂着一把弓，弓的影子正好落在酒杯里，看起来就像一条游动的蛇。",
      "乐广马上把这件事告诉了朋友，朋友恍然大悟，病立刻就好了。"
    ],
    parentGuide: "酒杯里真的有蛇吗？那是什么？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "朋友为什么会生病？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "知道真相后，朋友的病为什么立刻就好了？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果乐广没有去调查真相，朋友会一直生病吗？", color: "#fa709a" }
    ],
    lifeConnection: "有时候我们害怕的东西，其实并不存在，只要弄清楚事实真相，就不会感到害怕了！",
    retellingPrompt: "你能表演一下朋友发现酒杯里有蛇时，那种害怕又不敢说的表情吗？"
  },
  {
    id: "fable_grinding_needle",
    type: "fable",
    title: "铁杵磨成针 / Grinding an Iron Pestle into a Needle",
    image: "/images/grinding_needle.png",
    hotspots: [
      { id: "grandma", name: "老奶奶", nameEn: "Grandma", x: 40, y: 50, radius: 20 },
      { id: "boy", name: "小男孩", nameEn: "Boy", x: 70, y: 50, radius: 15 },
      { id: "iron", name: "铁杵", nameEn: "Iron Pestle", x: 50, y: 60, radius: 15 }
    ],
    words: [
      { zh: "铁杵", en: "Iron Pestle" },
      { zh: "针", en: "Needle" },
      { zh: "努力", en: "Effort" }
    ],
    fableText: [
      "大诗人李白小的时候很贪玩，不爱学习。有一天，他逃学在街上闲逛，走到了一条小河边。",
      "他看到一位白发苍苍的老奶奶，正蹲在河边的石头上，吃力地磨着一根粗大的铁棍。",
      "李白觉得很奇怪，就走过去问：‘老奶奶，您在磨什么呀？’老奶奶头也不抬地说：‘我要把它磨成一根绣花针。’",
      "李白吃惊地说：‘这么粗的铁棍，怎么可能磨成针呢？’老奶奶笑着说：‘只要功夫深，铁杵磨成针。我每天不停地磨，它总会越来越细的。’",
      "李白听了老奶奶的话，非常惭愧。从此他再也不逃学了，每天刻苦读书，后来成了一位伟大的诗人。"
    ],
    parentGuide: "老奶奶的坚持给了李白什么启发？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "老奶奶在河边磨什么东西？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "李白听了老奶奶的话后，为什么感到惭愧？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果老奶奶中途放弃了，铁杵还能变成针吗？", color: "#fa709a" }
    ],
    lifeConnection: "做任何事情都不能半途而废，只要我们坚持不懈地努力，再困难的事情也能做成！",
    retellingPrompt: "假装你是那位老奶奶，语重心长地对小李白说出那句名言吧！"
  },
  {
    id: "fable_fisherman_and_fish",
    type: "fable",
    title: "渔夫和金鱼 / The Fisherman and the Golden Fish",
    image: "/images/fisherman_and_fish.png",
    hotspots: [
      { id: "fisherman", name: "渔夫", nameEn: "Fisherman", x: 30, y: 50, radius: 20 },
      { id: "gold_fish", name: "金鱼", nameEn: "Golden Fish", x: 60, y: 60, radius: 15 },
      { id: "sea", name: "大海", nameEn: "Sea", x: 70, y: 40, radius: 20 }
    ],
    words: [
      { zh: "渔夫", en: "Fisherman" },
      { zh: "金鱼", en: "Golden Fish" },
      { zh: "愿望", en: "Wish" }
    ],
    fableText: [
      "从前，有一位老渔夫和他的妻子住在大海边破旧的茅草房里。有一天，渔夫打到了一条会说话的魔法金鱼。",
      "金鱼哀求说：‘放了我吧，我会满足你所有的愿望！’善良的渔夫什么也没要，就把金鱼放回了大海。",
      "渔夫的妻子知道后非常生气，逼着渔夫去找金鱼，要一个新木盆、一座大房子，甚至要当高贵的统治者。",
      "金鱼一次又一次地满足了他们的愿望。可是，妻子越来越贪婪，最后竟然要求当海上的女霸王，还要金鱼亲自来伺候她！",
      "金鱼听了，什么话也没说，甩了甩尾巴游进了深海。当渔夫回到家时，发现一切又变回了原来破旧的茅草房和一个破木盆。"
    ],
    parentGuide: "渔夫的妻子最后得到了什么？为什么？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "善良的老渔夫最初向金鱼要了什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "金鱼最后为什么一句话都没说就游走了？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果你抓到了这条金鱼，你会许什么愿望？", color: "#fa709a" }
    ],
    lifeConnection: "贪得无厌的人最后什么也得不到，我们要懂得知足常乐！",
    retellingPrompt: "你能表演出渔夫妻子那副贪婪又生气的模样吗？"
  },
  {
    id: "fable_lute_and_cow",
    type: "fable",
    title: "对牛弹琴 / Playing the Lute to a Cow",
    image: "/images/lute_and_cow.png",
    hotspots: [
      { id: "scholar", name: "书生", nameEn: "Scholar", x: 30, y: 50, radius: 20 },
      { id: "lute", name: "古琴", nameEn: "Lute", x: 45, y: 60, radius: 15 },
      { id: "cow", name: "牛", nameEn: "Cow", x: 70, y: 50, radius: 25 }
    ],
    words: [
      { zh: "弹琴", en: "Play Lute" },
      { zh: "牛", en: "Cow" },
      { zh: "听不懂", en: "Don't Understand" }
    ],
    fableText: [
      "古时候有一个非常有名的音乐家，叫公明仪。他弹奏的古琴曲非常动听，人们都喜欢听。",
      "有一天，他在郊外的草地上散步，看到一头老黄牛正在低头吃草。",
      "公明仪突发奇想，觉得这么美的风景，应该配上高雅的音乐。于是他摆好古琴，对着黄牛弹奏起最高雅的曲子。",
      "可是，老黄牛只顾着低头吃草，连头都没有抬一下。公明仪觉得是不是这首曲子太高深了？",
      "于是他又弹了一首像蚊子嗡嗡叫、小牛呼唤妈妈的曲子。这一次，老黄牛停止了吃草，竖起耳朵听了起来。"
    ],
    parentGuide: "老黄牛为什么不听高雅的曲子？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "公明仪一开始给老黄牛弹了什么曲子？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么老黄牛对小牛叫的声音有反应？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果公明仪一直弹高雅的曲子，老黄牛会怎么样？", color: "#fa709a" }
    ],
    lifeConnection: "说话和做事要看对象，如果不看对象随便说话，就像对牛弹琴一样，白费力气！",
    retellingPrompt: "你能表演一下公明仪对着黄牛弹琴时认真的样子吗？"
  },
  {
    id: "fable_snipe_and_clam",
    type: "fable",
    title: "鹬蚌相争 / The Snipe and the Clam",
    image: "/images/snipe_and_clam.png",
    hotspots: [
      { id: "snipe", name: "鹬鸟", nameEn: "Snipe", x: 40, y: 40, radius: 20 },
      { id: "clam", name: "蚌", nameEn: "Clam", x: 50, y: 60, radius: 15 },
      { id: "fisherman", name: "渔翁", nameEn: "Fisherman", x: 80, y: 30, radius: 20 }
    ],
    words: [
      { zh: "鸟", en: "Bird" },
      { zh: "贝壳", en: "Shell" },
      { zh: "渔翁", en: "Fisherman" }
    ],
    fableText: [
      "有一天，一只河蚌张开壳，在河滩上晒太阳。突然，飞来一只长嘴的鹬鸟，一口啄住了河蚌的肉。",
      "河蚌疼得立刻把壳合上，紧紧地夹住了鹬鸟的长嘴巴，怎么也不肯松开。",
      "鹬鸟生气地说：‘今天不下雨，明天不下雨，你就会被干死在沙滩上！’",
      "河蚌也毫不示弱地回答：‘今天不松口，明天不松口，你就会被饿死在这里！’",
      "它们俩就这样互不相让，谁也不肯先松口。这时，一个打鱼的老头（渔翁）路过，毫不费力地把它们两个一起抓走了。"
    ],
    parentGuide: "鹬鸟和河蚌为什么会被渔翁一起抓走？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "鹬鸟啄了河蚌之后，河蚌是怎么做的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "如果它们两个互相让一步，会发生什么？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "渔翁抓走它们之后会多高兴？", color: "#fa709a" }
    ],
    lifeConnection: "如果和别人互不相让、一直争吵，最后只会两败俱伤，让别人占了便宜哦！",
    retellingPrompt: "你能表演一下鹬鸟和河蚌互相不服气、一直争吵的样子吗？"
  },
  {
    id: "fable_man_of_qi",
    type: "fable",
    title: "杞人忧天 / The Man of Qi",
    image: "/images/man_of_qi.png",
    hotspots: [
      { id: "man", name: "杞人", nameEn: "Man", x: 40, y: 60, radius: 25 },
      { id: "sky", name: "天空", nameEn: "Sky", x: 50, y: 20, radius: 30 }
    ],
    words: [
      { zh: "天空", en: "Sky" },
      { zh: "害怕", en: "Scared" },
      { zh: "掉下来", en: "Fall Down" }
    ],
    fableText: [
      "古时候，杞国有一个人，他总是担心天会塌下来，地会陷下去。",
      "他每天望着天空发愁，连饭都吃不下，觉也睡不好，整个人变得面黄肌瘦。",
      "他的朋友看到他这样，就去开导他说：‘天是由气体组成的，到处都是气，怎么会塌下来呢？’",
      "杞人听了，还是不放心，问：‘那日月星辰不会掉下来砸到我吗？’",
      "朋友笑着说：‘日月星辰也只是发光的气体，就算掉下来也不会砸伤人的。’杞人听了这才放下心来。"
    ],
    parentGuide: "杞人为什么每天都不开心？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "杞人每天在担心什么事情？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "朋友是怎么开导杞人的？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "你觉得天会塌下来吗？为什么？", color: "#fa709a" }
    ],
    lifeConnection: "不要为了那些不可能发生的事情而白白担心，开开心心地过好每一天才是最重要的！",
    retellingPrompt: "你能表演一下杞人看着天空发愁害怕的样子吗？"
  },
  {
    id: "fable_box_and_pearl",
    type: "fable",
    title: "买椟还珠 / The Box and the Pearl",
    image: "/images/box_and_pearl.png",
    hotspots: [
      { id: "merchant", name: "商人", nameEn: "Merchant", x: 30, y: 50, radius: 25 },
      { id: "box", name: "木匣子", nameEn: "Wooden Box", x: 55, y: 55, radius: 15 },
      { id: "pearl", name: "珍珠", nameEn: "Pearl", x: 75, y: 65, radius: 15 }
    ],
    words: [
      { zh: "盒子", en: "Box" },
      { zh: "珍珠", en: "Pearl" },
      { zh: "买卖", en: "Trade" }
    ],
    fableText: [
      "楚国有一个商人，他有一颗非常珍贵的珍珠。为了把珍珠卖个好价钱，他做了一个非常精美的木匣子。",
      "他在木匣子上雕刻了美丽的花纹，还用香料把它熏得香喷喷的，最后把珍珠装了进去。",
      "有一个郑国人看到了这个木匣子，觉得它太漂亮了，非常喜欢。",
      "于是，郑国人花重金买下了这个木匣子。可是，你猜他做了什么？",
      "他把木匣子里的那颗名贵珍珠拿出来还给了商人，只把木匣子高高兴兴地带走了。"
    ],
    parentGuide: "郑国人买走木匣子后，把什么还给了商人？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "商人为了卖珍珠，做了一个什么样的木匣子？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么郑国人要把珍珠还给商人？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "商人收到退回来的珍珠，心里会怎么想？", color: "#fa709a" }
    ],
    lifeConnection: "做事情不要只看华丽的外表，而忽略了真正有价值的东西哦！",
    retellingPrompt: "你能表演一下郑国人抱着木匣子开心，却把珍珠扔掉的动作吗？"
  },
  {
    id: "fable_lord_ye_dragon",
    type: "fable",
    title: "叶公好龙 / Lord Ye's Love of Dragons",
    image: "/images/lord_ye_dragon.png",
    hotspots: [
      { id: "lord_ye", name: "叶公", nameEn: "Lord Ye", x: 40, y: 65, radius: 20 },
      { id: "dragon", name: "真龙", nameEn: "Real Dragon", x: 70, y: 30, radius: 30 },
      { id: "window", name: "窗户", nameEn: "Window", x: 60, y: 40, radius: 20 }
    ],
    words: [
      { zh: "龙", en: "Dragon" },
      { zh: "喜欢", en: "Like" },
      { zh: "害怕", en: "Scared" }
    ],
    fableText: [
      "从前有一个叫叶公的人，他非常喜欢龙。他的衣服上绣着龙，酒杯上刻着龙，连家里的墙壁和柱子上都画满了龙。",
      "天上的真龙听说地上有个人这么喜欢自己，非常感动，决定亲自去拜访他。",
      "真龙把头伸进了叶公家的窗户，长长的尾巴拖到了大厅里。",
      "叶公一看到这庞大、威风凛凛的真龙，顿时吓得面如土色。",
      "他赶紧躲到桌子底下，连滚带爬地逃跑了。原来，他喜欢的只是画上的假龙，并不是真的龙呀！"
    ],
    parentGuide: "叶公看到真龙后是什么反应？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "叶公家里都有哪些东西上面有龙？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "真龙为什么要亲自去找叶公？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "真龙看到叶公被吓跑了，会有多失望？", color: "#fa709a" }
    ],
    lifeConnection: "有些人口头上说喜欢一件事，但当那件事真的发生时，他们却会退缩。我们要做到表里如一！",
    retellingPrompt: "你能表演一下叶公看到真龙后，吓得躲到桌子底下的样子吗？"
  },
  {
    id: "fable_startled_bird",
    type: "fable",
    title: "惊弓之鸟 / The Startled Bird",
    image: "/images/startled_bird.png",
    hotspots: [
      { id: "archer", name: "射手", nameEn: "Archer", x: 25, y: 70, radius: 25 },
      { id: "bow", name: "空弓", nameEn: "Empty Bow", x: 35, y: 55, radius: 15 },
      { id: "bird", name: "大雁", nameEn: "Wild Goose", x: 70, y: 25, radius: 20 }
    ],
    words: [
      { zh: "弓箭", en: "Bow" },
      { zh: "鸟", en: "Bird" },
      { zh: "掉下", en: "Fall Down" }
    ],
    fableText: [
      "战国时期，有一个神箭手叫更羸。有一天，他和魏王散步，看到天上有只大雁在孤单地慢慢飞着。",
      "更羸对魏王说：‘大王，我不用箭，只要拉一下弓弦，就能让那只大雁掉下来。’",
      "魏王不相信。于是，更羸拿起弓，没有搭箭，只是用力拨了一下空弓弦，发出‘嘣’的一声巨响。",
      "天上的大雁听到弓弦响，吓得拼命往高处飞，结果伤口裂开，‘扑通’一声掉到了地上。",
      "更羸解释说：‘这只大雁受过箭伤还没好，心里非常害怕。听到弓弦响，它以为又要被射中了，一紧张就掉下来了。’"
    ],
    parentGuide: "神箭手更羸为什么没有用箭就把大雁射下来了？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "更羸是用什么东西把大雁打下来的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "大雁为什么听到弓弦响就会拼命往高处飞？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果这只大雁以前没有受过伤，它听到弓弦声会掉下来吗？", color: "#fa709a" }
    ],
    lifeConnection: "受过惊吓的人遇到一点类似的情况就会非常害怕，我们要学会勇敢地克服内心的恐惧！",
    retellingPrompt: "你能表演一下射手拉响空弓弦，大雁被吓得掉下来的样子吗？"
  },
  {
    id: "fable_foolish_old_man",
    type: "fable",
    title: "愚公移山 / The Foolish Old Man",
    image: "/images/foolish_old_man.png",
    hotspots: [
      { id: "old_man", name: "愚公", nameEn: "Old Man", x: 30, y: 65, radius: 25 },
      { id: "hoe", name: "锄头", nameEn: "Hoe", x: 45, y: 55, radius: 15 },
      { id: "mountain", name: "大山", nameEn: "Mountain", x: 75, y: 40, radius: 35 }
    ],
    words: [
      { zh: "爷爷", en: "Grandpa" },
      { zh: "挖土", en: "Dig Dirt" },
      { zh: "大山", en: "Mountain" }
    ],
    fableText: [
      "古时候有一个叫愚公的近九十岁老爷爷，他家门前被两座大山挡住了去路，出门非常不方便。",
      "于是，愚公决定带领全家人，用锄头和簸箕把这两座大山挖走，把土块运到海边扔掉。",
      "有一个叫智叟的人嘲笑他说：‘你都这么老了，怎么可能挖得平这两座大山呢？太可笑了！’",
      "愚公毫不动摇地说：‘我死了还有儿子，儿子死了还有孙子，子子孙孙无穷无尽，而山是不会变高的，总有一天能挖平！’",
      "天帝被愚公坚持不懈的精神感动了，派了两个神仙把这两座大山搬走了。"
    ],
    parentGuide: "智叟为什么嘲笑愚公？愚公是怎么回答的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "愚公为什么要带全家人去挖山？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么天帝最后派神仙把山搬走了？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果愚公半途而废，大山会被搬走吗？", color: "#fa709a" }
    ],
    lifeConnection: "只要我们有恒心、有毅力，坚持不懈地去做一件事，再大的困难也一定能够克服！",
    retellingPrompt: "你能表演一下老爷爷拿着锄头用力挖山的动作吗？"
  },
  {
    id: "fable_blessing_in_disguise",
    type: "fable",
    title: "塞翁失马 / A Blessing in Disguise",
    image: "/images/blessing_in_disguise.png",
    hotspots: [
      { id: "old_man", name: "老爷爷", nameEn: "Old Man", x: 40, y: 60, radius: 25 },
      { id: "horse", name: "马", nameEn: "Horse", x: 70, y: 50, radius: 25 }
    ],
    words: [
      { zh: "老人", en: "Old Man" },
      { zh: "马", en: "Horse" },
      { zh: "丢失", en: "Lost" }
    ],
    fableText: [
      "古时候，边塞住着一位老爷爷（塞翁），他养了一匹好马。有一天，这匹马挣脱缰绳跑到了外族人的领地。",
      "邻居们都来安慰他，老爷爷却一点也不着急，说：‘这未必是一件坏事呀！’",
      "几个月后，那匹跑丢的马不仅自己回来了，还带回了一匹纯种的骏马。邻居们都来祝贺他。",
      "老爷爷却皱起眉头说：‘白白得了一匹好马，这未必是一件好事呀！’",
      "后来，老爷爷的儿子因为骑这匹烈马摔断了腿。但正因为腿瘸了，儿子免去了去前线打仗，父子俩平安地保全了性命。"
    ],
    parentGuide: "老爷爷的马跑丢了，他为什么一点也不伤心？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "老爷爷跑丢的马回来时，带了什么东西？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么后来儿子摔断了腿，反而变成了一件好事？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果那匹马没有跑丢，儿子还会遇到危险吗？", color: "#fa709a" }
    ],
    lifeConnection: "坏事有时候会变成好事，好事有时候也可能变成坏事。遇到挫折时不要太难过哦！",
    retellingPrompt: "你能表演一下老爷爷一会儿开心一会儿发愁的样子吗？"
  },
  {
    id: "fable_watching_plums",
    type: "fable",
    title: "望梅止渴 / Quenching Thirst by Thinking of Plums",
    image: "/images/watching_plums.png",
    hotspots: [
      { id: "general", name: "将军", nameEn: "General", x: 40, y: 60, radius: 25 },
      { id: "sword", name: "宝剑", nameEn: "Sword", x: 55, y: 40, radius: 15 },
      { id: "soldier", name: "士兵", nameEn: "Soldier", x: 70, y: 65, radius: 20 }
    ],
    words: [
      { zh: "将军", en: "General" },
      { zh: "梅子", en: "Plum" },
      { zh: "口渴", en: "Thirsty" }
    ],
    fableText: [
      "三国时期，曹操带领军队去打仗。正值烈日炎炎的夏天，士兵们走了很远的路，水壶里的水都喝光了。",
      "大家又累又渴，嘴唇都干裂了，实在走不动了。曹操心里很着急，到处找水也找不到。",
      "突然，曹操灵机一动，他骑在马上，用马鞭指着前方大喊：‘前面有一大片梅林，结满了又酸又甜的梅子！’",
      "士兵们一听到‘酸梅子’这三个字，嘴里立刻分泌出许多口水，感觉也不那么渴了。",
      "于是，大家鼓起力气继续往前走，终于走出了这片荒野，找到了一处有水的地方。"
    ],
    parentGuide: "曹操是用什么办法让士兵们不觉得口渴的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "士兵们在路上遇到了什么困难？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么士兵们一听到梅子就不觉得渴了？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果曹操说前面有大石头，士兵们会流口水吗？", color: "#fa709a" }
    ],
    lifeConnection: "当我们遇到困难觉得坚持不下去时，可以想一些美好的事情来给自己打气！",
    retellingPrompt: "你能表演一下吃到很酸很酸的梅子时，嘴巴的表情吗？"
  },
  {
    id: "fable_drawing_cake",
    type: "fable",
    title: "画饼充饥 / Drawing a Cake to Satisfy Hunger",
    image: "/images/drawing_cake.png",
    hotspots: [
      { id: "man", name: "饥饿的人", nameEn: "Hungry Man", x: 40, y: 60, radius: 25 },
      { id: "paper", name: "纸", nameEn: "Paper", x: 60, y: 70, radius: 20 },
      { id: "cake", name: "画的饼", nameEn: "Drawn Cake", x: 60, y: 70, radius: 15 }
    ],
    words: [
      { zh: "画画", en: "Draw" },
      { zh: "大饼", en: "Cake" },
      { zh: "肚子饿", en: "Hungry" }
    ],
    fableText: [
      "从前有一个人，他非常穷，经常吃不饱饭。有一天，他又饿得肚子咕咕叫，可是家里一点吃的都没有了。",
      "他实在太饿了，于是找来一张纸和一支笔，在纸上画了一个又大又圆的芝麻饼。",
      "他看着画好的饼，假装拿起来咬了一口，一边嚼一边说：‘嗯，真香啊！’",
      "可是，无论他画得多么逼真，肚子还是饿得咕咕叫。",
      "毕竟，画在纸上的饼是不能填饱肚子的，只有真正努力去工作才能换来食物。"
    ],
    parentGuide: "这个人饿了为什么不去吃饭，而要在纸上画饼？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "这个人在纸上画了什么东西？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "画的饼能让他不饿吗？为什么？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "他接下来应该去做什么才能真正吃到饼？", color: "#fa709a" }
    ],
    lifeConnection: "光靠空想是解决不了问题的，想要得到什么，必须付诸实际行动才行哦！",
    retellingPrompt: "你能表演一下肚子很饿，却只能看着假饼流口水的样子吗？"
  },
  {
    id: "fable_fox_and_stork",
    type: "fable",
    title: "狐狸和鹳鸟 / The Fox and the Stork",
    image: "/images/fox_and_stork.png",
    hotspots: [
      { id: "fox", name: "狐狸", nameEn: "Fox", x: 30, y: 60, radius: 25 },
      { id: "stork", name: "鹳鸟", nameEn: "Stork", x: 70, y: 40, radius: 25 },
      { id: "jar", name: "高罐子", nameEn: "Tall Jar", x: 50, y: 70, radius: 15 }
    ],
    words: [
      { zh: "狐狸", en: "Fox" },
      { zh: "鹳鸟", en: "Stork" },
      { zh: "罐子", en: "Jar" }
    ],
    fableText: [
      "有一天，狐狸请鹳鸟来家里吃饭。可是坏心眼的狐狸故意把汤倒在一个很平的盘子里。",
      "鹳鸟的嘴巴又长又尖，它怎么啄也喝不到盘子里的汤，而狐狸却用舌头舔得干干净净。",
      "过了几天，鹳鸟也请狐狸来吃饭。它把美味的肉汤装在一个有着长长细脖子的罐子里。",
      "鹳鸟把长嘴巴伸进罐子里，吃得津津有味。可是狐狸的嘴巴太宽，根本伸不进罐子里。",
      "狐狸只能围着罐子干着急，最后饿着肚子回家了。它终于明白了自己捉弄别人的后果。"
    ],
    parentGuide: "狐狸请客的时候，为什么要用平底盘子装汤？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "鹳鸟请狐狸吃饭时，用了什么样的容器？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "狐狸为什么喝不到长脖子罐子里的汤？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "狐狸以后还会随便捉弄别人吗？", color: "#fa709a" }
    ],
    lifeConnection: "你怎么对待别人，别人就会怎么对待你。我们要学会尊重和体谅朋友！",
    retellingPrompt: "你能表演一下狐狸看着长脖子罐子却吃不到东西，急得团团转的样子吗？"
  },
  {
    id: "fable_city_country_mouse",
    type: "fable",
    title: "城里老鼠和乡下老鼠 / City Mouse and Country Mouse",
    image: "/images/city_country_mouse.png",
    hotspots: [
      { id: "city_mouse", name: "城里老鼠", nameEn: "City Mouse", x: 35, y: 60, radius: 20 },
      { id: "country_mouse", name: "乡下老鼠", nameEn: "Country Mouse", x: 65, y: 60, radius: 20 },
      { id: "cheese", name: "奶酪", nameEn: "Cheese", x: 50, y: 55, radius: 15 }
    ],
    words: [
      { zh: "城市", en: "City" },
      { zh: "乡下", en: "Country" },
      { zh: "奶酪", en: "Cheese" }
    ],
    fableText: [
      "乡下老鼠邀请城里的表哥来做客。它拿出自己最好的食物——玉米和麦子招待表哥。",
      "城里老鼠嫌弃地说：‘你吃的太差了！跟我去城里吧，那里有吃不完的山珍海味。’",
      "于是，乡下老鼠跟着表哥来到了城里的一座大房子，桌子上摆满了奶酪、蛋糕和水果。",
      "就在它们正准备大吃一顿的时候，突然冲出来一只大花猫，吓得它们拼命逃回洞里，半天不敢出来。",
      "乡下老鼠擦了擦冷汗说：‘虽然城里的食物很好吃，但我还是喜欢乡下，哪怕只吃玉米，至少平平安安。’"
    ],
    parentGuide: "乡下老鼠为什么最后还是决定回乡下？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "城里老鼠给乡下老鼠准备了什么好吃的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么城里老鼠吃得那么好，却每天担惊受怕？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果乡下老鼠留在城里，每天会过怎样的日子？", color: "#fa709a" }
    ],
    lifeConnection: "最适合自己的生活才是最好的生活，平平安安比什么都重要！",
    retellingPrompt: "你能表演一下两只老鼠看到大花猫时，吓得赶紧逃跑的样子吗？"
  },
  {
    id: "fable_belling_cat",
    type: "fable",
    title: "给猫挂铃铛 / Belling the Cat",
    image: "/images/belling_cat.png",
    hotspots: [
      { id: "mouse", name: "小老鼠", nameEn: "Mouse", x: 40, y: 65, radius: 20 },
      { id: "bell", name: "铃铛", nameEn: "Bell", x: 50, y: 55, radius: 10 },
      { id: "cat", name: "熟睡的猫", nameEn: "Sleeping Cat", x: 75, y: 60, radius: 25 }
    ],
    words: [
      { zh: "老鼠", en: "Mouse" },
      { zh: "猫", en: "Cat" },
      { zh: "铃铛", en: "Bell" }
    ],
    fableText: [
      "一户人家里有一只非常厉害的猫，每天都会抓到好几只老鼠。老鼠们非常害怕，决定开会商量对策。",
      "老鼠们七嘴八舌地讨论着。这时，一只年轻的小老鼠站出来说：‘我有个好主意！’",
      "‘只要我们在猫的脖子上挂一个小铃铛，以后猫一走动，铃铛就会响，我们就能提前逃跑了！’",
      "所有的老鼠都觉得这个主意太棒了，高兴得欢呼起来。",
      "可是，一只年老的老鼠叹了口气问：‘主意是不错，但是……谁去把铃铛挂在猫的脖子上呢？’大家听了，全都不说话了。"
    ],
    parentGuide: "老鼠们觉得挂铃铛的主意好吗？为什么最后大家都不说话了？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小老鼠想出了什么好主意来对付猫？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么没有老鼠愿意去给猫挂铃铛？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果真的有老鼠去挂铃铛，会发生什么事？", color: "#fa709a" }
    ],
    lifeConnection: "说一个好主意很容易，但真正去做却是很难的。想出的办法一定要能做到才行！",
    retellingPrompt: "你能表演一下老爷爷鼠问大家“谁去挂铃铛”时，大家吓得不敢出声的样子吗？"
  },
  {
    id: "fable_dog_and_shadow",
    type: "fable",
    title: "狗和影子 / The Dog and Its Reflection",
    image: "/images/dog_and_shadow.png",
    hotspots: [
      { id: "dog", name: "狗", nameEn: "Dog", x: 40, y: 40, radius: 25 },
      { id: "bone", name: "骨头", nameEn: "Bone", x: 50, y: 45, radius: 15 },
      { id: "reflection", name: "水里的影子", nameEn: "Reflection", x: 50, y: 80, radius: 25 }
    ],
    words: [
      { zh: "狗", en: "Dog" },
      { zh: "骨头", en: "Bone" },
      { zh: "影子", en: "Shadow" }
    ],
    fableText: [
      "有一只狗得到了一根非常大、非常香的肉骨头。它高高兴兴地叼着骨头准备回家去吃。",
      "在回家的路上，它必须要经过一座小木桥。当它走到桥中间时，它往河水里看了一眼。",
      "它看到水里也有一只狗，而且那只狗的嘴里也叼着一根很大的肉骨头。",
      "这只贪心的狗心想：‘如果我把它的骨头也抢过来，我不就有两根骨头了吗！’",
      "于是，它张开嘴巴，恶狠狠地对着水里的狗大吼一声。结果，它嘴里的骨头‘噗通’一声掉进了河里，被水冲走了。"
    ],
    parentGuide: "那只狗看到水里的另一只狗，其实是谁呀？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "狗过桥的时候嘴里叼着什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "狗为什么要把嘴巴张开冲着水里叫？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "骨头掉进河里以后，这只狗会有多伤心？", color: "#fa709a" }
    ],
    lifeConnection: "人不能太贪心，如果总是看着别人碗里的东西，最后可能连自己本来拥有的都会失去。",
    retellingPrompt: "你能表演一下狗为了抢水里的骨头，张大嘴巴大吼的动作吗？"
  },
  {
    id: "fable_wind_and_sun",
    type: "fable",
    title: "北风和太阳 / The North Wind and the Sun",
    image: "/images/wind_and_sun.png",
    hotspots: [
      { id: "sun", name: "太阳", nameEn: "Sun", x: 70, y: 20, radius: 25 },
      { id: "wind", name: "北风", nameEn: "Wind", x: 20, y: 20, radius: 20 },
      { id: "person", name: "行人", nameEn: "Person", x: 50, y: 70, radius: 20 }
    ],
    words: [
      { zh: "北风", en: "Wind" },
      { zh: "太阳", en: "Sun" },
      { zh: "脱衣服", en: "Take Off Clothes" }
    ],
    fableText: [
      "北风和太阳在争论谁的力气更大。这时，路上走来一个穿着厚厚外套的行人。",
      "他们打赌说，谁能让这个行人脱下外套，谁就赢了。北风自告奋勇地先来。",
      "北风深吸一口气，吹出了冰冷刺骨的狂风。可是风越大，行人觉得越冷，就把外套裹得越紧。",
      "北风吹得精疲力尽，只好认输。接着，轮到太阳出场了。",
      "太阳从云层后走出来，把温暖的阳光洒在行人身上。行人觉得越来越热，开始流汗，于是主动脱下了厚外套。太阳赢了！"
    ],
    parentGuide: "北风用了那么大的力气，为什么行人没有脱衣服？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "太阳和北风比赛要让行人做什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么太阳只是发光，行人就自己把衣服脱了？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果接下来突然下起了大雪，行人会把衣服穿上吗？", color: "#fa709a" }
    ],
    lifeConnection: "有时候，温柔和善良比强硬和粗暴更有力量！",
    retellingPrompt: "你能表演一下行人在大风里把衣服裹紧，然后在太阳下热得脱衣服的样子吗？"
  },
  {
    id: "fable_thief_and_dog",
    type: "fable",
    title: "小偷和看门狗 / The Thief and the Watchdog",
    image: "/images/thief_and_dog.png",
    hotspots: [
      { id: "thief", name: "小偷", nameEn: "Thief", x: 30, y: 55, radius: 25 },
      { id: "meat", name: "肉", nameEn: "Meat", x: 50, y: 65, radius: 10 },
      { id: "dog", name: "看门狗", nameEn: "Watchdog", x: 70, y: 65, radius: 20 }
    ],
    words: [
      { zh: "小偷", en: "Thief" },
      { zh: "肉块", en: "Meat" },
      { zh: "看门狗", en: "Watchdog" }
    ],
    fableText: [
      "在一个漆黑的夜晚，一个小偷偷偷摸摸地来到一户有钱人的家门口，准备进去偷东西。",
      "这户人家养了一只非常凶猛的看门狗。小偷刚一走近，狗就狂叫了起来。",
      "小偷怕狗的叫声把主人吵醒，赶紧从口袋里掏出一块香喷喷的肉，扔给看门狗。",
      "小偷心想：‘只要狗吃了肉，就不会叫了。’ 可是，看门狗闻了闻肉，连一口都没吃。",
      "看门狗更加大声地叫了起来：‘你给我吃肉，是想塞住我的嘴巴去偷主人的东西，我才不会上你的当呢！’主人被惊醒，抓住了小偷。"
    ],
    parentGuide: "小偷为什么要扔肉给看门狗吃？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "看门狗吃到小偷给的肉了吗？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "看门狗为什么拒绝吃那块香喷喷的肉？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果看门狗真的吃了肉睡着了，主人家会发生什么事？", color: "#fa709a" }
    ],
    lifeConnection: "不能因为别人给了一点小恩小惠，就忘记了自己的职责。要做一个忠诚、守规矩的好孩子！",
    retellingPrompt: "你能假装自己是那只看门狗，大声地汪汪叫赶走小偷吗？"
  },
  {
    id: "fable_frog_and_ox",
    type: "fable",
    title: "青蛙和牛 / The Frog and the Ox",
    image: "/images/frog_and_ox.png",
    hotspots: [
      { id: "frog", name: "青蛙", nameEn: "Frog", x: 35, y: 75, radius: 15 },
      { id: "ox", name: "大牛", nameEn: "Ox", x: 70, y: 50, radius: 30 }
    ],
    words: [
      { zh: "青蛙", en: "Frog" },
      { zh: "大牛", en: "Ox" },
      { zh: "肚子", en: "Belly" }
    ],
    fableText: [
      "有一只小青蛙在池塘边玩耍，突然看到了一头巨大的棕色老牛。小青蛙从来没见过这么大的动物，惊讶极了。",
      "小青蛙跑回家，对妈妈说：‘妈妈，我今天看到了一只像山一样大的怪物！’",
      "青蛙妈妈不服气地说：‘有那么大吗？看妈妈的！’于是青蛙妈妈拼命地吸气，把肚子鼓得圆圆的。",
      "‘有这么大吗？’妈妈问。小青蛙摇摇头说：‘还要大得多！’妈妈又用力吸了一大口气，肚子鼓得像个气球。",
      "不管小青蛙怎么说，妈妈还是觉得不够大。最后，她又狠狠吸了一大口气，结果‘砰’的一声，肚子撑破了！"
    ],
    parentGuide: "青蛙妈妈为了和牛比大小，最后把自己怎么样了？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小青蛙在池塘边看到了一只什么动物？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "青蛙妈妈为什么一定要把肚子鼓得那么大？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果青蛙妈妈再也不和牛比大小了，她会快乐吗？", color: "#fa709a" }
    ],
    lifeConnection: "每个人都有自己的长处和短处，不要总是去和别人比自己不擅长的事情，要学会接受真实的自己！",
    retellingPrompt: "你能学一学青蛙妈妈是怎么用力吸气把肚子鼓起来的吗？"
  }
];
