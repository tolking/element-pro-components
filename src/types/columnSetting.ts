import type { ITableColumns, IComponentSize, UnknownObject } from './index'
import type {
  AllowDragFunction,
  AllowDropFunction,
  FilterNodeMethodFunction,
} from 'element-plus/lib/components/tree/src/tree.type'

export interface IColumnSetting<T = UnknownObject> {
  modelValue: ITableColumns<T>
  trigger?: 'hover' | 'click' | 'contextmenu'
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
  size?: IComponentSize
  emptyText?: string
  renderAfterExpand?: boolean
  expandOnClickNode?: boolean
  defaultExpandAll?: boolean
  checkOnClickNode?: boolean
  checkDescendants?: boolean
  autoExpandParent?: boolean
  allowDrag?: AllowDragFunction
  allowDrop?: AllowDropFunction
  highlightCurrent?: boolean
  filterNodeMethod?: FilterNodeMethodFunction
  accordion?: boolean
  indent?: number
  iconClass?: string
}
