import { commonProps, selectProps } from '../Select/props'
import { treeProps } from '../ColumnSetting/props'
import type { PropType } from 'vue'
import type { LoadFunction } from 'element-plus/es/components/tree/src/tree.type'
import type { MaybeArray, UnknownObject } from '../types/index'

export default {
  ...commonProps,
  ...selectProps,
  ...treeProps,
  modelValue: {
    type: [Array, String, Number, Boolean, Object] as PropType<
      MaybeArray<string | number | boolean | UnknownObject>
    >,
  },
  onlySelectLeaf: Boolean,
  checkStrictly: Boolean,
  checkOnClickNode: Boolean,
  currentNodeKey: [String, Number] as PropType<string | number>,
  renderContent: Function,
  draggable: {
    type: Boolean,
    default: false,
  },
  lazy: {
    type: Boolean,
    default: false,
  },
  load: Function as PropType<LoadFunction>,
}
