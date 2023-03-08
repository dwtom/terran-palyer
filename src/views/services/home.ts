/*
 * @Description: 接口处理-首页
 * @Author: Dong Wei
 * @Date: 2023-03-07 17:23:38
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-08 14:13:01
 * @FilePath: \audio-player\src\views\services\home.ts
 */
import * as apis from '@/api/modules';
import type { HomeApi } from '@/api/interface/home';

// 轮播图
export const useBannerData = async () => {
  let result: HomeApi.BannerList[] = [];
  const { res } = await apis.getSwiperApi({ type: 0 });
  if (res) {
    result = res.banners ?? [];
  }
  return result;
};

// 最新歌曲
export const useLatestSongData = async () => {
  let result: HomeApi.LatestSongs[] = [];
  const { res } = await apis.getLatestSongApi({ limit: 10 });
  if (res) {
    result = res.result ?? [];
  }
  return result;
};

// 推荐歌单
export const useRecommendSongData = async () => {
  let result: HomeApi.RecommendSongList[] = [];
  const { res } = await apis.getRecommendSongListApi({ limit: 10 });
  if (res) {
    result = res.result ?? [];
  }
  return result;
};

// 推荐歌手
export const useRecommendArtistData = async () => {
  let result: HomeApi.RecommendArtist[] = [];
  const { res } = await apis.getRecommendArtistsApi({ limit: 5 });
  if (res) {
    // 找到特殊项并取出
    const artists = res.artists ?? [];
    const jayInd = artists.findIndex(val => val.name === '周杰伦');
    const ikimaInd = artists.findIndex(val => ['いきものがかり', '生物股长'].includes(val.name));
    let jay = {
      name: '周杰伦',
      img1v1Url: 'http://p1.music.126.net/Esjm32Q05PQoX8pF008u7w==/109951165793871057.jpg',
      picUrl: 'http://p1.music.126.net/BbR3TuhPULMLDV0MjczI4g==/109951165793869641.jpg',
    };
    let ikimonogakari = {
      name: 'いきものがかり',
      img1v1Url: 'https://p2.music.126.net/8QeIpaLm-K3JcV404viDkw==/109951166541147754.jpg',
      picUrl: 'https://p2.music.126.net/Qo22P9NoV5RhWk7fZu_r6g==/109951166541146743.jpg',
    };
    if (jayInd >= 0) {
      // @ts-ignore
      jay = artists.splice(jayInd, 1);
    }
    if (ikimaInd >= 0) {
      // @ts-ignore
      ikimonogakari = artists.splice(ikimaInd, 1);
    }
    const restArr = artists.slice(0, 3);
    result = [jay, ikimonogakari, ...restArr];
  }
  return result;
};
