import { selectDataProps, selectCommonProps } from '../Select/props'
import { treeProps } from '../ColumnSetting/props'
import type { PropType } from 'vue'
import type { LoadFunction } from 'element-plus/es/components/tree/src/tree.type'
import type { MaybeArray, UnknownObject } from '../types/index'

export const treeSelectProps = {
  ...selectDataProps,
  ...selectCommonProps,
  ...treeProps,
  modelValue: [Array, String, Number, Boolean, Object] as PropType<
    MaybeArray<string | number | boolean | UnknownObject>
  >,
  onlySelectLeaf: Boolean,
  checkStrictly: Boolean,
  checkOnClickNode: Boolean,
  currentNodeKey: [String, Number] as PropType<string | number>,
  renderContent: Function,
  draggable: Boolean,
  lazy: Boolean,
  load: Function as PropType<LoadFunction>,
}

type TreeKeys = Array<keyof typeof treeSelectProps>

export const treeKeys = Object.keys(treeProps).concat([
  'currentNodeKey',
  'renderContent',
  'draggable',
  'lazy',
  'load',
]) as TreeKeys
