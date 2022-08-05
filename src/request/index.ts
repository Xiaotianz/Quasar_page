/*
 * @Author: @By.Xiaotian
 * @Date: 2022-08-01 22:38:20
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-05 13:21:21
 * @Description: 
 * 
 */
import HRequest from "./request";
import type { HResponseData,HRequestConfig,Hintercept} from './interface/axios.interface'
const httpRequest = new HRequest({
    baseURL:import.meta.env.VITE_APP_BASE_URL,
    timeout:import.meta.env.VITE_APP_TIME_OUT,
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    },
    // 自定义拦截器
    interceptHooks:{
        requestInterceptor:(config:HRequestConfig)=>{
            // console.log(config.headers['']);
            // let api:Array<string> = ['/api/basis/ver_email','/api/basis/register','/api/basis/login'];
            // let token = window.localStorage.getItem('token');
            // if(token){
            //     if(!api.includes(config.url ?? '')){
            //         config.headers.Authorization = 'Bearer ' + token
            //     }
            // }
            return config
        },
        responeInterceptor:(response)=>{
            return response
        }
    },
})
export {
    httpRequest
}


