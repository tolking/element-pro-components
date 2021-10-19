import { commonProps, selectProps } from '../Select/props'
import type { PropType } from 'vue'
import type { LoadFunction } from 'element-plus/es/components/tree/src/tree.type'
import type { MaybeArray, UnknownObject } from '../types/index'

export default {
  ...commonProps,
  ...selectProps,
  modelValue: {
    type: [Array, String, Number, Boolean, Object] as PropType<
      MaybeArray<string | number | boolean | UnknownObject>
    >,
  },
  onlySelectLeaf: Boolean,
  checkStrictly: Boolean,
  emptyText: {
    type: String,
  },
  renderAfterExpand: {
    type: Boolean,
    default: true,
  },
  defaultExpandAll: Boolean,
  expandOnClickNode: {
    type: Boolean,
    default: true,
  },
  checkOnClickNode: Boolean,
  checkDescendants: {
    type: Boolean,
    default: false,
  },
  autoExpandParent: {
    type: Boolean,
    default: true,
  },
  currentNodeKey: [String, Number] as PropType<string | number>,
  renderContent: Function,
  draggable: {
    type: Boolean,
    default: false,
  },
  allowDrag: Function,
  allowDrop: Function,
  lazy: {
    type: Boolean,
    default: false,
  },
  load: Function as PropType<LoadFunction>,
  accordion: Boolean,
  indent: {
    type: Number,
    default: 18,
  },
  iconClass: String,
}
