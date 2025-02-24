/*
  设计:
  数据交给调用者管理
  Collapse: 只管状态（记录展开的状态，触发change），不管UI
  CollapseItem: 接受来自Collapse的数据，渲染UI
*/


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
import type { CollapseEmits, CollapseProps, ItemName } from './types';
import { useKls } from './use-collapse';


defineOptions({
  name: 'CBCollapse',
})
const props = defineProps<CollapseProps>()
const activeNames = ref<Array<ItemName>>(props.modelValue)
const emits = defineEmits<CollapseEmits>() //定义emit事件


const {rootKls} = useKls()



// 监听props.modelValue的变化
watch(()=> props.modelValue, (newValue)=>{
  activeNames.value = newValue;
  // console.log(activeNames);
}, {deep: true})

// CollapseItem的点击函数
const handleClick = (name: string | number ) =>{
  // console.log(name);
  // 如果有则删除，没有则添加
  const idx = activeNames.value.indexOf(name)
  // console.log(idx);
  if(idx>-1){
    activeNames.value.splice(idx, 1)
  }else{
    activeNames.value.push(name)
  }
  emits('update:modelValue', activeNames.value)
}

provide<CollapseContext>(CollapseContextKey, {
  activeNames,
  handleClick
})

</script>
