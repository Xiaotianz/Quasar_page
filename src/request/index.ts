import HRequest from "./request";

const httpRequest = new HRequest({
    baseURL:import.meta.env.VITE_APP_BASE_URL,
    timeout:import.meta.env.VITE_APP_TIME_OUT,
    // 自定义拦截器
    interceptHooks:{
        requestInterceptor:(config)=>{
            return config
        },
        requestInterceptorCatch:(response)=>{
            return response
        }
    }
})

export {
    httpRequest
}


