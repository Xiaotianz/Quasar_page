<!--
 * @Author: @By.Xiaotian
 * @Date: 2022-08-01 23:51:03
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-05 14:59:44
 * @Description: 
 * 
-->
<template>
  <div class="login row justify-center items-center full-height full-width">
    <Transition appear enter-to-class="animate__animated animate__bounceInLeft animate__delay-2s"
      leave-to-class="animate__animated animate__bounceOutLeft  ">
      <div class="logos shadow-15 transparent row" v-if="data.loginFlag">
        <div class="full-width text-h4 text-logo row justify-center items-center">
          WebChat
        </div>
        <div class="q-pa-md col-12">
          <q-form translate-show="slide-right" ref="myFrom" autocorrect="off" autocapitalize="off"
            autocomplete="off" spellcheck="false" class="q-gutter-md">
            <q-input v-model="data.email" no-error-icon label="邮箱账号" :rules="[
              val => val && val.length > 0 || '请输入邮箱账号',
              val => email(val) || '请输入正确的邮箱账号'
            ]" />

            <q-input v-model="data.password" no-error-icon type="password" label="密码" :rules="[
              val => val !== null && val !== '' || '请输入密码',
            ]" />
            <div class="row justify-center">
              <q-btn label="登录" :loading="pageData.loading" v-debounce:500="submitlogin" size="md" style="width: 120px" color="primary" />
              <q-btn label="注册" @click="data.loginFlag = false;pageData.loading = false;InitLogin()" size="md" style="width: 120px"
                color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </div>
      </div>
    </Transition>

    <!-- register -->
    <Transition appear enter-to-class="animate__animated animate__bounceInLeft animate__delay-2s"
      leave-to-class="animate__animated animate__bounceOutLeft">
      <div class="logos shadow-15 transparent row" v-if="!data.loginFlag">
        <div class="full-width text-h4 text-logo row justify-center items-center">
          注册
        </div>
        <div class="q-pa-md col-12">
          <q-form  ref="myFrom" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false"
            class="q-gutter-md">
            <q-input v-model="data.email" dense no-error-icon ref="myForm_email" validate label="邮箱账号" :rules="[
              val => val && val.length > 0 || '请输入邮箱账号',
              val => email(val) || '请输入正确的邮箱账号'
            ]" />

            <q-input v-model="data.verCode" dense no-error-icon label="验证码" :rules="[
              val => val !== null && val !== '' || '请输入6位验证码',
            ]">
              <template v-slot:append>
                <q-btn label="发送验证码" @click="sendEmailVer()" color="primary" :dense="true" :ripple="true" flat />
              </template>
            </q-input>
            <q-input v-model="data.nickName" dense no-error-icon label="昵称" :rules="[
              val => val && val.length > 0 || '请输入昵称',
            ]" />
            <q-input v-model="data.password" dense no-error-icon type="password" label="密码" :rules="[
              val => val && val.length > 0 || '请输入密码',
              val => val && val.length >= 6 || '密码长度不能低于6位',
            ]" />
            <div class="row justify-center">
              <q-btn label="注册" size="md" :loading="pageData.loading" v-throttle:1500="Register" style="width: 220px" color="primary" />
            </div>
            <div class="row justify-center items-center">
                <p class="text-subtitle1" style="margin:0 0;">已有账号?</p>
                <q-btn label="点我登录" @click="data.loginFlag = true,pageData.loading = false;InitLogin()" color="primary" :dense="true" size="16px"
                  :ripple="true" flat />
            </div>
          </q-form>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, } from 'vue'
import useCurrentInstance from "@/utils/useCurrentInstance";
import { email } from '@/utils/validator'
import {sendEmail,register} from '../api/api'
import {login} from '../api/api'
import {useUserStore} from '@/store/userStore/index'
import { useRouter } from 'vue-router';
const user = useUserStore();
let router = useRouter();

// console.log(login);
// // console.log(user);

interface DataProps {
  // 解决 for in 中 key为string的问题
  [key: string]: any;
  password: string,
  loginFlag: boolean,
  email:string,
  verCode:string,
  nickName:string,
}
interface pageData {
  [key: string]: any;
  loading:boolean,
}
let data: DataProps = reactive({
    password: "",
    loginFlag: true,
    email:"",
    verCode:'',
    nickName:'',
})
let pageData:pageData =reactive({
  loading:false,
})

let {proxy} = useCurrentInstance();

const myForm_email:any = ref(null)
const myFrom:any = ref(null)


let submitlogin = () => {
  pageData.loading = true;
  myFrom.value.validate().then(async (valid: boolean) => {
    if(valid){
      // console.log(login);
      let result = await login(data)
      if(result.code != 200){
          proxy.$Messages({type:'negative',message:result.data});
          pageData.loading = false;
      }else{
          let {token} = result.data;
          localStorage.setItem('token',token);
          proxy.$Messages({message:'登入成功'});
          user.$patch((state)=>{
            state.userInfo = result.data;
            router.push({name:"main"})
          }),
          setTimeout(() => {
            pageData.loading = false;
          }, 1000);
      }
    }
  })
}
// let onReset = () => {

// }

let Register =() => {
  pageData.loading = true;
  myFrom.value.validate().then(async (valid: boolean) => {
    if(valid){
      let result = await register(data);
      if(result.code == 200){
        proxy.$Messages({message:"账号注册成功,请登入"});
        data.loginFlag = true;
        InitLogin();
        setTimeout(() => {
          pageData.loading = false;
        }, 1000);
      }else{
        proxy.$Messages({type:'negative',message:result.data});
        pageData.loading = false;
      }
    }
  }).catch((err: any) => {
    
  });
}

let sendEmailVer =async ()=>{
  if(myForm_email.value.validate()){
     let result =  await sendEmail(data);
     if(result.code == 200){
        proxy.$Messages({message:"验证码发送成功,请注意查收"})
     }
  }
}
// 初始化对象数据
let InitLogin = ()=>{
   for (const key in data) {
      if(key != 'loginFlag'){
          data[key] = '';
      }
   }
}

</script>

<style lang="less" scoped>
.login {
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);

  .logos {
    width: 458px;
    height: 588px;
    background: white;
    border-radius: 15px;

    .text-logo {
      background-image: linear-gradient(to right, orange, purple);
      -webkit-background-clip: text;
      color: transparent;
    }
  }

  @media(max-width: 500px) {
    .logos {
      width: 330px;
      height: 488px;
    }
  }
}
</style>