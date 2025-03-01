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
import { ref, computed, shallowRef, watch} from 'vue'
import { useInputFocus } from '@carrybrick-ui/vue-hooks'
import { useNamespace } from '@carrybrick-ui/vue-hooks';
import type {  TextareaProps, TextareaEmits, AutoSizeObject } from './types'
import { calcTextareaHeight } from './utils';
import { isObject } from '../../utils';

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



const {
  wrapRef,
  inputRef: textareaRef,
  focus,
  blur,
  isFocused
} = useInputFocus()


const calcTextareaStyle = shallowRef()

const resizeTextarea = ()=>{
  if(props.autosize){
    if(isObject(props.autosize)) {
      const autosize = props.autosize as AutoSizeObject
      calcTextareaStyle.value = calcTextareaHeight(textareaRef.value as HTMLTextAreaElement, autosize.minRows, autosize.maxRows)
    }else{
      calcTextareaStyle.value = calcTextareaHeight(textareaRef.value as HTMLTextAreaElement, props.rows)
    }
  }
}

watch(()=>props.modelValue, ()=>{
  resizeTextarea()
})


const { b, e, is } = useNamespace('textarea')
const rootKls = computed(()=>[
  b(), 
  is('disabled', props.disabled),
])
const wrapKls = computed(()=> [e('wrap'), is('focused', isFocused.value)])
const innerKls = computed(()=> [e('inner')])




const inputValue = ref(props.modelValue)
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