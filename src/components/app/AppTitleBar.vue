<!--
 * @Description: 标题栏
 * @Author: Dong Wei
 * @Date: 2023-03-01 13:25:24
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-01 13:37:29
 * @FilePath: \audio-player\src\components\app\AppTitleBar.vue
-->
<template>
  <div class="item-header">
    <div class="header">
      <div class="header-title-en">{{ props.titleE }}</div>
      <div class="line"></div>
    </div>
    <div class="header-title-cn">{{ props.titleC }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  titleC: string; // 中文标题
  titleE: string; // 英文标题
}>();
</script>
<style scoped lang="scss">
.item-header {
  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    .header-title-en {
      margin-right: 6px;
      padding: 1px 0 1px 2px;
      width: 20vw;
      background-color: black;
      font: 0.7vw Geometos;
      color: white;
      text-align: left;
      white-space: nowrap;
    }
    .line {
      width: 100%;
      height: 1px;
      background-color: rgb(176 176 176);
    }
    .header-more {
      width: 60px;
      text-align: right;
      font: 10px SourceHanSansCN-Bold;
      color: rgb(112 112 112);
      transition: 0.2s;
      &:hover {
        cursor: pointer;
        color: black;
      }
    }
  }
  .header-title-cn {
    text-align: left;
    font: 2.1vw SourceHanSansCN-Bold;
    line-height: 2.5vw;
    color: black;
  }
}
</style>
