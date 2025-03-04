
export type ItemName = string | number
export interface CollapseProps {
  modelValue: Array<ItemName> | ItemName
  accordion?: boolean
}
export interface CollapseItemProps {
  name: ItemName //唯一标识
  title: string //标题
}