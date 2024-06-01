<script setup>


import {ref} from "vue";

const emit = defineEmits([
  'cancel', //取消按钮点击事件
  'next' //下一步按钮事件
])

const fileUploadWrite = ref([
  ".jpg", ".gif", ".png", ".zip", ".7z", ".tar", ".svg"
])

const isMultipleUpload = ref(true)

let preview = ref("/upload.svg")

//文件选择事件
function change(e) {


  for (const file of e.target.files) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      console.log(e.target.result)
      preview.value =  e.target.result
    }
  }


}

</script>

<template>

  <div>

    <div style="display: flex;align-items: center">
      <div style="flex: 1">
        <span style="
        font-family: Inter;
        font-weight: 700;
        font-size: 18px;
        line-height: 26px;
        text-space: -0.2px;">Media Upload</span>
        <br>
        <span style="
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-space: 0px;">Add your documents here, and you can upload up to 5 files max</span>
      </div>
      <mdui-button-icon style="margin-left: 10px" icon="clear" @click="emit('cancel')"></mdui-button-icon>
    </div>

    <div
        style="display: flex;justify-content: center;align-items: center;flex-direction: column;width: 100%;height: 186px;border: 2px dashed #1849D6;border-radius: 1rem;margin-top: 10px;margin-bottom: 5px;position: relative">
      <img :src="preview" style="width: 42px;height: 42px"/>

      <span style="
        margin-top: 10px;
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-space: 0px;">
        Drag your file(s) to start uploading
      </span>

      <input type="file" style="position: absolute;width: 100%;height: 100%;opacity: 0" @change="change"
             :multiple="isMultipleUpload?'multiple':''">

    </div>

    <span style="
font-family: Inter;
font-weight: 400;
font-size: 14px;
line-height: 20px;
text-space: 0px;
color: rgb(109,109,109)">
      Only support <span v-for="i in fileUploadWrite" :key="i">&nbsp;{{ i }}</span>
    </span>


  </div>

  <mdui-button slot="action" variant="text" @click="emit('cancel')">Cancel</mdui-button>
  <mdui-button slot="action" variant="tonal" @click="emit('next')">Next</mdui-button>

</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>