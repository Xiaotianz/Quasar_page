/*
 * @Author: @By.Xiaotian
 * @Date: 2022-07-26 11:54:00
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-04 19:03:13
 * @Description: 
 * 
 */
import { AxiosRequestConfig, AxiosResponse} from 'axios'
// axios 返回数据类型定义
interface HResponseData<T>{
    data: T;   //泛型 任意类型
    code:Number;  
    message:String,
}

//axios 自定义拦截器
interface Hintercept{
    // 请求拦截
    requestInterceptor?: (config:AxiosRequestConfig) => AxiosRequestConfig
    // 请求错误拦截
    requestInterceptorCatch?: (error:any) => any
    //响应拦截
    responeInterceptor?:(response:AxiosResponse) => AxiosResponse
    //响应错误拦截
    responeInterceptorCath?:(error:any) => any
}
// HRequestConfig 继承 AxiosRequestConfig 并挂载 interceptHooks这个属性 ?表示可选 可以是 Hintercept中的某一个函数 也可以是 undefined
interface HRequestConfig extends AxiosRequestConfig {
    interceptHooks?:Hintercept,
    headers?: any
}

export type{
    HResponseData,
    HRequestConfig,
    Hintercept
}