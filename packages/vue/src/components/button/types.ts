import { ComponentSize } from "../../types";

export type BtnType = 'primary' | 'success' | 'warning' | 'danger' | 'info';


export interface ButtonProps {
  size?: ComponentSize,
  type?: BtnType,
  plain?: boolean,
  text?: boolean,
  round?: boolean,
  disabled?: boolean,
  loading?: boolean,
  icon?: string
}
