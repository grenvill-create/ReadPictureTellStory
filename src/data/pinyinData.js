export const pinyinLessons = [
  {
    id: "lesson_1",
    title: "单韵母 (一) / Simple Vowels Part 1",
    subtitle: "从最基本的三个拼音字母 a、o、e 开始学习吧！",
    items: [
      {
        letter: "a",
        image: "/images/pinyin_a.png",
        sound: "啊",
        description: "张大嘴巴 aaa。就像医生叔叔检查喉咙，或者看到红苹果开心地张大嘴巴！",
        tips: "发音时嘴巴张大，舌头放平，声音要响亮拉长。",
        example: "ā",
        exampleWord: "阿姨 (ā yí)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个字母是 'a'？",
            options: ["a", "o", "e"],
            answer: "a"
          },
          {
            type: "choose_sound",
            question: "听声音！医生检查喉咙时，我们要张大嘴巴发什么音？",
            audioText: "啊",
            options: ["o", "e", "a"],
            answer: "a"
          }
        ]
      },
      {
        letter: "o",
        image: "/images/pinyin_o.png",
        sound: "喔",
        description: "嘴巴圆圆 ooo。就像大公鸡清晨在木栅栏上喔喔啼！",
        tips: "发音时双唇缩圆，舌头向后缩，声音要圆润。",
        example: "ō",
        exampleWord: "喔喔啼 (ō ō tí)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个字母是 'o'？",
            options: ["a", "o", "e"],
            answer: "o"
          },
          {
            type: "choose_image",
            question: "大公鸡清晨喔喔啼，它的发音和哪个字母很像？",
            options: ["e", "o", "a"],
            answer: "o"
          }
        ]
      },
      {
        letter: "e",
        image: "/images/pinyin_e.png",
        sound: "鹅",
        description: "嘴巴扁扁 eee。就像一只漂亮的大白鹅，在清清的水里游来游去！",
        tips: "发音时嘴角向两边咧开，露出牙齿，扁扁的。",
        example: "é",
        exampleWord: "白鹅 (bái é)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个字母是 'e'？",
            options: ["a", "o", "e"],
            answer: "e"
          },
          {
            type: "choose_sound",
            question: "大白鹅在水里游，它的名字发音和哪个字母一样？",
            audioText: "鹅",
            options: ["e", "o", "a"],
            answer: "e"
          }
        ]
      }
    ]
  },
  {
    id: "lesson_2",
    title: "单韵母 (二) / Simple Vowels Part 2",
    subtitle: "继续学习另外三个单韵母 i、u、ü，加油！",
    items: [
      {
        letter: "i",
        image: "/images/pinyin_i.png",
        sound: "衣",
        description: "牙齿对齐 iii。就像一件漂亮的小衣服，或者是小蚂蚁在树叶下避雨！",
        tips: "发音时嘴角向两边展开，上下牙齿要对齐。",
        example: "yī",
        exampleWord: "衣服 (yī fu)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个字母是 'i'？",
            options: ["i", "u", "ü"],
            answer: "i"
          },
          {
            type: "choose_sound",
            question: "小衣服的'衣'，发音和哪个字母一样？",
            audioText: "衣",
            options: ["u", "i", "ü"],
            answer: "i"
          }
        ]
      },
      {
        letter: "u",
        image: "/images/pinyin_u.png",
        sound: "乌",
        description: "嘴巴突出 uuu。就像一只可爱的小乌龟在水里游玩，或者鸟儿的小巢！",
        tips: "发音时嘴唇收得极小，向前突出，成一个小圆孔。",
        example: "wū",
        exampleWord: "乌龟 (wū guī)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个字母是 'u'？",
            options: ["i", "u", "ü"],
            answer: "u"
          },
          {
            type: "choose_image",
            question: "小乌龟爬呀爬，它的名字首音是哪个字母？",
            options: ["i", "ü", "u"],
            answer: "u"
          }
        ]
      },
      {
        letter: "ü",
        image: "/images/pinyin_v.png",
        sound: "迂",
        description: "吹口哨 üüü。就像一条可爱的小鱼，在水里快活地吐着两个小泡泡！",
        tips: "发音和 i 相似，但是双唇要收圆突出，习惯就像吹口哨一样。",
        example: "yú",
        exampleWord: "小鱼 (xiǎo yú)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个字母是上面有两个小眼睛的 'ü'？",
            options: ["u", "ü", "i"],
            answer: "ü"
          },
          {
            type: "choose_sound",
            question: "小鱼在水里吹泡泡，它的发音是？",
            audioText: "鱼",
            options: ["ü", "u", "i"],
            answer: "ü"
          }
        ]
      }
    ]
  },
  {
    id: "lesson_3",
    title: "四声调大冲关 / The Four Tones",
    subtitle: "拼音有四个声调小帽子，我们来认识它们吧！",
    items: [
      {
        letter: "ā",
        image: "/images/pinyin_a.png",
        sound: "啊",
        description: "一声平又平 (ˉ)。就像走在平坦的大路上，声音平平拉长：ā！",
        tips: "一声高平，声音保持平稳不升不降。",
        example: "ā",
        exampleWord: "阿姨 (ā yí)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个是一声的 'a'？",
            options: ["ā", "á", "ǎ"],
            answer: "ā"
          }
        ]
      },
      {
        letter: "á",
        image: "/images/pinyin_a.png",
        sound: "啊",
        description: "二声往上扬 (ˊ)。就像爬上小山坡，声音往上扬：á？(什么？)",
        tips: "二声由中音升到高音，有种疑问的感觉。",
        example: "á",
        exampleWord: "拔河 (bá hé)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个是二声的 'a'？",
            options: ["ā", "á", "ǎ"],
            answer: "á"
          }
        ]
      },
      {
        letter: "ǎ",
        image: "/images/pinyin_a.png",
        sound: "啊",
        description: "三声拐个弯 (ˇ)。先下坡再上坡，像一个拐弯的马路：ǎ！(好啊！)",
        tips: "三声先降后升，有个明显的转弯折回点。",
        example: "ǎ",
        exampleWord: "打鼓 (dǎ gǔ)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个是三声 of 'a'？",
            options: ["á", "ǎ", "à"],
            answer: "ǎ"
          }
        ]
      },
      {
        letter: "à",
        image: "/images/pinyin_a.png",
        sound: "啊",
        description: "四声往下降 (ˋ)。就像从高高的滑梯上下滑，重重降下：à！(对啦！)",
        tips: "四声从最高音一路降到最低音，短促有力。",
        example: "à",
        exampleWord: "爸爸 (bà ba)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个是四声的 'a'？",
            options: ["ǎ", "á", "à"],
            answer: "à"
          }
        ]
      }
    ]
  },
  {
    id: "lesson_4",
    title: "声母乐园 (一) / Initials Part 1",
    subtitle: "声母在拼音的前面，我们认识 b、p、m、f 吧！",
    items: [
      {
        letter: "b",
        image: "/images/pinyin_b.png",
        sound: "播",
        description: "听广播 bbb。就像一台带天线的收音机在播放广播，或者用木棒打鼓！",
        tips: "双唇闭合，阻碍气流，然后突然放开，不送气。",
        example: "bà",
        exampleWord: "爸爸 (bà ba)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个字母是声母 'b'？",
            options: ["b", "p", "d"],
            answer: "b"
          },
          {
            type: "choose_sound",
            question: "听音乐广播，广播的'播'发声和哪个声母开头一样？",
            audioText: "播",
            options: ["p", "b", "m"],
            answer: "b"
          }
        ]
      },
      {
        letter: "p",
        image: "/images/pinyin_p.png",
        sound: "坡",
        description: "泼水泼水 ppp。就像小朋友提着小水桶开心地在沙滩上泼水玩！",
        tips: "发音部位和 b 相同，但要用力吐出一口气（送气）。你可以把手放在嘴前感受气流。",
        example: "pí",
        exampleWord: "皮球 (pí qiú)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个字母是向上泼水的 'p'？",
            options: ["b", "p", "q"],
            answer: "p"
          },
          {
            type: "choose_sound",
            question: "泼水节泼水，'泼'字和哪个字母发音最接近？",
            audioText: "坡",
            options: ["b", "p", "f"],
            answer: "p"
          }
        ]
      },
      {
        letter: "m",
        image: "/images/pinyin_m.png",
        sound: "摸",
        description: "两个门洞 mmm。就像捉迷藏时，小朋友蒙上眼睛用双手向前摸索，或者小猫咪在拱形门洞进出！",
        tips: "双唇闭合，气流从鼻腔出来发音（鼻音）。",
        example: "mā",
        exampleWord: "妈妈 (mā ma)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个字母是两个门洞的 'm'？",
            options: ["m", "n", "u"],
            answer: "m"
          },
          {
            type: "choose_sound",
            question: "玩捉迷藏的'摸'字，发音开头和哪个声母最接近？",
            audioText: "摸",
            options: ["n", "m", "f"],
            answer: "m"
          }
        ]
      },
      {
        letter: "f",
        image: "/images/pinyin_f.png",
        sound: "佛",
        description: "小风车 fff。就像在微风中飞速旋转的粉色小风车，发出轻柔的风声！",
        tips: "上齿轻触下唇，气流从缝隙中挤出摩擦发音。",
        example: "fēng",
        exampleWord: "风车 (fēng chē)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个字母是小风车 'f'？",
            options: ["t", "f", "l"],
            answer: "f"
          },
          {
            type: "choose_sound",
            question: "风扇吹风的'风'，发音和哪个声母开头一样？",
            audioText: "佛",
            options: ["h", "f", "p"],
            answer: "f"
          }
        ]
      }
    ]
  },
  {
    id: "lesson_5",
    title: "声母乐园 (二) / Initials Part 2",
    subtitle: "声母小家族继续壮大，快来认识 d、t、n、l 吧！",
    items: [
      {
        letter: "d",
        image: "/images/pinyin_d.png",
        sound: "得",
        description: "敲起小鼓 ddd。就像用两根小木棒，欢快地在小军鼓上敲出'得得得'的声音！",
        tips: "舌尖抵住上牙床，憋住气，然后舌尖突然弹开发音，不送气。",
        example: "dǎ",
        exampleWord: "打鼓 (dǎ gǔ)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个字母是声母 'd'？",
            options: ["b", "d", "q"],
            answer: "d"
          },
          {
            type: "choose_sound",
            question: "敲打小军鼓的'打'字，发音和哪个声母开头一样？",
            audioText: "得",
            options: ["t", "d", "l"],
            answer: "d"
          }
        ]
      },
      {
        letter: "t",
        image: "/images/pinyin_t.png",
        sound: "特",
        description: "小伞把儿 ttt。就像雨中一把撑开的可爱雨伞，伞把儿弯弯朝上！",
        tips: "发音部位和 d 相同，但是要用力吐出一口气（送气）。",
        example: "tù",
        exampleWord: "兔子 (tù zi)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个字母是像小伞把的 't'？",
            options: ["f", "t", "l"],
            answer: "t"
          },
          {
            type: "choose_sound",
            question: "小白兔蹦蹦跳，'兔'字发音首字母是？",
            audioText: "特",
            options: ["d", "t", "n"],
            answer: "t"
          }
        ]
      },
      {
        letter: "n",
        image: "/images/pinyin_n.png",
        sound: "讷",
        description: "一个门洞 nnn。就像一扇漂亮的拱形小门，或者是树枝上的小鸟窝！",
        tips: "舌尖顶住上牙床，让气流从鼻腔出来发音（比 m 的门洞少一个）。",
        example: "nǐ",
        exampleWord: "你好 (nǐ hǎo)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个字母是一个门洞的 'n'？",
            options: ["m", "u", "n"],
            answer: "n"
          },
          {
            type: "choose_sound",
            question: "你好的'你'，发音开头和哪个声母最接近？",
            audioText: "讷",
            options: ["l", "n", "m"],
            answer: "n"
          }
        ]
      },
      {
        letter: "l",
        image: "/images/pinyin_l.png",
        sound: "乐",
        description: "小喇叭 lll。就像一只五彩的小喇叭，吹出滴滴答答欢快的乐曲！",
        tips: "舌尖抵住上牙床，气流从舌头两边出来（声音清脆）。",
        example: "lù",
        exampleWord: "梅花鹿 (méi huā lù)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个字母是像小木棒的 'l'？",
            options: ["i", "l", "t"],
            answer: "l"
          },
          {
            type: "choose_sound",
            question: "吹小喇叭的'喇'，发音开头和哪个声母最接近？",
            audioText: "乐",
            options: ["n", "l", "r"],
            answer: "l"
          }
        ]
      }
    ]
  },
  {
    id: "lesson_6",
    title: "基础拼读大冒险 / Simple Spelling",
    subtitle: "把前面的声母和韵母组合起来，就是奇妙的拼读啦！",
    items: [
      {
        letter: "bā",
        image: "/images/pinyin_ba.png",
        sound: "八",
        description: "b - ā -> bā (八)。就像天空中飘着的八个粉色大气球，或者是切开的八瓣橘子！",
        tips: "把声母 b 的口型快速划向单韵母 ā 的发音，两音相碰，一口气读出：bā！",
        example: "bā",
        exampleWord: "数字八 (shù zì bā)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个是 'b' 和 'ā' 拼出来的 'bā'？",
            options: ["bā", "pā", "mā"],
            answer: "bā"
          },
          {
            type: "choose_sound",
            question: "听声音！这个音拼出来是哪个词？",
            audioText: "八",
            options: ["mā", "bā", "dǎ"],
            answer: "bā"
          }
        ]
      },
      {
        letter: "mā",
        image: "/images/pinyin_ma.png",
        sound: "妈",
        description: "m - ā -> mā (妈)。就像每天陪伴着我们、给我们温暖拥抱的亲爱妈妈！",
        tips: "双唇紧闭发 m，再快速张大嘴巴发 ā，平平拉长读一声：mā！",
        example: "mā",
        exampleWord: "妈妈 (mā ma)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个是 'm' 和 'ā' 拼出来的 'mā'？",
            options: ["nā", "mā", "bā"],
            answer: "mā"
          },
          {
            type: "choose_image",
            question: "世界上最爱我们的人是妈妈，'妈'字的拼音是？",
            options: ["mā", "wá", "pí"],
            answer: "mā"
          }
        ]
      },
      {
        letter: "dǎ",
        image: "/images/pinyin_da.png",
        sound: "打",
        description: "d - ǎ -> dǎ (打)。就像小朋友快活地敲打着小鼓，或者一下一下拍打着小皮球！",
        tips: "用 d 起始，迅速连上第三声 ǎ（先下后上），读作：dǎ！",
        example: "dǎ",
        exampleWord: "打皮球 (dǎ pí qiú)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个是 'd' 和 'ǎ' 拼出来的 'dǎ'？",
            options: ["tǎ", "dá", "dǎ"],
            answer: "dǎ"
          },
          {
            type: "choose_sound",
            question: "听声音！拍打皮球的'打'拼音是哪个？",
            audioText: "打",
            options: ["dǎ", "tǎ", "lù"],
            answer: "dǎ"
          }
        ]
      },
      {
        letter: "lù",
        image: "/images/pinyin_lu.png",
        sound: "路",
        description: "l - ù -> lù (鹿)。就像在茂密绿色森林里，轻快跳跃奔跑的可爱小梅花鹿！",
        tips: "舌尖抵住发 l，嘴唇迅速收圆向前突出发四声的 ù，有力降下：lù！",
        example: "lù",
        exampleWord: "梅花鹿 (méi huā lù)",
        questions: [
          {
            type: "choose_letter",
            question: "哪个是 'l' 和 'ù' 拼出来的 'lù'？",
            options: ["lù", "nù", "lǔ"],
            answer: "lù"
          },
          {
            type: "choose_image",
            question: "奔跑的小梅花鹿，'鹿'字的拼音是哪个？",
            options: ["nù", "lù", "lǜ"],
            answer: "lù"
          }
        ]
      }
    ]
  }
];
