/*
 * @Author: @By.Xiaotian
 * @Date: 2022-08-04 15:32:13
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-05 13:40:16
 * @Description: 
 * 
 */


import { objToUrl } from '@/utils/util';
import {httpRequest} from '../request/index'

const sendEmail = (data:object):any=>{
    let config = {
        url:'/api/basis/ver_email',
        params:data,
    }
    return httpRequest.get(config);
}

const register =(data:object):any=>{
    let config = {
        url:'/api/basis/register',
        data:objToUrl(data),
        headers:{
            'content-type': 'application/x-www-form-urlencoded'
        }
    }
    return httpRequest.post(config);
}

export const login =(data:object):any=>{
    let config = {
        url:'/api/basis/login',
        data:objToUrl(data),
        headers:{
            'content-type': 'application/x-www-form-urlencoded'
        },
    }
    return httpRequest.post(config);
}


export {
    sendEmail,
    register,
}