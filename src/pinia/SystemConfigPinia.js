import { defineStore } from 'pinia'
import {computed, ref} from "vue";

//系统配置Store

export const SystemConfigPinia = defineStore(
    'SystemConfig',
    ()=>{
        const SystemColorMatching = ref('#9ecaff') //配色
        const SystemMode = ref('dark') //夜间模式 dark | light | auto


        return {
            SystemColorMatching,
            SystemMode,
        }

    },{
        persist: true
    }
)