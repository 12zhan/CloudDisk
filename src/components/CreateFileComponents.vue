<script setup lang="ts">

import {defineProps} from "vue";

defineProps({
  "open": {
    type: Boolean,
    required: false,
    default: false,
  }
})

const emit = defineEmits([
    "cancelClick"
])

function cancel() {
  emit("cancelClick")
}


</script>

<template>
  <mdui-dialog
      close-on-overlay-click
      headline="新建文件/文件夹"
      :open="open"
  >

    <mdui-text-field variant="outlined" value="新文件名"></mdui-text-field>
    <br>
    <mdui-radio-group value="file">
      <mdui-radio value="dir">文件夹</mdui-radio>
      <mdui-radio value="file">文件</mdui-radio>
    </mdui-radio-group>

    <mdui-button slot="action" variant="text" @click="cancel">取消</mdui-button>
    <mdui-button slot="action" variant="text">创建</mdui-button>
  </mdui-dialog>
</template>

<style scoped>
.editor {
  width: 100%;
  height: 100%;
}
</style>