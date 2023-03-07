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
const style = reactive({
  paddingBottom: '65px',
});
watch(
  () => route.name,
  val => {
    if (!val || val === 'welcome') {
      showWidget.value = false;
      style.paddingBottom = '0';
    } else {
      showWidget.value = true;
      style.paddingBottom = '65px';
    }
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
$--widget-height: 65px;
.content {
  padding-top: var(--header-height);
  // padding-left: 18px;
  // padding-right: 18px;
  padding-bottom: v-bind('style.paddingBottom');
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  background: 'transpartant';
}

.music-widget-box {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: $--widget-height;
  box-shadow: 0 0 15px 2px rgba(189, 189, 189, 0.1);
}
</style>
