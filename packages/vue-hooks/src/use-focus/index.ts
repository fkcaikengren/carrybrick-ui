import { ref, shallowRef } from 'vue'
import { useEventListener } from '@vueuse/core'
import type {Ref} from 'vue';

export interface FormItemContext {
  prop: string;
  isError: Ref<boolean>;
  setIsError: (err:boolean) => void;
  validate: (trigger?:string)=> Promise<Record<string, any>>;
}

export const useInputFocus = (formItemContext?:FormItemContext|null )=>{

  const wrapRef = shallowRef<HTMLElement>()
  const inputRef = shallowRef<HTMLElement>()
  const focus = () => inputRef.value?.focus() 
  const blur = () => inputRef.value?.blur()

  const isFocused = ref(false) //wrapRef和inputRef任意一个聚焦
  const isError = formItemContext?.isError ?? ref(false) //是否有错误

  useEventListener(inputRef, 'focus', (evt: Event)=> {
    isFocused.value = true;
  }, true)
  useEventListener(inputRef, 'blur', (evt: Event)=> {
    isFocused.value = false;
    formItemContext?.validate('blur')
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