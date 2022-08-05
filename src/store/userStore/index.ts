import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  persist: true,
  state:()=> ({
    userInfo:{} ,
  }),
  actions: {
    // updateUserInfo(state:Array[s]) {
    //     state.userInfo = data;
    // }
  },
  getters: {}
})
