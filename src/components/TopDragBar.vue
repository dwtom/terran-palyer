<!--
 * @Description: 顶部栏
 * @Author: Dong Wei
 * @Date: 2023-02-27 09:38:00
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-02-28 15:51:45
 * @FilePath: \audio-player\src\components\TopDragBar.vue
-->
<template>
  <div class="header flex-sb">
    <div class="left-part flex">
      <h1 class="title no-drag pointer" @click="router.push('/')">Terran</h1>
    </div>
    <!-- 右侧窗口操作栏 -->
    <div class="win-ctrl-icons flex">
      <div @click="windowControl(1)" class="window-icon minimize no-drag">
        <svg
          t="1668091020963"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1210"
          width="18"
          height="18"
        >
          <path
            d="M65.23884 456.152041 958.760137 456.152041l0 111.695918L65.23884 567.847959 65.23884 456.152041z"
            p-id="1211"
          ></path>
        </svg>
      </div>
      <div @click="windowControl(2)" class="window-icon maximize no-drag">
        <svg
          t="1668091098382"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1187"
          width="18"
          height="18"
        >
          <path
            d="M128.576377 895.420553 128.576377 128.578424l766.846222 0 0 766.842129L128.576377 895.420553zM799.567461 224.434585 224.432539 224.434585l0 575.134923 575.134923 0L799.567461 224.434585z"
            p-id="1188"
          ></path>
        </svg>
      </div>
      <div @click="windowControl(0)" class="window-icon close-window no-drag">
        <svg
          t="1668091127480"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1341"
          width="18"
          height="18"
        >
          <path
            d="M956.171172 875.411847l-80.757279 80.757279L511.997953 592.757279 148.586107 956.170149 67.828828 875.411847l363.411847-363.411847L67.828828 148.58713l80.757279-80.757279 363.411847 363.411847L875.413893 67.829851l80.757279 80.757279L592.756255 512 956.171172 875.411847z"
            p-id="1342"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useRouter } from 'vue-router';

interface Props {
  bg?: string; // 背景色
}
const props = withDefaults(defineProps<Props>(), {
  bg: '#ff4757',
});

const router = useRouter();

// 窗口功能按钮
const windowControl = (opt: number) => {
  switch (opt) {
    case 1:
      electronAPIs.windowMin();
      break;
    case 2:
      electronAPIs.windowMax();
      break;
    default:
      electronAPIs.windowClose();
      break;
  }
};
</script>
<style scoped lang="scss">
.no-drag {
  -webkit-app-region: no-drag;
}
.header {
  position: fixed;
  top: 0;
  padding: 0 18px;
  height: var(--header-height);
  width: 100%;
  background-color: v-bind('props.bg');
  -webkit-app-region: drag;
  z-index: 9999;
}
.title {
  // color: #fff;
  font-family: Gilroy-ExtraBold;
}
.window-icon {
  display: flex;
  padding: 6px;
  opacity: 0.5;
  transition: 0.3s;
  cursor: pointer;
  z-index: 9999;
  &:hover {
    opacity: 1;
  }
}
</style>
