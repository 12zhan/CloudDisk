<script setup>


const emit = defineEmits([
    'cancel', //取消按钮点击事件
    'next' //下一步按钮事件
])

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
      <mdui-button-icon style="margin-left: 10px" icon="clear"></mdui-button-icon>
    </div>

    <div
        style="display: flex;justify-content: center;align-items: center;flex-direction: column;width: 100%;height: 186px;border: 2px dashed #1849D6;border-radius: 1rem;margin-top: 10px;">
      <mdui-icon src="/upload.svg" style="width: 42px;height: 42px" @click="emit('cancel')"></mdui-icon>

      <span style="
        margin-top: 10px;
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-space: 0px;">
        Drag your file(s) to start uploading
      </span>

    </div>

  </div>

  <mdui-button slot="action" variant="text" @click="emit('cancel')">Cancel</mdui-button>
  <mdui-button slot="action" variant="tonal" @click="emit('next')">Next</mdui-button>

</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>