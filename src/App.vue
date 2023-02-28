<template>
  <!-- <TopDragBar :bg="topBg"></TopDragBar> -->
  <TopDragBar></TopDragBar>
  <router-view></router-view>
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

<style scoped></style>
