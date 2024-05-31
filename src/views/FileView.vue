<style scoped>

</style>
<template>
  <div>

    <div style="width: 100%;display: flex;align-items: center;flex-direction: column;">
      <span style="font-size: 23px">
        Welcome to Cloud Disk
      </span>

      <mdui-text-field variant="outlined" style="max-width: 80%;width: 400px;margin: 30px;" label="Search in cloud disk">
        <mdui-button-icon slot="icon" icon="search"></mdui-button-icon>
      </mdui-text-field>

    </div>

    <div
        style="display: grid !important;align-items: start;justify-content: center;grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)) !important;gap: 20px;">

      <FileListItem cover="/1.png" filename="/1.ong"></FileListItem>

    </div>

    <mdui-fab extended style="bottom: 10px;right: 10px;position: fixed;" icon="edit" @click="createFileDialogOpenStatus=true">AddFile</mdui-fab>

    <CreateFileComponents :open="createFileDialogOpenStatus" @cancelClick="createFileDialogOpenStatus = false"></CreateFileComponents>

  </div>
</template>
<script setup lang="ts">
import FileListItem from "@/components/FileListItem.vue";
import {ref} from 'vue'
import CreateFileComponents from "@/components/CreateFileComponents.vue";

const createFileDialogOpenStatus = ref(false)

</script>