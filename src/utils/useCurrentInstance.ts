/*
 * @Author: @By.Xiaotian
 * @Date: 2022-08-01 15:24:03
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-01 15:36:00
 * @Description: 
 * 
 */
import { getCurrentInstance,ComponentInternalInstance } from "vue";

export default function UseCurrentInstance ():any{
    const { appContext } = getCurrentInstance() as ComponentInternalInstance
    console.log(appContext);
    const proxy = appContext.config.globalProperties
    console.log(proxy);
    return {
        proxy
    }    
}   