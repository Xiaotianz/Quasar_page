<!--
 * @Author: @By.Xiaotian
 * @Date: 2022-08-01 23:51:03
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-03 22:07:53
 * @Description: 
 * 
-->
<template>
  <div class="login row justify-center items-center full-height full-width">
      <div class="logos shadow-15 transparent row">
        <div class="full-width text-h4 text-logo row justify-center items-center" >
          WebChat
        </div>
        <Transition 
            appear
            enter-to-class="animate__animated animate__bounceInLeft"
            leave-to-class="animate__animated animate__bounceOutLeft"
        >
        <div class="q-pa-md col-12" v-if="data.registerFlag">
          <q-form
            translate-show="slide-right"
            @submit="onSubmit"
            @reset="onReset"
            autocorrect="off"
            autocapitalize="off"
            autocomplete="off"
            spellcheck="false"
            class="q-gutter-md"
          >
            <q-input
              v-model="data.name"
              label="用户名123"
              :rules="[ val => val && val.length > 0 || 'Please type name']"
            />

            <q-input
              v-model="data.password"
              type="password"
              label="密码456"
              :rules="[
                val => val !== null && val !== '' || 'Please type your password',
              ]"
            />
            <div class="row justify-center">
              <q-btn label="登录" size="md" style="width: 120px" type="submit" color="primary"/>
              <q-btn label="注册" @click="" size="md" style="width: 120px" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </div>
        </Transition>

        <Transition 
            appear
            enter-active-class="animate__animated animate__bounceInLeft"
            leave-active-to-class="animate__animated animate__bounceOutLeft"
        >
        <div class="q-pa-md col-12" v-if="!data.registerFlag">
          <q-form
            translate-show="slide-right"
            @submit="onSubmit"
            @reset="onReset"
            autocorrect="off"
            autocapitalize="off"
            autocomplete="off"
            spellcheck="false"
            class="q-gutter-md"
          >
            <q-input
              v-model="data.name"
              label="用户名"
              :rules="[ val => val && val.length > 0 || 'Please type name']"
            />

            <q-input
              v-model="data.password"
              type="password"
              label="密码"
              :rules="[
                val => val !== null && val !== '' || 'Please type your password',
              ]"
            />
            <div class="row justify-center">
              <q-btn label="登录" size="md" style="width: 120px" type="submit" color="primary"/>
              <q-btn label="注册" @click="" size="md" style="width: 120px" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </div>
        </Transition>
        
        <!-- <Transition 
            appear
            enter-active-class="animate__animated animate__bounceInLeft"
            leave-active-class="animate__animated animate__bounceOutLeft"
        >
        <div class="q-pa-md col-12" v-if="!data.registerFlag">
          <q-form
            translate-show="slide-right"
            @submit="onSubmit"
            @reset="onReset"
            autocorrect="off"
            autocapitalize="off"
            autocomplete="off"
            spellcheck="false"
            class="q-gutter-md"
          >
            <q-input
              v-model="data.name"
              label="用户名123"
              :rules="[ val => val && val.length > 0 || 'Please type name']"
            />

            <q-input
              v-model="data.password"
              type="password"
              label="密码456"
              :rules="[
                val => val !== null && val !== '' || 'Please type your password',
              ]"
            />
            <div class="row justify-center">
              <q-btn label="登录" size="md" style="width: 120px" type="submit" color="primary"/>
              <q-btn label="注册" @click="" size="md" style="width: 120px" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </div>
        </Transition> -->


      </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ref, computed,reactive } from 'vue'
interface DataProps{
    name:string,
    password:string,
    registerFlag:boolean,
    isInit:boolean,
    loginFlag:boolean,
}
let data:DataProps = reactive({
    name:"",
    password:"",
    registerFlag:false,
    isInit:true,
    loginFlag:true,
})

let onSubmit= ()=>{
    console.log(data)
}
let onReset= ()=>{

}

</script>

<style lang="less" scoped>
[v-cloak] 
{ 
display:none;
}
.login{
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
  .logos{
    width: 458px;
    height: 588px;
    background: white;
    border-radius: 15px;
    .text-logo{
      background-image: linear-gradient(to right, orange, purple);
      -webkit-background-clip: text;
      color: transparent;
    }
  }
  @media(max-width: 500px) {
    .logos{
      width: 330px;
      height: 458px;
    }
  }
}
</style>