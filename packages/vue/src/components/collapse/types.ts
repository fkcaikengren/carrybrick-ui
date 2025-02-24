
export type ItemName = string | number
export interface CollapseProps {
  modelValue: Array<ItemName>
}

export interface CollapseEmits {
  (event: 'update:modelValue', value: Array<ItemName> ): void
}
export interface CollapseItemProps {
  name: ItemName //唯一标识
  title: string //标题
}