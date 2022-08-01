/*
 * @Author: @By.Xiaotian
 * @Date: 2022-08-01 14:46:43
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-01 15:10:59
 * @Description: 
 * 
 */
import { Notify } from 'quasar'

interface InterfaceNotify {
    type:string,  // 类型 'positive', 'negative', 'warning', 'info', 'ongoing'
    message:string,   // 消息体

    color?:string,     // 组件颜色
    textColor?:string,  // 文字颜色
    position?:string,  // 弹窗定位   top-left top-right bottom-left bottom-right top bottom left right center
    closeBtn?:boolean | string,  // close 按钮配置
    timeout?:number,   // 弹窗时间配置
    classes?:string,  // 自定义css类型
    caption?:string, // 标题名称
    icon?:string,  // 图标
    avatar?:string, //头像
}

export function Message(params:InterfaceNotify):void{
    let defaults:object = {
        type:params.type,
        message:params.message,
        color:params.color || 'primary',
        textColor:params.textColor || 'white',
        position:params.position || 'top-right',
        closeBtn:params.closeBtn,
        timeout:params.timeout || 3000,
        classes:params.classes,
        caption:params.caption,
        icon:params.icon,
        avatar:params.avatar,
    } 
    Notify.create(defaults)
}