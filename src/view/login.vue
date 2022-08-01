<!--
 * @Author: @By.Xiaotian
 * @Date: 2022-07-27 15:58:36
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-01 16:09:55
 * @Description: 
 * 
-->
<template>
  <!-- <div class="q-pa-md">
    <q-btn color="primary" class="full-width" label="Full-width" />

    <q-btn color="primary" label="With Tooltip" class="q-mt-md">
      <q-tooltip class="bg-accent">I'm a tooltip</q-tooltip>
    </q-btn>
  </div> -->
    <!-- <div class="login">{{userStore.name}}</div> -->
    <!-- <div class="row">
        <div>First column</div>
        <div>Second column</div>
        <div>Third column</div>
    </div> -->
    <!-- <div class="row">
        <div class="col-8">two thirds</div>
        <div class="col-2">one sixth</div>
        <div class="col-auto">auto size based on content and available space</div>
        <div class="col">fills remaining available space</div>
    </div> -->
</template>
<script lang='ts'>
import {
    defineComponent,
    ComponentInternalInstance,
    getCurrentInstance,
    reactive,
    toRefs,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,    
    // onBeforeUnmounted, // 组件销毁前
    // onUnmounted, // 组件销毁
    // onActiveted, // 条件:<keep-alive>
    // onDeActiveted, // 条件:<keep-alive>
    // onErrorCaptured, // 当捕获一个来自子孙组件的异常时激活
    // onRenderTracked // 跟踪状态变化 返回event所有变化属性
    // onRenderTriggered // 跟踪状态变化 返回event单个主要变化属性
    // watch // watch([()=>data.要监听的属性,...监听多个属性],(newValue,oldValue)=>{})
} from 'vue';
import {useUserStore} from '@/store/userStore/index'
import UseCurrentInstance from '@/utils/useCurrentInstance';
import { useQuasar } from 'quasar'
// 定义接口相关类型
interface DataProps {

}
 
export default defineComponent({
    name: '',
    components: {},
    props: {},
    setup(props) {
        // const $q = useQuasar()
        // $q.dark.set(true)
        const data: DataProps = reactive({})
        const refData = toRefs(data)
        onBeforeMount(() => { })
        // onMounted(() => { 
        //     let {proxy} = UseCurrentInstance();
        //     console.log(proxy.$Messages);
        //     for (let index = 0; index < 5; index++) {
        //     proxy.$Messages({
        //         type:"info",
        //         message:'123'+index,
        //         color:"positive",
        //         timeout:5000,
        //     });
        //     }
        // })  
        onBeforeUpdate(() => { })
        onUpdated(() => { })
        const userStore = useUserStore();
        let change = () =>{
            userStore.updateName('张三王子')
        }
        change();
        // onRenderTracked((event) => {console.log(event)})
        // watch([() => data],(newValue,oldValue) => {})
        return { ...refData,change,userStore }
    },
});
</script>
<style lang='less' scoped >
</style>