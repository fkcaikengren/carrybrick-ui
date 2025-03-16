import type {Ref} from 'vue';
export type LabelPosition = 'left' | 'right' | 'top';
export declare type RuleType = 'string' | 'number' | 'boolean' | 'method' | 'regexp' | 'integer' | 'float' | 'array' | 'object' | 'enum' | 'date' | 'url' | 'hex' | 'email' | 'pattern' | 'any';
export interface FormRule {
  type?: RuleType;
  required?: boolean;
  pattern?: RegExp | string;
  min?: number;
  max?: number;
  len?: number;
  message?: string;
  trigger?: string;
  validator?: (rule: any, value: any) => boolean;
}

// 提供一个类型，用于描述表单的规则
export type FormRules<T extends object> = {
  [K in keyof T]: FormRule[];
}


export interface FormProps {
  model: Record<string, any>;
  rules?: FormRules<any>;
  labelWidth?: string;
  labelPosition?: LabelPosition;
  size?: string;
}

export interface FormContext extends FormProps{
  addField: (field: FormItemContext) => void;
  removeField: (field: FormItemContext) => void;
  resetFields: () => void;
}



// Form 实例，暴露方法
export interface FormInstance {
  validate: ()=> Promise<{valid:boolean, fields:Record<string, any>}>;
}


/************** FormItem types ************************/ 
export interface FormItemProps{
  prop?: string;
  label?: string;
  labelWidth?: string;
  labelPosition?: LabelPosition;
  size?: string;
}


export interface FormItemContext {
  prop: string;
  isError: Ref<boolean>;
  setIsError: (err:boolean) => void;
  validate: (trigger?:string)=> Promise<Record<string, any>>;
  clearValidate: () => void;
  resetField: () => void;
}



// FormItem 实例，暴露方法
export interface FormItemInstance {
  
}
