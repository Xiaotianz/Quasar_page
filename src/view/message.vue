<!--
 * @Author: @By.Xiaotian
 * @Date: 2022-08-01 22:38:20
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-05 17:41:18
 * @Description:
 * 
-->
<template>
  <searchVue></searchVue>
    <q-scroll-area style="height: calc(100% - 58px); max-width: 250px;">
      <div v-for="n in 100" :key="n" class="q-py-xs item">
        <div class="q-pl-xs" > Lorem ipsum dolor sit amet</div>
      </div>
    </q-scroll-area>
</template>

<script setup lang="ts">
import searchVue from '@/components/search.vue';

</script>

<style lang="less" scoped>
.item:hover{
  background-color:rgb(223, 221, 219);
}
</style>