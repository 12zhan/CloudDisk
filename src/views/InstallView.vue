<script setup>
import {ref} from "vue";

const installButtonLoad = ref(false)

const installProgress = ref(0)

function install(){
  installButtonLoad.value = true
  const intervalId = setInterval(()=>{
    if(installProgress.value < 100){
      installProgress.value++
    }else{
      clearInterval(intervalId)
      installButtonLoad.value = false
    }
  },100)
}


</script>

<template>
  <div style="
  height: 100vh;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
">

    <div class="container">
      <span class="title">系统安装</span>
      <br><br>
      <mdui-text-field variant="outlined" label="HOST" value="localhost" class="host"></mdui-text-field>
      <mdui-text-field variant="outlined" label="USER" value="root" class="user"></mdui-text-field>
      <mdui-text-field variant="outlined" label="PASSWORD" type="password" toggle-password class="pass"></mdui-text-field>
      <mdui-text-field variant="outlined" label="DBNAME" value="cloud_disk" class="user"></mdui-text-field>

      <div style="text-align: right;">
        <mdui-button style="width: 100px" variant="text">取消</mdui-button>
        &nbsp;
        <mdui-button style="width: 100px" variant="filled" :loading="installButtonLoad" @click="install">安装</mdui-button>
      </div>


      <p>安装进度</p>
      <mdui-linear-progress :value="installProgress" max="100"></mdui-linear-progress>

    </div>


  </div>
</template>

<style scoped>
:root{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container{
  margin: 20px;
}

.container *{
  margin-bottom: 20px;
}

.container .title{
  font-weight: bold;
  font-size: 25px;
}


mdui-linear-progress{
  height: 20px;
  --shape-corner: 20px;
}

</style>