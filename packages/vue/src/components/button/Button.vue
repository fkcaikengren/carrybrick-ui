<template>
  <button :class="rootKls" v-bind="_props" >
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


const props = withDefaults(defineProps<ButtonProps>(),{
  size: 'default',
  plain: false,
  text: false,
  round: false,
  disabled: false,
  loading: false,
  
})


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
  if(props.disabled){
    return {
      disabled: true
    }
  }
})

</script>
