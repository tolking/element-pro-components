import {
  isArray,
  isBoolean,
  isString,
  isNumber,
  isObject,
} from '../utils/index'
import type { Component, PropType } from 'vue'
import type { ComponentSize } from 'element-plus'
import type { SelectConfig, SelectDataItem } from './type'

export const selectDataProps = {
  data: {
    type: Array as PropType<SelectDataItem[]>,
    default: () => [],
  },
  config: {
    type: Object as PropType<SelectConfig>,
    default: () => ({}),
  },
}

export const selectCommonProps = {
  name: String,
  id: String,
  autocomplete: String,
  automaticDropdown: Boolean,
  size: String as PropType<ComponentSize>,
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0,
  },
  placeholder: String,
  defaultFirstOption: Boolean,
  reserveKeyword: Boolean,
  valueKey: String,
  collapseTags: Boolean,
  teleported: {
    type: Boolean,
    default: true,
  },
  clearIcon: [String, Object] as PropType<string | Component>,
  fitInputWidth: Boolean,
  suffixIcon: [String, Object] as PropType<string | Component>,
  tagType: {
    type: String as PropType<'success' | 'info' | 'warning' | 'danger'>,
    default: 'info',
  },
  effect: {
    type: String as PropType<'light' | 'dark' | string>,
    default: 'light',
  },
  collapseTagsTooltip: Boolean,
  persistent: {
    type: Boolean,
    default: true,
  },
}

export const selectProps = {
  ...selectDataProps,
  ...selectCommonProps,
  modelValue: [Array, String, Number, Boolean, Object],
  filterMethod: Function,
  popperClass: String,
}

export const selectEmits = {
  'update:modelValue': (
    value?: Array<unknown> | string | number | boolean | object
  ) =>
    isArray(value) ||
    isString(value) ||
    isNumber(value) ||
    isBoolean(value) ||
    isObject(value),
}
