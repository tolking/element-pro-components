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
  GroupFormType,
  GroupFormColumn,
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
  prefix: {
    type: String,
    default: '',
  },
  indexes: {
    type: Array as PropType<number[]>,
    default: undefined,
  },
}

export const formComponentProps = {
  modelValue: null,
  is: {
    type: [String, Object] as PropType<string | Component>,
    default: 'span',
  },
  slots: [Function, Object, String],
}

const _formItemProps = objectPick(formItemProps, 'prefix', 'indexes')
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
  modelValue: [Object, Array] as PropType<
    UnknownObject | UnknownObject[] | undefined
  >,
  columns: Array as PropType<IFormColumns>,
  menu: Object as PropType<IFormMenuColumns>,
  array: Boolean,
  max: Number,
}

export const formListProps = {
  ...formProps,
  type: String as PropType<'array' | GroupFormType>,
}

export const groupFormProps = {
  ...formProps,
  columns: Array as PropType<Array<GroupFormColumn & UnknownObject>>,
}

export const formItemEmits = {
  'update:modelValue': (value: UnknownObject) => isObject(value),
}

export const arrayFormEmits = {
  'update:modelValue': (value: UnknownObject[]) => isArray(value),
  'add-item': (indexes: number[]) => isArray(indexes),
  'remove-item': (indexes: number[]) => isArray(indexes),
}

export const formEmits = {
  ...arrayFormEmits,
  'update:modelValue': (value: ExternalParam) =>
    isObject(value) || isArray(value) || isUndefined(value),
  submit: (done: () => void, isValid: boolean, invalidFields?: InvalidFields) =>
    isFunction(done) &&
    isBoolean(isValid) &&
    (isObject(invalidFields) || isUndefined(invalidFields)),
  reset: () => true,
}
