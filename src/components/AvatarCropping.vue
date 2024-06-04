<script setup>

import {onMounted, ref} from "vue";

const avatarData = ref("")

//获取到真实dom
const canvas = ref(null)
const img = ref(null)

function fileSelected(e){
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = e =>{
    avatarData.value = e.target.result
    // cut(canvas,img)
  }
  reader.readAsDataURL(file);
}

onMounted(()=>{
  // cut(canvas,img)
})

</script>

<template>
  <div>

    <div class="select">
      <img :src="avatarData" v-show="avatarData!==''">
      <mdui-icon name='add' v-show="avatarData===''"></mdui-icon>
      <input type="file" @change="fileSelected">
    </div>

  </div>
</template>

<style scoped>

.select{
  display: flex;
  width: 100px;
  height: 100px;
  border: 2px dashed #ccc;
  border-radius: 999px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
}

.select input{
  width: 100%;
  height: 100%;
  opacity: 0;
}

.select img{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.select mdui-icon{
  font-size: 30px;
  color: #808080;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

</style>