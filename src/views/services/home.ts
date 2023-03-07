/*
 * @Description: 接口处理-首页
 * @Author: Dong Wei
 * @Date: 2023-03-07 17:23:38
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-07 17:43:28
 * @FilePath: \audio-player\src\views\services\home.ts
 */
import * as apis from '@/api/modules';

export const useBannerData = async () => {
  const { res } = await apis.getSwiperApi({ type: 0 });
  // console.log(res);
};
