<!--
 * @Author: @By.Xiaotian
 * @Date: 2022-08-05 15:23:34
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-05 15:24:03
 * @Description: 
 * 
-->
<template>
   <div class="layout2">
        456
   </div>
</template>
<script lang='ts' setup>
//定义
import {reactive,toRefs,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,ref,} from 'vue';
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