/*
 * @Description: 首页接口类型
 * @Author: Dong Wei
 * @Date: 2023-03-07 17:19:30
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-08 13:52:01
 * @FilePath: \audio-player\src\api\interface\home.ts
 */
import type { Result } from './common'; // TODO:暂不清楚怎么写更优雅,接口返回格式如果更统一应该不会出现这种问题
// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi
export namespace HomeApi {
  // 轮播图
  export interface ReqBanner {
    type?: 0 | 1 | 2 | 3;
  }
  export interface BannerList {
    imageUrl: string;
    typeTitle: string;
    [propName: string]: any;
  }
  export interface ResBanner extends Result {
    banners: BannerList[];
  }

  // 最新歌曲
  export interface ReqLatestSong {
    limit?: number;
  }

  export interface LatestSongs {
    picUrl: string;
    blurPicUrl?: string;
    name: string;
    song: {
      artists: {
        name: string;
        [propName: string]: any;
      }[];
      [propName: string]: any;
    };
    [propName: string]: any;
  }

  export interface ResLatestSong extends Result {
    result: LatestSongs[];
    category?: number;
  }

  // 推荐歌单
  export interface ReqRecommendSongList {
    limit?: number;
  }
  export interface RecommendSongList {
    name: string;
    picUrl: string;
    [propName: string]: any;
  }
  export interface ResRecommendSongList {
    result: RecommendSongList[];
    [propName: string]: any;
  }

  // 推荐歌手
  export interface ReqRecommendArtist {
    limit?: number;
    offset?: number;
    [propName: string]: any;
  }
  export interface RecommendArtist {
    img1v1Url: string;
    name: string;
    [propName: string]: any;
  }
  export interface ResRecommendArtist {
    artists: RecommendArtist[];
    [propName: string]: any;
  }
}
