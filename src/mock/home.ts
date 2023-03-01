/*
 * @Description: 首页mock数据
 * @Author: Dong Wei
 * @Date: 2023-03-01 13:47:37
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-01 14:45:00
 * @FilePath: \audio-player\src\mock\home.ts
 */
export interface BannerList {
  pic: string;
  typeTitle: string;
}
// 轮播图
export const bannerList: BannerList[] = [
  {
    pic: 'http://p1.music.126.net/9oLDS_bunqfaPxDQRSH1gw==/109951168430161364.jpg',
    typeTitle: '新歌首发',
  },
  {
    pic: 'http://p1.music.126.net/HIfqlKXtqhbMl0V2HB4uWw==/109951168430247017.jpg',
    typeTitle: '新歌首发',
  },
  {
    pic: 'http://p1.music.126.net/tSeABboDkBw0PXYiskoOJg==/109951168430203112.jpg',
    typeTitle: '新歌首发',
  },
  {
    pic: 'http://p1.music.126.net/jjL-5-ol6KWtAdYekFBi6g==/109951168430223571.jpg',
    typeTitle: '新歌首发',
  },
  {
    pic: 'http://p1.music.126.net/oJRpJppvb9mXTsxcEH91WA==/109951168430320728.jpg',
    typeTitle: '新碟首发',
  },
  {
    pic: 'http://p1.music.126.net/krCHvlDC0tSl8TOxDJj1HA==/109951168430356383.jpg',
    typeTitle: '热歌推荐',
  },
  {
    pic: 'http://p1.music.126.net/ZdhO7v3L7EXZICQPcEJdOA==/109951168430363384.jpg',
    typeTitle: '新碟首发',
  },
  {
    pic: 'http://p1.music.126.net/O2s4g-d9BgZdNFMPBgfqow==/109951168430375804.jpg',
    typeTitle: '新碟首发',
  },
];

// 最新歌曲
export const songList: any[] = [
  {
    name: 'Cracker Island (feat. Thundercat)',
    id: 2024999270,
    picUrl: 'http://p1.music.126.net/OY4qITxiRw07s3YCGXWyyg==/109951168392198748.jpg',
    song: {
      artists: [
        {
          name: 'Gorillaz',
          id: 93185,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0,
        },
        {
          name: 'Thundercat',
          id: 103817,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0,
        },
      ],
    },
  },
  {
    name: '张三的歌 (live版)',
    id: 2024897416,
    picUrl: 'http://p1.music.126.net/SBzInwORuvy0uhkXG3cviQ==/109951168383697793.jpg',
    song: {
      artists: [
        {
          name: '李宇春',
          id: 8327,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0,
        },
      ],
    },
  },
  {
    name: '色盲',
    id: 2023212774,
    picUrl: 'http://p1.music.126.net/F0-ohqog8cF2QMrWR6ghNg==/109951168316332702.jpg',
    song: {
      artists: [
        {
          name: '裘德',
          id: 12038239,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0,
        },
        {
          name: '徐佳莹',
          id: 9940,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0,
        },
      ],
    },
  },
  {
    name: 'Gion3',
    id: 2024655192,
    picUrl: 'http://p1.music.126.net/A6t-w6Q4PXcd_Lku9zaHTA==/109951168379389990.jpg',
    song: {
      artists: [
        {
          name: 'HOYO-MiX',
          id: 12487174,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0,
        },
      ],
    },
  },
  {
    name: '今生今世',
    id: 2024889454,
    picUrl: 'http://p1.music.126.net/eZCOQJlRm1gw18iQfax4SQ==/109951168383314151.jpg',
    song: {
      artists: [
        {
          name: '炎明熹',
          id: 49828212,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0,
        },
      ],
    },
  },
  {
    name: '又十年',
    id: 2024611328,
    picUrl: 'http://p1.music.126.net/fJYuN7bg5HAi4tvuNUauBQ==/109951168375888145.jpg',
    song: {
      artists: [
        {
          name: '张学友',
          id: 6460,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0,
        },
      ],
    },
  },
  {
    name: 'THE SOUND',
    id: 2021389620,
    picUrl: 'http://p1.music.126.net/geWPEnPHQp3VYQYSfXQiww==/109951168299394129.jpg',
    song: {
      artists: [
        {
          name: 'Stray Kids',
          id: 12647860,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0,
        },
      ],
    },
  },
  {
    name: '铸铁旅人',
    id: 2019605158,
    picUrl: 'http://p1.music.126.net/7x2pYlHZh6bXbstuNoGdJw==/109951168282674455.jpg',
    song: {
      artists: [
        {
          name: '虎啸春',
          id: 33107141,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0,
        },
      ],
    },
  },
  {
    name: 'White Noise ft. 蛋堡 Soft Lipa',
    id: 2022405540,
    picUrl: 'http://p1.music.126.net/h0vFeJTlzW-zo6AsLmo5Vg==/109951168309419829.jpg',
    song: {
      artists: [
        {
          name: '国蛋',
          id: 2947,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0,
        },
      ],
    },
  },
  {
    name: '心脏病',
    id: 2023639496,
    picUrl: 'http://p1.music.126.net/HYI1lrng-LoQZMdgG1BeIw==/109951168320820503.jpg',
    song: {
      artists: [
        {
          name: 'TOYOKI',
          id: 12730273,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0,
        },
        {
          name: 'Ty.',
          id: 1086078,
          picId: 0,
          img1v1Id: 0,
          briefDesc: '',
          picUrl: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          img1v1Url: 'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
          albumSize: 0,
          alias: [],
          trans: '',
          musicSize: 0,
          topicPerson: 0,
        },
      ],
    },
  },
];

