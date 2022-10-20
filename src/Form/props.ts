import { formProps as elFormProps, rowProps } from 'element-plus'
import {
  objectOmit,
  isObject,
  isFunction,
  isBoolean,
  isUndefined,
  isArray,
} from '../utils/index'
import type { Component, PropType } from 'vue'
import type { UnknownObject } from '../types/index'
import type {
  IFormColumns,
  IFormMenuColumns,
  FormColumn,
  InvalidFields,
} from './type'

type FormKeys = Array<keyof typeof _formProps>

const _formProps = objectOmit(elFormProps, 'model')
const _rowProps = objectOmit(rowProps, 'tag')

export const formKeys = Object.keys(_formProps) as FormKeys

export const formProps = {
  ..._formProps,
  ..._rowProps,
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  columns: Array as PropType<IFormColumns>,
  menu: Object as PropType<IFormMenuColumns>,
}

export const formMenuProps = {
  menu: Object as PropType<IFormMenuColumns>,
  gutter: _rowProps['gutter'],
  loading: Boolean,
  submitForm: {
    type: Function as PropType<() => void>,
    required: true,
  },
  resetForm: {
    type: Function as PropType<(reset?: boolean) => void>,
    required: true,
  },
}

export const formItemProps = {
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  item: {
    type: Object as PropType<FormColumn>,
    default: () => ({}),
  },
  prop: {
    type: String,
    default: '',
  },
  indexes: {
    type: Array as PropType<number[]>,
    default: undefined,
  },
  inline: Boolean,
}

export const formComponentProps = {
  modelValue: null,
  is: {
    type: [String, Object] as PropType<string | Component>,
    default: 'span',
  },
  slots: [Function, Object, String],
}

export const formItemEmits = {
  'update:modelValue': (value: UnknownObject | UnknownObject[]) =>
    isObject(value) || isArray(value),
}

export const formEmits = {
  ...formItemEmits,
  submit: (done: () => void, isValid: boolean, invalidFields?: InvalidFields) =>
    isFunction(done) &&
    isBoolean(isValid) &&
    (isObject(invalidFields) || isUndefined(invalidFields)),
  reset: () => true,
}
