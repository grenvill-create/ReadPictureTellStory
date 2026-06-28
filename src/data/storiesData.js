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
  },
  {
    id: "fable_wolf_sheep",
    type: "fable",
    title: "披着羊皮的狼 / The Wolf in Sheep's Clothing",
    image: "/images/wolf_in_sheep_clothing.jpg",
    hotspots: [
      { id: "wolf", name: "狼", nameEn: "Wolf", x: 50, y: 55, radius: 12 },
      { id: "sheepskin", name: "羊皮", nameEn: "Sheepskin", x: 48, y: 45, radius: 10 },
      { id: "sheep", name: "小羊", nameEn: "Sheep", x: 75, y: 65, radius: 10 }
    ],
    words: [
      { zh: "狼", en: "Wolf" },
      { zh: "羊皮", en: "Sheepskin" },
      { zh: "小羊", en: "Sheep" }
    ],
    fableText: [
      "一只饿了很久的狼想吃羊，但是牧羊人和牧羊犬看得很紧，它找不到机会。",
      "有一天，它在草丛里发现了一张羊皮，于是它把羊皮披在自己身上，混进了羊群里。",
      "小羊们以为它是新来的伙伴，都跑过来和它一起吃草。",
      "到了晚上，牧羊人把羊群赶进了羊圈，狼心里暗暗高兴，准备饱餐一顿。",
      "可是，牧羊人今晚刚好想煮点肉汤，他走进羊圈，一眼看中了这只又大又肥的‘羊’，把它抓了出去。坏人伪装得再好，最终也会害了自己！"
    ],
    parentGuide: "这只狼为什么要把羊皮披在身上呀？它想做什么坏事？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "狼混进羊群的时候，小羊们发现了没有？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "到了晚上，牧羊人为什么会把这只假羊抓走？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果小羊们发现了它是狼，它们会怎么做？", color: "#fa709a" }
    ],
    lifeConnection: "有些坏人会假装成好人的样子来骗我们。所以如果有不认识的叔叔阿姨给你糖果，你要小心哦！",
    retellingPrompt: "假装你是一只识破了伪装的小羊，你会怎么大声告诉牧羊犬呢？"
  },
  {
    id: "fable_honest_woodcutter",
    type: "fable",
    title: "金斧头和银斧头 / The Honest Woodcutter",
    image: "/images/honest_woodcutter.jpg",
    hotspots: [
      { id: "woodcutter", name: "樵夫", nameEn: "Woodcutter", x: 30, y: 60, radius: 12 },
      { id: "river_god", name: "河神", nameEn: "River God", x: 65, y: 55, radius: 15 },
      { id: "axes", name: "斧头", nameEn: "Axes", x: 50, y: 70, radius: 10 }
    ],
    words: [
      { zh: "樵夫", en: "Woodcutter" },
      { zh: "河神", en: "River God" },
      { zh: "斧头", en: "Axe" }
    ],
    fableText: [
      "从前有个诚实的樵夫，他在河边砍树时，一不小心，把破旧的铁斧头掉进了河里。他伤心地哭了起来。",
      "这时，河神出现了。河神潜入水里，捞出了一把金闪闪的金斧头，问樵夫：‘这是你的斧头吗？’樵夫摇摇头说：‘不是我的。’",
      "河神又潜入水里，捞出了一把银晃晃的银斧头，问：‘这是你的吗？’樵夫还是摇摇头说：‘也不是我的。’",
      "最后，河神捞出了那把破铁斧，樵夫高兴地说：‘对，这就是我的！’",
      "河神赞赏樵夫的诚实，就把金斧头和银斧头都送给了他。诚实的人总会得到好报的！"
    ],
    parentGuide: "河神拿出了金斧头和银斧头，樵夫为什么都说不是他的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "樵夫自己掉进河里的斧头是什么做的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "河神为什么最后把三把斧头都送给了樵夫？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果后来有个贪心的人也故意把铁斧扔进河里，河神会怎么惩罚他？", color: "#fa709a" }
    ],
    lifeConnection: "不属于我们的东西我们不能拿，诚实是最宝贵的品质。你有没有像小樵夫一样诚实的时候？",
    retellingPrompt: "假装你是那个好心的河神，当你捞起金斧头时，你会怎么问樵夫？"
  },
  {
    id: "fable_dongguo_wolf",
    type: "fable",
    title: "东郭先生和狼 / Mr. Dongguo and the Wolf",
    image: "/images/dongguo_and_wolf.jpg",
    hotspots: [
      { id: "dongguo", name: "东郭先生", nameEn: "Mr. Dongguo", x: 40, y: 55, radius: 12 },
      { id: "wolf", name: "狼", nameEn: "Wolf", x: 65, y: 75, radius: 10 },
      { id: "bag", name: "布袋", nameEn: "Bag", x: 30, y: 70, radius: 12 }
    ],
    words: [
      { zh: "先生", en: "Gentleman" },
      { zh: "狼", en: "Wolf" },
      { zh: "布袋", en: "Bag" }
    ],
    fableText: [
      "东郭先生是一个好心肠的书生。有一天，他在路上遇到了一只被猎人追赶受伤的狼。狼苦苦哀求东郭先生救救它。",
      "东郭先生心软了，就把狼藏进了自己装书的布袋里，骗过了猎人。",
      "可是，猎人走后，狼从袋子里爬出来，不仅不感谢东郭先生，还露出了尖牙说：‘我现在很饿，既然你那么好心，不如让我把你吃了吧！’",
      "东郭先生吓坏了。幸好这时路过一位聪明的农夫。农夫听了事情的经过，假装不信：‘我不信这么大的狼能装进这么小的袋子里，你再装一次给我看！’",
      "笨狼一钻进袋子，农夫马上把袋口扎紧，打死了这只忘恩负义的狼。"
    ],
    parentGuide: "东郭先生好心救了狼，可是狼是怎么报答他的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "东郭先生把狼藏在什么地方躲过猎人的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "农夫为什么要让狼重新钻回袋子里？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "以后如果东郭先生再遇到受伤的野兽，他还会随便帮忙吗？", color: "#fa709a" }
    ],
    lifeConnection: "我们对待好人要善良，但是对待像狼一样的坏人就不能心软。遇到坏人要赶紧找警察叔叔帮忙！",
    retellingPrompt: "你来演那个聪明的农夫，你会怎么骗狼钻进袋子里？"
  },
  {
    id: "fable_blind_lantern",
    type: "fable",
    title: "盲人提灯 / The Blind Man with a Lantern",
    image: "/images/blind_man_lantern.jpg",
    hotspots: [
      { id: "blind_man", name: "盲人", nameEn: "Blind Man", x: 45, y: 60, radius: 12 },
      { id: "lantern", name: "灯笼", nameEn: "Lantern", x: 65, y: 55, radius: 8 },
      { id: "stick", name: "拐杖", nameEn: "Cane", x: 35, y: 75, radius: 6 }
    ],
    words: [
      { zh: "盲人", en: "Blind Man" },
      { zh: "灯笼", en: "Lantern" },
      { zh: "黑夜", en: "Dark Night" }
    ],
    fableText: [
      "在一个漆黑的夜晚，一个看不见东西的盲人，手里提着一盏明亮的灯笼在街上走着。",
      "路人觉得很奇怪，嘲笑他说：‘你是个瞎子，什么也看不见，提着灯笼有什么用呢？真是多此一举！’",
      "盲人微笑着回答：‘我提灯笼确实不是为了给自己照路。黑夜里你们也看不清路，我提着灯笼，别人就能看见我，就不会撞到我了。’",
      "路人们听了，都惭愧地低下了头，向盲人道歉。",
      "盲人点亮了灯笼，既照亮了别人，也保护了自己。"
    ],
    parentGuide: "盲人自己看不见，为什么还要提着灯笼走路呢？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "路人一开始看到盲人提灯笼时说了什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "听了盲人的话，路人为什么会觉得惭愧？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果盲人不提灯笼在黑夜里走，会发生什么事？", color: "#fa709a" }
    ],
    lifeConnection: "帮助别人，有时候就是在帮助我们自己！在幼儿园里，你借给小朋友玩具，小朋友是不是也很愿意和你玩？",
    retellingPrompt: "假装你就是那个聪明的盲人，请你用温柔的声音告诉路人你为什么要提灯笼。"
  },
  {
    id: "fable_fox_goat",
    type: "fable",
    title: "狐狸和山羊 / The Fox and the Goat",
    image: "/images/fox_and_goat.jpg",
    hotspots: [
      { id: "goat", name: "山羊", nameEn: "Goat", x: 50, y: 25, radius: 12 },
      { id: "fox", name: "狐狸", nameEn: "Fox", x: 45, y: 75, radius: 10 },
      { id: "well", name: "深井", nameEn: "Deep Well", x: 50, y: 60, radius: 15 }
    ],
    words: [
      { zh: "狐狸", en: "Fox" },
      { zh: "山羊", en: "Goat" },
      { zh: "水井", en: "Well" }
    ],
    fableText: [
      "一只狐狸不小心掉进了一口深井里，怎么爬也爬不出来。到了下午，一只口渴的山羊来到了井边。",
      "山羊看到井里的狐狸，好奇地问：‘井里的水好喝吗？’狐狸眼珠一转，装作很高兴的样子说：‘这水可甜啦！你快跳下来喝吧！’",
      "单纯的山羊没多想，扑通一声就跳了下去。它刚喝足了水，就发现井太深，自己也出不去了。",
      "狐狸说：‘我有办法！你把前腿趴在井壁上，我踩着你的背先跳出去，然后再拉你上来！’山羊同意了。",
      "狐狸踩着山羊的背跳出了水井，却头也不回地跑了，留下可怜的山羊在井底咩咩叫。做事情之前，一定要先想好退路呀！"
    ],
    parentGuide: "狐狸为了自己能爬出水井，对山羊撒了什么谎？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "狐狸是怎么逃出那口深井的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "狐狸跑到井外之后，为什么不把山羊拉上来？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果山羊在跳下去之前，能先动脑筋想想，它应该怎么回答狐狸？", color: "#fa709a" }
    ],
    lifeConnection: "当我们做一件事情的时候，不能只看眼前，要先想想后果。不要轻易相信陌生人的花言巧语哦！",
    retellingPrompt: "现在你是一只聪明的小山羊，站在井口看着狐狸，你会怎么拆穿它的谎话？"
  },
  {
    id: "fable_farmer_sons",
    type: "fable",
    title: "老农夫和他的儿子们 / The Farmer and His Sons",
    image: "/images/farmer_and_sons.jpg",
    hotspots: [
      { id: "farmer", name: "老农夫", nameEn: "Old Farmer", x: 50, y: 40, radius: 12 },
      { id: "sons", name: "儿子们", nameEn: "Sons", x: 75, y: 60, radius: 15 },
      { id: "bundle", name: "一捆树枝", nameEn: "Bundle of Sticks", x: 45, y: 70, radius: 8 }
    ],
    words: [
      { zh: "农夫", en: "Farmer" },
      { zh: "树枝", en: "Sticks" },
      { zh: "折断", en: "Break" }
    ],
    fableText: [
      "有一位老农夫，他有几个儿子。这几个儿子虽然很强壮，但总是在一起吵架，不团结。",
      "老农夫病重了，为了教育儿子们，他让人拿来一捆树枝。他把这捆树枝递给儿子们说：‘你们谁能把这捆树枝折断？’",
      "几个儿子轮流使出最大的力气，可是那捆树枝结实得很，谁也没能折断它。",
      "接着，老农夫解开绳子，把树枝一根一根分给儿子们，说：‘现在再试试。’这次，大家轻轻一折，就把手里的树枝折断了。",
      "老农夫笑着说：‘孩子们，如果你们不团结，就会像一根树枝一样容易被打败；但如果你们团结在一起，就像那捆树枝一样坚不可摧啊！’"
    ],
    parentGuide: "老农夫让儿子们折断一捆树枝，他们成功了吗？为什么？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "老农夫是用什么东西来教育儿子们的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么一捆树枝折不断，一根一根就很容易折断呢？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "听了爸爸的话，你觉得这几个兄弟以后还会整天吵架吗？", color: "#fa709a" }
    ],
    lifeConnection: "团结力量大！你在幼儿园里和好朋友们一起玩搭积木的时候，是不是比一个人搭得更高更快？",
    retellingPrompt: "假装你是一位力气很大的哥哥，你用力折一捆树枝折不断时，你会说句什么话？"
  },
  {
    id: "fable_three_pigs",
    type: "fable",
    title: "三只小猪 / The Three Little Pigs",
    image: "/images/three_little_pigs.jpg",
    hotspots: [
      { id: "pigs", name: "三只小猪", nameEn: "Three Pigs", x: 40, y: 65, radius: 15 },
      { id: "brick_house", name: "砖房子", nameEn: "Brick House", x: 75, y: 55, radius: 20 },
      { id: "wolf", name: "大灰狼", nameEn: "Big Bad Wolf", x: 20, y: 60, radius: 12 }
    ],
    words: [
      { zh: "小猪", en: "Pig" },
      { zh: "砖房子", en: "Brick House" },
      { zh: "大灰狼", en: "Wolf" }
    ],
    fableText: [
      "猪妈妈让三只小猪自己去盖房子。老大很懒，用稻草盖了一间草房子；老二也贪玩，用木头盖了一间木房子。",
      "只有老三最勤劳，他搬来一块块砖头，不怕辛苦，盖了一间结实的大砖房。",
      "有一天，大灰狼来了。他深吸一口气，‘呼——’的一下，把老大的草房子吹倒了。老大吓得赶紧跑到老二的木房里。",
      "大灰狼又深吸一口气，‘呼——’的一下，把老二的木房子也吹塌了。两只小猪拼命逃到了老三的砖房里。",
      "大灰狼来到砖房前，使出全身力气吹呀吹，可是砖房子一动也不动。大灰狼累坏了，最后只能灰溜溜地逃走了。"
    ],
    parentGuide: "三只小猪盖了三种不一样的房子，你觉得哪一种房子最结实呀？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "老大和老二分别用什么材料盖的房子？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "大灰狼为什么吹不倒老三的房子呢？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果大灰狼想从烟囱里爬进砖房子，老三会想什么办法对付它？", color: "#fa709a" }
    ],
    lifeConnection: "做事情不能像老大老二一样偷懒，只有像老三那样脚踏实地，才能取得最好的结果！你搭积木的时候，是怎么搭得很稳的？",
    retellingPrompt: "你来演那只大灰狼，用力吹草房子的时候，你会发出什么声音？"
  },
  {
    id: "fable_monkey_crocodile",
    type: "fable",
    title: "猴子和鳄鱼 / The Monkey and the Crocodile",
    image: "/images/monkey_crocodile.jpg",
    hotspots: [
      { id: "monkey", name: "猴子", nameEn: "Monkey", x: 30, y: 45, radius: 12 },
      { id: "crocodile", name: "鳄鱼", nameEn: "Crocodile", x: 65, y: 65, radius: 15 },
      { id: "tree", name: "果树", nameEn: "Fruit Tree", x: 20, y: 50, radius: 20 }
    ],
    words: [
      { zh: "猴子", en: "Monkey" },
      { zh: "鳄鱼", en: "Crocodile" },
      { zh: "心脏", en: "Heart" }
    ],
    fableText: [
      "一只聪明的猴子住在河边的一棵果树上，它经常把甜美的果子扔给河里的鳄鱼吃。鳄鱼觉得猴子的果子很甜，心想猴子的心一定更甜。",
      "有一天，鳄鱼对猴子说：‘猴子老弟，河对岸有更好吃的水果，你坐到我的背上，我驮你过去吧。’",
      "猴子高兴地跳上了鳄鱼的背。游到河中间时，鳄鱼露出了凶相：‘其实我是想吃你的心！’",
      "猴子吓了一跳，但它很冷静，故意笑着说：‘哎呀，你怎么不早说？我们猴子为了安全，平时都把心脏挂在树上的。你把我驮回去，我拿给你！’",
      "笨鳄鱼信以为真，立刻掉头游回岸边。猴子一靠岸，立刻敏捷地爬上了树，大笑着说：‘笨蛋，谁能把心拿出来呀！’鳄鱼只好饿着肚子游走了。"
    ],
    parentGuide: "鳄鱼背着猴子游到河中间的时候，它露出了什么真面目？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "猴子告诉鳄鱼它的心脏放在哪里了？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "猴子为什么不直接逃跑，而是要骗鳄鱼说心脏在树上？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果鳄鱼下次再来果树下，猴子还会给它扔果子吃吗？", color: "#fa709a" }
    ],
    lifeConnection: "遇到危险的时候，我们要像小猴子一样保持冷静，用智慧保护自己！",
    retellingPrompt: "假装你就是那只机智的小猴子，你会用什么样的语气把笨鳄鱼骗回去？"
  },
  {
    id: "fable_donkey_salt",
    type: "fable",
    title: "驴和盐 / The Donkey and the Salt",
    image: "/images/donkey_salt.jpg",
    hotspots: [
      { id: "donkey", name: "驴子", nameEn: "Donkey", x: 50, y: 60, radius: 15 },
      { id: "river", name: "小河", nameEn: "River", x: 50, y: 80, radius: 20 },
      { id: "salt_bags", name: "盐袋", nameEn: "Salt Bags", x: 50, y: 45, radius: 10 }
    ],
    words: [
      { zh: "驴子", en: "Donkey" },
      { zh: "盐", en: "Salt" },
      { zh: "河水", en: "River" }
    ],
    fableText: [
      "一只驴子背着沉重的盐袋过河。一不小心，它滑倒在水里。等它站起来时，发现背上的盐被水化掉了一大半，顿时觉得轻松了许多。",
      "驴子心里暗暗高兴，以为自己发现了一个偷懒的好办法。",
      "几天后，主人让驴子驮着一筐海绵过河。驴子走到河中间时，故意装作滑倒，一屁股坐在了水里。",
      "它本以为站起来后会变得更轻松，谁知道海绵吸满了水，变得比石头还要重！",
      "最后，这只自作聪明的驴子被重重的海绵压在水里，差点淹死。小聪明有时候会带来大麻烦哦。"
    ],
    parentGuide: "驴子第一次摔在水里的时候，为什么觉得背上的东西变轻了？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "驴子第二次过河的时候，背上背的是什么东西？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么海绵掉进水里之后，会变得越来越重呢？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果主人下次让它驮木头过河，你觉得它还敢故意摔倒吗？", color: "#fa709a" }
    ],
    lifeConnection: "就像我们学习和做家务一样，不能总是想着耍小聪明偷懒，不然最后吃亏的还是自己哦。",
    retellingPrompt: "你来演那只驴子，背着吸满水的海绵走路时，你的表情是什么样的？"
  },
  {
    id: "fable_bear_travelers",
    type: "fable",
    title: "熊和两个旅人 / The Bear and the Travelers",
    image: "/images/bear_travelers.jpg",
    hotspots: [
      { id: "bear", name: "大熊", nameEn: "Bear", x: 50, y: 55, radius: 15 },
      { id: "tree_man", name: "树上的人", nameEn: "Man in Tree", x: 75, y: 30, radius: 10 },
      { id: "ground_man", name: "地上的人", nameEn: "Man on Ground", x: 45, y: 75, radius: 10 }
    ],
    words: [
      { zh: "朋友", en: "Friend" },
      { zh: "大熊", en: "Bear" },
      { zh: "爬树", en: "Climb" }
    ],
    fableText: [
      "有两个好朋友一起在森林里赶路，突然，一头大熊从树丛里咆哮着冲了出来。",
      "其中一个人反应很快，立刻丢下同伴，敏捷地爬上了一棵大树躲了起来。",
      "另一个人不会爬树，眼看大熊就要扑过来了，他情急之下趴在地上，屏住呼吸，一动不动地装死。",
      "大熊走到他身边，低着头围着他嗅了嗅，以为他已经死了，就摇晃着身体走开了。因为熊是不吃死人的。",
      "等大熊走远了，树上那个人爬下来，笑着问：‘刚才熊在你耳边说了什么呀？’那个人冷冷地回答：‘熊告诉我，不要和遇到危险就丢下朋友的人做朋友。’"
    ],
    parentGuide: "遇到大熊的时候，树上的那个人是怎么做的？他有没有管自己的朋友？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "不会爬树的那个人是怎么躲过大熊的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "地上那个人为什么以后不想和树上那个人做朋友了？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果下次他们两个再遇到危险，你觉得地上那个人会帮树上那个人吗？", color: "#fa709a" }
    ],
    lifeConnection: "真正的好朋友是互相帮助的，而不是在遇到困难时只顾自己逃跑。你在幼儿园有好朋友吗？",
    retellingPrompt: "如果你是地上装死的那个人，大熊走后你会对你的朋友说什么？"
  },
  {
    id: "fable_stag_reflection",
    type: "fable",
    title: "鹿和倒影 / The Stag at the Pool",
    image: "/images/stag_reflection.jpg",
    hotspots: [
      { id: "stag", name: "雄鹿", nameEn: "Stag", x: 40, y: 50, radius: 15 },
      { id: "horns", name: "鹿角", nameEn: "Antlers", x: 45, y: 35, radius: 10 },
      { id: "reflection", name: "水面倒影", nameEn: "Reflection", x: 45, y: 75, radius: 15 }
    ],
    words: [
      { zh: "雄鹿", en: "Stag" },
      { zh: "鹿角", en: "Antlers" },
      { zh: "倒影", en: "Reflection" }
    ],
    fableText: [
      "一只口渴的雄鹿来到清澈的池塘边喝水。它看着水里自己的倒影，非常满意地说：‘看我的鹿角多么雄伟美丽，像王冠一样！’",
      "但是，当它看到自己细细长长的腿时，又嫌弃地叹了口气：‘唉，我的腿怎么这么细这么难看，一点也配不上我美丽的鹿角。’",
      "突然，远处传来猎人的脚步声和猎狗的吠叫声。雄鹿撒开它那嫌弃的细腿，在开阔的平原上飞快地奔跑，把猎人远远地甩在了后面。",
      "可是，当它跑进茂密的森林时，它引以为傲的美丽鹿角却被树枝死死地缠住了，怎么拔也拔不出来！",
      "猎狗追了上来。雄鹿临死前懊悔地说：‘我真傻！那双被我嫌弃的腿差点救了我的命，而我最喜欢的鹿角却害死了我！’"
    ],
    parentGuide: "这只鹿最喜欢自己身上的什么地方？最讨厌什么地方？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "雄鹿逃跑的时候，是什么被树枝缠住了？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么说最后是它讨厌的腿差点救了它？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果这只鹿没有美丽的鹿角，只有光秃秃的脑袋，它还能逃过猎狗吗？", color: "#fa709a" }
    ],
    lifeConnection: "有时候看起来不好看的东西，可能非常有用；看起来很漂亮的东西，反而会带来麻烦。我们不能只看外表哦！",
    retellingPrompt: "假装你是一头骄傲的鹿，你看着水里的影子，会怎么夸奖自己的鹿角？"
  },
  {
    id: "fable_bat_birds_beasts",
    type: "fable",
    title: "蝙蝠、鸟和野兽 / The Bat, Birds, and Beasts",
    image: "/images/bat_birds_beasts.jpg",
    hotspots: [
      { id: "bat", name: "蝙蝠", nameEn: "Bat", x: 50, y: 30, radius: 10 },
      { id: "birds", name: "鸟类", nameEn: "Birds", x: 25, y: 40, radius: 12 },
      { id: "beasts", name: "野兽", nameEn: "Beasts", x: 75, y: 70, radius: 15 }
    ],
    words: [
      { zh: "蝙蝠", en: "Bat" },
      { zh: "鸟类", en: "Birds" },
      { zh: "野兽", en: "Beasts" }
    ],
    fableText: [
      "很久以前，天上的鸟类和地上的野兽发生了一场战争。",
      "蝙蝠既有牙齿又有翅膀。当野兽打胜仗时，蝙蝠就跑到野兽的阵营里说：‘你看我长着牙齿，我是野兽，我站在你们这边！’",
      "可是没过多久，鸟类打赢了。蝙蝠又飞到鸟类的阵营里说：‘你看我长着翅膀，我是鸟类，我和你们是一伙的！’",
      "蝙蝠就这样在两边摇摆不定，只帮赢的那一边。",
      "最后，鸟类和野兽讲和了。大家聚在一起，揭穿了蝙蝠的两面派行为。从此以后，蝙蝠既不敢见鸟类，也不敢见野兽，只能在黑夜里偷偷摸摸地飞出来。"
    ],
    parentGuide: "蝙蝠为什么一会儿说自己是野兽，一会儿又说自己是鸟类？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "野兽打胜仗的时候，蝙蝠展示了自己身上的什么部位？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么最后大家都不和蝙蝠做朋友了？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果以后再发生战争，蝙蝠还会跑到赢的那边去吗？", color: "#fa709a" }
    ],
    lifeConnection: "做人要诚实，不能像墙头草一样两边倒，这样最后会失去所有的朋友。你觉得我们应该怎么做个好朋友？",
    retellingPrompt: "请你用生气的语气，代替鸟类和野兽对蝙蝠说一句批评的话！"
  },
  {
    id: "fable_mouse_frog",
    type: "fable",
    title: "老鼠和青蛙 / The Mouse and the Frog",
    image: "/images/mouse_frog.jpg",
    hotspots: [
      { id: "mouse", name: "老鼠", nameEn: "Mouse", x: 35, y: 65, radius: 10 },
      { id: "frog", name: "青蛙", nameEn: "Frog", x: 60, y: 70, radius: 10 },
      { id: "hawk", name: "老鹰", nameEn: "Hawk", x: 75, y: 20, radius: 12 }
    ],
    words: [
      { zh: "老鼠", en: "Mouse" },
      { zh: "青蛙", en: "Frog" },
      { zh: "老鹰", en: "Hawk" }
    ],
    fableText: [
      "一只陆地上的老鼠和一只水里的青蛙成了好朋友。青蛙想开个玩笑，用一根绳子把老鼠的脚和自己的脚绑在了一起。",
      "一开始他们在草地上玩得很高兴。可是后来，青蛙跳进了一个池塘里，拉着老鼠也一起下水了。",
      "青蛙在水里游得很欢快，还开心地‘呱呱’叫。可是可怜的老鼠根本不会游泳，在水里扑腾了几下，很快就淹死了，漂在水面上。",
      "就在这时，天空中飞过一只老鹰。老鹰一眼就看到了水面上死去的老鼠，立刻俯冲下来，抓起老鼠飞向天空。",
      "因为青蛙的脚和老鼠绑在一起，所以青蛙也被老鹰一起带到了天空中，变成了老鹰的美餐。害人终害己呀！"
    ],
    parentGuide: "青蛙为什么要用绳子把自己和老鼠绑在一起呢？它是故意的吗？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "老鼠跳进水里之后发生了什么事？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "青蛙最后为什么也会被老鹰抓走？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果老鼠在下水之前挣脱了绳子，老鹰还会抓走青蛙吗？", color: "#fa709a" }
    ],
    lifeConnection: "随便开别人的玩笑，有时候不仅会伤害别人，还会给自己带来很大的麻烦。我们平时和小朋友玩要注意安全哦！",
    retellingPrompt: "假装你是那只无辜的小老鼠，被青蛙拉下水时，你会怎么喊救命？"
  },
  {
    id: "fable_kongrong_pears",
    type: "fable",
    title: "孔融让梨 / Kong Rong Giving up Pears",
    image: "/images/kongrong_pears.jpg",
    hotspots: [
      { id: "kongrong", name: "小孔融", nameEn: "Kong Rong", x: 45, y: 65, radius: 12 },
      { id: "pears", name: "一筐梨", nameEn: "Basket of Pears", x: 60, y: 70, radius: 10 },
      { id: "father", name: "父亲", nameEn: "Father", x: 30, y: 40, radius: 15 }
    ],
    words: [
      { zh: "孔融", en: "Kong Rong" },
      { zh: "梨", en: "Pear" },
      { zh: "谦让", en: "Yield" }
    ],
    fableText: [
      "古时候有个聪明懂事的小男孩叫孔融。他四岁的时候，有一天父亲买回了一大筐又香又甜的梨子。",
      "父亲把梨子放在桌上，让孔融先挑一个吃。孔融看了看，挑了一个最小的梨子拿在手里。",
      "父亲觉得很奇怪，问他：‘那么多大梨你不拿，为什么偏偏挑一个最小的呢？’",
      "孔融恭敬地回答说：‘我的年纪最小，所以应该吃最小的梨。大的梨要留给哥哥们吃。’",
      "大家听了，都夸奖小孔融是个懂得谦让的好孩子。这个美德一直流传到了今天。"
    ],
    parentGuide: "孔融四岁的时候，爸爸买回来一筐梨，他是怎么挑的呢？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "孔融为什么要把大梨留给哥哥们？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "爸爸听了孔融的话，心里一定觉得怎么样？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果是你分东西，你会把自己最喜欢的那个分给谁？", color: "#fa709a" }
    ],
    lifeConnection: "在家里有好吃的，我们也要像孔融一样，懂得和家人分享，不要一个人独吞哦！你上次分享东西给了谁？",
    retellingPrompt: "如果你是小孔融，当爸爸问你为什么拿小梨的时候，请用有礼貌的声音再说一遍你的理由。"
  },
  {
    id: "fable_ants_moving",
    type: "fable",
    title: "蚂蚁搬家 / The Ants Moving House",
    image: "/images/ants_moving.jpg",
    hotspots: [
      { id: "ants", name: "蚂蚁队伍", nameEn: "Ant Parade", x: 50, y: 70, radius: 20 },
      { id: "crumb", name: "面包屑", nameEn: "Bread Crumb", x: 30, y: 65, radius: 10 },
      { id: "anthill", name: "蚁穴", nameEn: "Anthill", x: 80, y: 60, radius: 12 }
    ],
    words: [
      { zh: "蚂蚁", en: "Ant" },
      { zh: "搬家", en: "Move" },
      { zh: "合作", en: "Teamwork" }
    ],
    fableText: [
      "一群小蚂蚁住在草地上的一个小蚁穴里。有一天，天空变得灰蒙蒙的，蚂蚁队长闻了闻空气说：'要下大雨了，我们必须赶紧搬到高处去！'",
      "蚂蚁们立刻行动起来。它们排成一条整齐的长队，有的搬粮食，有的搬蚁卵，有的搬树叶当雨伞。",
      "路上，一只小蚂蚁发现了一块大面包屑，比它自己大十倍！它一个人根本搬不动，急得团团转。",
      "但是很快，四五只蚂蚁跑来帮忙。它们齐心协力，喊着'一二三！'，一起把大面包屑抬了起来，稳稳地搬回了新家。",
      "就在最后一只蚂蚁进洞的时候，豆大的雨点噼里啪啦地落了下来。大家安全地待在新家里，开心地分享着美味的面包屑。"
    ],
    parentGuide: "小蚂蚁们为什么要搬家呢？它们搬家的时候是怎么配合的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "蚂蚁队长是怎么知道要下雨了的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么一只小蚂蚁搬不动面包屑，但几只蚂蚁一起就能搬动了？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果雨停了以后，蚂蚁们还会搬回原来的家吗？", color: "#fa709a" }
    ],
    lifeConnection: "蚂蚁虽然个头小，但团结合作就能做成大事！你在幼儿园和小朋友一起完成过什么事情？",
    retellingPrompt: "假装你是蚂蚁队长，你大声喊一句命令，让所有蚂蚁赶快行动起来！"
  },
  {
    id: "fable_careless_bear",
    type: "fable",
    title: "小马虎 / The Careless Little Bear",
    image: "/images/careless_bear.jpg",
    hotspots: [
      { id: "bear", name: "小熊", nameEn: "Little Bear", x: 45, y: 55, radius: 15 },
      { id: "backpack", name: "书包", nameEn: "Backpack", x: 25, y: 65, radius: 10 },
      { id: "school", name: "学校", nameEn: "School", x: 80, y: 40, radius: 15 }
    ],
    words: [
      { zh: "马虎", en: "Careless" },
      { zh: "检查", en: "Check" },
      { zh: "细心", en: "Careful" }
    ],
    fableText: [
      "小熊贝贝做事总是马马虎虎。早上上学出门前，妈妈提醒他：'贝贝，检查一下书包哦！'贝贝拍拍胸脯说：'放心吧，都带齐了！'",
      "到了学校，语文课上，老师让大家拿出课本。贝贝翻遍了书包，发现语文课本忘在家里的枕头底下了。他只好红着脸和同桌一起看。",
      "数学课上，老师让大家做练习。贝贝翻书包找铅笔，结果发现自己带了三块橡皮，却一支铅笔都没有。他又不好意思地向后桌借。",
      "放学回家后，贝贝主动对妈妈说：'妈妈，我以后出门前一定要仔细检查书包！'妈妈笑着拿出一张清单递给他。",
      "从那以后，贝贝每天晚上睡觉前都对着清单一样一样地把东西放进书包里，再也没有忘带过东西。大家都说贝贝变成了一个细心的好孩子。"
    ],
    parentGuide: "小熊贝贝上学的时候忘了带什么？后来他是怎么改掉马虎的坏习惯的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "贝贝到了学校发现自己忘了带哪些东西？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "妈妈给贝贝的那张清单上可能写了什么内容？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果贝贝的好朋友也很马虎，贝贝会怎么帮他？", color: "#fa709a" }
    ],
    lifeConnection: "我们做事情也要细心，出门之前先检查好要带的东西。你每天上学前会检查书包吗？",
    retellingPrompt: "假装你是小熊贝贝，你在学校发现忘带课本的时候，你的心里是什么感觉？请说出来。"
  },
  {
    id: "fable_two_silly_bears",
    type: "fable",
    title: "两只笨狗熊 / Two Silly Bears",
    image: "/images/two_silly_bears.jpg",
    hotspots: [
      { id: "big_bear", name: "大狗熊", nameEn: "Big Bear", x: 30, y: 55, radius: 12 },
      { id: "small_bear", name: "小狗熊", nameEn: "Small Bear", x: 55, y: 60, radius: 12 },
      { id: "fox", name: "狐狸", nameEn: "Fox", x: 75, y: 50, radius: 10 }
    ],
    words: [
      { zh: "狗熊", en: "Bear" },
      { zh: "干饼", en: "Pancake" },
      { zh: "狐狸", en: "Fox" }
    ],
    fableText: [
      "两只狗熊兄弟在路上捡到了一张又大又圆的干饼。哥哥说：'我先捡到的，我分多一点！'弟弟说：'不行，我也看到了，应该平均分！'",
      "两只狗熊吵来吵去，谁也不肯让步。正在这时候，一只狐狸笑嘻嘻地走了过来：'别吵啦，让我来帮你们公平地分吧！'",
      "狐狸把干饼掰成了两半，故意一块大一块小。哥哥喊道：'不公平，他那块比我的大！'",
      "狐狸说：'别急！'它张嘴在大的那块上咬了一口。这下大的变成了小的，弟弟又喊：'不公平！'狐狸又在另一块上咬了一口……",
      "就这样，狐狸左咬一口右咬一口，一张大饼越变越小。等两只狗熊反应过来的时候，每人手里只剩下了一点点饼渣。狐狸摸着圆滚滚的肚子，心满意足地走了。"
    ],
    parentGuide: "两只笨狗熊为什么最后只剩下一点点饼渣了呢？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "狐狸是用什么办法帮两只狗熊分饼的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "狐狸真的是想帮忙吗？它心里其实在想什么？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果两只狗熊自己商量好怎么分，就不找狐狸帮忙，结果会怎么样？", color: "#fa709a" }
    ],
    lifeConnection: "和朋友分东西的时候，自己商量比让别人来分更好。你和好朋友是怎么分享零食的？",
    retellingPrompt: "假装你是那只狡猾的狐狸，一边咬饼一边笑嘻嘻地说一句话！"
  },
  {
    id: "fable_fisherman_genie",
    type: "fable",
    title: "渔夫和魔鬼 / The Fisherman and the Genie",
    image: "/images/fisherman_genie.jpg",
    hotspots: [
      { id: "fisherman", name: "渔夫", nameEn: "Fisherman", x: 30, y: 65, radius: 12 },
      { id: "bottle", name: "瓶子", nameEn: "Bottle", x: 55, y: 55, radius: 10 },
      { id: "genie", name: "魔鬼", nameEn: "Genie", x: 65, y: 30, radius: 15 }
    ],
    words: [
      { zh: "渔夫", en: "Fisherman" },
      { zh: "瓶子", en: "Bottle" },
      { zh: "魔鬼", en: "Genie" }
    ],
    fableText: [
      "一个穷渔夫在大海里撒网捕鱼，拉上来一只铜瓶子。他好奇地打开瓶盖，呼地一声，从瓶子里冒出一股浓烟，变成了一个巨大的魔鬼。",
      "魔鬼凶巴巴地对渔夫说：'我在瓶子里被关了一千年！谁放我出来，我就要吃掉谁！'",
      "渔夫非常害怕，但他假装不相信地说：'你这么大的身体，怎么可能住在这么小的瓶子里？我不信！除非你变回去让我看看。'",
      "笨魔鬼为了证明自己，立刻化成一缕烟，钻回了铜瓶子里。渔夫眼疾手快，立刻把瓶盖牢牢地盖上了。",
      "魔鬼在瓶子里拼命喊叫，可再也出不来了。聪明的渔夫把瓶子扔回了大海深处。有智慧的人，连凶恶的魔鬼也不用怕！"
    ],
    parentGuide: "渔夫打开瓶子后遇到了什么危险？他是怎么用智慧战胜魔鬼的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "魔鬼告诉渔夫，它在瓶子里被关了多少年？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "渔夫为什么要骗魔鬼说不相信它能住在瓶子里？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果将来又有人在大海里捞到了这个瓶子，你觉得他会打开吗？", color: "#fa709a" }
    ],
    lifeConnection: "遇到困难和危险的时候，不要害怕，要像渔夫一样冷静思考，用聪明的脑袋想办法！",
    retellingPrompt: "假装你是那个渔夫，用很勇敢的声音对魔鬼说：'我才不信你能住在这个小瓶子里呢！'"
  },
  {
    id: "fable_proud_mosquito",
    type: "fable",
    title: "骄傲的蚊子 / The Proud Mosquito",
    image: "/images/proud_mosquito.jpg",
    hotspots: [
      { id: "mosquito", name: "蚊子", nameEn: "Mosquito", x: 70, y: 62, radius: 8 },
      { id: "lion", name: "狮子", nameEn: "Lion", x: 35, y: 50, radius: 15 },
      { id: "spiderweb", name: "蜘蛛网", nameEn: "Spider Web", x: 65, y: 22, radius: 10 }
    ],
    words: [
      { zh: "蚊子", en: "Mosquito" },
      { zh: "狮子", en: "Lion" },
      { zh: "蜘蛛网", en: "Spider Web" }
    ],
    fableText: [
      "一只骄傲的小蚊子飞到狮子面前，大声说：'我一点都不怕你，而且我比你更强大！'",
      "说完，蚊子就扑上去，专门咬狮子鼻子上没有毛的地方。",
      "狮子气坏了，用爪子去抓蚊子，结果没抓到蚊子，反而把自己的鼻子抓破了。狮子只好认输。",
      "蚊子得意极了，吹着喇叭飞走了。谁知它光顾着高兴，一头撞进了蜘蛛网里，被蜘蛛抓住了。",
      "小蚊子打败了最强大的狮子，却死在了小小的蜘蛛手里。取得一点成绩就骄傲自满，早晚会吃大亏的。"
    ],
    parentGuide: "蚊子为什么能打败狮子？它最后怎么会被蜘蛛抓住呢？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "蚊子专门咬了狮子哪个地方？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "如果蚊子打败狮子后不骄傲，它还会撞到蜘蛛网里吗？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "你觉得狮子以后再遇到蚊子，会怎么做呢？", color: "#fa709a" }
    ],
    lifeConnection: "当我们做得很棒、得了第一名的时候，也要保持谦虚，因为总有一些事情是我们不会的呀！",
    retellingPrompt: "假装你是那只得意忘形的蚊子，在被蜘蛛网粘住时会喊些什么？"
  },
  {
    id: "fable_camel_tent",
    type: "fable",
    title: "骆驼和帐篷 / The Camel and the Tent",
    image: "/images/camel_tent.jpg",
    hotspots: [
      { id: "camel", name: "骆驼", nameEn: "Camel", x: 52, y: 45, radius: 15 },
      { id: "arab", name: "阿拉伯人", nameEn: "Arab", x: 75, y: 70, radius: 12 },
      { id: "tent", name: "帐篷", nameEn: "Tent", x: 28, y: 52, radius: 20 }
    ],
    words: [
      { zh: "骆驼", en: "Camel" },
      { zh: "阿拉伯人", en: "Arab" },
      { zh: "帐篷", en: "Tent" }
    ],
    fableText: [
      "一个寒冷的沙漠夜晚，阿拉伯人在温暖的帐篷里休息。外面的骆驼冷得发抖，请求说：'主人，请让我的头伸进来暖和一下吧。'",
      "主人同意了。过了一会儿，骆驼又说：'我的脖子也快冻僵了，让我把脖子也伸进去吧。'",
      "主人心软又答应了。没多久，骆驼继续得寸进尺：'我只放前腿进去，不占什么地方的。'",
      "主人刚一答应，骆驼就把整个身子都挤进了帐篷。帐篷太小了，装不下他们两个。",
      "最后，自私的骆驼把主人挤出了帐篷，自己舒舒服服地睡在里面。对贪得无厌的人一味让步，最后只会让自己无路可走。"
    ],
    parentGuide: "骆驼是怎么一步步把主人挤出帐篷的？主人做得对吗？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "骆驼最开始请求把身体的哪个部位伸进帐篷？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "如果主人一开始就坚定地拒绝骆驼，会发生什么事？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "第二天早上，主人会怎么对待这只骆驼呢？", color: "#fa709a" }
    ],
    lifeConnection: "遇到别人提过分的要求时，我们要勇敢地说'不'，学会保护自己应有的权利哦。",
    retellingPrompt: "假装你是那个在寒风中发抖的主人，对霸占了帐篷的骆驼说一句话！"
  },
  {
    id: "fable_clever_rooster",
    type: "fable",
    title: "聪明的公鸡 / The Clever Rooster",
    image: "/images/clever_rooster.jpg",
    hotspots: [
      { id: "rooster", name: "公鸡", nameEn: "Rooster", x: 62, y: 22, radius: 10 },
      { id: "fox", name: "狐狸", nameEn: "Fox", x: 35, y: 76, radius: 15 },
      { id: "tree", name: "大树", nameEn: "Tree", x: 82, y: 55, radius: 20 }
    ],
    words: [
      { zh: "公鸡", en: "Rooster" },
      { zh: "狐狸", en: "Fox" },
      { zh: "大树", en: "Tree" }
    ],
    fableText: [
      "一只公鸡飞到高高的大树上休息。一只狡猾的狐狸走过来，想把公鸡骗下来吃掉。",
      "狐狸甜言蜜语地说：'公鸡弟弟，好消息呀！所有的动物都签订了和平条约，以后大家就是好朋友了，快下来我们拥抱一下吧！'",
      "聪明的公鸡一眼就看穿了狐狸的诡计，它伸长脖子向远处看，装作很惊讶的样子。",
      "狐狸问它在看什么，公鸡说：'哎呀，有几只猎狗正朝我们这里跑来，它们肯定也是来拥抱你的！'",
      "狐狸一听有猎狗，吓得夹起尾巴拼命逃跑了。遇到坏人时，不要慌张，动动脑筋就能保护自己。"
    ],
    parentGuide: "狐狸对公鸡撒了什么谎？公鸡是怎么吓跑狐狸的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "公鸡站在哪里休息？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "狐狸为什么要说动物们签订了'和平条约'？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果狐狸发现根本没有猎狗，它会回来吗？", color: "#fa709a" }
    ],
    lifeConnection: "如果遇到陌生人给你糖果或者让你跟他走，你应该怎么做呢？",
    retellingPrompt: "假装你是那只站在树上的聪明公鸡，用夸张的语气对狐狸喊出有猎狗跑过来的消息！"
  },
  {
    id: "fable_two_pots",
    type: "fable",
    title: "两只罐子 / The Two Pots",
    image: "/images/two_pots.jpg",
    hotspots: [
      { id: "brass_pot", name: "铜罐", nameEn: "Brass Pot", x: 39, y: 55, radius: 12 },
      { id: "earthen_pot", name: "陶罐", nameEn: "Earthen Pot", x: 72, y: 72, radius: 12 },
      { id: "river", name: "河流", nameEn: "River", x: 50, y: 40, radius: 25 }
    ],
    words: [
      { zh: "铜罐", en: "Brass Pot" },
      { zh: "陶罐", en: "Earthen Pot" },
      { zh: "河流", en: "River" }
    ],
    fableText: [
      "洪水冲走了一只铜罐和一只陶罐。它们顺着河水一起往下游漂去。",
      "铜罐很骄傲，对陶罐说：'陶罐兄弟，你靠近我一点，我可以保护你，不让你被水冲破。'",
      "陶罐却赶紧躲开说：'谢谢你！但我更怕碰到你。如果你不小心撞到我，我就碎成碎片了。我们还是保持距离吧。'",
      "果然，河水湍急，波浪翻滚。铜罐不管怎么小心，还是常常被水浪推得撞来撞去。",
      "陶罐远远地避开铜罐，安全地漂过了急流。交朋友要看清对方，有些看似能保护你的人，反而会给你带来危险。"
    ],
    parentGuide: "铜罐想靠近陶罐保护它，陶罐为什么拒绝了？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "是什么把两只罐子冲走的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "陶罐为什么害怕铜罐撞到自己？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果它们两个一直靠在一起，最后陶罐会变成什么样？", color: "#fa709a" }
    ],
    lifeConnection: "和别人玩耍的时候，我们要学会保护自己，不要去做那些可能会让自己受伤的危险游戏哦。",
    retellingPrompt: "假装你是那只小陶罐，用害怕的声音告诉铜罐你为什么要躲开它。"
  },
  {
    id: "fable_eagle_turtle",
    type: "fable",
    title: "老鹰和乌龟 / The Eagle and the Turtle",
    image: "/images/eagle_turtle.jpg",
    hotspots: [
      { id: "eagle", name: "老鹰", nameEn: "Eagle", x: 50, y: 32, radius: 15 },
      { id: "turtle", name: "乌龟", nameEn: "Turtle", x: 48, y: 58, radius: 10 },
      { id: "sky", name: "天空", nameEn: "Sky", x: 50, y: 12, radius: 25 },
      { id: "rocks", name: "岩石", nameEn: "Rocks", x: 75, y: 82, radius: 20 }
    ],
    words: [
      { zh: "老鹰", en: "Eagle" },
      { zh: "乌龟", en: "Turtle" },
      { zh: "天空", en: "Sky" }
    ],
    fableText: [
      "一只乌龟看到老鹰在天空中自由飞翔，心里非常羡慕，一直梦想着自己也能飞。",
      "它恳求老鹰教它飞翔。老鹰劝它说：'乌龟弟弟，你的身体太重了，而且没有翅膀，是不可能飞起来的。'",
      "可是乌龟不听，一再坚持，甚至答应送给老鹰许多珍宝。老鹰无奈，只好用爪子抓住乌龟飞上了高空。",
      "到了半空中，老鹰松开爪子，对乌龟说：'那你自己飞吧！'结果乌龟像石头一样直直地掉下去，摔在岩石上粉身碎骨了。",
      "每个人都有自己的长处和短处，如果盲目追求不切实际的东西，往往会带来不幸的后果。"
    ],
    parentGuide: "乌龟为什么想要飞？它最后的结果怎么样？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "老鹰为什么认为乌龟不能飞？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "老鹰把它带到天上后松手，是真的想教它飞吗？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果乌龟还有一次机会，它还会要求老鹰带它飞吗？", color: "#fa709a" }
    ],
    lifeConnection: "虽然乌龟不能飞，但它在水里游泳很厉害呀！你觉得自己最擅长、最棒的事情是什么呢？",
    retellingPrompt: "假装你是那只在天上开始掉下来的乌龟，大声喊出你现在的心情！"
  },
  {
    id: "fable_crow_peacock",
    type: "fable",
    title: "乌鸦和孔雀 / The Crow and the Peacocks",
    image: "/images/crow_peacock.jpg",
    hotspots: [
      { id: "crow", name: "乌鸦", nameEn: "Crow", x: 40, y: 65, radius: 10 },
      { id: "peacock_feathers", name: "孔雀羽毛", nameEn: "Peacock Feathers", x: 22, y: 56, radius: 12 },
      { id: "peacocks", name: "孔雀群", nameEn: "Peacocks", x: 75, y: 52, radius: 20 }
    ],
    words: [
      { zh: "乌鸦", en: "Crow" },
      { zh: "孔雀羽毛", en: "Peacock Feathers" },
      { zh: "孔雀群", en: "Peacocks" }
    ],
    fableText: [
      "一只乌鸦非常嫌弃自己黑乎乎的羽毛。有一天，它在草地上捡到了一些孔雀掉落的美丽羽毛。",
      "乌鸦把这些绚丽的羽毛插在自己的尾巴上，觉得自己美极了。它骄傲地离开了乌鸦家族，跑去加入孔雀群体。",
      "可是孔雀们一眼就看出了这是一只伪装的乌鸦。它们毫不客气地啄掉了乌鸦身上的假羽毛，把它赶了出去。",
      "伤心的乌鸦只好跑回原来的乌鸦群。但是同伴们也很生气它之前的背叛，不肯再接纳它了。",
      "这只爱慕虚荣的乌鸦最后变得孤苦伶仃。我们应该做真实的自己，不要去伪装成别人的样子。"
    ],
    parentGuide: "乌鸦为了变美做了什么傻事？它为什么最后谁都不理它了？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "乌鸦把什么东西插在了自己的尾巴上？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "孔雀们为什么要啄掉乌鸦身上的假羽毛？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果其他小乌鸦看到了这只被赶回来的乌鸦，会对它说什么？", color: "#fa709a" }
    ],
    lifeConnection: "每个人都有自己特别的地方，像你虽然不是超人，但你有自己最可爱的地方！告诉妈妈你哪里最棒？",
    retellingPrompt: "假装你是那些孔雀，用生气的语气对假装成孔雀的乌鸦说一句话！"
  },
  {
    id: "fable_three_monks",
    type: "fable",
    title: "三个和尚 / Three Monks",
    image: "/images/three_monks.jpg",
    hotspots: [
      { id: "monk1", name: "小和尚", nameEn: "Little Monk", x: 25, y: 70, radius: 10 },
      { id: "monk2", name: "高和尚", nameEn: "Tall Monk", x: 43, y: 65, radius: 12 },
      { id: "monk3", name: "胖和尚", nameEn: "Plump Monk", x: 65, y: 68, radius: 12 },
      { id: "temple", name: "山上寺庙", nameEn: "Temple on the Hill", x: 82, y: 20, radius: 15 }
    ],
    words: [
      { zh: "和尚", en: "Monk" },
      { zh: "水桶", en: "Water Bucket" },
      { zh: "寺庙", en: "Temple" }
    ],
    fableText: [
      "山上有座小寺庙，刚开始只有一个小和尚。他每天自己下山挑水，喝水很充足。",
      "后来来了一个高和尚。两个人谁也不愿意多干活，只好用一根扁担一起抬水喝，虽然累但也够喝。",
      "不久又来了一个胖和尚。这下大家都想偷懒，互相推脱，谁也不去挑水了。",
      "结果，三个和尚都渴得受不了，连菩萨面前的净水瓶也干了。",
      "如果不肯互相合作、只顾自己偷懒，最后大家都会吃大亏的！"
    ],
    parentGuide: "为什么一个和尚有水喝，三个和尚反而没水喝了？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "最后来的那个和尚是什么样子的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "如果有第四个和尚来，你觉得他们会有水喝吗？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "三个渴坏了的和尚接下来会怎么做呢？", color: "#fa709a" }
    ],
    lifeConnection: "在幼儿园大扫除的时候，如果我们都等别人去扫地，教室还能变干净吗？",
    retellingPrompt: "假装你是那个渴得不行的胖和尚，叹着气抱怨一句没水喝的话吧！"
  },
  {
    id: "fable_lion_boar",
    type: "fable",
    title: "狮子和野猪 / The Lion and the Boar",
    image: "/images/lion_boar.jpg",
    hotspots: [
      { id: "lion", name: "狮子", nameEn: "Lion", x: 68, y: 62, radius: 15 },
      { id: "boar", name: "野猪", nameEn: "Boar", x: 28, y: 68, radius: 12 },
      { id: "vultures", name: "秃鹰", nameEn: "Vultures", x: 78, y: 14, radius: 10 }
    ],
    words: [
      { zh: "狮子", en: "Lion" },
      { zh: "野猪", en: "Boar" },
      { zh: "秃鹰", en: "Vultures" }
    ],
    fableText: [
      "炎热的夏天，狮子和野猪来到一口小泉水边。他们为了谁先喝水，互不相让，激烈地打了起来。",
      "打得筋疲力尽的时候，他们停下来喘气，突然抬头看了看天空。",
      "原来天上有几只饥饿的秃鹰正在盘旋，就等着他们中间谁被咬死，好下来饱餐一顿。",
      "狮子和野猪看到这个情形，立刻停止了打斗。他们互相说：'我们还是做朋友吧，总比变成秃鹰的午餐好！'",
      "在遇到争执时，各退一步，和平相处，才不会让坏人坐收渔翁之利。"
    ],
    parentGuide: "狮子和野猪为什么要打架？后来为什么又不打了？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "天上盘旋着什么动物？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "秃鹰希望狮子和野猪谁打赢？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "做回好朋友的狮子和野猪会怎么分享泉水呢？", color: "#fa709a" }
    ],
    lifeConnection: "当你和好朋友抢一个玩具时，最好的解决办法是什么呢？是一起玩还是把它扔掉？",
    retellingPrompt: "假装你是那头聪明的野猪，指着天上的秃鹰对狮子说出你的发现！"
  },
  {
    id: "fable_peacock_crane",
    type: "fable",
    title: "孔雀和白鹤 / The Peacock and the Crane",
    image: "/images/peacock_crane.jpg",
    hotspots: [
      { id: "peacock", name: "孔雀", nameEn: "Peacock", x: 48, y: 72, radius: 15 },
      { id: "crane", name: "白鹤", nameEn: "Crane", x: 68, y: 16, radius: 12 },
      { id: "clouds", name: "白云", nameEn: "Clouds", x: 28, y: 20, radius: 20 }
    ],
    words: [
      { zh: "孔雀", en: "Peacock" },
      { zh: "白鹤", en: "Crane" },
      { zh: "羽毛", en: "Feathers" }
    ],
    fableText: [
      "孔雀骄傲地向白鹤炫耀自己美丽的羽毛，嘲笑白鹤的羽毛单调又灰暗。",
      "孔雀展开了五彩缤纷的尾巴，得意地说：'看我像国王一样华丽，而你就像个普通的泥巴球！'",
      "白鹤并没有生气，它张开宽阔的翅膀，直接飞向了高高的蓝天。",
      "白鹤在云端对孔雀喊道：'你的羽毛确实很美，但你只能在地上像公鸡一样走来走去。而我，能在广阔的天空中自由飞翔！'",
      "外表的美丽不是最重要的，拥有真正的本领才值得骄傲。"
    ],
    parentGuide: "孔雀炫耀了什么？白鹤用什么本领让孔雀闭嘴了？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "孔雀怎么形容白鹤的羽毛？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "白鹤飞上天空的时候，孔雀心里会怎么想？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "以后孔雀还会到处炫耀自己的羽毛吗？", color: "#fa709a" }
    ],
    lifeConnection: "如果有小朋友炫耀他的新衣服，你可以用自己画的漂亮图画或者搭的乐高来展示你的本领呀！",
    retellingPrompt: "假装你是那只飞在天上的白鹤，大声地告诉孔雀你的本领！"
  },
  {
    id: "fable_oak_reed",
    type: "fable",
    title: "橡树和芦苇 / The Oak and the Reed",
    image: "/images/oak_reed.jpg",
    hotspots: [
      { id: "oak", name: "橡树", nameEn: "Oak Tree", x: 32, y: 48, radius: 20 },
      { id: "reed", name: "芦苇", nameEn: "Reed", x: 65, y: 88, radius: 10 },
      { id: "wind", name: "狂风", nameEn: "Fierce Wind", x: 75, y: 22, radius: 25 }
    ],
    words: [
      { zh: "橡树", en: "Oak" },
      { zh: "芦苇", en: "Reed" },
      { zh: "狂风", en: "Wind" }
    ],
    fableText: [
      "高大的橡树看不起河边的芦苇，嘲笑它们太软弱，连一只小鸟停在上面都会弯腰。",
      "橡树骄傲地说：'你看我，树干多么粗壮！哪怕是狂风来袭，我也能站得笔直，绝不低头。'",
      "不久，一场可怕的飓风席卷而来。芦苇立刻顺着风的方向弯下腰，贴在水面上，躲过了狂风的摧残。",
      "而骄傲的橡树拼命对抗狂风，怎么也不肯弯腰，最后'咔嚓'一声，连根拔起，倒在了地上。",
      "懂得在困难面前灵活变通的人，往往比那些顽固不化的人更容易生存下来。"
    ],
    parentGuide: "狂风来了，芦苇是怎么保护自己的？橡树为什么倒下了？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "橡树嘲笑芦苇什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "芦苇弯下腰是因为它害怕风吗，还是因为它聪明？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "风停了以后，芦苇会变成什么样？", color: "#fa709a" }
    ],
    lifeConnection: "当我们玩游戏快要输的时候，稍微改变一下策略，说不定就能赢哦！懂得变通很重要。",
    retellingPrompt: "假装你是狂风中的芦苇，一边弯腰一边大声说出你的躲避秘诀！"
  },
  {
    id: "fable_dog_manger",
    type: "fable",
    title: "狗占马槽 / The Dog in the Manger",
    image: "/images/dog_manger.jpg",
    hotspots: [
      { id: "dog", name: "凶恶的狗", nameEn: "Fierce Dog", x: 32, y: 58, radius: 10 },
      { id: "manger", name: "马槽", nameEn: "Manger", x: 35, y: 80, radius: 15 },
      { id: "horse", name: "饿肚子马", nameEn: "Hungry Horse", x: 72, y: 55, radius: 15 }
    ],
    words: [
      { zh: "狗", en: "Dog" },
      { zh: "马槽", en: "Manger" },
      { zh: "干草", en: "Hay" }
    ],
    fableText: [
      "一条恶狗跑进马厩，舒舒服服地躺在装满干草的马槽里睡大觉。",
      "干了一天活儿的马儿们饿坏了，回到马厩想吃马槽里的干草。可是狗立刻跳起来，冲着马儿狂吠。",
      "马儿们上前一步，狗就张着大嘴要咬它们，死活不让马儿吃草。",
      "一匹马无奈地说：'你这只自私的狗！你自己明明不吃干草，却还要霸占着，不让需要它的我们吃！'",
      "霸占着自己用不着的东西，也不肯分享给别人，这种自私的行为是非常讨厌的。"
    ],
    parentGuide: "狗自己吃干草吗？它为什么不让马吃？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "狗躺在哪里睡觉？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "马儿辛苦工作了一天，吃不到草心情会怎么样？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果农夫发现了这件事，他会怎么教训这只狗？", color: "#fa709a" }
    ],
    lifeConnection: "如果你有一个自己不玩的旧玩具，把它送给需要的小朋友是不是比一直藏在柜子里更好？",
    retellingPrompt: "假装你是那匹饿肚子的马，用生气的语气去质问那只霸占马槽的狗！"
  },
  {
    id: "fable_monkey_dolphin",
    type: "fable",
    title: "猴子和海豚 / The Monkey and the Dolphin",
    image: "/images/monkey_dolphin.jpg",
    hotspots: [
      { id: "monkey", name: "猴子", nameEn: "Monkey", x: 48, y: 38, radius: 10 },
      { id: "dolphin", name: "海豚", nameEn: "Dolphin", x: 52, y: 64, radius: 15 },
      { id: "sea", name: "大海", nameEn: "Sea", x: 50, y: 80, radius: 25 }
    ],
    words: [
      { zh: "猴子", en: "Monkey" },
      { zh: "海豚", en: "Dolphin" },
      { zh: "大海", en: "Sea" }
    ],
    fableText: [
      "一只猴子坐船遇到了风暴，掉进了海里。一只善良的海豚游过来，把猴子背在背上救了它。",
      "海豚问猴子：'你是雅典人吗？'猴子觉得雅典人很神气，就撒谎说：'是呀，而且我在雅典很有名！'",
      "海豚又问：'那你认识比雷埃夫斯（雅典著名的海港）吗？'",
      "猴子以为那也是个人的名字，就得意地说：'当然！他是我最好的朋友！'",
      "海豚一听，知道猴子是个爱吹牛的骗子，气愤地潜入水底游走了，把这只爱撒谎的猴子留在了海里。",
      "不懂装懂，用谎言来吹嘘自己，迟早会被人揭穿，甚至陷入绝境。"
    ],
    parentGuide: "猴子为了面子撒了什么谎？它最后的结果怎么样？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "海豚问猴子是否认识'比雷埃夫斯'，比雷埃夫斯到底是什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "海豚为什么最开始要救猴子？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果猴子诚实地说自己不知道，海豚会怎么做？", color: "#fa709a" }
    ],
    lifeConnection: "如果你遇到了不懂的问题，是大方地说'我不知道'比较好，还是瞎猜一个答案比较好呢？",
    retellingPrompt: "假装你是那只正在吹牛的猴子，闭着眼睛得意地说出你的谎言！"
  },
  {
    id: "fable_ant_dove",
    type: "fable",
    title: "蚂蚁和鸽子 / The Ant and the Dove",
    image: "/images/ant_and_dove.jpg",
    hotspots: [
      { id: "dove", name: "鸽子", nameEn: "Dove", x: 35, y: 30, radius: 15 },
      { id: "ant", name: "蚂蚁", nameEn: "Ant", x: 50, y: 75, radius: 10 },
      { id: "leaf", name: "树叶", nameEn: "Leaf", x: 45, y: 50, radius: 10 }
    ],
    words: [
      { zh: "鸽子", en: "Dove" },
      { zh: "蚂蚁", en: "Ant" },
      { zh: "树叶", en: "Leaf" }
    ],
    fableText: [
      "一只小蚂蚁去河边喝水，一不小心掉进了水里。水流很急，小蚂蚁拼命挣扎，快要淹死了。",
      "一只鸽子刚好停在河边的树上，看到小蚂蚁在水中挣扎，立刻咬下一片树叶丢在蚂蚁旁边。",
      "小蚂蚁拼尽全力爬上了树叶，安全地飘到了岸边，非常感激鸽子的救命之恩。",
      "没过多久，一个捕鸟人悄悄地走向鸽子，正准备用网抓住它。小蚂蚁看到了，立刻爬过去，狠狠地咬了捕鸟人的脚一口。",
      "捕鸟人疼得大叫一声扔掉了网，鸽子听到声音立刻飞走了。善有善报，帮助别人也就是帮助自己。"
    ],
    parentGuide: "鸽子是怎么救小蚂蚁的？小蚂蚁后来又怎么报答了鸽子？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小蚂蚁一开始为什么会掉进河里？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "如果小蚂蚁没有咬捕鸟人，鸽子会怎么样？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "鸽子和小蚂蚁以后会成为好朋友吗？", color: "#fa709a" }
    ],
    lifeConnection: "如果别的小朋友借给你玩具，下次他没有玩具的时候，你是不是也可以借给他呢？",
    retellingPrompt: "假装你是那只小蚂蚁，在树叶上对飞走的鸽子大声说声谢谢吧！"
  },
  {
    id: "fable_lion_fox",
    type: "fable",
    title: "老狮子和狐狸 / The Lion and the Fox",
    image: "/images/lion_and_fox.jpg",
    hotspots: [
      { id: "fox", name: "狐狸", nameEn: "Fox", x: 35, y: 55, radius: 15 },
      { id: "lion_eyes", name: "狮子", nameEn: "Lion", x: 80, y: 38, radius: 15 },
      { id: "footprints", name: "脚印", nameEn: "Footprints", x: 60, y: 70, radius: 20 }
    ],
    words: [
      { zh: "狐狸", en: "Fox" },
      { zh: "狮子", en: "Lion" },
      { zh: "脚印", en: "Footprints" }
    ],
    fableText: [
      "一头老狮子老得已经没有力气去打猎了，于是他躲进了一个山洞里，假装生了重病。",
      "森林里的小动物们听说狮子病了，纷纷跑到山洞里去探望他。可是，只要小动物一走进山洞，就被老狮子一口吃掉了。",
      "一只聪明的狐狸也来了，但它没有进去，而是远远地站在山洞外面，向狮子问好。",
      "狮子见狐狸不进来，就装出虚弱的声音说：'狐狸兄弟，你为什么不进来看看我呢？'",
      "狐狸指着地上的脚印笑着说：'我看到许多脚印都是走进洞里的，却没有一个脚印是走出来的！'遇到危险要多观察，不要轻易相信敌人的话。"
    ],
    parentGuide: "老狮子为什么要假装生病？狐狸是怎么看穿狮子的诡计的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "老狮子躲在哪里装病？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "那些走进山洞的小动物们都去哪儿了？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "狐狸离开后，会去告诉其他小动物吗？", color: "#fa709a" }
    ],
    lifeConnection: "如果陌生人给你好吃的，让你跟他走，我们能不能去？",
    retellingPrompt: "假装你是那只聪明的狐狸，指着地上的脚印大声揭穿狮子的谎言！"
  },
  {
    id: "fable_ass_lion_skin",
    type: "fable",
    title: "披着狮子皮的驴 / The Ass in the Lion's Skin",
    image: "/images/ass_lion_skin.jpg",
    hotspots: [
      { id: "donkey", name: "驴子", nameEn: "Donkey", x: 45, y: 50, radius: 20 },
      { id: "lion_skin", name: "狮子皮", nameEn: "Lion's Skin", x: 45, y: 35, radius: 15 },
      { id: "animals", name: "小动物", nameEn: "Animals", x: 75, y: 55, radius: 15 }
    ],
    words: [
      { zh: "驴子", en: "Donkey" },
      { zh: "狮子皮", en: "Lion's Skin" },
      { zh: "动物", en: "Animals" }
    ],
    fableText: [
      "一只驴子在森林里发现了一张猎人留下的狮子皮。他觉得很好玩，就把狮子皮披在了自己身上。",
      "驴子大摇大摆地在森林里走着。小动物们看到一头'狮子'走过来，吓得四处逃窜，连狐狸也吓跑了。",
      "驴子觉得非常得意，开心得忍不住大声叫了起来：'呃啊——呃啊——'",
      "小动物们听到这熟悉的叫声，立刻明白原来这不是可怕的狮子，只是一只披着狮子皮的驴子而已。",
      "大家气愤地跑回来，把驴子狠狠地教训了一顿。伪装只能骗人一时，只要一开口，真面目就会暴露。"
    ],
    parentGuide: "小动物们一开始为什么害怕驴子？后来是怎么发现它是假扮的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "驴子在森林里捡到了什么东西？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "驴子为什么要发出'呃啊呃啊'的叫声？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "驴子以后还会披着狮子皮去吓唬别人吗？", color: "#fa709a" }
    ],
    lifeConnection: "做真实的自己才是最棒的，不用假装成别人的样子来显摆自己哦！",
    retellingPrompt: "假装你是那只披着狮子皮的驴子，先装出吓人的样子，然后不小心发出了驴叫声！"
  },
  {
    id: "fable_wolf_crane",
    type: "fable",
    title: "狼和仙鹤 / The Wolf and the Crane",
    image: "/images/wolf_and_crane.jpg",
    hotspots: [
      { id: "wolf", name: "狼", nameEn: "Wolf", x: 35, y: 60, radius: 20 },
      { id: "crane", name: "仙鹤", nameEn: "Crane", x: 70, y: 55, radius: 15 },
      { id: "bone", name: "骨头", nameEn: "Bone", x: 45, y: 35, radius: 8 }
    ],
    words: [
      { zh: "狼", en: "Wolf" },
      { zh: "仙鹤", en: "Crane" },
      { zh: "骨头", en: "Bone" }
    ],
    fableText: [
      "一只狼吃肉的时候太着急，不小心把一根骨头卡在了喉咙里。他疼得在地上打滚，可是自己怎么也拔不出来。",
      "狼痛苦地哀求经过的动物们帮忙，并承诺给丰厚的报酬，可是大家都不敢靠近。",
      "这时，一只善良的仙鹤走过来，看狼实在可怜，就把自己长长的脖子伸进狼的嘴里，小心翼翼地把骨头夹了出来。",
      "仙鹤松了一口气，对狼说：'好了，你可以把答应的报酬给我了。'",
      "狼却露出尖锐的牙齿，恶狠狠地说：'你把头伸进我的嘴里，我没有把你吃掉，这就已经是给你最大的报酬了！'不要指望坏人会懂得感恩。"
    ],
    parentGuide: "仙鹤是怎么帮助狼拔出骨头的？狼最后给仙鹤报酬了吗？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "狼的喉咙里卡了什么东西？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么一开始别的动物都不愿意帮狼？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果下次狼又卡住骨头，仙鹤还会帮它吗？", color: "#fa709a" }
    ],
    lifeConnection: "我们要学会对帮助过我们的人说谢谢，做一个懂礼貌、知恩图报的好孩子。",
    retellingPrompt: "假装你是那只凶恶的狼，用吓人的语气对仙鹤说出那句不要脸的话！"
  },
  {
    id: "fable_boy_nuts",
    type: "fable",
    title: "贪心的小男孩 / The Boy and the Nuts",
    image: "/images/boy_and_nuts.jpg",
    hotspots: [
      { id: "boy", name: "小男孩", nameEn: "Boy", x: 40, y: 45, radius: 15 },
      { id: "jar", name: "玻璃罐", nameEn: "Glass Jar", x: 65, y: 60, radius: 15 },
      { id: "nuts", name: "坚果", nameEn: "Nuts", x: 65, y: 65, radius: 12 }
    ],
    words: [
      { zh: "小男孩", en: "Boy" },
      { zh: "玻璃罐", en: "Jar" },
      { zh: "坚果", en: "Nuts" }
    ],
    fableText: [
      "一个小男孩看到桌子上有一个装满坚果的透明玻璃罐，罐子的口很小。",
      "男孩非常想吃坚果，于是把手伸进罐子里，抓了满满一大把。",
      "可是，当他想把手拔出来的时候，因为手里攥着的坚果太多，手腕被罐子口卡住了，怎么也拔不出来。",
      "男孩急得哇哇大哭。旁边的人告诉他：'你只要松开手，少拿几颗，手自然就能出来了呀！'",
      "有时候，做人不能太贪心。如果什么都想要，最后可能什么都得不到。"
    ],
    parentGuide: "小男孩的手为什么会被卡在罐子里拔不出来？他怎么做才能拿出坚果？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "玻璃罐的口是大还是小？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "小男孩为什么急得哇哇大哭？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "听了旁边人的建议后，小男孩会怎么做？", color: "#fa709a" }
    ],
    lifeConnection: "吃好吃的东西时，我们拿够自己吃的部分就好了，不能太贪心哦，不然肚子也会不舒服的。",
    retellingPrompt: "假装你是那个小男孩，一边假装用力拔手，一边大声哭着求救！"
  },
  {
    id: "fable_farmer_snake",
    type: "fable",
    title: "农夫与蛇 / The Farmer and the Snake",
    image: "/images/fable_farmer_snake.png",
    hotspots: [
      { id: "farmer", name: "农夫", nameEn: "Farmer", x: 50, y: 50, radius: 15 },
      { id: "snake", name: "蛇", nameEn: "Snake", x: 55, y: 45, radius: 10 },
      { id: "house", name: "农舍", nameEn: "House", x: 80, y: 40, radius: 12 }
    ],
    words: [
      { zh: "农夫", en: "Farmer" },
      { zh: "蛇", en: "Snake" },
      { zh: "农舍", en: "House" }
    ],
    fableText: [
      "在一个寒冷的冬天，一位善良的农夫在路边发现了一条冻僵的蛇。",
      "农夫觉得它很可怜，就把蛇捡起来放在自己的怀里，想用体温给它取暖。",
      "过了一会儿，蛇苏醒了过来，恢复了力气。",
      "可是，它并没有感谢农夫，反而狠狠地咬了农夫一口。",
      "农夫临死前叹息道：'我可怜恶人，结果害了自己。'对恶人千万不能心慈手软。"
    ],
    parentGuide: "农夫是怎么帮助冻僵的蛇的？蛇醒来后做了什么？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "农夫在哪里发现了蛇？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "农夫为什么要把它放在怀里？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果农夫再看到冻僵的蛇，他还会去救吗？", color: "#fa709a" }
    ],
    lifeConnection: "我们要学会分辨好人和坏人，同情心也要用在值得帮助的人身上哦。",
    retellingPrompt: "假装你就是那位农夫，抱着肩膀做出觉得很冷的样子，然后假装把蛇捡起来！"
  },
  {
    id: "fable_golden_goose",
    type: "fable",
    title: "生金蛋的鹅 / The Golden Goose",
    image: "/images/fable_golden_goose.png",
    hotspots: [
      { id: "farmer", name: "农夫", nameEn: "Farmer", x: 65, y: 55, radius: 15 },
      { id: "goose", name: "鹅", nameEn: "Goose", x: 30, y: 65, radius: 15 },
      { id: "egg", name: "金蛋", nameEn: "Golden Egg", x: 45, y: 75, radius: 10 }
    ],
    words: [
      { zh: "农夫", en: "Farmer" },
      { zh: "鹅", en: "Goose" },
      { zh: "金蛋", en: "Golden Egg" }
    ],
    fableText: [
      "从前，一个农夫养了一只神奇的白鹅，这只鹅每天都会生下一个金光闪闪的金蛋。",
      "农夫把金蛋拿去卖，很快就变得非常富有。",
      "可是，农夫越来越贪心，他心想：'鹅的肚子里一定装满了金子！'",
      "于是，他把鹅杀了，希望能一次性拿到所有的金子。",
      "然而，鹅的肚子里和普通的鹅一样，什么金子也没有。因为贪心，农夫什么都失去了。"
    ],
    parentGuide: "这只白鹅每天会生下什么？农夫为什么要杀掉它？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "农夫发现鹅肚子里有金子吗？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "农夫变得越来越富有时，他的心情是怎样的？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "没有了金蛋，农夫以后的生活会变成什么样？", color: "#fa709a" }
    ],
    lifeConnection: "这就告诉我们，做人不能太贪婪，要珍惜现在拥有的好东西。",
    retellingPrompt: "假装你是农夫，看到金蛋时，睁大眼睛露出非常惊喜的表情！"
  },
  {
    id: "fable_dog_reflection",
    type: "fable",
    title: "狗和它的影子 / The Dog and His Reflection",
    image: "/images/fable_dog_reflection.png",
    hotspots: [
      { id: "dog", name: "狗", nameEn: "Dog", x: 50, y: 40, radius: 15 },
      { id: "bone", name: "骨头", nameEn: "Bone", x: 45, y: 45, radius: 10 },
      { id: "reflection", name: "倒影", nameEn: "Reflection", x: 50, y: 80, radius: 15 }
    ],
    words: [
      { zh: "狗", en: "Dog" },
      { zh: "骨头", en: "Bone" },
      { zh: "倒影", en: "Reflection" }
    ],
    fableText: [
      "一只小狗得到了一块很大很美味的骨头，它高高兴兴地叼着骨头跑回家。",
      "在路过一座小木桥时，它低头看到了河水中自己的倒影。",
      "小狗以为水里是另一只狗，而且嘴里叼着一块更大的骨头！",
      "它贪心地想要抢走那块骨头，于是冲着水里的倒影大叫了一声。",
      "结果，它刚一开口，嘴里的骨头就掉进了河里，被水冲走了。它什么也没捞着。"
    ],
    parentGuide: "小狗在水里看到了什么？它为什么会冲着水里叫？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小狗嘴里本来叼着什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "水里的另一只狗和骨头是真的吗？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "小狗看着被冲走的骨头，心里会想些什么？", color: "#fa709a" }
    ],
    lifeConnection: "这也是贪心带来的坏结果！有时候看着别人手里的东西更好，其实自己拥有的才是最真实的。",
    retellingPrompt: "假装你是那只小狗，嘴里叼着东西，然后冲着水里'汪汪汪'地大叫！"
  },
  {
    id: "fable_town_country_mouse",
    type: "fable",
    title: "城市老鼠与乡下老鼠 / The Town Mouse and the Country Mouse",
    image: "/images/fable_town_country_mouse.png",
    hotspots: [
      { id: "townmouse", name: "城市老鼠", nameEn: "Town Mouse", x: 25, y: 55, radius: 15 },
      { id: "countrymouse", name: "乡下老鼠", nameEn: "Country Mouse", x: 75, y: 55, radius: 15 },
      { id: "cheese", name: "奶酪", nameEn: "Cheese", x: 50, y: 55, radius: 15 }
    ],
    words: [
      { zh: "城市老鼠", en: "Town Mouse" },
      { zh: "乡下老鼠", en: "Country Mouse" },
      { zh: "奶酪", en: "Cheese" }
    ],
    fableText: [
      "乡下老鼠邀请城市老鼠来做客，拿出了自己存的花生和玉米。城市老鼠嫌弃地说乡下太寒酸了，便邀请它去城里享受大餐。",
      "两只老鼠来到城里的一户人家，桌上摆满了美味的奶酪和蛋糕。",
      "乡下老鼠刚准备大吃一顿，突然听到了大门打开的声音，还有猫的叫声！",
      "它们吓得四处逃窜，好不容易才躲进一个黑黑的小洞里，饿得肚子咕咕叫。",
      "乡下老鼠对城市老鼠说：'城里的食物虽然丰盛，但每天提心吊胆的，还不如我在乡下吃粗粮来得安心自在！'"
    ],
    parentGuide: "乡下老鼠在城里吃到了大餐吗？为什么它们被吓得四处逃窜？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "乡下老鼠拿什么招待城市老鼠？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么乡下老鼠最后觉得还是乡下好？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "你觉得以后乡下老鼠还会去城里吗？", color: "#fa709a" }
    ],
    lifeConnection: "平平安安、快快乐乐的生活，比每天担惊受怕地追求物质享受要好得多哦。",
    retellingPrompt: "假装你是乡下老鼠，听到猫叫声时，吓得赶紧捂住嘴巴趴在地上！"
  },
  {
    id: "fable_wind_sun",
    type: "fable",
    title: "北风与太阳 / The North Wind and the Sun",
    image: "/images/fable_wind_sun.png",
    hotspots: [
      { id: "wind", name: "北风", nameEn: "North Wind", x: 25, y: 25, radius: 15 },
      { id: "sun", name: "太阳", nameEn: "Sun", x: 75, y: 20, radius: 15 },
      { id: "traveler", name: "旅行者", nameEn: "Traveler", x: 65, y: 70, radius: 15 }
    ],
    words: [
      { zh: "北风", en: "North Wind" },
      { zh: "太阳", en: "Sun" },
      { zh: "旅行者", en: "Traveler" }
    ],
    fableText: [
      "北风和太阳争吵起来，都说自己的力量更大。最后他们决定比赛：谁能让路上的旅行者脱下大衣，谁就赢了。",
      "北风首先出场。它鼓起腮帮子，用力吹出冰冷刺骨的狂风。",
      "可是，北风吹得越猛，旅行者觉得越冷，反而把大衣裹得更紧了。北风认输了。",
      "接着轮到太阳了。太阳微微笑，向大地散发出温暖柔和的光芒。",
      "没过一会儿，旅行者热得满头大汗，自己把大衣脱了下来。太阳用温和赢得了比赛。"
    ],
    parentGuide: "北风和太阳在比赛什么？是谁赢了？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "当北风用力吹时，旅行者是怎么做的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么太阳能让旅行者脱下衣服？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果接下来下起了雨，旅行者又会怎么做？", color: "#fa709a" }
    ],
    lifeConnection: "温和耐心的劝导往往比强硬的手段更有力量。我们要多对别人微笑哦。",
    retellingPrompt: "假装你是那阵凛冽的北风，鼓起腮帮子'呼呼呼'地用力吹气！"
  },
  {
    id: "fable_frog_well",
    type: "fable",
    title: "井底之蛙 / The Frog in the Well",
    image: "/images/fable_frog_well.png",
    hotspots: [
      { id: "frog", name: "青蛙", nameEn: "Frog", x: 50, y: 75, radius: 15 },
      { id: "sky", name: "蓝天", nameEn: "Sky", x: 50, y: 15, radius: 15 },
      { id: "moss", name: "青苔", nameEn: "Moss", x: 25, y: 60, radius: 10 }
    ],
    words: [
      { zh: "青蛙", en: "Frog" },
      { zh: "蓝天", en: "Sky" },
      { zh: "青苔", en: "Moss" }
    ],
    fableText: [
      "一只青蛙生活在一口很深的古井里。它看着井口的一小圈蓝天，得意地想：'世界就是这么大，而我就是这里的主人！'",
      "一天，一只从东海来的大海龟停在井边。青蛙自豪地向海龟炫耀自己舒适的家。",
      "海龟本来想下井看看，但右脚还没伸进去，左脚就被卡住了。于是它退了回来，开始向青蛙描述大海的广阔。",
      "'大海一眼望不到边，深不见底，那才是真正宽广的世界啊！'海龟说道。",
      "青蛙听了，惊讶得张大了嘴巴，这才明白原来外面的世界有那么大。"
    ],
    parentGuide: "青蛙以为世界有多大？是谁告诉它外面还有更大的世界？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "海龟是从哪里来的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "青蛙为什么会觉得世界只有井口那么大？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "听了海龟的话，青蛙会想跳出井口去看看大海吗？", color: "#fa709a" }
    ],
    lifeConnection: "我们要多读书、多出去走走，增长自己的见识，不能像井底的小青蛙一样只看到眼前的一点点东西哦。",
    retellingPrompt: "假装你是那只骄傲的小青蛙，抬起头自豪地夸奖自己的家有多棒！"
  },
  {
    id: "science_dinosaur",
    type: "science",
    title: "神秘的恐龙乐园 / The Dinosaur Park",
    image: "/images/dinosaur_park.jpg",
    hotspots: [
      { id: "trex", name: "霸王龙", nameEn: "T-Rex", x: 30, y: 65, radius: 15 },
      { id: "triceratops", name: "三角龙", nameEn: "Triceratops", x: 65, y: 60, radius: 15 },
      { id: "volcano", name: "火山", nameEn: "Volcano", x: 62, y: 25, radius: 15 },
      { id: "fern", name: "蕨类植物", nameEn: "Fern", x: 45, y: 45, radius: 15 }
    ],
    words: [
      { zh: "霸王龙", en: "T-Rex" },
      { zh: "三角龙", en: "Triceratops" },
      { zh: "火山", en: "Volcano" },
      { zh: "蕨类植物", en: "Fern" }
    ],
    fableText: [
      "欢迎来到神秘的恐龙乐园！这里生活着许多远古时期的庞大生物。",
      "看那只绿色的霸王龙，它正张着大嘴在开心地玩耍呢。",
      "一只紫色的三角龙正悄悄地躲在高大的蕨类植物后面，似乎在和朋友捉迷藏。",
      "在远处的背景里，一座高高的火山正在冒着浓烟，随时可能喷发哦！"
    ],
    parentGuide: "这里有哪些神奇的恐龙？背景里那座高高的山是什么？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "霸王龙是什么颜色的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "三角龙为什么要躲在叶子后面？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果远处的火山喷发了，恐龙们会往哪里跑？", color: "#fa709a" }
    ],
    lifeConnection: "你去过博物馆看恐龙骨架吗？如果恐龙生活在现在，世界会变成什么样？",
    retellingPrompt: "假装你是一只霸王龙，伸出两只小短手，大声地向大家打招呼吧！"
  },
  {
    id: "habit_dentist",
    type: "habit",
    title: "我的牙齿亮晶晶 / Brave at the Dentist",
    image: "/images/brave_dentist.jpg",
    hotspots: [
      { id: "dentist", name: "牙医", nameEn: "Dentist", x: 70, y: 55, radius: 15 },
      { id: "chair", name: "牙医椅", nameEn: "Dentist Chair", x: 45, y: 70, radius: 20 },
      { id: "mirror", name: "小镜子", nameEn: "Mouth Mirror", x: 62, y: 48, radius: 10 },
      { id: "cavity", name: "蛀牙虫", nameEn: "Cavity Bug", x: 85, y: 85, radius: 10 }
    ],
    words: [
      { zh: "牙医", en: "Dentist" },
      { zh: "牙医椅", en: "Dentist Chair" },
      { zh: "小镜子", en: "Mouth Mirror" },
      { zh: "蛀牙虫", en: "Cavity Bug" }
    ],
    fableText: [
      "今天，勇敢的小朋友来到了牙科诊所。这把神奇的牙医椅可以升降哦！",
      "亲切的牙医叔叔拿着小小的反光镜和明亮的聚光灯，仔细地检查每一颗牙齿。",
      "看呀！一只小小的、滑稽的蛀牙虫被灯光吓得落荒而逃啦。",
      "原来只要我们好好刷牙，按时看牙医，就能拥有亮晶晶的健康牙齿！"
    ],
    parentGuide: "小朋友坐在哪里？牙医叔叔手里拿着什么工具赶跑了蛀牙虫？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "是谁赶跑了蛀牙虫？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么蛀牙虫看起来很害怕？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "看完牙医回家后，小朋友会更认真地刷牙吗？", color: "#fa709a" }
    ],
    lifeConnection: "你每天都有按时刷牙吗？我们一起练习一下正确的刷牙动作吧！",
    retellingPrompt: "假装你是牙医叔叔，拿起'小镜子'，温柔地告诉小朋友要张大嘴巴！"
  },
  {
    id: "occupation_firestation",
    type: "occupation",
    title: "忙碌的消防站 / The Busy Fire Station",
    image: "/images/fire_station.jpg",
    hotspots: [
      { id: "fireengine", name: "消防车", nameEn: "Fire Engine", x: 40, y: 55, radius: 20 },
      { id: "firefighter", name: "消防员", nameEn: "Firefighter", x: 80, y: 65, radius: 15 },
      { id: "hose", name: "水管", nameEn: "Hose", x: 60, y: 66, radius: 10 },
      { id: "dog", name: "斑点狗", nameEn: "Dalmatian", x: 55, y: 82, radius: 12 }
    ],
    words: [
      { zh: "消防车", en: "Fire Engine" },
      { zh: "消防员", en: "Firefighter" },
      { zh: "水管", en: "Hose" },
      { zh: "斑点狗", en: "Dalmatian" }
    ],
    fableText: [
      "警铃响了！这是一个忙碌又快乐的消防站。消防员叔叔迅速准备好出发。",
      "巨大的红色消防车闪烁着警灯，随时准备去扑灭大火。",
      "消防员手里拿着长长的水管，可以喷出非常高、非常远的水花。",
      "连可爱的斑点狗也戴上了消防头盔，汪汪叫着为大家加油打气！"
    ],
    parentGuide: "消防站里最引人注目的车是什么？是谁戴着可爱的消防头盔？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "消防车是什么颜色的？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "斑点狗戴着头盔是为了什么？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "警铃响了，消防车接下来要去哪里？", color: "#fa709a" }
    ],
    lifeConnection: "如果在家里闻到了烟味或者看到了火灾，我们应该拨打什么号码求救？",
    retellingPrompt: "假装你是一名勇敢的消防员，大喊着指挥大家拿起水管灭火！"
  },
  {
    id: "magic_school",
    type: "magic",
    title: "森林里的魔法学校 / The Magic Forest School",
    image: "/images/magic_school.jpg",
    hotspots: [
      { id: "wizardhat", name: "魔法帽", nameEn: "Wizard Hat", x: 28, y: 38, radius: 12 },
      { id: "mushroom", name: "发光蘑菇", nameEn: "Glowing Mushroom", x: 68, y: 90, radius: 10 },
      { id: "spellbook", name: "魔法书", nameEn: "Spellbook", x: 68, y: 40, radius: 15 },
      { id: "cauldron", name: "魔药锅", nameEn: "Cauldron", x: 52, y: 75, radius: 15 }
    ],
    words: [
      { zh: "魔法帽", en: "Wizard Hat" },
      { zh: "发光蘑菇", en: "Glowing Mushroom" },
      { zh: "魔法书", en: "Spellbook" },
      { zh: "魔药锅", en: "Cauldron" }
    ],
    fableText: [
      "深夜的森林里，有一所神奇的魔法学校。小动物们纷纷赶来上课啦。",
      "同学们都戴着尖尖的魔法帽，认真地练习新学的咒语。",
      "半空中漂浮着一本发光的魔法书，草丛里长满了会发光的蘑菇。",
      "中间的大魔药锅正咕噜咕噜地冒着泡泡，不知道里面正在熬制什么神奇的药水呢！"
    ],
    parentGuide: "魔法学校里有什么发光的东西？中间那个咕噜咕噜冒泡的是什么？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小动物们的头上戴着什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么森林里在晚上也这么亮？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "你觉得魔药锅里煮出的药水会有什么神奇的功能？", color: "#fa709a" }
    ],
    lifeConnection: "如果你拥有一根魔法棒，你最想变出一个什么好玩的东西？",
    retellingPrompt: "假装你是一个小巫师，拿着魔法棒，对着魔药锅念出一段有趣的咒语吧！"
  },
  {
    id: "festival_cny",
    type: "festival",
    title: "热闹的中国年 / Happy Chinese New Year",
    image: "/images/chinese_new_year.jpg",
    hotspots: [
      { id: "firecracker", name: "鞭炮", nameEn: "Firecrackers", x: 50, y: 80, radius: 12 },
      { id: "lantern", name: "红灯笼", nameEn: "Red Lantern", x: 50, y: 15, radius: 15 },
      { id: "dragon", name: "舞龙", nameEn: "Dragon Dance", x: 75, y: 35, radius: 20 },
      { id: "redenvelope", name: "红包", nameEn: "Red Envelope", x: 80, y: 90, radius: 10 }
    ],
    words: [
      { zh: "鞭炮", en: "Firecrackers" },
      { zh: "红灯笼", en: "Red Lantern" },
      { zh: "舞龙", en: "Dragon Dance" },
      { zh: "红包", en: "Red Envelope" }
    ],
    fableText: [
      "过年啦！街道上到处都是红彤彤的，挂满了漂亮的红灯笼。",
      "几个小朋友在开心地放着红色的鞭炮，噼里啪啦的声音真热闹。",
      "远处还有精彩的舞龙表演，五彩斑斓的长龙在空中翻滚起舞。",
      "哇，地上还有长辈发来的红包！春节真是一年中最快乐的节日呀。"
    ],
    parentGuide: "街上挂着什么红彤彤的东西？大家在看什么精彩的表演？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小朋友们在放什么东西？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么春节的装饰大多都是红色的？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "打开红包后，你猜里面会装些什么？", color: "#fa709a" }
    ],
    lifeConnection: "你最喜欢过年时候的哪一个习俗？是吃饺子、拿红包还是看烟花？",
    retellingPrompt: "假装你正在看舞龙表演，开心地拍着手为大家大声叫好！"
  },
  {
    id: "safety_traffic_light",
    type: "safety",
    title: "红绿灯眨眼睛 / Traffic Lights",
    image: "/images/safety_traffic_light.png",
    hotspots: [
      { id: "trafficlight", name: "红绿灯", nameEn: "Traffic Light", x: 35, y: 15, radius: 15 },
      { id: "police", name: "交警叔叔", nameEn: "Police Officer", x: 75, y: 55, radius: 20 },
      { id: "child", name: "小朋友", nameEn: "Child", x: 30, y: 70, radius: 15 }
    ],
    words: [
      { zh: "红绿灯", en: "Traffic Light" },
      { zh: "交警叔叔", en: "Police Officer" },
      { zh: "小朋友", en: "Child" }
    ],
    fableText: [
      "马路口有一个高高的红绿灯，它就像一只会眨眼睛的大眼睛。",
      "红灯亮起的时候，所有的人和车都要停下来乖乖等待。",
      "路边站着一位和蔼的交警叔叔，他正在指挥交通，保护大家的安全。",
      "小朋友拉着妈妈的手，耐心地等待着绿灯亮起，才安全地走过斑马线。"
    ],
    parentGuide: "红灯亮起的时候，我们应该怎么做？谁在路边保护大家？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "图片上的红绿灯亮的是什么颜色？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么过马路一定要拉着大人的手？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "等一会儿绿灯亮了，小朋友会做什么？", color: "#fa709a" }
    ],
    lifeConnection: "下次我们一起出门的时候，你来当小警察，告诉爸爸妈妈什么时候可以过马路好不好？",
    retellingPrompt: "假装你是一个神气的交警叔叔，伸出手臂大声说：'红灯停，绿灯行！'"
  },
  {
    id: "emotion_angry_dragon",
    type: "habit",
    title: "我变成了一只喷火龙 / The Angry Little Dragon",
    image: "/images/emotion_angry_dragon.png",
    hotspots: [
      { id: "boy", name: "生气的小男孩", nameEn: "Angry Boy", x: 50, y: 50, radius: 20 },
      { id: "dragon", name: "火龙影子", nameEn: "Dragon Shadow", x: 75, y: 30, radius: 15 },
      { id: "toys", name: "散落的玩具", nameEn: "Messy Toys", x: 50, y: 85, radius: 20 }
    ],
    words: [
      { zh: "生气的小男孩", en: "Angry Boy" },
      { zh: "火龙影子", en: "Dragon Shadow" },
      { zh: "散落的玩具", en: "Messy Toys" }
    ],
    fableText: [
      "今天小男孩非常非常生气！他的眉头紧紧地皱在了一起，双手交叉放在胸前。",
      "因为太生气了，他的身后居然出现了一只喷着火焰的小恶龙影子！",
      "房间里到处都是散落的玩具，小火龙似乎想把这些玩具全部烧掉。",
      "可是生气并不能解决问题，我们需要深呼吸，把心里的火龙慢慢赶走。"
    ],
    parentGuide: "小男孩现在的心情是怎么样的？他身后出现了什么可怕的东西？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "房间的地板上有什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "你觉得小男孩为什么会发这么大的脾气？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "深呼吸之后，小男孩身后的火龙影子会发生什么变化？", color: "#fa709a" }
    ],
    lifeConnection: "下次你觉得心里也有一只小火龙要跑出来的时候，试试深吸一口气，从一数到十吧！",
    retellingPrompt: "假装你是一只生气的小火龙，双手叉腰，大口大口地呼出热气！"
  },
  {
    id: "myth_monkey_king",
    type: "myth",
    title: "大闹天宫 / The Monkey King",
    image: "/images/myth_monkey_king.png",
    hotspots: [
      { id: "monkey", name: "孙悟空", nameEn: "Monkey King", x: 65, y: 50, radius: 15 },
      { id: "peach", name: "大蟠桃", nameEn: "Giant Peach", x: 50, y: 45, radius: 15 },
      { id: "staff", name: "金箍棒", nameEn: "Golden Staff", x: 82, y: 45, radius: 10 }
    ],
    words: [
      { zh: "孙悟空", en: "Monkey King" },
      { zh: "大蟠桃", en: "Giant Peach" },
      { zh: "金箍棒", en: "Golden Staff" }
    ],
    fableText: [
      "在云雾缭绕的天庭里，神奇的齐天大圣孙悟空偷偷溜进了王母娘娘的蟠桃园。",
      "他穿着威风凛凛的黄金甲，手里还拿着一根神奇的如意金箍棒。",
      "孙悟空摘下了一个比他脸还要大的仙桃，开心地大口吃了起来。",
      "吃饱喝足后，他准备回花果山，给小猴子们讲讲天上的趣事呢。"
    ],
    parentGuide: "孙悟空手里拿着什么神奇的武器？他正在津津有味地吃什么？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "孙悟空穿着什么颜色的衣服？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "王母娘娘发现蟠桃被偷吃后会是什么心情？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "吃完这个大蟠桃，孙悟空接下来会去哪里？", color: "#fa709a" }
    ],
    lifeConnection: "孙悟空有很多神奇的本领，比如七十二变。如果你有魔法，你最想变成什么？",
    retellingPrompt: "假装你是齐天大圣，举起一根假装的'金箍棒'，威风地耍一套猴拳！"
  },
  {
    id: "multipage_seed_journey",
    type: "science",
    format: "multipage",
    title: "小种子的旅行 / The Little Seed's Journey",
    coverImage: "/images/seed_page1.png",
    pages: [
      {
        pageNumber: 1,
        image: "/images/seed_page1.png",
        hotspots: [
          { id: "seed", name: "小种子", nameEn: "Little Seed", x: 67, y: 38, radius: 15 },
          { id: "sun", name: "太阳", nameEn: "Sun", x: 80, y: 15, radius: 15 },
          { id: "wind", name: "风", nameEn: "Wind", x: 30, y: 30, radius: 25 }
        ],
        fableText: [
          "秋天到了，一阵温暖的风吹过。",
          "一颗带着小翅膀的小种子，告别了妈妈，随着风飞向了远方。",
          "太阳公公微笑着看着它，祝它旅途愉快。"
        ]
      },
      {
        pageNumber: 2,
        image: "/images/seed_page2.png",
        hotspots: [
          { id: "seed", name: "小种子", nameEn: "Little Seed", x: 50, y: 78, radius: 15 },
          { id: "rain", name: "雨水", nameEn: "Rain", x: 60, y: 40, radius: 15 },
          { id: "cloud", name: "云朵", nameEn: "Cloud", x: 75, y: 15, radius: 20 }
        ],
        fableText: [
          "小种子飞呀飞，最后落在了一片松软泥土里。",
          "天空中飘来了一朵调皮的小云朵，哗啦啦地下起了雨。",
          "小种子咕咚咕咚地喝着甜甜的雨水，准备在泥土里美美地睡一觉。"
        ]
      },
      {
        pageNumber: 3,
        image: "/images/seed_page3.png",
        hotspots: [
          { id: "sunflower", name: "向日葵", nameEn: "Sunflower", x: 50, y: 45, radius: 25 },
          { id: "sun", name: "太阳", nameEn: "Sun", x: 80, y: 18, radius: 15 },
          { id: "bee", name: "蜜蜂", nameEn: "Bee", x: 20, y: 28, radius: 10 }
        ],
        fableText: [
          "春天来了，小种子长出了绿色的叶子，开出了一朵大大的向日葵！",
          "它每天都对着太阳公公露出灿烂的笑脸。",
          "小蜜蜂也飞来和它做朋友。小种子的旅行真是太奇妙了！"
        ]
      }
    ]
  },
  {
    id: "fable_nanyuan_beizhe",
    type: "fable",
    title: "南辕北辙 / Going the Wrong Way",
    image: "/images/fable_nanyuan_beizhe.png",
    hotspots: [
      { id: "carriage", name: "马车", nameEn: "Carriage", x: 50, y: 55, radius: 15 },
      { id: "driver", name: "车夫", nameEn: "Driver", x: 35, y: 48, radius: 10 },
      { id: "traveler", name: "乘客", nameEn: "Passenger", x: 65, y: 50, radius: 10 }
    ],
    words: [
      { zh: "马车", en: "Carriage" },
      { zh: "方向", en: "Direction" },
      { zh: "相反", en: "Opposite" }
    ],
    fableText: [
      "古时候，有一个人坐着马车要去南方楚国。",
      "可他的马车却一直朝着北方走。路人提醒他：‘楚国在南方，你走错方向了！’",
      "他得意地说：‘没关系，我的马跑得飞快，我的车夫技术高超，我的盘缠也非常多！’",
      "但是他的条件越好，朝着相反的方向走，反而离楚国越来越远了。"
    ],
    parentGuide: "那个人要去南方，但他的车在往哪里走？他的好马能帮到他吗？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "那个人要去哪个国家？他朝着什么方向走？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么他的马跑得越快，他离目的地反而越远？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果他一直不听劝告，最后会怎么样？", color: "#fa709a" }
    ],
    lifeConnection: "做事情前一定要先确定好正确的目标和方向，如果方向错了，再努力也是白费力气哦！",
    retellingPrompt: "假装你是那个马车夫，指着北方自信满满地炫耀一下你的快马吧！"
  },
  {
    id: "fable_handan_xuebu",
    type: "fable",
    title: "邯郸学步 / Imitating Handan Step",
    image: "/images/fable_handan_xuebu.png",
    hotspots: [
      { id: "youth", name: "青年", nameEn: "Youth", x: 50, y: 65, radius: 12 },
      { id: "city", name: "城市", nameEn: "City", x: 75, y: 35, radius: 20 },
      { id: "people", name: "路人", nameEn: "People", x: 25, y: 55, radius: 12 }
    ],
    words: [
      { zh: "走路", en: "Walk" },
      { zh: "模仿", en: "Imitate" },
      { zh: "忘记", en: "Forget" }
    ],
    fableText: [
      "战国时期，燕国有一个青年，觉得邯郸人走路姿势特别优雅好看。",
      "于是他大老远跑到邯郸，每天在大街上模仿邯郸人走路。",
      "他学了很久，不仅没有学会邯郸人走路的姿势，反而把自己原本怎么走路都给彻底忘记了！",
      "最后，他一双脚不知道该怎么迈步，只好在地上爬着回到了燕国。"
    ],
    parentGuide: "这个青年最后是怎么回家的？他为什么忘记怎么走路了？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "燕国青年去邯郸学什么？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么他最后只能爬着回家？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果他没有去邯郸，他还会忘记怎么走路吗？", color: "#fa709a" }
    ],
    lifeConnection: "盲目地去模仿和羡慕别人，可能会丢失了自己原本拥有的好东西。每个人做自己最自信！",
    retellingPrompt: "你能学学那个青年，假装自己不会走路，滑稽地迈出两步吗？"
  },
  {
    id: "fable_dongshi_xiaopin",
    type: "fable",
    title: "东施效颦 / Dong Shi Imitates Xi Shi",
    image: "/images/fable_dongshi_xiaopin.png",
    hotspots: [
      { id: "dongshi", name: "东施", nameEn: "Dong Shi", x: 35, y: 55, radius: 15 },
      { id: "xishi", name: "西施", nameEn: "Xi Shi", x: 70, y: 45, radius: 12 },
      { id: "neighbors", name: "邻居", nameEn: "Neighbors", x: 18, y: 65, radius: 10 }
    ],
    words: [
      { zh: "西施", en: "Xi Shi" },
      { zh: "模仿", en: "Imitate" },
      { zh: "好笑", en: "Funny" }
    ],
    fableText: [
      "古时候有一位大美女叫西施，她因为心口疼，经常皱着眉头捧着心口走路，大家觉得很美。",
      "同村有一个长得不太好看的女子叫东施，看见了也学西施皱着眉头、捧着心口在村里走。",
      "可是东施本来就不好看，再故意皱着眉头做出痛苦的样子，反而显得非常滑稽怪异。",
      "村里的富人见了赶紧关紧大门，穷人见了拉着妻子孩子赶紧躲开，大家都在笑话她。"
    ],
    parentGuide: "东施为什么要学西施皱眉头？大家看到她之后是什么反应？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "西施走路时为什么会皱着眉头捧着心口？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么西施做这个动作好看，而东施模仿了却让大家害怕地躲开？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果东施知道大家都在笑话她，她还会继续模仿吗？", color: "#fa709a" }
    ],
    lifeConnection: "不要东施效颦去模仿别人的缺点或不适合自己的打扮，自然、真诚的你才是最美丽的！",
    retellingPrompt: "你能学着东施的样子，捂着胸口、夸张地皱起眉头在屋里走一圈吗？"
  },
  {
    id: "fable_sharpening_axe",
    type: "fable",
    title: "磨刀不误砍柴工 / Sharpening the Axe",
    image: "/images/fable_sharpening_axe.png",
    hotspots: [
      { id: "woodcutter1", name: "砍柴人小明", nameEn: "Woodcutter Ming", x: 30, y: 55, radius: 12 },
      { id: "woodcutter2", name: "砍柴人小华", nameEn: "Woodcutter Hua", x: 70, y: 50, radius: 12 },
      { id: "whetstone", name: "磨刀石", nameEn: "Whetstone", x: 65, y: 68, radius: 8 }
    ],
    words: [
      { zh: "柴刀", en: "Axe" },
      { zh: "磨刀", en: "Sharpen" },
      { zh: "效率", en: "Efficiency" }
    ],
    fableText: [
      "有两名木匠去山上砍柴。小明拿到一把钝了的柴刀，急急忙忙就上山砍树去了。",
      "小华不慌不忙，先坐在磨刀石旁，把自己的柴刀磨得又亮又锋利，然后才上山。",
      "小明不停地用力砍树，累得满头大汗，但因为刀太钝，只砍下了一点点柴火。",
      "而小华用锋利的柴刀，轻轻一挥就能砍倒一棵树，很快就装满了一整车柴火。"
    ],
    parentGuide: "他们两个人的柴刀有什么不同？谁砍的柴更多？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "小华在砍柴前先做了什么准备？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么小华花时间磨刀，最后反而比小明砍了更多的柴？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果小明看见了小华的满车柴火，他第二天会怎么做？", color: "#fa709a" }
    ],
    lifeConnection: "做事情做好充分的准备工作，不仅不会浪费时间，反而能让我们事半功倍！比如先收拾好书桌再写作业。",
    retellingPrompt: "假装你正在磨刀，嘴里念叨着'霍霍'的磨刀声，并展示一下挥舞锋利柴刀的样子！"
  },
  {
    id: "fable_gold_silver_shield",
    type: "fable",
    title: "金银盾牌 / The Gold and Silver Shield",
    image: "/images/fable_gold_silver_shield.png",
    hotspots: [
      { id: "knight1", name: "金盾骑士", nameEn: "Gold Knight", x: 25, y: 50, radius: 15 },
      { id: "knight2", name: "银盾骑士", nameEn: "Silver Knight", x: 75, y: 50, radius: 15 },
      { id: "shield", name: "双面盾牌", nameEn: "Two-sided Shield", x: 50, y: 40, radius: 12 }
    ],
    words: [
      { zh: "盾牌", en: "Shield" },
      { zh: "金色", en: "Gold" },
      { zh: "银色", en: "Silver" }
    ],
    fableText: [
      "两个勇敢的骑士在森林里看到了一面挂在树上的大盾牌。",
      "左边的骑士说：‘这是一面闪闪发光的金色盾牌！’右边的骑士反驳：‘不对，这明明是一面银色的盾牌！’",
      "两个人为了盾牌的颜色争吵不休，甚至拔出了宝剑开始决斗，打得精疲力竭。",
      "最后，一个路人走过来把盾牌转了一面。原来，这面盾牌的一面是金色的，另一面是银色的。"
    ],
    parentGuide: "为什么一个骑士说是金色的，另一个说是银色的？盾牌到底是什么颜色的？",
    dialogicQuestions: [
      { type: "fact", label: "事实", text: "两个骑士为什么会打起来？", color: "#4facfe" },
      { type: "inference", label: "推理", text: "为什么他们两个人都认为自己是对的，但其实都不全面？", color: "#43e97b" },
      { type: "prediction", label: "预测", text: "如果他们在争吵前走到盾牌的另一边看一看，结果会怎样？", color: "#fa709a" }
    ],
    lifeConnection: "遇到分歧时，不要急着争吵，试着站在别人的角度或者从不同角度看一看，可能就会发现不一样的真相！",
    retellingPrompt: "假装你正和别人为一件事争吵，最后明白真相后恍然大悟拍拍脑袋的样子！"
  }
];