<template>
  <div action="" :class="rootKls">
    <div :class="labelWrapKls">
      <label :class="labelKls" 
        :style="{width: labelWidth}"
        for="" 
        >
        {{ label }}
      </label>  
    </div>
    <div :class="contentKls">
      <slot></slot>
      <div :class="errorMsgKls" v-if="errMsg">{{ errMsg }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import './form.scss';
import {computed, inject, onMounted, provide, ref} from 'vue'
import { useNamespace } from '@carrybrick-ui/vue-hooks';
import type {  FormItemContext, FormItemProps } from './types';
import { formItemKey, formKey } from './constant';
import Schema from 'async-validator';
import { isNil } from '../../utils';

defineOptions({
  name: 'CBFormItem'
})
const props = withDefaults(defineProps<FormItemProps>(), {
  label: '',
  labelWidth: '120px',
  labelPosition: 'left',
  size: 'default'
})



const formContext = inject(formKey)
const errMsg = ref('')


const itemRules = computed(()=>{
  return formContext?.rules?.[props.prop!]
})


const getTriggerRules = (trigger?:string)=>{
  if(!trigger)
    return itemRules.value;
  return itemRules.value?.filter((rule)=> rule.trigger === trigger)
}

const innerValue = computed(()=> {
  return formContext?.model[props.prop!]
})


// 根据rule验证数据
const asyncValidate = async (trigger?:string)=>{
  const rules = getTriggerRules(trigger)
  if(props.prop && !isNil(innerValue) && rules){

    const descriptor = {
      [props.prop]: rules
    }
    const validator = new Schema(descriptor)
    const data = {
      [props.prop]: innerValue.value
    }
    return validator.validate(data).then(()=>{
      errMsg.value = ''
      return null;
    }).catch(({errors, fields})=>{
      // 如果该字段验证失败,返回两个信息
      // errors: Array<Rule>
      // fields: Object, 每个字段的rule
      //  处理错误状态
      errMsg.value = fields[props.prop!][0].message
      return fields;
    })

  }
}

const formItemContext: FormItemContext|null = props.prop ? {
  prop: props.prop || '',
  validate: asyncValidate
}: null

provide(formItemKey, formItemContext)
onMounted(()=>{
  if(formContext && formItemContext){
    formContext.addField(formItemContext)
  }
})

const isRequired = computed(()=>{
  return itemRules.value?.some((rule)=> rule.required)
})

const {b, e, m, is} = useNamespace('form-item')
const rootKls = b()
const labelWrapKls = e('label-wrap')
const labelKls = [e('label'), is('required', isRequired.value)]
const contentKls = e('content')
const errorMsgKls = e('error')
</script>
