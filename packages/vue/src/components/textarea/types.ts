import type { CSSProperties } from "vue"


export type InputType = 'text' | 'password'
export type AutoSizeObject = { minRows: number, maxRows: number }

export interface TextareaProps {
  placeholder?: string
  modelValue?: string
  disabled?: boolean
  rows?: number
  autosize?: boolean | AutoSizeObject
  textareaStyle?: CSSProperties
}


export interface TextareaEmits {
  (e:'update:modelValue', value:string): void
}