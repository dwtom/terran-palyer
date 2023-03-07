<!--
 * @Description: 播放器栏
 * @Author: Dong Wei
 * @Date: 2023-03-01 15:31:09
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-07 09:58:13
 * @FilePath: \audio-player\src\components\MusicWidget.vue
-->
<script setup lang="ts">
import VueSlider from 'vue-slider-component';
import '@/styles/slider.css';

import { songTime2, startMusic, pauseMusic, changeProgress } from '@/utils/player';
import { usePlayerStore } from '@/stores/playerStore';
import { storeToRefs } from 'pinia';
const playerStore = usePlayerStore();
const { currentMusic, playing, progress, playMode, volume, time } = storeToRefs(playerStore);
const showMusicTime = ref(false);

watch(
  () => volume.value,
  () => {
    currentMusic.value?.volume(volume.value);
  }
);
</script>
<template>
  <div class="music-widget flex-sb">
    <!-- 进度条 -->
    <div class="music-progress-container">
      <VueSlider
        v-model="progress"
        id="widget-progress"
        class="music-progress"
        :min="0"
        :max="time"
        :interval="1"
        :duration="0.5"
        tooltip="none"
        @click="changeProgress(progress)"
      ></VueSlider>
      <div class="music-time">{{ songTime2(progress) }} / {{ songTime2(time) }}</div>
    </div>
    <div class="music-info">
      <div class="music-img">
        <img :src="'http://p3.music.126.net/XRQ1xlgHH_0tixPe_Q5dVA==/109951168251202858.jpg?param=128y128'" alt="" />
        <div class="open-player">
          <svg
            t="1670207990373"
            class="open-player-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5640"
            width="200"
            height="200"
          >
            <path
              d="M960.1 699.7l-72.8 72.8L512 397.1 136.7 772.5l-72.8-72.8L512 251.5z"
              fill="#ffffff"
              p-id="5641"
            ></path>
          </svg>
        </div>
      </div>
      <div class="music-info-other">
        <span class="music-name" :class="{ 'music-time-in': showMusicTime }">Strings</span>
        <div class="music-author">
          <span class="author">L1vebeats/Push.audio</span>
        </div>
      </div>
    </div>
    <!-- 操作栏 -->
    <div class="music-right">
      <div class="music-control">
        <svg
          class="control-icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
        >
          <defs><rect id="path_0" x="0" y="0" width="200" height="200" /></defs>
          <g opacity="1" transform="translate(0 0)  rotate(0 100 100)">
            <mask id="bg-mask-0" fill="white"><use xlink:href="#path_0" /></mask>
            <g mask="url(#bg-mask-0)">
              <path
                id="arrow"
                style="fill: #cccccc"
                transform="translate(35.21963688171376 44.356081611360985)  rotate(-90 66.78036311828623 52.999999999999986)"
                opacity="0"
                d=""
              />
              <path
                id="arrow"
                style="stroke: #000000; stroke-width: 8; stroke-opacity: 1; stroke-dasharray: 0 0"
                transform="translate(35.21963688171376 44.356081611360985)  rotate(-90 66.78036311828623 52.999999999999986)"
                d="M133.56,105.98L66.78,0L0,106 "
              />
            </g>
          </g>
        </svg>
        <svg
          v-show="playing"
          @click="pauseMusic()"
          class="control-icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
        >
          <defs><rect id="path_0" x="0" y="0" width="200" height="200" /></defs>
          <g opacity="1" transform="translate(0 0)  rotate(0 100 100)">
            <mask id="bg-mask-0" fill="white"><use xlink:href="#path_0" /></mask>
            <g mask="url(#bg-mask-0)">
              <path
                id="line2"
                style="fill: #000000"
                transform="translate(152 24)  rotate(0 0.0005 76)"
                opacity="1"
                d=""
              />
              <path
                id="line2"
                style="stroke: #000000; stroke-width: 8; stroke-opacity: 1; stroke-dasharray: 0 0"
                transform="translate(152 24)  rotate(0 0.0005 76)"
                d="M0,0L0,152 "
              />
              <path
                id="line1"
                style="fill: #000000"
                transform="translate(48 24)  rotate(0 0.0005 76)"
                opacity="1"
                d=""
              />
              <path
                id="line1"
                style="stroke: #000000; stroke-width: 8; stroke-opacity: 1; stroke-dasharray: 0 0"
                transform="translate(48 24)  rotate(0 0.0005 76)"
                d="M0,0L0,152 "
              />
            </g>
          </g>
        </svg>
        <svg
          v-show="!playing"
          @click="startMusic()"
          class="control-icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
        >
          <defs><rect id="path_0" x="0" y="0" width="200" height="200" /></defs>
          <g opacity="1" transform="translate(0 0)  rotate(0 100 100)">
            <mask id="bg-mask-0" fill="white"><use xlink:href="#path_0" /></mask>
            <g mask="url(#bg-mask-0)">
              <path
                id="三角形 1"
                fill-rule="evenodd"
                style="fill: #cccccc"
                transform="translate(0 12)  rotate(90 88 88)"
                opacity="0"
                d="M11.79,132L164.21,132L88,0L11.79,132Z "
              />
              <path
                id="三角形 1"
                style="stroke: #000000; stroke-width: 8; stroke-opacity: 1; stroke-dasharray: 0 0"
                transform="translate(0 12)  rotate(90 88 88)"
                d="M11.79,132L164.21,132L88,0L11.79,132Z "
              />
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="control-icon"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
        >
          <defs><rect id="path_0" x="0" y="0" width="200" height="200" /></defs>
          <g opacity="1" transform="translate(0 0)  rotate(0 100 100)">
            <mask id="bg-mask-0" fill="white"><use xlink:href="#path_0" /></mask>
            <g mask="url(#bg-mask-0)">
              <path
                id="arrow"
                style="fill: #cccccc"
                transform="translate(35.21963688171376 44.356081611360985)  rotate(90 66.78036311828623 52.999999999999986)"
                opacity="0"
                d=""
              />
              <path
                id="arrow"
                style="stroke: #000000; stroke-width: 8; stroke-opacity: 1; stroke-dasharray: 0 0"
                transform="translate(35.21963688171376 44.356081611360985)  rotate(90 66.78036311828623 52.999999999999986)"
                d="M133.56,105.98L66.78,0L0,106 "
              />
            </g>
          </g>
        </svg>
      </div>
      <div class="music-volume">
        <div class="volume-container">
          <VueSlider
            class="volume-slider"
            v-model="volume"
            :min="0"
            :max="1"
            :interval="0.01"
            :duration="0.3"
            tooltip="none"
          ></VueSlider>
          <div class="volume-info">
            <div class="volume-lable">VOLUME</div>
            <div class="volume-num">{{ Math.round(volume * 100) }}</div>
          </div>
        </div>
      </div>
      <div class="music-other">
        <svg
          t="1668785761323"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1173"
          width="200"
          height="200"
        >
          <path
            d="M459.838061 502.318545c0-30.657939 24.948364-55.606303 55.606303-55.606303s55.544242 24.948364 55.544242 55.606303-24.886303 55.606303-55.544242 55.606303a55.668364 55.668364 0 0 1-55.606303-55.606303m173.242181 0c0-64.884364-52.751515-117.666909-117.635878-117.666909a117.79103 117.79103 0 0 0-117.666909 117.666909 117.79103 117.79103 0 0 0 117.666909 117.66691 117.76 117.76 0 0 0 117.604848-117.66691"
            p-id="1174"
            fill="#000000"
          ></path>
          <path
            d="M515.413333 935.439515c-238.809212 0-433.089939-194.311758-433.089939-433.089939 0-238.840242 194.249697-433.18303 433.12097-433.183031 238.809212 0 433.12097 194.342788 433.120969 433.183031 0 238.778182-194.311758 433.089939-433.120969 433.089939m0-928.302545C242.346667 7.13697 20.262788 229.251879 20.262788 502.349576c0 273.035636 222.145939 495.181576 495.181576 495.181576s495.181576-222.17697 495.181575-495.181576c0-273.066667-222.17697-495.243636-495.181575-495.243637"
            p-id="1175"
            fill="#000000"
          ></path>
          <path
            d="M806.353455 471.288242a31.030303 31.030303 0 0 0-31.030303 31.030303v0.031031c0 143.297939-116.580848 259.847758-259.878788 259.847757a31.030303 31.030303 0 0 0 0 62.060606c177.493333 0 321.939394-144.41503 321.939394-321.939394a31.030303 31.030303 0 0 0-31.030303-31.030303M515.413333 242.439758a31.030303 31.030303 0 0 0 0-62.060606c-177.493333 0-321.877333 144.41503-321.908363 321.908363v0.03103a31.030303 31.030303 0 0 0 62.060606 0c0-143.297939 116.580848-259.878788 259.878788-259.878787z"
            p-id="1176"
            fill="#000000"
          ></path>
        </svg>
        <svg
          t="1670376314067"
          v-show="playMode == 0"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3089"
          width="200"
          height="200"
        >
          <path
            d="M342.69 297.61c-22.96 0-41.3-18.63-41.3-41.32 0-22.67 18.34-41.03 41.3-41.03h457.64c61.35 0 117.2 25.32 157.94 65.49 40.76 40.71 65.73 96.88 65.73 158.23v146.07c0 61.65-24.97 117.52-65.73 158.23-40.73 40.17-96.58 65.46-157.94 65.46H342.69c-61.68 0-117.52-25.29-158.23-65.46-36.09-36.62-60.52-85.52-64.6-139.06h-95.4C11.09 604.22 0 592.88 0 579.52c0-6.71 2.93-13.1 7.57-17.16l67.21-67.82 67.8-67.48c9.29-9.59 24.73-9.59 34.32 0h0.56l67.5 67.48 67.21 67.82c9.58 9.29 9.58 25 0 34.91-5.24 4.65-12.22 7.57-19.23 6.95h-91.02c4.05 31.15 18.9 59.66 40.11 80.9h0.3c25.88 25.59 61.41 41.56 100.37 41.56h457.64c38.66 0 74.16-15.98 99.75-41.56C925.97 659.53 942 624.01 942 585.05V438.98c0-38.96-16.03-74.46-41.91-100.05-25.59-25.91-61.09-41.32-99.75-41.32H342.69zM187.63 555.35h47.74l-25.32-25.88v-0.27l-50.32-50.05-50.34 50.05v0.27L83.8 555.35h103.83z"
            fill="#231815"
            p-id="3090"
          ></path>
        </svg>
        <svg
          t="1668787163705"
          v-show="playMode == 1"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2180"
          width="200"
          height="200"
        >
          <path
            d="M694.4 854.4H195.2l48 44.8c9.6 6.4 16 16 16 28.8-3.2 19.2-19.2 32-38.4 32-9.6 0-22.4-6.4-28.8-12.8l-108.8-96c-12.8-12.8-16-35.2 0-48L192 704c6.4-6.4 19.2-9.6 28.8-9.6 19.2 0 35.2 16 35.2 35.2 0 9.6-6.4 19.2-12.8 25.6l-41.6 38.4h496c112 0 198.4-89.6 198.4-198.4v-86.4c0-19.2 12.8-32 32-32s32 12.8 32 32v86.4c0 140.8-118.4 259.2-265.6 259.2zM329.6 169.6h496l-48-44.8c-9.6-6.4-16-16-16-28.8 3.2-19.2 19.2-32 38.4-32 9.6 0 22.4 6.4 28.8 12.8l108.8 96c12.8 12.8 16 35.2 0 48L832 320c-6.4 6.4-19.2 9.6-28.8 9.6-19.2 0-35.2-16-35.2-35.2 0-9.6 6.4-19.2 12.8-25.6l41.6-38.4H326.4C217.6 233.6 128 323.2 128 435.2v89.6c0 19.2-12.8 32-32 32s-32-12.8-32-32v-86.4C64 288 182.4 169.6 329.6 169.6z"
            p-id="2181"
          ></path>
        </svg>
        <svg
          t="1668787191526"
          v-show="playMode == 2"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2500"
          width="200"
          height="200"
        >
          <path
            d="M928 476.8c-19.2 0-32 12.8-32 32v86.4c0 108.8-86.4 198.4-198.4 198.4H201.6l41.6-38.4c6.4-6.4 12.8-16 12.8-25.6 0-19.2-16-35.2-35.2-35.2-9.6 0-22.4 3.2-28.8 9.6l-108.8 99.2c-16 12.8-12.8 35.2 0 48l108.8 96c6.4 6.4 19.2 12.8 28.8 12.8 19.2 0 35.2-12.8 38.4-32 0-12.8-6.4-22.4-16-28.8l-48-44.8h499.2c147.2 0 265.6-118.4 265.6-259.2v-86.4c0-19.2-12.8-32-32-32zM96 556.8c19.2 0 32-12.8 32-32v-89.6c0-112 89.6-201.6 198.4-204.8h496l-41.6 38.4c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 35.2 35.2 9.6 0 22.4-3.2 28.8-9.6l105.6-99.2c16-12.8 12.8-35.2 0-48l-108.8-96c-6.4-6.4-19.2-12.8-28.8-12.8-19.2 0-35.2 12.8-38.4 32 0 12.8 6.4 22.4 16 28.8l48 44.8H329.6C182.4 169.6 64 288 64 438.4v86.4c0 19.2 12.8 32 32 32z"
            p-id="2501"
          ></path>
          <path d="M544 672V352h-48L416 409.6l16 41.6 60.8-41.6V672z" p-id="2502"></path>
        </svg>
        <svg
          t="1668787213634"
          v-show="playMode == 3"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2661"
          width="200"
          height="200"
        >
          <path
            d="M844.8 665.6c-6.4-6.4-16-12.8-25.6-9.6-19.2 0-35.2 16-35.2 35.2 0 9.6 6.4 19.2 12.8 25.6l41.6 41.6c-44.8-6.4-86.4-22.4-121.6-51.2-3.2 0-3.2-3.2-6.4-6.4L332.8 304C268.8 233.6 192 195.2 99.2 195.2c-19.2 0-35.2 16-35.2 35.2s16 32 35.2 32c73.6 0 134.4 32 182.4 86.4l384 400 6.4 6.4c48 38.4 108.8 64 172.8 70.4l-48 44.8c-9.6 6.4-16 19.2-16 28.8 0 19.2 19.2 35.2 38.4 32 9.6 0 19.2-6.4 25.6-12.8l99.2-92.8c16-16 16-41.6 0-57.6l-99.2-102.4z m-3.2-556.8c-12.8-16-32-19.2-48-6.4-9.6 6.4-12.8 16-12.8 25.6 0 12.8 3.2 22.4 16 28.8l41.6 41.6c-73.6 9.6-140.8 38.4-192 89.6l-115.2 118.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 16 9.6 25.6 9.6s19.2-3.2 25.6-9.6l112-118.4c41.6-38.4 92.8-64 147.2-70.4l-44.8 44.8c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 32 35.2 9.6 0 19.2-3.2 28.8-9.6L950.4 256c12.8-12.8 12.8-35.2 0-48l-108.8-99.2m-438.4 448c-9.6 0-19.2 3.2-25.6 9.6l-118.4 121.6c-48 44.8-96 67.2-160 67.2H96c-19.2 0-35.2 16-35.2 35.2s16 32 35.2 32h3.2c83.2 0 147.2-32 211.2-86.4l121.6-124.8c6.4-6.4 9.6-12.8 9.6-22.4 0-9.6-3.2-16-9.6-22.4-9.6-6.4-19.2-9.6-28.8-9.6z"
            p-id="2662"
          ></path>
        </svg>
        <!-- 播放列表 -->
        <svg
          t="1668787624519"
          class="playlist-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="15157"
          width="200"
          height="200"
        >
          <path
            d="M85.333333 768h426.666667v85.333333H85.333333v-85.333333z m0-298.666667h597.333334v85.333334H85.333333v-85.333334z m0-298.666666h853.333334v85.333333H85.333333V170.666667z m725.333334 476.586666V384h213.333333v85.333333h-128v298.666667a128 128 0 1 1-85.333333-120.746667zM768 810.666667a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z"
            p-id="15158"
          ></path>
        </svg>
      </div>
    </div>
    <!-- 歌单 -->
    <!-- <PlayList class="playlist-widget" :class="{'playlist-widget-open': playlistWidgetShow}"></PlayList> -->
    <div class="widget-back"></div>
  </div>
