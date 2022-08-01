import { defineStore } from 'pinia'
import type {userInfo} from './index.d'
let userInfo:userInfo = {
  active:"",
  id:123,
  name:"aqasd"
}
export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一

  persist: {
     enabled: true  //开启持久化存储
  },
  state:()=>{
    return userInfo
  },
  actions: {
    updateName(name:string) {
        this.name = name;
    }
  },
  getters: {}
})
