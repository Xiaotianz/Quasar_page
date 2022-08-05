<template>
    <div class="layout full-height full-width row justify-center items-center ">
        <div class="layout-content row shadow-15">
            <div class="layout-left full-height">
                <div class="row justify-center items-center" style="height: 98px;">
                  <q-img
                      :src="url+user.userInfo.avatar"
                      style="height: 48px; max-width: 48px"
                    />
                </div>
                <div style="text-align: center;cursor:pointer;" class="q-mb-md" v-for="item in titleObj.title" :key="item.id"  @click="go(item.name,item.id)">
                    <i :class="['iconfont',item.icon]" :style="{'font-size': item.size,'color': item.color,'position': 'relative'}">
                      <q-badge v-if="item.id == 1" color="orange" floating style="right: -15px;">{{item.messnum}}</q-badge>
                    </i>
                </div>
            </div>
            <div class="layout-center full-height">
               <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/userStore/index.js';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
const router = useRouter();
const user = useUserStore();
let url = import.meta.env.VITE_APP_BASE_URL;

const titleObj = reactive({
    title:[
      {
        id:1,
        name:"mainMessage",
        color:'green',
        icon:"icon-xiaoxi",
        size:'26px',
        messnum:15
      },
      {
        id:2,
        name:"mainContact",
        color:'#ccc',
        icon:'icon-wodelianxiren',
        size:"32px",
      },
      {
        id:3,
        name:"mainGroupchat",
        color:'#ccc',
        icon:"icon-icon_duorenxiezuo",
        size:"32px",
      }
    ]
})

let go = (data:string,id:number)=>{
  router.push({name:data});
  titleObj.title = titleObj.title.map(item=>{
    if(item.id == id){
      item.color = 'green'
    }else{
      item.color = '#ccc'
    }
    return item
  })
}
</script>

<style lang="less" scoped>
  .layout{
    .layout-content{
      width: 900px;
      height: 687px;
      // background-color: #000000;
      .layout-left{
        width: 72px;
        background: rgb(46, 46, 46);
      }
      .layout-center{
        width: 250px;
        background: rgb(230, 229, 229);
        border-right: 1px solid #ccc;
      }
      .layout-right{
        width: calc(100% - 72px - 250px);
        background-color: #08a5d4;
      }
    }
  }
</style>