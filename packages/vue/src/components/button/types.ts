
export type BtnSize = 'large' | 'default' | 'small';
export type BtnType = 'primary' | 'success' | 'warning' | 'danger' | 'info';


export interface ButtonProps {
  size?: BtnSize,
  type?: BtnType,
  plain?: boolean,
  text?: boolean,
  round?: boolean,
  disabled?: boolean,
  loading?: boolean,
  icon?: string
}
