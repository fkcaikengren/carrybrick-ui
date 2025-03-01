import { ComponentSize } from "../../types"


type SwitchValue = string | boolean | number

export interface SwitchProps {
  modelValue?: SwitchValue
  width?: number
  size?: ComponentSize
  disabled?: boolean
  loading?: boolean
  activeText?: string
  inactiveText?: string
}


export interface SwitchEmits {
  (e:'update:modelValue', value: SwitchValue): void
}