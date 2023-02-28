<template>
  <!-- <TopDragBar :bg="topBg"></TopDragBar> -->
  <TopDragBar></TopDragBar>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// const route = useRoute();
// const topBg = ref('');

// watch(
//   () => route.name,
//   val => {
//     if (val === 'welcome') {
//       topBg.value = '#f7f8fa';
//     } else {
//       topBg.value = '#ff4757';
//     }
//   },
//   { immediate: true }
// );
</script>

<style scoped lang="scss">
.content {
  padding: var(--header-height) 18px 0 18px;
  // height: calc(100vh - var(--header-height));
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
}
</style>
