<!--
 * @Description: 欢迎页
 * @Author: Dong Wei
 * @Date: 2023-02-27 11:16:46
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-02-28 15:00:42
 * @FilePath: \audio-player\src\views\welcome.vue
-->
<template>
  <div class="wrap">
    <div class="anima-block"></div>
    <div class="form-part">
      <AppInput label="UserName" />
      <AppInput label="PassWord" />
      <button class="enter-btn pointer flex-center" @click="router.push('/home')">Let's Start</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<style scoped lang="scss">
.wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.anima-block {
  position: absolute;
  top: 50%;
  left: 20%;
  height: 30vh;
  width: 40vw;
  background: linear-gradient(45deg, #000 0, #000 50%, #eccc68 50%);
  transform: translate(-20%, -50%);
}

.anima-block::before {
  content: 'Terran';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #eccc68;
  font-size: 48px;
  mix-blend-mode: difference;
  animation: move 3s infinite linear alternate;
}
@keyframes move {
  0% {
    transform: translate(-30%, -50%);
  }
  100% {
    transform: translate(-70%, -50%);
  }
}
.form-part {
  position: absolute;
  right: 20%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  transform: translateY(-50%);
}
.enter-btn {
  position: relative;
  top: 5vh;
  width: 12vw;
  height: 6vh;
  color: #fff;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border: none;
  border-radius: 30px;
  text-decoration: none;
}

.enter-btn:hover {
  animation: ani 8s linear infinite;
  border: none;
}

@keyframes ani {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

.enter-btn:before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
}

.enter-btn:hover::before {
  filter: blur(20px);
}

.enter-btn:active {
  background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
}
</style>
