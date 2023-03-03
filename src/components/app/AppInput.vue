<!--
 * @Description: label带特效的input
 * @Author: Dong Wei
 * @Date: 2023-02-28 14:06:41
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-03 18:26:18
 * @FilePath: \audio-player\src\components\app\AppInput.vue
-->
<template>
  <div class="form-control">
    <input type="value" />
    <label>
      <span
        v-for="(item, index) in labelInnerArr"
        :key="`${props.label}-${index}`"
        :style="{ 'transition-delay': item.delay }"
        >{{ item.label }}</span
      >
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();

// 将传入的字符串转换为数组
const labelInnerArr = computed(() => {
  return props.label.split('').map((val, index) => {
    return {
      label: val,
      delay: `${index * 50}ms`,
    };
  });
});
</script>
<style scoped>
.form-control {
  position: relative;
  margin: 10px 0;
  width: 190px;
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px var(--color-text) solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: var(--color-text);
}

.form-control input:focus {
  outline: 0;
  border-bottom-color: #fff;
}

.form-control label {
  position: absolute;
  top: 8px;
  left: 0;
  pointer-events: none;
}

.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  color: var(--color-text);
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus + label span {
  color: #fff;
  transform: translateY(-15px);
}
</style>
