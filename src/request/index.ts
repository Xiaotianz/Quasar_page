/*
 * @Author: @By.Xiaotian
 * @Date: 2022-08-01 22:38:20
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-04 19:12:01
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
            // if(config.method == 'post'){
            //     config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
            // }
            // config.headers.Authorization =`Bearer ${123}`
            // console.log(config);
            // debugger;
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


