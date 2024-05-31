
<script>
import VerificationCode from '../components/VerificationCode.vue'

export default {
  data(){
    return {
      
    }
  },
methods:{
  toIndex(){
    this.$router.push("/index");
  }
},
  components:{
    VerificationCode
  }
}
</script>

<template>
    <div class="box">
        <div>

          <div>
            <h1>Cloud Disk</h1><h2 style="color:#808080">Login</h2>
          </div>
          

          <mdui-text-field style="margin: 20px 0px;" variant="outlined" label="Username">
            <mdui-button-icon slot="icon" icon="account_circle"></mdui-button-icon>
          </mdui-text-field>

          <mdui-text-field variant="outlined" type="password" toggle-password label="Password">

            <mdui-button-icon slot="icon" icon="memory"></mdui-button-icon>

          </mdui-text-field>

          <div style="margin-top:10px;display: flex;">

            <!-- 验证码模块 -->

            

            <mdui-text-field style="flex: 1;" variant="outlined" label="Code"></mdui-text-field>


            <mdui-card clickable style="width:100px;height: 60px;margin-left: 10px;">

<VerificationCode :identifyCode="H8g6"/>


</mdui-card>

          </div>



          <mdui-button style="margin-top:10px" full-width @click="toIndex">Login</mdui-button>

        </div>
    </div>
</template>
<style scoped>
.box {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>