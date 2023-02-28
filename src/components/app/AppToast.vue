<!--
 * @Description: toast提示
 * @Author: Dong Wei
 * @Date: 2023-02-27 16:08:18
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-02-28 15:03:12
 * @FilePath: \audio-player\src\components\app\AppToast.vue
-->
<template>
  <div class="global-notice" v-show="notice.show">
    <div class="notice-container" :class="{ 'notice-container-out': notice.isouting }">
      <p class="notic-text">{{ props.text }}</p>
      <div class="notice-border notice-border1"></div>
      <div class="notice-border notice-border2"></div>
      <div class="notice-border notice-border3"></div>
      <div class="notice-border notice-border4"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();

const notice = reactive({
  show: true,
  isouting: false,
});

onMounted(() => {
  const noticeTimer1 = setTimeout(() => {
    notice.isouting = true;
    clearTimeout(noticeTimer1);
    const noticeTimer2 = setTimeout(() => {
      notice.show = false;
      notice.isouting = false;
      clearTimeout(noticeTimer2);
    }, 300);
  }, 2000);
});
</script>

<style scoped lang="scss">
.global-notice {
  position: fixed;
  left: 50%;
  bottom: 120px;
  transform: translateX(-50%);
  .notice-container {
    position: relative;
    padding: 3px 0;
    width: 0;
    background: rgb(23, 23, 23) url('~@/assets/imgs/halftone.png') center/40% repeat;
    animation: notice-in 0.18s cubic-bezier(0.3, 0.79, 0.55, 0.99) forwards;
    overflow: hidden;
    @keyframes notice-in {
      0% {
        width: 0;
        transform: scale(0.9);
      }
      100% {
        width: 300px;
        padding: 3px 30px;
        transform: scale(1);
      }
    }
    .notic-text {
      font: 13px SourceHanSansCN-Bold;
      color: #fff;
      white-space: nowrap;
      text-align: center;
    }
    .notice-border {
      width: 3px;
      height: 3px;
      background-color: white;
      position: absolute;
    }
    $borderPosition: 4px;
    .notice-border1 {
      top: $borderPosition;
      left: $borderPosition;
    }
    .notice-border2 {
      top: $borderPosition;
      right: $borderPosition;
    }
    .notice-border3 {
      bottom: $borderPosition;
      right: $borderPosition;
    }
    .notice-border4 {
      bottom: $borderPosition;
      left: $borderPosition;
    }
  }
  .notice-container-out {
    width: 300px;
    padding: 3px 30px;
    animation: notice-out 0.2s forwards;
    @keyframes notice-out {
      0% {
        opacity: 1;
      }
      8% {
        opacity: 1;
      }
      10% {
        opacity: 0;
      }
      18% {
        opacity: 0;
      }
      20% {
        opacity: 1;
      }
      28% {
        opacity: 1;
      }
      30% {
        opacity: 0;
      }
      38% {
        opacity: 0;
      }
      40% {
        opacity: 1;
      }
      100% {
        transform: scale(0.9);
        opacity: 0;
      }
    }
  }
}
</style>
