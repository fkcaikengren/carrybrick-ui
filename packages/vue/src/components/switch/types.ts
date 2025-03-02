import { ComponentSize } from "../../types"


type SwitchValue = string | boolean | number

export interface SwitchProps {
  modelValue?:  SwitchValue
  width?: number | string
  size?: ComponentSize
  disabled?: boolean
  loading?: boolean
  activeText?: string
  inactiveText?: string
  activeValue?: SwitchValue
  inactiveValue?: SwitchValue
}
