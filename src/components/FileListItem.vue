<script setup>

import {defineProps} from 'vue'

defineProps({
  "filename": {
    type: String,
    required: false
  },
  "cover": {
    type: String,
    required: false
  },
  "toggleTime": {
    type: String,
    required: false
  }
})

</script>

<template>
  <!--文件列表组件-->
  <mdui-dropdown trigger="contextmenu" open-on-pointer>

    <mdui-card slot="trigger" variant="filled" style="width: 200px;height: 150px;">

      <div style="display: flex;width: 100%;height: 100%;flex-direction: column;">

        <div style="display: flex;align-items: center;padding: 5px;">
          <mdui-icon name="photo"></mdui-icon>
          <span style="font-size: 12px;margin-left: 5px;">{{ filename }}</span>
        </div>

        <div style="margin: auto;">
          <img :src="cover" style="object-fit: cover;" width="100%" alt="">
        </div>

        <div>
          <mdui-avatar>A</mdui-avatar>
        </div>

      </div>

    </mdui-card>

    <mdui-menu>
      <mdui-menu-item icon="app_registration">
        打开方式
        <mdui-menu-item slot="submenu" icon="visibility">预览</mdui-menu-item>
        <mdui-divider slot="submenu"></mdui-divider>
        <mdui-menu-item slot="submenu" icon="edit_note">Code Edit</mdui-menu-item>
        <mdui-menu-item slot="submenu" icon="credit_card">Link PDF</mdui-menu-item>
      </mdui-menu-item>
      <mdui-menu-item icon="download">下载</mdui-menu-item>
      <mdui-menu-item icon="edit">重命名</mdui-menu-item>
    </mdui-menu>
  </mdui-dropdown>


</template>

<style scoped>
</style>