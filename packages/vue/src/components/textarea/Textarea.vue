<template>
  <div :class="rootKls">
    <div :class="wrapKls" ref="wrapRef">
      <textarea ref="textareaRef"
        :placeholder="placeholder" 
        :class="innerKls"
        :rows="rows"
        :style="realTextareaStyle"
        :value="inputValue"
        @input="handleChange"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import './textarea.scss';
import { ref, computed, watch, inject} from 'vue'
import { useInputFocus } from '@carrybrick-ui/vue-hooks';
import { useKls, useCalculation } from './use-textarea'
import type { TextareaProps, TextareaEmits } from './types'
import type { Ref } from 'vue'


import { formItemContextKey } from '../form/constant';

defineOptions({
  name: 'CBTextarea'
})


const props = withDefaults(defineProps<TextareaProps>(),{
  placeholder: '',
  modelValue: '',
  disabled: false,
  autosize: false,
  rows: 2
})

const emit = defineEmits<TextareaEmits>()


const realTextareaStyle = computed(()=>{
  console.log({
    ...props.textareaStyle,
    ...calcTextareaStyle.value
  });
  return {
    ...props.textareaStyle,
    ...calcTextareaStyle.value
  }
})

const formItemContext = inject(formItemContextKey)

const {
  wrapRef,
  inputRef: textareaRef,
  focus,
  blur,
  isFocused,
  isError
} = useInputFocus(formItemContext)



const calcTextareaStyle = useCalculation(props, textareaRef as Ref<HTMLTextAreaElement>)


const {rootKls,
    wrapKls,
    innerKls
} =  useKls(props, isFocused, isError )


// 双向绑定
const inputValue = ref(props.modelValue)
watch(()=>props.modelValue, ()=>{
  inputValue.value = props.modelValue
})
const handleChange = (evt: Event)=>{
  const { value } = evt.target as HTMLInputElement
  inputValue.value = value;
  emit('update:modelValue', inputValue.value)
}


defineExpose({
  wrapRef,
  textareaRef,
  focus,
  blur,
})

</script>