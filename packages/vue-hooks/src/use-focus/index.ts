import { ref, shallowRef } from 'vue'
import { useEventListener } from '@vueuse/core'
export const useInputFocus = ()=>{

  const wrapRef = shallowRef<HTMLElement>()
  const inputRef = shallowRef<HTMLElement>()
  const focus = () => inputRef.value?.focus() 
  const blur = () => inputRef.value?.blur()

  const isFocused = ref(false) //wrapRef和inputRef任意一个聚焦

  useEventListener(inputRef, 'focus', (evt: Event)=> {
    isFocused.value = true;
  }, true)
  useEventListener(inputRef, 'blur', (evt: Event)=> {
    isFocused.value = false;
  }, true)
  useEventListener(wrapRef, 'click', (evt: Event)=>{
    inputRef.value?.focus()
  }, true)
  return {
    wrapRef,
    inputRef,
    focus,
    blur,
    isFocused
  }
}