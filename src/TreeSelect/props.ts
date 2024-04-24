import { isBoolean, isString } from '../utils/index'
import {
  selectDataProps,
  selectCommonProps,
  selectEmits,
} from '../Select/props'
import { treeProps } from '../ColumnSetting/props'
import type { PropType } from 'vue'
import type { LoadFunction } from 'element-plus/es/components/tree/src/tree.type'
import type { ExternalParam, MaybeArray, UnknownObject } from '../types/index'
import type { ITreeSelectProps } from './index'

type TreeKeys = Array<keyof typeof treeSelectProps>
type SelectKeys = Array<
  Exclude<
    keyof ITreeSelectProps,
    TreeKeys[number] | 'data' | 'config' | 'onlySelectLeaf' | 'checkStrictly'
  >
>

export const treeKeys = Object.keys(treeProps).concat([
  'currentNodeKey',
  'renderContent',
  'draggable',
  'lazy',
  'load',
]) as TreeKeys

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

export const treeSelectEmits = {
  ...selectEmits,
  clear: () => true,
  'remove-tag': (value: string) => isString(value),
  'visible-change': (state: boolean) => isBoolean(state),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'node-click': (item?: ExternalParam, node?: unknown, self?: unknown) => true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'check-change': (item?: ExternalParam, node?: unknown, self?: unknown) =>
    true,
}

export const selectKeys = Object.keys(treeSelectProps).filter(
  (key) =>
    ![
      ...treeKeys,
      'data',
      'config',
      'onlySelectLeaf',
      'checkStrictly',
    ].includes(key),
) as SelectKeys
