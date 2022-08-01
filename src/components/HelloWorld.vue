<!--
 * @Author: @By.Xiaotian
 * @Date: 2022-07-18 14:32:38
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-07-27 11:45:35
 * @Description: 
 * 
-->
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string ,data:number}>()

const count = ref(0)
const counts = ()  =>{
  let a = [
     {
      a:"123",
      b:'456',
      c:'789',
      d:'987'
     },
    {
      a:"1234",
      b:'4567',
      c:'78910',
      d:'9876'
     },
    {
      a:"12345",
      b:'45678',
      c:'78910j',
      d:'98765'
     }
  ];
  let result  = Array.from(a,({a,b,c})=>{return {a,b,c}});
  console.log(result);
  return {
    counts
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <el-button>{{data}}</el-button>
  <div class="card">
    <button type="button" @click="counts">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
