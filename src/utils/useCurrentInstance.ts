/*
 * @Author: @By.Xiaotian
 * @Date: 2022-08-01 15:24:03
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-04 17:39:36
 * @Description: 
 * 
 */
import { getCurrentInstance,ComponentInternalInstance } from "vue";

export default function UseCurrentInstance ():any{
    const {appContext} = getCurrentInstance() as ComponentInternalInstance
    const proxy = appContext.config.globalProperties
    return {
        proxy
    }    
}   