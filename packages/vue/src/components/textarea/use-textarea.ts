
import { computed, shallowRef, watch  } from 'vue';
import { useNamespace } from '@carrybrick-ui/vue-hooks';
import type { Ref } from 'vue';
import { calcTextareaHeight } from './utils';
import { isObject } from '../../utils';
import {  TextareaProps, AutoSizeObject} from './types';

export const useKls = (props: TextareaProps, isFocused: Ref<boolean>, isError: Ref<boolean>)=> {
  const { b, e, is } = useNamespace('textarea')
  const rootKls = computed(()=>[
    b(), 
    is('disabled', props.disabled),
  ])
  const wrapKls = computed(()=> [e('wrap'), is('focused', isFocused.value), is('error', isError.value)])
  const innerKls = computed(()=> [e('inner')])

  return {
    rootKls,
    wrapKls,
    innerKls
  }
}

export const useCalculation = (props: TextareaProps, textareaRef: Ref<HTMLTextAreaElement>)=>{
  const calcTextareaStyle = shallowRef()

  const resizeTextarea = ()=>{
    if(props.autosize){
      if(isObject(props.autosize)) {
        const autosize = props.autosize as AutoSizeObject
        calcTextareaStyle.value = calcTextareaHeight(textareaRef.value, autosize.minRows, autosize.maxRows)
      }else{
        calcTextareaStyle.value = calcTextareaHeight(textareaRef.value , props.rows)
      }
    }
  }

  watch(()=>props.modelValue, ()=>{
    resizeTextarea()
  })

  return calcTextareaStyle

}