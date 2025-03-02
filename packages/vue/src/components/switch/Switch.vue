<template>
  <div :class="rootKls" @click.prevent="handleSwitch">
    <input  
      id="abc" 
      :class="inputKls"
      type="checkbox" 
      role="switch"
      :checked="isChecked"
      :disabled="disabled"
      :aria-checked="isChecked"
      :aria-disabled="disabled"

    >
    <span :class="coreKls" >
      <div :class="innerKls" v-if="activeText">
        <span :class="is('text')">
          {{ isChecked?activeText:inactiveText }}
        </span>
      </div>
      <div :class="actionKls"></div>

    </span>
  </div>
</template>
<script lang="ts" setup>
import './switch.scss';
import { ref, computed, watch} from 'vue'
import { useNamespace } from '@carrybrick-ui/vue-hooks';
import type {   SwitchProps } from './types'

defineOptions({
  name: 'CBSwitch'
})


const props = withDefaults(defineProps<SwitchProps>(),{
  modelValue: false,
  width: '100px',
  size: 'default',
  loading: false,
  disabled: false,

  activeText: '',
  inactiveText: '',
  activeValue: true,
  inactiveValue: false,
})

const emit = defineEmits(['update:modelValue'])

// 控制是否选中
const isChecked = ref(props.modelValue === props.activeValue);
const switchValue = ref(props.modelValue)
watch(()=>props.modelValue, ()=>{
  switchValue.value = props.modelValue
  isChecked.value = props.modelValue === props.activeValue
})

const handleSwitch = ()=>{
  if(props.disabled){
    return
  }
  isChecked.value = !isChecked.value
  switchValue.value = isChecked.value ? props.activeValue : props.inactiveValue
  emit('update:modelValue', switchValue.value)
}


const { b, m, e, is } = useNamespace('switch')
const rootKls = computed(()=>[
  b(), 
  m(props.size),
  is('disabled', props.disabled),
  is('loading', props.loading),
  is('checked', isChecked.value)
])

const inputKls = e('input')
const coreKls = e('core')
const innerKls = e('inner')
const actionKls = e('action')



</script>
