import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import FileView from '@/views/FileView.vue'
import VideoView from "@/views/VideoView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/index"
        },
        {
            path: "/index",
            component: HomeView,
            children: [
                {
                    path: "",
                    component: FileView
                },
                {
                    path: "index",
                    component: FileView,
                },
                {
                    path: "video",
                    component: VideoView,
                },
                {
                    path: "about",
                    component: AboutView,
                }
            ]
        },
        {
            path: "/login",
            component: LoginView,
        }
    ]
})

/**
 * {
 *             //默认路由重定向
 *             path: "",
 *             redirect: "/index"
 *         },
 *         {
 *             path: '/index/:id',
 *             name: 'home',
 *             component: HomeView,
 *             children: [
 *                 {path: '', name: "主路由", redirect: 'allfile'},
 *                 {path: 'allfile', name: "所有文件", component: FileView},
 *                 {path: 'video', name: "视频文件", component: VideoView},
 *                 {path: "about", name: "关于", component: AboutView},
 *             ]
 *         }, {
 *             path: '/login',
 *             name: 'login',
 *             component: LoginView
 *         }
 */

export default router
