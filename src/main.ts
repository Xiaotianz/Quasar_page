/*
 * @Author: @By.Xiaotian
 * @Date: 2022-07-18 14:32:38
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-04 20:01:49
 * @Description: 
 * 
 */

import { createApp } from 'vue'
import { Quasar,Notify } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'
import './style.css'
import App from './App.vue'
import router from '@/router/index'
import { createPinia } from 'pinia'
import './assets/font/font.css'
const pinia = createPinia();
import langDe from 'quasar/lang/zh-CN'
import directive from "./common/directive"; 
import { Message } from './utils/message/message'
const app = createApp(App);
// 全局挂载 Message
app.config.globalProperties.$Messages = Message
// 环境变量获取
// console.log(import.meta.env);

app
.use(router)
.use(directive)
.use(pinia)
.use(Quasar,{
    plugins: {
        Notify,
    },
    config: {
        brand: {
          primary: '#3896e8',
          secondary: '#26A69A',
          accent: '#74b027',
          dark: '#1d1d1d',
          'dark-page': '#121212',
          positive: '#21BA45',
          negative: 'red',
          info: '#31CCEC',
          warning: '#F2C037'
        },
        animations: 'all'
    },
    lang: langDe
})
.mount('#app');