// 推荐歌单
export const palyList: any[] = [
  {
    name: '『游戏』玩游戏必备电音超燃向',
    picUrl: 'https://p2.music.126.net/jpGpwxor2KCsMsqFhROGNA==/109951168164727442.jpg',
    id: 1980964492,
  },
  {
    name: '戳爷/黄老板/断眉/萌德/骚姆/比伯/烟卷',
    picUrl: 'https://p2.music.126.net/sOWvFHC7alSUXHxmsTr1bQ==/109951163610820733.jpg',
    id: 2037020941,
  },
  {
    name: '百首老歌：再续当年情',
    picUrl: 'https://p2.music.126.net/RGsJyDuaOVNx0Mt0AvByQQ==/109951166994369315.jpg',
    id: 1994370897,
  },
  {
    name: '失恋日记 | 换不同的场景 但哪里都是你',
    picUrl: 'https://p2.music.126.net/BLMmLfUNu0zdprDISL_hTw==/109951165764406932.jpg',
    id: 6606027462,
  },
  {
    name: '[一周欧美上新]虚拟天团Gorillaz第八张录音室专辑已发行',
    picUrl: 'https://p2.music.126.net/tdtYUzrKmrBpYOvADzAZbg==/109951168423026705.jpg',
    id: 2859214503,
  },
  {
    name: '这些充满『强烈画面感』的音乐',
    picUrl: 'https://p2.music.126.net/uXbDB1aWsp36_I_lQs-DeA==/1411772930113118.jpg',
    id: 156934569,
  },
  {
    name: '100首让你瞬间勾起回忆的老歌',
    picUrl: 'https://p2.music.126.net/pAidnPdX-0fhVakVXiHMzg==/18575149441852040.jpg',
    id: 2134203011,
  },
  {
    name: '愿还会有人，做个傻子陪你浪费一生',
    picUrl: 'https://p2.music.126.net/AWcDI5wc9fkS2bZt6wIm-Q==/109951163212638897.jpg',
    id: 2042205655,
  },
  {
    name: '假如能回到过去，你想做什么',
    picUrl: 'https://p2.music.126.net/kZb9DO4vykqiYEx0HHx86w==/109951163065542645.jpg',
    id: 1982066521,
  },
  {
    name: '『武侠影视金曲100首』每个人心中的江湖梦',
    picUrl: 'https://p2.music.126.net/gsLYUhZsZbRLXQt_TOaDIw==/109951164287662942.jpg',
    id: 2933222749,
  },
];

// 推荐歌手
export const artists: any[] = [
  {
    name: '周杰伦',
    img1v1Url: 'http://p1.music.126.net/Esjm32Q05PQoX8pF008u7w==/109951165793871057.jpg',
    picUrl: 'http://p1.music.126.net/BbR3TuhPULMLDV0MjczI4g==/109951165793869641.jpg',
  },
  {
    name: 'いきものがかり',
    img1v1Url: 'https://p2.music.126.net/8QeIpaLm-K3JcV404viDkw==/109951166541147754.jpg',
    picUrl: 'https://p2.music.126.net/Qo22P9NoV5RhWk7fZu_r6g==/109951166541146743.jpg',
  },
  {
    name: '李荣浩',
    img1v1Url: 'http://p1.music.126.net/MST3f1Uv77SwFyTf0Gcj5w==/109951168324499292.jpg',
    picUrl: 'http://p1.music.126.net/mkWDxcXZk8W3NwdCEMg00A==/109951165693668650.jpg',
  },
  {
    name: 'G.E.M.邓紫棋',
    img1v1Url: 'http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg',
    picUrl: 'http://p1.music.126.net/fq1O8ZRT5_FHzg_uLEtUQA==/109951167773880633.jpg',
  },
  {
    name: '陈奕迅',
    img1v1Url: 'http://p1.music.126.net/rYYhHXZHwCfizE0N46F37Q==/109951166115911716.jpg',
    picUrl: 'http://p1.music.126.net/w_vuv9hBWq2hlJxJcmJrjg==/109951166115915081.jpg',
  },
];
