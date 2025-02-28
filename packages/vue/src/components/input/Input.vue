<template>
  <div :class="rootKls">
    <div :class="wrapKls" ref="wrapRef">
      <div :class="prefixKls">
        <slot name="prefix">
          <CBIcon :class="prefixIconKls" v-if="prefixIcon">
            <component :is="prefixIcon" />
          </CBIcon>
        </slot>
      </div>
      
      <input ref="inputRef"
        :type="inputType" 
        :placeholder="placeholder" 
        :class="innerKls"
        :value="inputValue"
        @input="handleChange"
      />
      <div :class="suffixKls">
        <slot name="suffix">
          <CBIcon v-if="clearable" v-show="inputValue.length>0" :class="[suffixIconKls, clearIconKls]" @click="handleClearInput">
            <CircleClose />
          </CBIcon>
          <CBIcon v-if="type==='password'" :class="suffixIconKls" @click="handlePasswordVisible">
            <component :is="pwdIcon" />
          </CBIcon>
          <CBIcon v-if="suffixIcon" :class="suffixIconKls">
            <component :is="suffixIcon" />
          </CBIcon>
          
        </slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import './input.scss';
import { ref} from 'vue'
import CBIcon from '../icon/Icon.vue'
import { CircleClose } from '@element-plus/icons-vue'
import type {  InputProps, InputEmits } from './types'
import { useKls, usePassword, useFocus } from './use-input';


defineOptions({
  name: 'CBInput'
})


const props = withDefaults(defineProps<InputProps>(),{
  placeholder: '',
  type: 'text',
  modelValue: '',
  clearable: false,
  disabled: false,
  size: 'default',
  tabindex: 0
})

const emit = defineEmits<InputEmits>()


const {
  inputType,
  handlePasswordVisible,
  pwdIcon
} = usePassword(props)

const {
  wrapRef,
  inputRef,
  focus,
  blur,
  isFocused
} = useFocus()

const {
  rootKls,
  wrapKls,
  innerKls,
  prefixKls,
  suffixKls,
  prefixIconKls,
  suffixIconKls,
  clearIconKls
} = useKls(props, inputType, isFocused)

const inputValue = ref(props.modelValue)
const handleChange = (evt: Event)=>{
  // console.log(evt);
  const { value } = evt.target as HTMLInputElement
  inputValue.value = value;
  emit('update:modelValue', inputValue.value)
}

const handleClearInput = (evt: Event)=>{
  inputValue.value = ''
  emit('update:modelValue', inputValue.value)
}



defineExpose({
  wrapRef,
  inputRef,
  focus,
  blur,
})

</script>