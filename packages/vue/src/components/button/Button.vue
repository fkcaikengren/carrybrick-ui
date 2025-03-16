<template>
  <button :class="rootKls" @click="handleClick" v-bind="_props">
    <template v-if="loading">
      <CBIcon  :class="[loadingKls, iconKls]">
        <Loading />
      </CBIcon>
    </template>
    <CBIcon :class="iconKls" v-else-if="icon"> 
      <component :is="icon" />
    </CBIcon>
    <span :class="textKls">
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts" setup>
import './button.scss';
import { computed } from 'vue';
import CBIcon from '../icon/Icon.vue'
import { Loading } from '@element-plus/icons-vue'

import { useNamespace } from '@carrybrick-ui/vue-hooks';
import type {  ButtonProps } from './types'
import { useFormItem } from '../form/use-form-item';


const props = withDefaults(defineProps<ButtonProps>(),{
  size: 'default',
  plain: false,
  text: false,
  round: false,
  disabled: false,
  loading: false,
  nativeType: 'button',
})

const { form } = useFormItem()
const { b, e, m, is } = useNamespace('button')

const rootKls = computed(()=>[
  b(), 
  m(props.type), 
  m(props.size === 'default' ? '' : props.size),
  is('plain',props.plain), 
  is('text',props.text),
  is('round',props.round),
  is('disabled',props.disabled),

])

const loadingKls = computed(()=> is('loading', props.loading))

const iconKls = e('icon')
const textKls = e('text')

const _props = computed(()=>{
  const attr: Record<string, any> = {type: props.nativeType}
  if(props.disabled || props.loading){
    attr['disabled'] = true
  }
  return attr;
})


const handleClick = (e: MouseEvent)=>{
  if(props.disabled || props.loading){
    e.stopPropagation()
    return;
  }

  if(props.nativeType === 'reset'){
    console.log('重置');
    form?.resetFields()
  }
  
  // emit('click', e)
}

</script>
