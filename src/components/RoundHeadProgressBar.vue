<template>
  <div class="progress-container">
    <div class="progress-bar" :style="barStyle"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  value: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  }
});

const barStyle = computed(() => ({
  width: `${(props.value / props.max) * 100}%`,
  backgroundColor: '#42b983', // 进度条的颜色，可以根据需要自定义
  borderRadius: '10px' // 圆头的半径
}));
</script>

<style scoped>
.progress-container {
  width: 100%;
  background-color: #ddd;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 9999px;
}

.progress-bar {
  height: 20px; /* 进度条的高度 */
  transition: width 0.3s ease-in-out; /* 动画效果 */
}
</style>