<template>
  <section class="banner-section flex-sb">
    <HomeSwiper :banner-list="bannerList" />
    <HomeRecommendation />
    <HomeLatestSong :song-list="songList" />
  </section>
</template>

<script setup lang="ts">
import bannerData from '@/mock/banner';
import latestSong from '@/mock/latestSong';

const bannerList = reactive(bannerData);
const songList = reactive(latestSong);
</script>
<style scoped>
.banner-section {
  padding-top: 2.8vw;
}
</style>
