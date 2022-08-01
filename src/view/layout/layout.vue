<!--
 * @Author: @By.Xiaotian
 * @Date: 2022-07-18 14:32:38
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-01 16:09:09
 * @Description: 
 * 
-->
<script setup lang="ts">
import { ref } from 'vue'

let leftDrawerOpen = ref(false);

function toggleLeftDrawer():void{
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>


<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" :width="200" :breakpoint="700" side="left"  overlay behavior="mobile">
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style scoped>

</style>
