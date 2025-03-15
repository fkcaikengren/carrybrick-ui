import { ref, shallowRef } from 'vue'
import { useEventListener } from '@vueuse/core'


interface FormItemContext {
  prop: string;
  validate: (trigger?:string)=> Promise<Record<string, any>>;
}


export const useInputFocus = (formItemContext?:FormItemContext|null )=>{

  const wrapRef = shallowRef<HTMLElement>()
  const inputRef = shallowRef<HTMLElement>()
  const focus = () => inputRef.value?.focus() 
  const blur = () => inputRef.value?.blur()

  const isFocused = ref(false) //wrapRef和inputRef任意一个聚焦
  const isError = ref(false) //是否有错误

  useEventListener(inputRef, 'focus', (evt: Event)=> {
    isFocused.value = true;
  }, true)
  useEventListener(inputRef, 'blur', (evt: Event)=> {
    isFocused.value = false;
    formItemContext?.validate('blur').then((fields)=>{
      if(fields){
        isError.value = true
      }else{
        isError.value = false
      }
    });
  }, true)
  useEventListener(wrapRef, 'click', (evt: Event)=>{
    inputRef.value?.focus()
  }, true)
  return {
    wrapRef,
    inputRef,
    focus,
    blur,
    isFocused,
    isError
  }
}