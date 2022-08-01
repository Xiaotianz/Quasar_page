/*
 * @Author: @By.Xiaotian
 * @Date: 2022-07-26 10:14:45
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-07-26 10:36:31
 * @Description: 
 * 
 */

export default [
    {
        url: "/api/getUsers", //匹配到指定url 
        method: "get",        //请求类型
        response:()=>{
            return {
                code:200,
                message:'success',
            }
        }
    }
]