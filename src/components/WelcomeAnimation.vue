<!--
 * @Description: 欢迎页图片旋转动画组件
 * @Author: Dong Wei
 * @Date: 2023-03-07 14:41:54
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-07 16:40:02
 * @FilePath: \audio-player\src\components\WelcomeAnimation.vue
-->
<template>
  <div class="container">
    <div class="img-box A">
      <img src="@/assets/imgs/a.jpg" alt="" />
    </div>
    <div class="img-box B">
      <img src="@/assets/imgs/b.jpg" alt="" />
    </div>
    <div class="img-box C">
      <img src="@/assets/imgs/c.jpg" alt="" />
    </div>
    <div class="img-box D">
      <img src="@/assets/imgs/d.jpeg" alt="" />
    </div>
    <div class="img-box E">
      <img src="@/assets/imgs/e.jpg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.container {
  --scale: 1.5;
  --rotation: 360deg;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 50vmin;
  height: 50vmin;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 4px;
  grid-template-areas:
    'E B B'
    'E A C'
    'D D C';
}
.img-box {
  position: relative;
  border: 3px solid #431312;
  border-radius: 5px;
  overflow: hidden;
}

.A {
  grid-area: A;
  img {
    width: 140% !important;
    height: 140% !important;
  }
}
.B {
  grid-area: B;
}
.C {
  grid-area: C;
}
.D {
  grid-area: D;
}
.E {
  grid-area: E;
}
.img-box img {
  --scale: 1;
  --rotation: -360deg;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 220%;
  height: 220%;
  object-fit: cover;
  object-position: center;
}
.container,
.img-box img {
  animation: 8s scale-up both ease-in-out;
}
@keyframes scale-up {
  0% {
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) scale(var(--scale)) rotate(var(--rotation));
  }
}
</style>
