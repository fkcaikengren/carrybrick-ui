<template>
  <!-- 待优化，可以使用defineComponent 来透传属性给插槽内容 -->
  <div ref="reference" style="display: inline-block;" 
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
    >
    <slot name="reference" ></slot>
  </div>
  <Teleport to='body' >
    <div 
      ref="floating"   
      :class="popoverKls" 
      :style="contentStyle"
      :data-popper-placement="placement"
      v-if="isOpen"
    >
      <slot></slot>
      <span 
        ref="floatingArrow"
        :class="arrowKls"
        :style="{
          position: 'absolute',
          left:
            middlewareData.arrow?.x != null
              ? `${middlewareData.arrow.x}px`
              : '',
          top:
            middlewareData.arrow?.y != null
              ? `${middlewareData.arrow.y}px`
              : '',
        }"
      ></span>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
import './popover.scss'
import {computed, watch, ref} from 'vue';
import { useFloating , arrow, offset, flip, shift } from '@floating-ui/vue';
import { useNamespace } from '@carrybrick-ui/vue-hooks';
import { PopoverProps } from './types';

defineOptions({
  name: 'CBPopover'
})

const props = withDefaults(defineProps<PopoverProps>(), {
  placement: 'bottom',
  trigger: 'hover'
})

const emit = defineEmits(['show', 'hide'])


const { b, e } = useNamespace('popover')
const popoverKls = b()
const arrowKls = e('arrow')

const isOpen = ref(false)
const open = ()=> {
  isOpen.value = true
  emit('show')
};
const hide = ()=> {
  isOpen.value = false
  emit('hide')
}

const handleMouseEnter = ()=>{
  if(props.trigger === 'hover'){
    open()
  }
}
const handleMouseLeave = ()=>{
  if(props.trigger === 'hover'){
    hide()
  }
}

const handleClick = ()=>{
  if(props.trigger === 'click'){
    if(isOpen.value){
      hide()
    }else{
      open()
    }
  }
}


 
const reference = ref(null);
const floating = ref(null);
const floatingArrow = ref(null);

const { floatingStyles,placement, middlewareData } = useFloating(reference, floating, {
  placement: props.placement,
  middleware: [
    offset(10),
    flip(),
    shift(),
    arrow({element: floatingArrow})
  ],
});


const contentStyle = computed(()=>{
  return {
    ...floatingStyles.value,
  }
})


defineExpose({
  hide
})


</script>
