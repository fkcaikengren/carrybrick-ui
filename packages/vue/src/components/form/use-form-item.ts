

import {
  inject,
} from 'vue'
import { formContextKey, formItemContextKey } from './constant'

export const useFormItem = () => {
  const form = inject(formContextKey, undefined)
  const formItem = inject(formItemContextKey, undefined)
  return {
    form,
    formItem,
  }
}