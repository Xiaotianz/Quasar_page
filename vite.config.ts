/*
 * @Author: @By.Xiaotian
 * @Date: 2022-07-18 14:32:38
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-01 11:59:06
 * @Description: 
 * 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  base:'./' ,
  server: {
    host: true,
    port:8080,
    open: true,
    
    // 配置代理 这里不需要
    // proxy: {
    //   '/api': {
    //     target: 'https://blog.csdn.net/weixin_45292658',
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, '')
    //   }
    // }
  },
  resolve:{
    alias:{
      '@': resolve(__dirname, 'src')
    }
  },
  // 配置less
  css:{
    preprocessorOptions:{
      less:{
        javascriptEnabled: true
      }
    }
  },
  
  plugins: [
    vue(),
    quasar(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    viteMockServe({mockPath: './src/mock',supportTs: true,})
  ]
})
