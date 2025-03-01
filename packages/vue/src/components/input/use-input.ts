import { computed, ref, watch  } from 'vue';
import { useNamespace } from '@carrybrick-ui/vue-hooks';
import { View as ViewIcon, Hide as HideIcon} from '@element-plus/icons-vue'
import type { Ref } from 'vue';
import { InputProps , InputType} from './types';


export const usePassword = (props : InputProps)=>{
  const passwordVisible = ref(false)
  const inputType = ref<InputType | undefined>(props.type)
  watch(()=> props.type, ()=>{
    inputType.value = props.type
  })
  const handlePasswordVisible = () => {
    passwordVisible.value = !passwordVisible.value
    inputType.value =  passwordVisible.value ? 'text' : 'password'
  }

  const pwdIcon = computed(()=> passwordVisible.value ? HideIcon : ViewIcon)
  return {
    inputType,
    handlePasswordVisible,
    pwdIcon
  }
}




export const useKls = (props: InputProps, inputType: Ref<InputType | undefined>, isFocused: Ref<boolean>)=>{
  const { b, e, m, is } = useNamespace('input')

  const rootKls = computed(()=>[
    b(), 
    m(props.size === 'default' ? '' : props.size),
    is('clearable', props.clearable), 
    is('disabled', props.disabled),
  ])

  const wrapKls = computed(()=> [e('wrap'), is('focused', isFocused.value)])
  const innerKls = computed(()=> [e('inner')])
  const prefixKls = e('prefix')
  const suffixKls = e('suffix')
  const prefixIconKls = e('prefix-icon')
  const suffixIconKls = e('suffix-icon')
  const clearIconKls = e('clear-icon')

  return {
    rootKls,
    wrapKls,
    innerKls,
    prefixKls,
    suffixKls,
    prefixIconKls,
    suffixIconKls,
    clearIconKls
  }

}

