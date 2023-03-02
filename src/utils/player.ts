/*
 * @Description: 播放器相关方法
 * @Author: Dong Wei
 * @Date: 2023-03-01 15:32:19
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-02 17:02:52
 * @FilePath: \audio-player\src\utils\player.ts
 */
import { Howl } from 'howler';
import pinia from '@/stores';
import { storeToRefs } from 'pinia';
import { usePlayerStore } from '@/stores/playerStore';

// import musicSource from '@/assets/media/L1vebeats; Push.audio - Strings.flac';

const playerStore = usePlayerStore(pinia);

const { currentMusic, playing, progress, volume, time, playerChangeSong } = storeToRefs(playerStore);

let musicProgress: any = null;
let loadLast = true;
let isProgress = false;

window.addEventListener('mousedown', (e: any) => {
  if (e?.target?.parentNode?.parentNode.id == 'widget-progress') {
    changeProgressByDragStart();
    isProgress = true;
  }
});

window.addEventListener('mouseup', () => {
  if (isProgress) {
    changeProgressByDragEnd(progress.value);
    isProgress = false;
  }
});

// 获取播放器时间
export function songTime2(time: number) {
  let min: string | number = Math.floor(time / 60);
  let sec: string | number = Math.floor(time % 60);
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;
  return min + ':' + sec;
}

export function startMusic() {
  // console.log(volume.value);
  if (!progress.value) {
    play();
  }
  playing.value = true;
  currentMusic.value?.play();
}

export function pauseMusic() {
  clearInterval(musicProgress);
  if (playing.value) {
    currentMusic.value?.fade(volume.value, 0, 200);
    currentMusic.value?.once('fade', () => {
      currentMusic.value?.pause();
      playing.value = false;
    });
  }
}

export function play() {
  // 播放默认的本地音乐
  const musicSource = new URL('../assets/media/L1vebeats; Push.audio - Strings.flac', import.meta.url).href;
  if (currentMusic.value) currentMusic.value.unload();
  currentMusic.value = new Howl({
    src: [musicSource],
    autoplay: false,
    html5: true,
    preload: true,
    format: ['mp3', 'flac'],
    loop: false,
    volume: volume.value,
    onend: function () {
      clearInterval(musicProgress);
      console.log('end');
    },
  });
  currentMusic.value.once('load', () => {
    time.value = Math.floor(currentMusic.value?.duration() ?? 0);
    if (loadLast) {
      currentMusic.value?.volume(0);
      currentMusic.value?.seek(progress.value);
      loadLast = false;
    }
    playerChangeSong.value = false;
  });
  currentMusic.value.on('play', () => {
    currentMusic.value?.fade(0, volume.value, 200);
    startProgress();
    playing.value = true;
  });
  currentMusic.value.on('pause', () => {
    clearInterval(musicProgress);
    playing.value = false;
    currentMusic.value?.fade(volume.value, 0, 200);
  });
}

export function startProgress() {
  clearInterval(musicProgress);
  progress.value = currentMusic.value?.seek() ?? 0;
  musicProgress = setInterval(() => {
    if ((currentMusic.value?.seek() as number) < time.value) {
      progress.value = currentMusic.value?.seek() ?? 0;
    }
  }, 1000);
}

export function changeProgress(toTime: number) {
  currentMusic.value?.seek(toTime);
}

//控制拖拽进度条
export function changeProgressByDragStart() {
  clearInterval(musicProgress);
}
export function changeProgressByDragEnd(toTime: number) {
  changeProgress(toTime);
  if (playing.value) startProgress();
}
