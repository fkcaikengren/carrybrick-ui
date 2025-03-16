<template>
  <form  :class="rootKls">
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
import { provide, ref } from 'vue';
import { useNamespace } from '@carrybrick-ui/vue-hooks';
import { FormProps, FormItemContext} from './types';
import { formContextKey } from './constant';

defineOptions({
  name: 'CBFormItem'
})

const props = withDefaults(defineProps<FormProps>(), {
  
  labelWidth: '120px'
})


const {b, e, m} = useNamespace('form')
const rootKls = b()


// props.rules
const fields:FormItemContext[] = []
const resetFields = ()=>{
  fields.forEach(field=>{
    field.resetField()
  })
}
provide(formContextKey, {
  ...props,
  addField: (field: FormItemContext)=>{
    fields.push(field)
  },
  removeField: (field: FormItemContext)=>{
    fields.splice(fields.indexOf(field), 1)
  },
  resetFields
})


const validate = ()=>{
  let valid = true
  const results: Record<string, any> = {}
  let successCnt = 0
  return new Promise((resolve, reject)=>{
    fields.map(field=> field.validate()).forEach((item, i)=>{
      item.then((fieldError)=>{
        successCnt++
        console.log(fields[i].prop);
        if(fieldError){
          valid = false
          results[fields[i].prop] = fieldError[fields[i].prop]
        }
        if(successCnt === fields.length){
          resolve({valid, results})
        }
        
      })
    })
  })
}



defineExpose({
  validate,
  resetFields
})
</script>

