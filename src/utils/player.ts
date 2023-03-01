/*
 * @Description: 播放器相关方法
 * @Author: Dong Wei
 * @Date: 2023-03-01 15:32:19
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-01 15:49:16
 * @FilePath: \audio-player\src\utils\player.ts
 */
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
  // if (
  //   playMode.value == 0 &&
  //   currentIndex.value == songList.value.length - 1 &&
  //   playModeOne &&
  //   currentMusic.value.seek() == 0
  // ) {
  //   playNext();
  //   playModeOne = false;
  //   return;
  // }
  // if (!playing.value) {
  //   currentMusic.value.play();
  // }
  // if (lyricShow.value) {
  //   isLyricDelay.value = false;
  //   const forbidDelayTimer = setTimeout(() => {
  //     isLyricDelay.value = true;
  //     clearTimeout(forbidDelayTimer);
  //   }, 700);
  // }
  // if (videoIsPlaying.value) {
  //   musicVideoDOM.value.play();
  //   if (songList.value[currentIndex.value].type == 'local') startLocalMusicVideo();
  // }
}

export function pauseMusic() {
  // clearInterval(musicProgress);
  // if (playing.value) {
  //   currentMusic.value.fade(volume.value, 0, 200);
  //   currentMusic.value.once('fade', () => {
  //     currentMusic.value.pause();
  //     playing.value = false;
  //   });
  // }
  // if (videoIsPlaying.value) {
  //   musicVideoDOM.value.pause();
  //   if (songList.value[currentIndex.value].type == 'local') clearInterval(videoCheckInterval);
  // }
}

export function playLast() {
  // let id = null;
  // let index = null;
  // if (playMode.value != 3) {
  //   if (currentIndex.value - 1 < 0) {
  //     index = songList.value.length - 1;
  //     id = songList.value[index].id;
  //   } else {
  //     id = songList.value[currentIndex.value - 1].id;
  //     index = currentIndex.value - 1;
  //   }
  // }
  // if (playMode.value == 3) {
  //   if (shuffleIndex.value - 1 < 0) {
  //     index = shuffledList.value.length - 1;
  //     id = shuffledList.value[index].id;
  //   } else {
  //     index = shuffleIndex.value - 1;
  //     id = shuffledList.value[index].id;
  //   }
  // }
  // addSong(id, index, true);
}
export function playNext() {
  // let id = null;
  // let index = null;
  // if (playMode.value != 3) {
  //   if (songList.value.length - 1 == currentIndex.value) {
  //     index = 0;
  //     id = songList.value[index].id;
  //   } else {
  //     index = currentIndex.value + 1;
  //     id = songList.value[index].id;
  //   }
  // }
  // if (playMode.value == 3) {
  //   if (shuffleIndex.value == shuffledList.value.length - 1) {
  //     index = 0;
  //     id = shuffledList.value[index].id;
  //   } else {
  //     index = shuffleIndex.value + 1;
  //     id = shuffledList.value[index].id;
  //   }
  // }
  // addSong(id, index, true);
}

export function changeProgress(toTime) {
  // if (!widgetState.value && lyricShow.value && lyricEle.value) clearLycAnimation();
  // if (videoIsPlaying.value) {
  //   musicVideoCheck(toTime, true);
  // }
  // currentMusic.value.seek(toTime);
}

export function changePlayMode() {
  // if (playMode.value != 3) playMode.value += 1;
  // else playMode.value = 0;
  // if (playMode.value == 2) currentMusic.value.loop(true); //循环模式
  // else currentMusic.value.loop(false);
  // if (playMode.value == 3) {
  //   setShuffledList();
  // } else {
  //   shuffledList.value = null;
  //   shuffleIndex.value = null;
  // }
  // windowApi.changeTrayMusicPlaymode(playMode.value);
}
