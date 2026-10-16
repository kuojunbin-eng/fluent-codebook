export type CodebookEntry = {
  code: string;
  zh: string;
  esWord: string;
  esCue: string;
  frWord: string;
  frCue: string;
  tier: '入門' | '進階' | 'Boss';
  boss?: { label: string; reason: string; story: string };
};

export const codebook: CodebookEntry[] = [
  {
    "code": "00",
    "zh": "鈴鐺",
    "esWord": "cero",
    "esCue": "cero → 把 0 想成一個圓圈",
    "frWord": "zéro",
    "frCue": "zéro → 0 的零圈",
    "tier": "入門"
  },
  {
    "code": "01",
    "zh": "靈異事件",
    "esWord": "uno",
    "esCue": "uno → UNO 牌上的一個大 1",
    "frWord": "un",
    "frCue": "un → 一顆星星（one/un）",
    "tier": "入門"
  },
  {
    "code": "02",
    "zh": "趙靈兒",
    "esWord": "dos",
    "esCue": "dos → 兩顆豆子一起跳舞",
    "frWord": "deux",
    "frCue": "deux → 兩顆麵糰（dough / deux）",
    "tier": "Boss",
    "boss": {
      "label": "雙豆探戈",
      "reason": "西語 dos 與法語 deux 都像「兩個」的短促雙拍。",
      "story": "一座雙語舞廳裡，西班牙 dos 端出兩顆豆子，法國 deux 把兩團麵糰揉成耳朵；兩個、兩個、兩個，舞池只留下 02 的雙拍。"
    }
  },
  {
    "code": "03",
    "zh": "山",
    "esWord": "tres",
    "esCue": "tres → 三次敲門的節奏",
    "frWord": "trois",
    "frCue": "trois → trio 三人組的節奏",
    "tier": "入門"
  },
  {
    "code": "04",
    "zh": "零食",
    "esWord": "cuatro",
    "esCue": "cuatro → 四格窗戶",
    "frWord": "quatre",
    "frCue": "quatre → quad，四輪車",
    "tier": "入門"
  },
  {
    "code": "05",
    "zh": "蓮霧",
    "esWord": "cinco",
    "esCue": "cinco → 五根手指戴手套",
    "frWord": "cinq",
    "frCue": "cinq → sink，把 5 丟進水槽",
    "tier": "入門"
  },
  {
    "code": "06",
    "zh": "煙斗",
    "esWord": "seis",
    "esCue": "seis → 六邊形骰子",
    "frWord": "six",
    "frCue": "six → 六面骰的 six",
    "tier": "入門"
  },
  {
    "code": "07",
    "zh": "令旗",
    "esWord": "siete",
    "esCue": "siete → 七色彩虹",
    "frWord": "sept",
    "frCue": "sept → set，七件組",
    "tier": "入門"
  },
  {
    "code": "08",
    "zh": "泥巴",
    "esWord": "ocho",
    "esCue": "ocho → 8 字蝴蝶結",
    "frWord": "huit",
    "frCue": "huit → 8 穗麥子（wheat / huit）",
    "tier": "入門"
  },
  {
    "code": "09",
    "zh": "菱角",
    "esWord": "nueve",
    "esCue": "nueve → 九顆葡萄串成一串",
    "frWord": "neuf",
    "frCue": "neuf → new，一個全新的 9",
    "tier": "入門"
  },
  {
    "code": "10",
    "zh": "衣領",
    "esWord": "diez",
    "esCue": "diez → 十字架般的 10（diez / 10）",
    "frWord": "dix",
    "frCue": "dix → 10 的 X 形交叉線",
    "tier": "入門"
  },
  {
    "code": "11",
    "zh": "筷子",
    "esWord": "once",
    "esCue": "once → 足球場上 11 位球員",
    "frWord": "onze",
    "frCue": "onze → 11 像兩根門柱",
    "tier": "入門"
  },
  {
    "code": "12",
    "zh": "嬰兒",
    "esWord": "doce",
    "esCue": "doce → dose，一劑 12 的藥水",
    "frWord": "douze",
    "frCue": "douze → dozen，一打就是 12",
    "tier": "Boss",
    "boss": {
      "label": "一打藥水",
      "reason": "西語 doce 很像 dose；法語 douze 也容易被聽成 dozen。",
      "story": "12 號藥房門口，doce 醫生遞出一劑 dose，douze 藥師又把一整打藥瓶排成方陣；「一劑＋一打」同時指向 12。"
    }
  },
  {
    "code": "13",
    "zh": "醫生",
    "esWord": "trece",
    "esCue": "trece → tres（三）＋尾音，三角旗插在 13 號",
    "frWord": "treize",
    "frCue": "treize → treize 的尾音像「十三」的俐落節拍",
    "tier": "Boss",
    "boss": {
      "label": "三角旗禁區",
      "reason": "trece / treize 只差一個尾音，都是 13 的高頻混淆點。",
      "story": "13 號禁區插滿三角旗：西班牙 trece 先敲 tres 的三拍，法國 treize 用俐落的 z 音把旗子拉直，兩個聲音一起守住 13。"
    }
  },
  {
    "code": "14",
    "zh": "鑰匙",
    "esWord": "catorce",
    "esCue": "catorce → cat 抱住 14 顆球",
    "frWord": "quatorze",
    "frCue": "quatorze → quatre（四）的開頭，搭配 10",
    "tier": "Boss",
    "boss": {
      "label": "四輪貓車",
      "reason": "catorce 與 quatorze 開頭都帶著 cat/ quatre 的「四」感。",
      "story": "一隻貓開著四輪車衝過 14 號門：catorce 喊「cat」，quatorze 喊「quatre」；看到貓和四輪車，就回到 14。"
    }
  },
  {
    "code": "15",
    "zh": "鸚鵡",
    "esWord": "quince",
    "esCue": "quince → quin 像 queen，15 號女王",
    "frWord": "quinze",
    "frCue": "quinze → quinze，想像 15 號皇后",
    "tier": "Boss",
    "boss": {
      "label": "皇后十五號",
      "reason": "quince / quinze 都有 quin 音，適合固定綁定「女王」。",
      "story": "15 號皇后戴著 quin 字樣的王冠，西語 quince 與法語 quinze 同時宣告登場；王冠上只刻一個數字：15。"
    }
  },
  {
    "code": "16",
    "zh": "石榴",
    "esWord": "dieciseis",
    "esCue": "dieciséis → 抓住 seis 的「六」音節",
    "frWord": "seize",
    "frCue": "seize → seize = 抓住，抓住 16 顆珠子",
    "tier": "Boss",
    "boss": {
      "label": "抓住六顆星",
      "reason": "dieciséis 帶 seis；法語 seize 就是「抓住」，雙語可形成動作鉤子。",
      "story": "十六顆星從天上掉下來，西語 dieciséis 喊出 seis，法語 seize 伸手「抓住」最後六顆；十加六，牢牢鎖定 16。"
    }
  },
  {
    "code": "17",
    "zh": "儀器",
    "esWord": "diecisiete",
    "esCue": "diecisiete → siete 回音兩次，17 歲少年",
    "frWord": "dix-sept",
    "frCue": "dix-sept → dix（十）＋ sept（七）",
    "tier": "入門"
  },
  {
    "code": "18",
    "zh": "尾巴",
    "esWord": "dieciocho",
    "esCue": "dieciocho → ocho 的 8 字形，十加八",
    "frWord": "dix-huit",
    "frCue": "dix-huit → dix（十）＋ huit（八）",
    "tier": "入門"
  },
  {
    "code": "19",
    "zh": "救護車",
    "esWord": "diecinueve",
    "esCue": "diecinueve → nueve 的九顆星，十加九",
    "frWord": "dix-neuf",
    "frCue": "dix-neuf → dix（十）＋ neuf（九）",
    "tier": "入門"
  },
  {
    "code": "20",
    "zh": "古堡",
    "esWord": "veinte",
    "esCue": "veinte → 十位數整組記：2 個十",
    "frWord": "vingt",
    "frCue": "vingt → vin，20 杯酒排成一列",
    "tier": "Boss",
    "boss": {
      "label": "二十杯酒",
      "reason": "西語 veinte 的 veinti- 與法語 vingt 都可綁定成整十地標。",
      "story": "20 號酒窖裡，veinte 與 vingt 把 20 杯酒排成兩列。西班牙語、法語的第一個整十地標，先記住「兩列十杯」。"
    }
  },
  {
    "code": "21",
    "zh": "鱷魚",
    "esWord": "veinte y uno",
    "esCue": "veinte y uno → 先抓「2 個十」，再用 uno 收尾",
    "frWord": "vingt et un",
    "frCue": "vingt et un → 先抓「20」，再用 un 收尾",
    "tier": "進階"
  },
  {
    "code": "22",
    "zh": "雙耳",
    "esWord": "veinte y dos",
    "esCue": "veinte y dos → 先抓「2 個十」，再用 dos 收尾",
    "frWord": "vingt-deux",
    "frCue": "vingt-deux → 先抓「20」，再用 deux 收尾",
    "tier": "進階"
  },
  {
    "code": "23",
    "zh": "和尚",
    "esWord": "veinte y tres",
    "esCue": "veinte y tres → 先抓「2 個十」，再用 tres 收尾",
    "frWord": "vingt-trois",
    "frCue": "vingt-trois → 先抓「20」，再用 trois 收尾",
    "tier": "進階"
  },
  {
    "code": "24",
    "zh": "耳屎",
    "esWord": "veinte y cuatro",
    "esCue": "veinte y cuatro → 先抓「2 個十」，再用 cuatro 收尾",
    "frWord": "vingt-quatre",
    "frCue": "vingt-quatre → 先抓「20」，再用 quatre 收尾",
    "tier": "進階"
  },
  {
    "code": "25",
    "zh": "二胡",
    "esWord": "veinte y cinco",
    "esCue": "veinte y cinco → 先抓「2 個十」，再用 cinco 收尾",
    "frWord": "vingt-cinq",
    "frCue": "vingt-cinq → 先抓「20」，再用 cinq 收尾",
    "tier": "進階"
  },
  {
    "code": "26",
    "zh": "河流",
    "esWord": "veinte y seis",
    "esCue": "veinte y seis → 先抓「2 個十」，再用 seis 收尾",
    "frWord": "vingt-six",
    "frCue": "vingt-six → 先抓「20」，再用 six 收尾",
    "tier": "進階"
  },
  {
    "code": "27",
    "zh": "耳機",
    "esWord": "veinte y siete",
    "esCue": "veinte y siete → 先抓「2 個十」，再用 siete 收尾",
    "frWord": "vingt-sept",
    "frCue": "vingt-sept → 先抓「20」，再用 sept 收尾",
    "tier": "進階"
  },
  {
    "code": "28",
    "zh": "惡霸",
    "esWord": "veinte y ocho",
    "esCue": "veinte y ocho → 先抓「2 個十」，再用 ocho 收尾",
    "frWord": "vingt-huit",
    "frCue": "vingt-huit → 先抓「20」，再用 huit 收尾",
    "tier": "進階"
  },
  {
    "code": "29",
    "zh": "二舊",
    "esWord": "veinte y nueve",
    "esCue": "veinte y nueve → 先抓「2 個十」，再用 nueve 收尾",
    "frWord": "vingt-neuf",
    "frCue": "vingt-neuf → 先抓「20」，再用 neuf 收尾",
    "tier": "進階"
  },
  {
    "code": "30",
    "zh": "森林",
    "esWord": "treinta",
    "esCue": "treinta → 十位數整組記：3 個十",
    "frWord": "trente",
    "frCue": "trente → 十位數整組記：3 個十",
    "tier": "Boss",
    "boss": {
      "label": "三十次敲門",
      "reason": "treinta / trente 都以 tre- 開頭，適合連到 three / 三。",
      "story": "30 號城堡前敲門三十次：treinta 把三次節奏放大十倍，trente 用同一個 tre- 開頭回聲；只聽開頭，就能找回 30。"
    }
  },
  {
    "code": "31",
    "zh": "鯊魚",
    "esWord": "treinta y uno",
    "esCue": "treinta y uno → 先抓「3 個十」，再用 uno 收尾",
    "frWord": "trente et un",
    "frCue": "trente et un → 先抓「30」，再用 un 收尾",
    "tier": "進階"
  },
  {
    "code": "32",
    "zh": "扇兒",
    "esWord": "treinta y dos",
    "esCue": "treinta y dos → 先抓「3 個十」，再用 dos 收尾",
    "frWord": "trente-deux",
    "frCue": "trente-deux → 先抓「30」，再用 deux 收尾",
    "tier": "進階"
  },
  {
    "code": "33",
    "zh": "仙丹",
    "esWord": "treinta y tres",
    "esCue": "treinta y tres → 先抓「3 個十」，再用 tres 收尾",
    "frWord": "trente-trois",
    "frCue": "trente-trois → 先抓「30」，再用 trois 收尾",
    "tier": "進階"
  },
  {
    "code": "34",
    "zh": "紳士",
    "esWord": "treinta y cuatro",
    "esCue": "treinta y cuatro → 先抓「3 個十」，再用 cuatro 收尾",
    "frWord": "trente-quatre",
    "frCue": "trente-quatre → 先抓「30」，再用 quatre 收尾",
    "tier": "進階"
  },
  {
    "code": "35",
    "zh": "珊瑚",
    "esWord": "treinta y cinco",
    "esCue": "treinta y cinco → 先抓「3 個十」，再用 cinco 收尾",
    "frWord": "trente-cinq",
    "frCue": "trente-cinq → 先抓「30」，再用 cinq 收尾",
    "tier": "進階"
  },
  {
    "code": "36",
    "zh": "沙漏",
    "esWord": "treinta y seis",
    "esCue": "treinta y seis → 先抓「3 個十」，再用 seis 收尾",
    "frWord": "trente-six",
    "frCue": "trente-six → 先抓「30」，再用 six 收尾",
    "tier": "進階"
  },
  {
    "code": "37",
    "zh": "山雞",
    "esWord": "treinta y siete",
    "esCue": "treinta y siete → 先抓「3 個十」，再用 siete 收尾",
    "frWord": "trente-sept",
    "frCue": "trente-sept → 先抓「30」，再用 sept 收尾",
    "tier": "進階"
  },
  {
    "code": "38",
    "zh": "婦女",
    "esWord": "treinta y ocho",
    "esCue": "treinta y ocho → 先抓「3 個十」，再用 ocho 收尾",
    "frWord": "trente-huit",
    "frCue": "trente-huit → 先抓「30」，再用 huit 收尾",
    "tier": "進階"
  },
  {
    "code": "39",
    "zh": "三角尺",
    "esWord": "treinta y nueve",
    "esCue": "treinta y nueve → 先抓「3 個十」，再用 nueve 收尾",
    "frWord": "trente-neuf",
    "frCue": "trente-neuf → 先抓「30」，再用 neuf 收尾",
    "tier": "進階"
  },
  {
    "code": "40",
    "zh": "司令",
    "esWord": "cuarenta",
    "esCue": "cuarenta → 十位數整組記：4 個十",
    "frWord": "quarante",
    "frCue": "quarante → 十位數整組記：4 個十",
    "tier": "Boss",
    "boss": {
      "label": "四十格棋盤",
      "reason": "cuarenta / quarante 都以 qua- 起音，接到 quad / quatre 的四。",
      "story": "40 格棋盤上，cuarenta 和 quarante 各走四個十字步。qua- 是四的入口，四十就像棋盤的整排方格。"
    }
  },
  {
    "code": "41",
    "zh": "司儀",
    "esWord": "cuarenta y uno",
    "esCue": "cuarenta y uno → 先抓「4 個十」，再用 uno 收尾",
    "frWord": "quarante et un",
    "frCue": "quarante et un → 先抓「40」，再用 un 收尾",
    "tier": "進階"
  },
  {
    "code": "42",
    "zh": "柿兒",
    "esWord": "cuarenta y dos",
    "esCue": "cuarenta y dos → 先抓「4 個十」，再用 dos 收尾",
    "frWord": "quarante-deux",
    "frCue": "quarante-deux → 先抓「40」，再用 deux 收尾",
    "tier": "進階"
  },
  {
    "code": "43",
    "zh": "石山",
    "esWord": "cuarenta y tres",
    "esCue": "cuarenta y tres → 先抓「4 個十」，再用 tres 收尾",
    "frWord": "quarante-trois",
    "frCue": "quarante-trois → 先抓「40」，再用 trois 收尾",
    "tier": "進階"
  },
  {
    "code": "44",
    "zh": "石獅",
    "esWord": "cuarenta y cuatro",
    "esCue": "cuarenta y cuatro → 先抓「4 個十」，再用 cuatro 收尾",
    "frWord": "quarante-quatre",
    "frCue": "quarante-quatre → 先抓「40」，再用 quatre 收尾",
    "tier": "進階"
  },
  {
    "code": "45",
    "zh": "師父",
    "esWord": "cuarenta y cinco",
    "esCue": "cuarenta y cinco → 先抓「4 個十」，再用 cinco 收尾",
    "frWord": "quarante-cinq",
    "frCue": "quarante-cinq → 先抓「40」，再用 cinq 收尾",
    "tier": "進階"
  },
  {
    "code": "46",
    "zh": "石榴",
    "esWord": "cuarenta y seis",
    "esCue": "cuarenta y seis → 先抓「4 個十」，再用 seis 收尾",
    "frWord": "quarante-six",
    "frCue": "quarante-six → 先抓「40」，再用 six 收尾",
    "tier": "進階"
  },
  {
    "code": "47",
    "zh": "司機",
    "esWord": "cuarenta y siete",
    "esCue": "cuarenta y siete → 先抓「4 個十」，再用 siete 收尾",
    "frWord": "quarante-sept",
    "frCue": "quarante-sept → 先抓「40」，再用 sept 收尾",
    "tier": "進階"
  },
  {
    "code": "48",
    "zh": "絲瓜",
    "esWord": "cuarenta y ocho",
    "esCue": "cuarenta y ocho → 先抓「4 個十」，再用 ocho 收尾",
    "frWord": "quarante-huit",
    "frCue": "quarante-huit → 先抓「40」，再用 huit 收尾",
    "tier": "進階"
  },
  {
    "code": "49",
    "zh": "四球",
    "esWord": "cuarenta y nueve",
    "esCue": "cuarenta y nueve → 先抓「4 個十」，再用 nueve 收尾",
    "frWord": "quarante-neuf",
    "frCue": "quarante-neuf → 先抓「40」，再用 neuf 收尾",
    "tier": "進階"
  },
  {
    "code": "50",
    "zh": "武林",
    "esWord": "cincuenta",
    "esCue": "cincuenta → 十位數整組記：5 個十",
    "frWord": "cinquante",
    "frCue": "cinquante → 十位數整組記：5 個十",
    "tier": "Boss",
    "boss": {
      "label": "五十水槽",
      "reason": "cincuenta 以 cinco 起頭；cinquante 以 cinq 起頭，都把 5 放在最前面。",
      "story": "50 號廚房有五十個水槽，西語 cincuenta 和法語 cinquante 都先亮出 cin/cinq 的五音；先看到 5，再補上十倍。"
    }
  },
  {
    "code": "51",
    "zh": "狐狸",
    "esWord": "cincuenta y uno",
    "esCue": "cincuenta y uno → 先抓「5 個十」，再用 uno 收尾",
    "frWord": "cinquante et un",
    "frCue": "cinquante et un → 先抓「50」，再用 un 收尾",
    "tier": "進階"
  },
  {
    "code": "52",
    "zh": "木耳",
    "esWord": "cincuenta y dos",
    "esCue": "cincuenta y dos → 先抓「5 個十」，再用 dos 收尾",
    "frWord": "cinquante-deux",
    "frCue": "cinquante-deux → 先抓「50」，再用 deux 收尾",
    "tier": "進階"
  },
  {
    "code": "53",
    "zh": "烏山",
    "esWord": "cincuenta y tres",
    "esCue": "cincuenta y tres → 先抓「5 個十」，再用 tres 收尾",
    "frWord": "cinquante-trois",
    "frCue": "cinquante-trois → 先抓「50」，再用 trois 收尾",
    "tier": "進階"
  },
  {
    "code": "54",
    "zh": "武士",
    "esWord": "cincuenta y cuatro",
    "esCue": "cincuenta y cuatro → 先抓「5 個十」，再用 cuatro 收尾",
    "frWord": "cinquante-quatre",
    "frCue": "cinquante-quatre → 先抓「50」，再用 quatre 收尾",
    "tier": "進階"
  },
  {
    "code": "55",
    "zh": "火舞",
    "esWord": "cincuenta y cinco",
    "esCue": "cincuenta y cinco → 先抓「5 個十」，再用 cinco 收尾",
    "frWord": "cinquante-cinq",
    "frCue": "cinquante-cinq → 先抓「50」，再用 cinq 收尾",
    "tier": "進階"
  },
  {
    "code": "56",
    "zh": "物流箱",
    "esWord": "cincuenta y seis",
    "esCue": "cincuenta y seis → 先抓「5 個十」，再用 seis 收尾",
    "frWord": "cinquante-six",
    "frCue": "cinquante-six → 先抓「50」，再用 six 收尾",
    "tier": "進階"
  },
  {
    "code": "57",
    "zh": "武器",
    "esWord": "cincuenta y siete",
    "esCue": "cincuenta y siete → 先抓「5 個十」，再用 siete 收尾",
    "frWord": "cinquante-sept",
    "frCue": "cinquante-sept → 先抓「50」，再用 sept 收尾",
    "tier": "進階"
  },
  {
    "code": "58",
    "zh": "尾巴",
    "esWord": "cincuenta y ocho",
    "esCue": "cincuenta y ocho → 先抓「5 個十」，再用 ocho 收尾",
    "frWord": "cinquante-huit",
    "frCue": "cinquante-huit → 先抓「50」，再用 huit 收尾",
    "tier": "進階"
  },
  {
    "code": "59",
    "zh": "五角星",
    "esWord": "cincuenta y nueve",
    "esCue": "cincuenta y nueve → 先抓「5 個十」，再用 nueve 收尾",
    "frWord": "cinquante-neuf",
    "frCue": "cinquante-neuf → 先抓「50」，再用 neuf 收尾",
    "tier": "進階"
  },
  {
    "code": "60",
    "zh": "榴槤",
    "esWord": "sesenta",
    "esCue": "sesenta → 十位數整組記：6 個十",
    "frWord": "soixante",
    "frCue": "soixante → 十位數整組記：6 個十",
    "tier": "進階"
  },
  {
    "code": "61",
    "zh": "輪椅",
    "esWord": "sesenta y uno",
    "esCue": "sesenta y uno → 先抓「6 個十」，再用 uno 收尾",
    "frWord": "soixante et un",
    "frCue": "soixante et un → 先抓「60」，再用 un 收尾",
    "tier": "進階"
  },
  {
    "code": "62",
    "zh": "牛耳",
    "esWord": "sesenta y dos",
    "esCue": "sesenta y dos → 先抓「6 個十」，再用 dos 收尾",
    "frWord": "soixante-deux",
    "frCue": "soixante-deux → 先抓「60」，再用 deux 收尾",
    "tier": "進階"
  },
  {
    "code": "63",
    "zh": "硫酸",
    "esWord": "sesenta y tres",
    "esCue": "sesenta y tres → 先抓「6 個十」，再用 tres 收尾",
    "frWord": "soixante-trois",
    "frCue": "soixante-trois → 先抓「60」，再用 trois 收尾",
    "tier": "進階"
  },
  {
    "code": "64",
    "zh": "律師",
    "esWord": "sesenta y cuatro",
    "esCue": "sesenta y cuatro → 先抓「6 個十」，再用 cuatro 收尾",
    "frWord": "soixante-quatre",
    "frCue": "soixante-quatre → 先抓「60」，再用 quatre 收尾",
    "tier": "進階"
  },
  {
    "code": "65",
    "zh": "鑼鼓",
    "esWord": "sesenta y cinco",
    "esCue": "sesenta y cinco → 先抓「6 個十」，再用 cinco 收尾",
    "frWord": "soixante-cinq",
    "frCue": "soixante-cinq → 先抓「60」，再用 cinq 收尾",
    "tier": "進階"
  },
  {
    "code": "66",
    "zh": "乳牛",
    "esWord": "sesenta y seis",
    "esCue": "sesenta y seis → 先抓「6 個十」，再用 seis 收尾",
    "frWord": "soixante-six",
    "frCue": "soixante-six → 先抓「60」，再用 six 收尾",
    "tier": "進階"
  },
  {
    "code": "67",
    "zh": "油漆",
    "esWord": "sesenta y siete",
    "esCue": "sesenta y siete → 先抓「6 個十」，再用 siete 收尾",
    "frWord": "soixante-sept",
    "frCue": "soixante-sept → 先抓「60」，再用 sept 收尾",
    "tier": "進階"
  },
  {
    "code": "68",
    "zh": "喇叭",
    "esWord": "sesenta y ocho",
    "esCue": "sesenta y ocho → 先抓「6 個十」，再用 ocho 收尾",
    "frWord": "soixante-huit",
    "frCue": "soixante-huit → 先抓「60」，再用 huit 收尾",
    "tier": "進階"
  },
  {
    "code": "69",
    "zh": "遛狗",
    "esWord": "sesenta y nueve",
    "esCue": "sesenta y nueve → 先抓「6 個十」，再用 nueve 收尾",
    "frWord": "soixante-neuf",
    "frCue": "soixante-neuf → 先抓「60」，再用 neuf 收尾",
    "tier": "進階"
  },
  {
    "code": "70",
    "zh": "麒麟",
    "esWord": "setenta",
    "esCue": "setenta → 十位數整組記：7 個十",
    "frWord": "soixante-dix",
    "frCue": "soixante-dix → 十位數整組記：7 個十",
    "tier": "進階"
  },
  {
    "code": "71",
    "zh": "蜥蜴",
    "esWord": "setenta y uno",
    "esCue": "setenta y uno → 先抓「7 個十」，再用 uno 收尾",
    "frWord": "soixante et onze",
    "frCue": "soixante et onze → 60＋11，和「一打」故事綁在一起",
    "tier": "進階"
  },
  {
    "code": "72",
    "zh": "企鵝",
    "esWord": "setenta y dos",
    "esCue": "setenta y dos → 先抓「7 個十」，再用 dos 收尾",
    "frWord": "soixante-dix-deux",
    "frCue": "soixante-dix-deux → 先抓「70」，再用 deux 收尾",
    "tier": "進階"
  },
  {
    "code": "73",
    "zh": "旗山",
    "esWord": "setenta y tres",
    "esCue": "setenta y tres → 先抓「7 個十」，再用 tres 收尾",
    "frWord": "soixante-dix-trois",
    "frCue": "soixante-dix-trois → 先抓「70」，再用 trois 收尾",
    "tier": "進階"
  },
  {
    "code": "74",
    "zh": "騎士",
    "esWord": "setenta y cuatro",
    "esCue": "setenta y cuatro → 先抓「7 個十」，再用 cuatro 收尾",
    "frWord": "soixante-dix-quatre",
    "frCue": "soixante-dix-quatre → 先抓「70」，再用 quatre 收尾",
    "tier": "進階"
  },
  {
    "code": "75",
    "zh": "積木",
    "esWord": "setenta y cinco",
    "esCue": "setenta y cinco → 先抓「7 個十」，再用 cinco 收尾",
    "frWord": "soixante-dix-cinq",
    "frCue": "soixante-dix-cinq → 先抓「70」，再用 cinq 收尾",
    "tier": "進階"
  },
  {
    "code": "76",
    "zh": "犀牛",
    "esWord": "setenta y seis",
    "esCue": "setenta y seis → 先抓「7 個十」，再用 seis 收尾",
    "frWord": "soixante-dix-six",
    "frCue": "soixante-dix-six → 先抓「70」，再用 six 收尾",
    "tier": "進階"
  },
  {
    "code": "77",
    "zh": "機器人",
    "esWord": "setenta y siete",
    "esCue": "setenta y siete → 先抓「7 個十」，再用 siete 收尾",
    "frWord": "soixante-dix-sept",
    "frCue": "soixante-dix-sept → 先抓「70」，再用 sept 收尾",
    "tier": "進階"
  },
  {
    "code": "78",
    "zh": "西瓜",
    "esWord": "setenta y ocho",
    "esCue": "setenta y ocho → 先抓「7 個十」，再用 ocho 收尾",
    "frWord": "soixante-dix-huit",
    "frCue": "soixante-dix-huit → 先抓「70」，再用 huit 收尾",
    "tier": "進階"
  },
  {
    "code": "79",
    "zh": "氣球",
    "esWord": "setenta y nueve",
    "esCue": "setenta y nueve → 先抓「7 個十」，再用 nueve 收尾",
    "frWord": "soixante-dix-neuf",
    "frCue": "soixante-dix-neuf → 先抓「70」，再用 neuf 收尾",
    "tier": "進階"
  },
  {
    "code": "80",
    "zh": "巴黎鐵塔",
    "esWord": "ochenta",
    "esCue": "ochenta → 十位數整組記：8 個十",
    "frWord": "quatre-vingts",
    "frCue": "quatre-vingts → 十位數整組記：8 個十",
    "tier": "進階"
  },
  {
    "code": "81",
    "zh": "白蟻",
    "esWord": "ochenta y uno",
    "esCue": "ochenta y uno → 先抓「8 個十」，再用 uno 收尾",
    "frWord": "quatre-vingt-un",
    "frCue": "quatre-vingt-un → 先抓「80」，再用 un 收尾",
    "tier": "進階"
  },
  {
    "code": "82",
    "zh": "靶心",
    "esWord": "ochenta y dos",
    "esCue": "ochenta y dos → 先抓「8 個十」，再用 dos 收尾",
    "frWord": "quatre-vingt-deux",
    "frCue": "quatre-vingt-deux → 先抓「80」，再用 deux 收尾",
    "tier": "進階"
  },
  {
    "code": "83",
    "zh": "爬山",
    "esWord": "ochenta y tres",
    "esCue": "ochenta y tres → 先抓「8 個十」，再用 tres 收尾",
    "frWord": "quatre-vingt-trois",
    "frCue": "quatre-vingt-trois → 先抓「80」，再用 trois 收尾",
    "tier": "進階"
  },
  {
    "code": "84",
    "zh": "巴士",
    "esWord": "ochenta y cuatro",
    "esCue": "ochenta y cuatro → 先抓「8 個十」，再用 cuatro 收尾",
    "frWord": "quatre-vingt-quatre",
    "frCue": "quatre-vingt-quatre → 先抓「80」，再用 quatre 收尾",
    "tier": "進階"
  },
  {
    "code": "85",
    "zh": "白虎",
    "esWord": "ochenta y cinco",
    "esCue": "ochenta y cinco → 先抓「8 個十」，再用 cinco 收尾",
    "frWord": "quatre-vingt-cinq",
    "frCue": "quatre-vingt-cinq → 先抓「80」，再用 cinq 收尾",
    "tier": "進階"
  },
  {
    "code": "86",
    "zh": "芭樂",
    "esWord": "ochenta y seis",
    "esCue": "ochenta y seis → 先抓「8 個十」，再用 seis 收尾",
    "frWord": "quatre-vingt-six",
    "frCue": "quatre-vingt-six → 先抓「80」，再用 six 收尾",
    "tier": "進階"
  },
  {
    "code": "87",
    "zh": "白旗",
    "esWord": "ochenta y siete",
    "esCue": "ochenta y siete → 先抓「8 個十」，再用 siete 收尾",
    "frWord": "quatre-vingt-sept",
    "frCue": "quatre-vingt-sept → 先抓「80」，再用 sept 收尾",
    "tier": "進階"
  },
  {
    "code": "88",
    "zh": "琵琶",
    "esWord": "ochenta y ocho",
    "esCue": "ochenta y ocho → 先抓「8 個十」，再用 ocho 收尾",
    "frWord": "quatre-vingt-huit",
    "frCue": "quatre-vingt-huit → 先抓「80」，再用 huit 收尾",
    "tier": "進階"
  },
  {
    "code": "89",
    "zh": "八爪魚",
    "esWord": "ochenta y nueve",
    "esCue": "ochenta y nueve → 先抓「8 個十」，再用 nueve 收尾",
    "frWord": "quatre-vingt-neuf",
    "frCue": "quatre-vingt-neuf → 先抓「80」，再用 neuf 收尾",
    "tier": "進階"
  },
  {
    "code": "90",
    "zh": "精靈",
    "esWord": "noventa",
    "esCue": "noventa → 十位數整組記：9 個十",
    "frWord": "quatre-vingt-dix",
    "frCue": "quatre-vingt-dix → 十位數整組記：9 個十",
    "tier": "進階"
  },
  {
    "code": "91",
    "zh": "球衣",
    "esWord": "noventa y uno",
    "esCue": "noventa y uno → 先抓「9 個十」，再用 uno 收尾",
    "frWord": "quatre-vingt-dix-un",
    "frCue": "quatre-vingt-dix-un → 先抓「90」，再用 un 收尾",
    "tier": "進階"
  },
  {
    "code": "92",
    "zh": "球兒",
    "esWord": "noventa y dos",
    "esCue": "noventa y dos → 先抓「9 個十」，再用 dos 收尾",
    "frWord": "quatre-vingt-dix-deux",
    "frCue": "quatre-vingt-dix-deux → 先抓「90」，再用 deux 收尾",
    "tier": "進階"
  },
  {
    "code": "93",
    "zh": "舊傘",
    "esWord": "noventa y tres",
    "esCue": "noventa y tres → 先抓「9 個十」，再用 tres 收尾",
    "frWord": "quatre-vingt-dix-trois",
    "frCue": "quatre-vingt-dix-trois → 先抓「90」，再用 trois 收尾",
    "tier": "進階"
  },
  {
    "code": "94",
    "zh": "教師",
    "esWord": "noventa y cuatro",
    "esCue": "noventa y cuatro → 先抓「9 個十」，再用 cuatro 收尾",
    "frWord": "quatre-vingt-dix-quatre",
    "frCue": "quatre-vingt-dix-quatre → 先抓「90」，再用 quatre 收尾",
    "tier": "進階"
  },
  {
    "code": "95",
    "zh": "酒壺",
    "esWord": "noventa y cinco",
    "esCue": "noventa y cinco → 先抓「9 個十」，再用 cinco 收尾",
    "frWord": "quatre-vingt-dix-cinq",
    "frCue": "quatre-vingt-dix-cinq → 先抓「90」，再用 cinq 收尾",
    "tier": "進階"
  },
  {
    "code": "96",
    "zh": "九頭牛",
    "esWord": "noventa y seis",
    "esCue": "noventa y seis → 先抓「9 個十」，再用 seis 收尾",
    "frWord": "quatre-vingt-dix-six",
    "frCue": "quatre-vingt-dix-six → 先抓「90」，再用 six 收尾",
    "tier": "進階"
  },
  {
    "code": "97",
    "zh": "酒旗",
    "esWord": "noventa y siete",
    "esCue": "noventa y siete → 先抓「9 個十」，再用 siete 收尾",
    "frWord": "quatre-vingt-dix-sept",
    "frCue": "quatre-vingt-dix-sept → 先抓「90」，再用 sept 收尾",
    "tier": "進階"
  },
  {
    "code": "98",
    "zh": "酒吧",
    "esWord": "noventa y ocho",
    "esCue": "noventa y ocho → 先抓「9 個十」，再用 ocho 收尾",
    "frWord": "quatre-vingt-dix-huit",
    "frCue": "quatre-vingt-dix-huit → 先抓「90」，再用 huit 收尾",
    "tier": "進階"
  },
  {
    "code": "99",
    "zh": "舅舅",
    "esWord": "noventa y nueve",
    "esCue": "noventa y nueve → 先抓「9 個十」，再用 nueve 收尾",
    "frWord": "quatre-vingt-dix-neuf",
    "frCue": "quatre-vingt-dix-neuf → 先抓「90」，再用 neuf 收尾",
    "tier": "進階"
  }
];

export const bossCodes = ['02','12','13','14','15','16','20','30','40','50'];

export const languageMeta = {
  zh: { label: '中文', short: 'ZH', color: '#16b6a5' },
  es: { label: 'Español', short: 'ES', color: '#f28b53' },
  fr: { label: 'Français', short: 'FR', color: '#6b5dd3' },
} as const;
