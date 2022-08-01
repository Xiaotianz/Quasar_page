<!--
 * @Author: @By.Xiaotian
 * @Date: 2022-07-27 17:17:41
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-07-27 17:25:37
 * @Description: 
 * 
-->
<template>
   <div>{{useUser.name}}</div>
</template>
<script lang='ts' setup>
//定义
  import {reactive,toRefs,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,ref,} from 'vue';
  // 使用方式
  import {useUserStore} from '@/store/userStore/index'
  const useUser = useUserStore()
  // 调用actions里面的方法
  useUser.updateName('张三');
 // onBeforeUnmounted, // 组件销毁前
   // onUnmounted, // 组件销毁
   // onActiveted, // 条件:<keep-alive>
   // onDeActiveted, // 条件:<keep-alive>
   // onErrorCaptured, // 当捕获一个来自子孙组件的异常时激活
   // onRenderTracked // 跟踪状态变化 返回event所有变化属性
   // onRenderTriggered // 跟踪状态变化 返回event单个主要变化属性
   // watch // watch([()=>data.要监听的属性,...监听多个属性],(newValue,oldValue)=>{})
 // } from 'vue';
        interface DataProps{
        }
       const data: DataProps = reactive({})
       const refData = toRefs(data)
       onBeforeMount(() => {})
       onMounted(() => {})
       onBeforeUpdate(() => {})
       onUpdated(() => {})
       // onRenderTracked((event) => {console.log(event)})
       // watch([() => data],(newValue,oldValue) => {})
</script>
<style lang='less' scoped >
</style>