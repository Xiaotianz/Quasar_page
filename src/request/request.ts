import axios , {AxiosInstance} from 'axios'
import type { HResponseData,HRequestConfig,Hintercept} from './interface/axios.interface'

// 请求实例
class HRequest {
    // 定义相关接口及配置

    // 请求相关配置
    config:HRequestConfig;
    // axios 实例
    instance:AxiosInstance
    // 自定义拦截器实例
    interceptHooks?:Hintercept
    
    // 创建一个axios实例 
    constructor(option:HRequestConfig){
        this.config = option;
        this.instance = axios.create(option);
    }
    // 挂载 自定义拦截器至 axios拦截器中
    setupInterceptor():void{
        // 自定义拦截器
        this.instance.interceptors.request.use(
            this.interceptHooks?.requestInterceptor,
            this.interceptHooks?.requestInterceptorCatch
        );
         // 自定义拦截器
        this.instance.interceptors.response.use(
            this.interceptHooks?.responeInterceptor,
            this.interceptHooks?.responeInterceptorCath
        )
        // 请求拦截 所有请求共同拦截器
        this.instance.interceptors.request.use((config)=>{
            return config
        })
        this.instance.interceptors.response.use((response)=>{
            return response
        })
    }
    // 创建一个请求实例
    // 类型参数的作用，T决定AxiosResponse实例中data的类型
    request<T = any>(config:HRequestConfig): Promise<T>{
        return new Promise((resolove,reject)=>{
            this.instance.request<any,HResponseData<T>>(config).then((res)=>{
                resolove(res.data);
            }).catch(err=>{
                reject(err);
            })
        })
    };

    // 实例请求方法  返回一个Promise
    get<T = any>(config:HRequestConfig):Promise<T>{
        return  this.request({...config,method:'GET'})
    }
    post<T = any>(config:HRequestConfig):Promise<T>{
        return  this.request({...config,method:"POST"})
    }
    put<T = any>(config:HRequestConfig):Promise<T>{
        return  this.request({...config,method:"PUT"})
    }
    delete<T = any>(config:HRequestConfig):Promise<T>{
        return  this.request({...config,method:"DELETE"})
    }
    patch<T = any>(config:HRequestConfig):Promise<T>{
        return  this.request({...config,method:'PATCH'})
    }
}
export default HRequest