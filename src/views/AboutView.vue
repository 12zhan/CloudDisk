<script setup>

import AvatarCropping from "@/components/AvatarCropping.vue";
</script>

<template>
  <div style="height: 100%;width: 100%;display: flex;flex-direction: column">


    <div style="display: flex;height: fit-content">

      <mdui-avatar style="width: 75px;height: 75px">A</mdui-avatar>

      <div style="display: flex;flex-direction:column;justify-content: center;margin-left: 10px">

        <span style="font-size: 20px"> Admin ，你好</span>

        <span style="font-size: 13px;color: #6c6c6c">zhanghui@qq.com</span>

      </div>

    </div>


    <div style="margin-top: 10px">
      <mdui-button variant="outlined">购买储存空间</mdui-button>
      <mdui-button variant="text" style="margin-left: 10px">退出登录</mdui-button>
    </div>

    <mdui-linear-progress value="30" max="100" style="width: 200px;margin: 10px 10px;"></mdui-linear-progress>
    <span>已使用1.5 GB，共15 GB</span>
  </div>
</template>

<style scoped>

</style>