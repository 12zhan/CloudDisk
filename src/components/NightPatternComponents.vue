<script setup>

import { setTheme } from 'mdui';
import { ref, onMounted } from 'vue'

const model = ref("light")

const icon = ref("light_mode")

function toggleNight() {
    model.value = "night"
    icon.value = "mode_night"
    setTheme('dark');
}

function toggleLight() {
    model.value = "light"
    icon.value = "light_mode"
    setTheme('light');
}

function toggleSystemAuto(){

}

</script>
<template>
    <mdui-dropdown>
        <mdui-button-icon :icon="icon" slot="trigger"></mdui-button-icon>
        <mdui-menu>
            <mdui-menu-item @click="toggleSystemAuto">跟随系统</mdui-menu-item>
            <mdui-menu-item @click="toggleLight">亮色模式</mdui-menu-item>
            <mdui-divider></mdui-divider>
            <mdui-menu-item @click="toggleNight">暗色模式</mdui-menu-item>
        </mdui-menu>
    </mdui-dropdown>
</template>