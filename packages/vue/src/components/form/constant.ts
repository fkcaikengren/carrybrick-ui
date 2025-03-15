import type { InjectionKey} from 'vue'
import type { FormContext, FormItemContext } from './types';



export const formKey: InjectionKey<FormContext> = Symbol("form");
export const formItemKey: InjectionKey<FormItemContext | null> = Symbol("form-item");