/*
 * @Description: 接口
 * @Author: Dong Wei
 * @Date: 2022-08-09 15:46:33
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-08 10:57:45
 * @FilePath: \audio-player\src\api\modules\index.ts
 */
import request from '@/api';
import type { HomeApi } from '../interface/home';

// 首页轮播图
export const getSwiperApi = (data: HomeApi.ReqBanner) => {
  return request.get<HomeApi.ResBanner>('/banner', data);
};

// 首页最新歌曲
export const getLatestSongApi = (data: HomeApi.ReqLatestSong) => {
  return request.get<HomeApi.ResLatestSong>('/personalized/newsong', data);
};

// 首页推荐歌单
export const getRecommendSongListApi = (data: HomeApi.ReqRecommendSongList) => {
  return request.get<HomeApi.ResRecommendSongList>('/personalized', data);
};

// 首页推荐歌手
export const getRecommendArtistsApi = (data: HomeApi.ReqRecommendArtist) => {
  return request.get<HomeApi.ResRecommendArtist>('/top/artists', data);
};