</template>

<style scoped lang="scss">
.music-widget {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .music-progress-container {
    width: 100%;
    height: 8px;
    position: absolute;
    top: -2.5px;
    &:hover {
      .music-progress {
        height: 13px !important;
      }
      .music-time {
        opacity: 1;
        pointer-events: none;
      }
    }
    .music-progress {
      width: 100% !important;
      height: 2.5px !important;
      background-color: rgb(223, 223, 223);
      transition: 0.2s;
    }
    .music-time {
      padding: 0 2px;
      font: 9px Bender-Bold;
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      opacity: 0;
      transition: 0.2s;
    }
  }
  .music-info {
    margin-left: 17px;
    display: flex;
    flex-direction: row;
    .music-img {
      width: 45px;
      height: 45px;
      position: relative;
      border: 0.5px solid rgba(0, 0, 0, 0.1);
      img {
        width: 100%;
        height: 100%;
      }
      .open-player {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.2s;
        .open-player-icon {
          width: 40%;
          height: 40%;
          position: absolute;
          top: 120%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: 0.2s cubic-bezier(0, 1.06, 0.77, 0.99);
        }
        &:hover {
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0.5);
          .open-player-icon {
            top: 50%;
          }
        }
      }
    }
    .music-info-other {
      margin-left: 8px;
      width: 175px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      user-select: text;
      .music-name,
      .music-author {
        text-align: left;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        word-break: break-all;
      }
      .music-name {
        font: 14px SourceHanSansCN-Bold;
        font-weight: bold;
        color: black;
      }
      .music-author {
        font: 10px SourceHanSansCN-Bold;
        color: rgb(131, 131, 131);
        .author {
          transition: 0.2s;
          &:hover {
            cursor: pointer;
            color: black;
          }
        }
      }
    }
  }
  .music-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    .music-control {
      padding: 0 18px;
      display: flex;
      flex-direction: row;
      align-items: center;
      svg {
        width: 20px;
        height: 20px;
        transition: 0.2s;
        &:hover {
          cursor: pointer;
        }
        &:active {
          transform: scale(0.9);
        }
        &:nth-child(2),
        &:nth-child(3) {
          margin: 0 15px;
        }
      }
    }
    .music-volume {
      width: 120px;
      .volume-container {
        width: 100%;
        height: 7px;
        position: relative;
        .volume-slider {
          height: 7px !important;
          box-shadow: 0 0 0 0.5px black !important;
        }
        .volume-process-outline {
          width: 100%;
          height: 100%;
          border: 1px solid black;
          position: absolute;
          top: 0;
          left: 0;
        }
        .volume-process {
          width: 64%;
          height: 100%;
          background: black;
          position: absolute;
          top: 0;
          left: -1px;
        }
        .volume-info {
          display: flex;
          flex-direction: row;
          align-items: center;
          position: absolute;
          top: -10px;
          left: 0;
          .volume-lable,
          .volume-num {
            font: 8px Geometos;
          }
          .volume-lable {
            margin-right: 6px;
            color: rgb(106, 106, 106);
          }
        }
      }
    }
    .music-other {
      margin-left: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      svg {
        margin-right: 22px;
        width: 20px;
        height: 20px;
        transition: 0.2s;
        &:hover {
          cursor: pointer;
        }
        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
  .playlist-widget {
    position: absolute;
    bottom: 75px;
    right: 0;
  }
  .playlist-widget-open {
    height: 450px;
  }
  .widget-back {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgba(160, 160, 160, 0.7);
    position: absolute;
    top: 6px;
    right: 6px;
  }
}
</style>
