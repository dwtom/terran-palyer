<template>
  <div class="inner-content">
    <!-- 顶部功能栏 -->
    <section class="banner-section flex-sb mt-20">
      <HomeSwiper :banner-list="bannerList" />
      <HomeRecommendation />
      <HomeLatestSong :song-list="songList" />
    </section>
    <!-- 推荐歌单 -->
    <section class="mt-40">
      <AppTitleBar title-c="推荐歌单" title-e="RECOMMENDED SONG LIST" class="mb-13" />
      <ul class="play-list grid-list">
        <li v-for="(item, index) in playList" :key="`playList-${index}`" class="grid-list-item pointer">
          <img :src="`${item.picUrl}?param=450y450`" alt="" class="grid-list-img play-list-img" />
          <p class="play-list-word" :title="item.name">{{ item.name }}</p>
        </li>
      </ul>
    </section>
    <!-- 推荐歌手 -->
    <section class="artists mt-40">
      <AppTitleBar title-c="推荐歌手" title-e="RECOMMENDED ARTISTS" class="mb-13" />
      <ul class="grid-list" id="recommendArtists">
        <li v-for="(item, index) in artists" :key="`artist-${index}`" class="grid-list-item pointer">
          <img :src="`${item.img1v1Url}?param=450y450`" alt="" class="grid-list-img artist-img" />
          <p class="artist-word" :title="item.name">{{ item.name }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { handleElementInClient } from '@/utils';
// import * as mockData from '@/mock/home';
import * as services from './services/home';
import type { HomeApi } from '@/api/interface/home';
// import type { commonArrayRes } from '@/api/interface/common';

// let bannerList: commonArrayRes<HomeApi.BannerList> = reactive([]);
let bannerList: Ref<HomeApi.BannerList[]> = ref([]);
let songList: Ref<HomeApi.LatestSongs[]> = ref([]);
let playList: Ref<HomeApi.RecommendSongList[]> = ref([]);
let artists: Ref<HomeApi.RecommendArtist[]> = ref([]);

onMounted(() => {
  initBannerList();
  initLatestSongList();
  initRecommendSongList();
  initRecommendAritsts();
});
// 轮播图
const initBannerList = async () => {
  bannerList.value = await services.useBannerData();
};
// 最新歌曲
const initLatestSongList = async () => {
  songList.value = await services.useLatestSongData();
};
// 推荐歌单
const initRecommendSongList = async () => {
  playList.value = await services.useRecommendSongData();
};
// 推荐歌手
const initRecommendAritsts = () => {
  const dom = document.getElementById('recommendArtists');
  const initFn = async () => {
    artists.value = await services.useRecommendArtistData();
  };
  // 刷新页面后监听失效
  handleElementInClient(dom, initFn);
};
</script>
<style scoped lang="scss">
.mt-20 {
  margin-top: 20px;
}
.mt-40 {
  margin-top: 40px;
}
.mb-13 {
  margin-bottom: 13px;
}
.inner-content {
  padding: 0 18px;
}
.banner-section {
  padding-top: 2.8vw;
}
.grid-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4vh 2.5vw; // column row
  width: 100%;
  .grid-list-item {
    overflow: hidden;
    .grid-list-img {
      width: 100%;
    }
    .artist-img {
      border-radius: 50%;
    }
    .play-list-word {
      margin-top: 5px;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .artist-word {
      margin-top: 15px;
      text-align: center;
    }
  }
}

.artists {
  padding-bottom: 4vh;
}
</style>
