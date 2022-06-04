import { formProps as elFormProps, rowProps } from 'element-plus'
import { objectOmit } from '../utils/index'
import type { Component, PropType } from 'vue'
import type { IFormColumns, IFormMenuColumns, FormColumn } from './type'

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
