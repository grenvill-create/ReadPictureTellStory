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
    image: "/images/tortoise_and_hare.png",
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
    image: "/images/crow_and_pitcher.png",
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
  }
];
