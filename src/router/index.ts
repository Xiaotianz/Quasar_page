/*
 * @Author: @By.Xiaotian
 * @Date: 2022-07-26 16:34:36
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-05 16:15:40
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
        redirect:"/main/message",
        component: () => import("../view/layout/layout.vue"), //一定要有.vue后缀
        children:[
            {
                path:"/main/message",
                name:"mainMessage",
                component:()=>import("../view/message.vue")
            },
            {
                path:"/main/contact",
                name:"mainContact",
                component:()=>import('../view/contact.vue')
            },
            {
                path:"/main/groupchat",
                name:"mainGroupchat",
                component:()=>import('../view/groupchat.vue')
            }
        ]
    },
]

const router = createRouter({
    // createWebHashHistory()  hash方式
    history: createWebHistory(),
    routes,
})

export default router