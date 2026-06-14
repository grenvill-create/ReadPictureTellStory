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
  }
];
