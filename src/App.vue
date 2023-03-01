<template>
  <!-- <TopDragBar :bg="topBg"></TopDragBar> -->
  <TopDragBar></TopDragBar>
  <div class="content">
    <router-view></router-view>
  </div>
  <div v-if="showWidget" class="music-widget-box">
    <MusicWidget></MusicWidget>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const showWidget = ref(false);

watch(
  () => route.name,
  val => {
    if (val === 'welcome') {
      showWidget.value = false;
    } else {
      showWidget.value = true;
    }
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
$--widget-height: 65px;
.content {
  padding: var(--header-height) 18px $--widget-height 18px;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
}

.music-widget-box {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: $--widget-height;
  box-shadow: 0 0 15px 2px rgba(189, 189, 189, 0.1);
}
</style>
