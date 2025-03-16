import type { InjectionKey} from 'vue'
import type { FormContext, FormItemContext } from './types';



export const formContextKey: InjectionKey<FormContext> = Symbol("form-context");
export const formItemContextKey: InjectionKey<FormItemContext | null> = Symbol("form-item-context");