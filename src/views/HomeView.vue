<script setup>
import {ref} from 'vue'

import NightPatternComponents from '../components/NightPatternComponents.vue'
import TranslationComponents from '../components/TranslationComponents.vue'
import LoginAvatarComponents from "@/components/LoginAvatarComponents.vue";
import {RouterView} from 'vue-router';

const openNavigation = ref(true)

function openNavigationDrawer() {
  openNavigation.value = !openNavigation.value
}


</script>

<template>


  <mdui-navigation-drawer @overlay-click="openNavigationDrawer" close-on-overlay-click :open="openNavigation">

    <div style="display: flex;">

      <img width="50px" src="/icon.svg" alt="icon" style="margin-right: 10px;margin-left: 10px;">

      <h2>Colud Disk</h2>

    </div>

    <div>
      <mdui-list>
        <mdui-collapse accordion>
          <mdui-collapse-item>
            <mdui-list-item slot="header" icon="insert_drive_file" end rounded
                            @click="($router.push('/'))">
              我的文件

              <mdui-icon slot="end-icon" name="keyboard_arrow_down"></mdui-icon>
            </mdui-list-item>
            <div style="margin-left: 2.5rem">
              <mdui-list-item rounded icon="video_file"
                              @click="($router.push('/index/video'))">视频
              </mdui-list-item>
              <mdui-list-item rounded icon="photo">图片</mdui-list-item>
              <mdui-list-item rounded icon="library_music">音乐</mdui-list-item>
              <mdui-list-item rounded icon="text_snippet">文档</mdui-list-item>
            </div>
          </mdui-collapse-item>
        </mdui-collapse>

        <mdui-list-item rounded icon="settings">设置</mdui-list-item>
        <mdui-list-item rounded icon="contrast" @click="($router.push('index/about'))">关于</mdui-list-item>
      </mdui-list>
    </div>


    <div style="margin: 0px 10px;">
      <mdui-linear-progress value="30" max="100" style="margin-bottom: 5px;"></mdui-linear-progress>
      <span>已使用1.5 GB，共15 GB</span>
    </div>


  </mdui-navigation-drawer>

  <div style="position: relative;overflow: hidden">
    <mdui-top-app-bar scroll-behavior="elevate" scroll-target=".example-scroll-behavior-elevate">
      <mdui-button-icon icon="menu" @click="openNavigationDrawer"></mdui-button-icon>
      <mdui-top-app-bar-title>Colud Disk</mdui-top-app-bar-title>
      <div style="flex-grow: 1"></div>
      <TranslationComponents></TranslationComponents>
      <NightPatternComponents></NightPatternComponents>
      <LoginAvatarComponents style="margin:0px 10px"></LoginAvatarComponents>

    </mdui-top-app-bar>

    <div class="example-scroll-behavior-elevate" style="height: 100%;overflow: auto;">

      <RouterView style="height: 100%;"></RouterView>

    </div>
  </div>
</template>
