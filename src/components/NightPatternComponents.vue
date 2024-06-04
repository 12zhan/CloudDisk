<script setup>

import {setTheme} from 'mdui';
import {ref, onMounted} from 'vue'
import {SystemConfigPinia} from "@/pinia/SystemConfigPinia.js";

const model = ref("light")

const icon = ref("light_mode")

function toggleNight() {
  icon.value = "mode_night"
  setTheme('dark');
  SystemConfigPinia().SystemMode = 'dark'
}

function toggleLight() {
  icon.value = "light_mode"
  setTheme('light');
  SystemConfigPinia().SystemMode = "light"
}

function toggleSystemAuto() {
  icon.value = "brightness_auto"
  setTheme('auto')
  SystemConfigPinia().SystemMode = 'auto'
}

</script>
<template>
  <mdui-dropdown>
    <mdui-button-icon :icon="icon" slot="trigger"></mdui-button-icon>
    <mdui-menu>
      <mdui-menu-item @click="toggleSystemAuto">跟随系统</mdui-menu-item>
      <mdui-divider></mdui-divider>
      <mdui-menu-item @click="toggleLight">亮色模式</mdui-menu-item>
      <mdui-menu-item @click="toggleNight">暗色模式</mdui-menu-item>
    </mdui-menu>
  </mdui-dropdown>
</template>