/*
 * @Description: 首页接口类型
 * @Author: Dong Wei
 * @Date: 2023-03-07 17:19:30
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-07 17:19:32
 * @FilePath: \audio-player\src\api\interface\home.ts
 */
export namespace HomeApi {
  // http://iwenwiki.com/NeteaseCloudMusicApi/guide/#banner
  export interface ReqBanner {
    type?: 0 | 1 | 2 | 3;
  }
}
