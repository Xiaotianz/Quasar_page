/*
 * @Author: @By.Xiaotian
 * @Date: 2022-07-26 16:34:36
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-01 23:51:23
 * @Description: 
 * 
 */
import { createRouter,createWebHashHistory,createWebHistory,RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path:"/",
        redirect:"/login"
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../view/login.vue') //一定要有.vue后缀
    },
    {
        path: '/main',
        name: 'main',
        component: () => import("../view/main.vue") //一定要有.vue后缀
    },
]

const router = createRouter({
    // createWebHashHistory()  hash方式
    history: createWebHistory(),
    routes,
})

export default router