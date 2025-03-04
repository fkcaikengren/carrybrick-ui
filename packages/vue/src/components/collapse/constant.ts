import type {Ref, InjectionKey} from 'vue'
import type { ItemName } from './types'
// 上下文

export interface CollapseContext {
  activeNames: Ref<ItemName[] | ItemName>;
  handleClick: (name: ItemName )=>void;
}

export const CollapseContextKey: InjectionKey<CollapseContext> = Symbol('collapse')