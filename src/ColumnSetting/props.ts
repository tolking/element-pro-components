import type { PropType } from 'vue'
import type { IComponentSize, ExternalParam } from '../types/index'
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

export default {
  ...treeProps,
  modelValue: {
    type: Array as PropType<ICrudColumns | ITableColumns>,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
  size: {
    type: String as PropType<IComponentSize>,
  },
  highlightCurrent: Boolean,
  filterNodeMethod: {
    type: Function as ExternalParam,
  },
}
