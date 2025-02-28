import type { CSSProperties } from "vue"
import type { ComponentSize } from "../../types"


export type InputType = 'text' | 'password'

export interface InputProps {
  placeholder?: string
  type? : InputType
  modelValue?: string
  clearable?: boolean
  disabled?: boolean
  size? : ComponentSize,
  inputStyle?: CSSProperties | undefined
  prefixIcon?: string
  suffixIcon?: string
  tabindex?: number|string
}


export interface InputEmits {
  (e:'update:modelValue', value:string): void
}