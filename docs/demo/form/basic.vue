<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import {CBForm, CBFormItem, CBInput, CBButton } from '@carrybrick/vue'
  import type { FormRules, FormInstance } from '@carrybrick/vue'
  
  interface FormModel {
    name: string
    desc: string
  }
  const model = ref<FormModel>({
    name: '',
    desc: ''
  })
  const rules = reactive<FormRules<FormModel>>({
    name: [
      {type:'string', required:true, message:'必填', trigger: 'blur'},
      {min: 3, max: 5, message:'长度在3到5之间', trigger: 'blur'}
    ],
    desc: [{required:false, message:'no必填'}]
  })

  const formEl = ref<FormInstance>()

  const onSubmit = async ()=>{
    if(!formEl.value)
      return;
    const {valid} = await formEl.value!.validate()
    if(valid){
      console.log('start');
    }
  }
</script>

<template>
  <main>
    <CBForm :model="model" :rules="rules" label-positon="left" ref="formEl">
      <CBFormItem label="姓名" prop="name">
        <CBInput v-model="model.name"></CBInput>
      </CBFormItem>
      <CBFormItem label="描述" prop="desc">
        <CBInput v-model="model.desc"></CBInput>
      </CBFormItem>
      <CBFormItem >
        <CBButton type="primary" @click="onSubmit">提交</CBButton>
        <CBButton>取消</CBButton>
      </CBFormItem>
    </CBForm>


    <!-- <CBForm :model="model" :rules="rules" label-positon="top">
      <CBFormItem label="填写1">
        <CBInput></CBInput>
      </CBFormItem>
      <CBFormItem label="填写2">
        <CBInput></CBInput>
      </CBFormItem>
    </CBForm> -->


  </main>
</template>