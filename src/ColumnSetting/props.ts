import { isArray } from '../utils/index'
import type { PropType } from 'vue'
import type { ComponentSize } from 'element-plus'
import type { ExternalParam } from '../types/index'
import type { ICrudColumns } from '../Crud/index'
import type { ITableColumns } from '../Table/index'

export const treeProps = {
  emptyText: String,
  renderAfterExpand: Boolean,
  expandOnClickNode: Boolean,
  defaultExpandAll: Boolean,
  checkOnClickNode: Boolean,
  autoExpandParent: Boolean,
  allowDrag: Function,
  allowDrop: Function,
  accordion: Boolean,
  indent: Number,
  iconClass: String,
}

export const columnSettingProps = {
  ...treeProps,
  modelValue: {
    type: Array as PropType<ICrudColumns | ITableColumns>,
    default: () => [],
  },
  trigger: {
    type: String as PropType<'hover' | 'click' | 'contextmenu'>,
    default: 'hover',
  },
  placement: {
    type: String as PropType<
      'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
    >,
    default: 'bottom',
  },
  size: String as PropType<ComponentSize>,
  highlightCurrent: Boolean,
  filterNodeMethod: Function as ExternalParam,
}

export const columnSettingEmits = {
  'update:modelValue': (value: ICrudColumns | ITableColumns) => isArray(value),
}
