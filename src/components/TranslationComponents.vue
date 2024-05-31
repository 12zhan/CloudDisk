<script setup>

import { setLocale } from 'mdui';

const language = {
    "zh-cn":"简体中文",
    "zh-hk":"繁體中文（香港）",
    "zh-tw":"繁體中文（臺灣）",
    "en-gb":"English"
}

function toggleLanguage(language){
    setLocale(language)
}

</script>
<template>
    <mdui-dropdown>
        <mdui-button-icon icon="translate" slot="trigger"></mdui-button-icon>
        <mdui-menu>
            <mdui-menu-item v-for="(item,key,index) of language" @click="toggleLanguage">{{ item }}</mdui-menu-item>
        </mdui-menu>
    </mdui-dropdown>
</template>