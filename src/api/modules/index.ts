/*
 * @Description: 接口
 * @Author: Dong Wei
 * @Date: 2022-08-09 15:46:33
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-07 17:22:58
 * @FilePath: \audio-player\src\api\modules\index.ts
 */
import request from '@/api';
import type { HomeApi } from '../interface/home';

// 获取诊断预测结果
// export const postTestApi = (data: ParamDiagnosis.ReqDiagnosisInfo) => {
//   return request.post<ParamDiagnosis.ResDiagnosisInfo[]>(`/ewell_triage`, data);
// };
// 首页轮播图
export const getSwiperApi = (data: HomeApi.ReqBanner) => {
  return request.get('/banner', data);
};
