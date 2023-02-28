/*
 * @Description: 轮播图数据
 * @Author: Dong Wei
 * @Date: 2023-02-28 16:25:11
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-02-28 16:35:00
 * @FilePath: \audio-player\src\mock\banner.ts
 */
export interface BannerList {
  pic: string;
  typeTitle: string;
}
const bannerList: BannerList[] = [
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

export default bannerList;
