
<template>
   <div class="main">{{useUser.name}}</div>
</template>
<script lang='ts' setup>
import {
   defineComponent,
   reactive,
   toRefs,
   onBeforeMount,
   onMounted,
   onBeforeUpdate,
   onUpdated,
   ref
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
interface DataProps{
}
let s = ref(1);
const useUser = useUserStore();

// export default defineComponent({
//    name: '',
//    components: {},
//    props: {},
//    setup(props) {
//        const data: DataProps = reactive({})
//        const refData = toRefs(data)
//        onBeforeMount(() => {})
//        onMounted(() => {})
//        onBeforeUpdate(() => {})
//        onUpdated(() => {})
//        // onRenderTracked((event) => {console.log(event)})
//        // watch([() => data],(newValue,oldValue) => {})
//        return { ...refData }
//    },
// });
</script>
<style lang='less' scoped >
</style>