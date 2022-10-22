import { formProps as elFormProps, rowProps } from 'element-plus'
import {
  objectOmit,
  objectPick,
  isArray,
  isObject,
  isFunction,
  isBoolean,
  isUndefined,
} from '../utils/index'
import type { Component, PropType } from 'vue'
import type { ExternalParam, UnknownObject } from '../types/index'
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

const _formItemProps = objectPick(formItemProps, 'prop', 'indexes', 'inline')
export const arrayFormProps = {
  ..._formItemProps,
  modelValue: {
    type: Array as PropType<UnknownObject[]>,
    default: () => [],
  },
  columns: Array as PropType<IFormColumns>,
  max: Number,
}

export const formProps = {
  ..._formProps,
  ..._rowProps,
  ..._formItemProps,
  modelValue: [Object, Array],
  columns: Array as PropType<IFormColumns>,
  menu: Object as PropType<IFormMenuColumns>,
  type: String as PropType<'default' | 'array'>,
  max: Number, // type: 'array'
}

export const formItemEmits = {
  'update:modelValue': (value: UnknownObject) => isObject(value),
}

export const arrayFormEmits = {
  'update:modelValue': (value: UnknownObject[]) => isArray(value),
  add: (indexes: number[]) => isArray(indexes),
  remove: (indexes: number[]) => isArray(indexes),
}

export const formEmits = {
  ...arrayFormEmits,
  'update:modelValue': (value: ExternalParam) =>
    isObject(value) || isArray(value),
  submit: (done: () => void, isValid: boolean, invalidFields?: InvalidFields) =>
    isFunction(done) &&
    isBoolean(isValid) &&
    (isObject(invalidFields) || isUndefined(invalidFields)),
  reset: () => true,
}
