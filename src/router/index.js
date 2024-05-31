import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import FileView from '@/views/FileView.vue'
import VideoView from "@/views/VideoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //默认路由重定向
      path:"",
      redirect:"/index"
    },
    {
      path: '/index/:',
      name: 'home',
      component:HomeView,
      children: [
        { path: '', component: FileView },
        { path: 'allfile', component: FileView },
        {path:'video',component: VideoView},
      ]
    }, {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
