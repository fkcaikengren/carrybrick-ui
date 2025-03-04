<template>
  <div :class="rootKls">
    <slot></slot>
  </div>  
</template>
<script setup lang="ts">
import './collapse.scss'
import {ref, watch, provide } from 'vue'
import type { CollapseContext } from './constant';
import { CollapseContextKey } from './constant';
import type { CollapseProps, ItemName } from './types';
import { useKls } from './use-collapse';


defineOptions({
  name: 'CBCollapse',
})
const props = withDefaults(defineProps<CollapseProps>(), {
  accordion: false
})

if(props.accordion && Array.isArray(props.modelValue)){
  // 警告
  console.warn('in accordion mode, modelValue should be string or number')
}

const activeNames = ref(props.modelValue)
const emits = defineEmits(['update:modelValue']) //定义emit事件

const {rootKls} = useKls()

// 监听props.modelValue的变化
watch(()=> props.modelValue, (newValue)=>{
  activeNames.value = newValue;
}, {deep: true})

// CollapseItem的点击函数
const handleClick = (name: ItemName ) =>{
  if(Array.isArray(activeNames.value)){
    // 如果有则删除，没有则添加
    const idx = activeNames.value.indexOf(name)
    if(idx>-1) {
      activeNames.value.splice(idx, 1)
    }else {
      activeNames.value.push(name)
    }
  }else{
    if(activeNames.value === name){
      activeNames.value = ''
    }else{
      activeNames.value  = name
    }
    
  }

  emits('update:modelValue', activeNames.value)
  
}

provide<CollapseContext>(CollapseContextKey, {
  activeNames,
  handleClick
})

</script>
