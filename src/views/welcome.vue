<!--
 * @Description: 欢迎页
 * @Author: Dong Wei
 * @Date: 2023-02-27 11:16:46
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-08 15:07:02
 * @FilePath: \audio-player\src\views\welcome.vue
-->
<template>
  <div class="wrap">
    <div class="typing-word typing pointer" title="点击直接进入" @click="router.push('/home')">
      Everyone told me to retire.Everyone told me to give up.But... Look at me now!
    </div>
    <Transition leave-active-class="animate__animated animate__fadeOutLeft">
      <div v-if="!isAnimating" class="anima-block"></div>
    </Transition>

    <Transition leave-active-class="animate__animated animate__fadeOutRight">
      <div v-if="!isAnimating" class="form-part">
        <AppInput label="UserName" />
        <AppInput label="PassWord" />
        <button class="enter-btn pointer flex-center" @click="toHome">Let's Start</button>
      </div>
    </Transition>
    <WelcomeAnimation v-if="showAnimateImgs"></WelcomeAnimation>
    <AppToast text="Welcome"></AppToast>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const isAnimating = ref(false);
const showAnimateImgs = ref(false); // 显示过场图片组件

const toHome = () => {
  isAnimating.value = true;
  setTimeout(() => {
    showAnimateImgs.value = true;
  }, 1700);
  setTimeout(() => {
    router.push('/home');
  }, 10000);
};
</script>
<style scoped lang="scss">
.wrap {
  position: relative;
  padding: 0 18px;
  width: 100%;
  height: 100%;
  // background: url('~@/assets/imgs/bg2.jpg');
  background: radial-gradient(at top right, #b7b6bb 0%, #e8eae9 100%);
}
.anima-block {
  position: absolute;
  top: 30%;
  left: 14%;
  height: 30vh;
  width: 40vw;
  background: linear-gradient(45deg, #000 0, #000 50%, #eccc68 50%);
  // transform: translate(-20%, -50%);
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
  right: 15%;
  top: 27%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  width: 26vw;
  height: 40vh;

  // gap: 20px;
  // border-radius: 22px;
  // backdrop-filter: blur(6px);
  // background-color: rgba(255, 255, 255, 0.1);
  // box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
}
.enter-btn {
  position: relative;
  top: 5vh;
  width: 12vw;
  height: 5.5vh;
  color: #fff;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border: none;
  border-radius: 30px;
  text-decoration: none;
  z-index: 1;
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

.enter-btn::before {
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
.typing-word {
  position: absolute;
  bottom: 3vh;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: Bender-Bold;
  font-size: 26px;
}
.typing {
  width: 94vw;
  animation: typing 10s steps(77), blink 0.5s step-end infinite alternate;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.animate__animated {
  --animate-duration: 3.5s;
}
</style>
