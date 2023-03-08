/*
 * @Description: 公共方法
 * @Author: Dong Wei
 * @Date: 2023-03-08 14:16:27
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-08 14:45:51
 * @FilePath: \audio-player\src\utils\index.ts
 */

// 检测元素是否在可视区并执行回调操作(只会在第一次可见的时候执行);
export const handleElementInClient = (target: HTMLElement | null, callback: Function, option = {}) => {
  const observerFn = (entries: any[]) => {
    entries.forEach(item => {
      // item.time 一个记录时间原点(time origin)到交叉被触发的时间的时间戳
      // item.target 目标元素
      // item.rootBounds 根元素，默认为浏览器视窗
      // item.boundingClientRect 目标元素的边界信息
      // item.intersectionRect 目标元素与根元素相交区域的信息
      // item.isIntersecting 目标元素与根元素是否相交(相交状态为threshold设置的值)
      // item.intersectionRatio 目标元素与根元素相交的比值
      if (item.isIntersecting) {
        callback();
        // 解除观察当前元素 避免不可见时候再次调用callback函数
        observer.unobserve(item.target);
      }
    });
  };
  const observerOption = {
    threshold: 0, // 0~1 默认为0，1代表目标元素完全出现时才会执行回调
  };
  Object.assign(observerOption, { ...option });
  const observer = new IntersectionObserver(observerFn, observerOption);
  if (target) {
    observer.observe(target);
  }
};
