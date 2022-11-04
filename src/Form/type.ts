import {
  formProps,
  arrayFormProps,
  formListProps,
  groupFormProps,
  formItemProps,
  formEmits,
  formItemEmits,
  arrayFormEmits,
  tabsFormEmits,
} from './props'
import type { Component, Slots } from 'vue'
import type {
  ButtonProps,
  ColProps,
  CollapseModelValue,
  FormItemProps,
  TabPaneName,
} from 'element-plus'
import type {
  IDefineProps,
  IDefineEmits,
  UnknownObject,
  MaybeArray,
  ExternalParam,
  Mutable,
  ColumnProp,
  FormColumnChildren,
} from '../types/index'

export interface InvalidFields {
  [prop: string]: { message: string; field: string }[]
}

export interface FormColumn<T = ExternalParam>
  extends Mutable<Partial<Omit<FormItemProps, 'prop'>>>,
    Partial<Omit<ColProps, 'tag'>> {
  /** component name */
  component?: string | Component
  /** props for component */
  props?: UnknownObject
  /** the type of sub-form */
  type?: 'array'
  /** sub-form */
  children?: IFormColumns<FormColumnChildren<T>>
  /** max number of sub-form */
  max?: number
  /** keys of model that passed to form */
  prop: ColumnProp<T>
}

export type GroupFormType = 'group' | 'tabs' | 'collapse'

export interface GroupFormColumn<T = ExternalParam> {
  /** the type of group-form */
  type: GroupFormType
  /** keys of model that passed to form */
  prop?: ColumnProp<T>
  /** the title of group-form */
  label?: string
  /** group-form */
  children?: IFormColumns<T>
}

/** Form Columns Option */
export type IFormColumns<T = ExternalParam> = Array<
  (FormColumn<T> | GroupFormColumn<T>) & UnknownObject
>

/** Form Menu Option */
export interface FormMenu {
  /** show submit button */
  submit?: boolean
  /** text of submit button */
  submitText?: string
  /** props of submit button */
  submitProps?: Partial<ButtonProps>
  /** show reset button */
  reset?: boolean
  /** text of reset button */
  resetText?: string
  /** props of reset button */
  resetProps?: Partial<ButtonProps>
}

/** Form Menu Option */
export type IFormMenuColumns = FormMenu

export type IFormSubmit = (
  done: () => void,
  isValid: boolean,
  invalidFields?: InvalidFields
) => void

export interface IFormValidateCallback {
  (isValid: boolean, invalidFields?: InvalidFields): void
}

export interface IFormValidateFieldCallback {
  (message?: string, invalidFields?: InvalidFields): void
}

/** Form Expose Methods */
export interface IFormExpose {
  /** validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted */
  validate: (callback?: IFormValidateCallback) => Promise<boolean>
  /** reset all the fields and remove validation result */
  resetFields: () => void
  /** Scroll to the specified form field */
  scrollToField: (prop: string) => void
  /** clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared */
  clearValidate: (props?: MaybeArray<string>) => void
  /** validate one or several form items */
  validateField: (
    props: MaybeArray<string>,
    cb: IFormValidateFieldCallback
  ) => void
}

export interface IFormContext {
  props: IFormProps
  slots: Readonly<Slots>
  add: (indexes: number[]) => void
  remove: (indexes: number[]) => void
  tabsChange: (name: TabPaneName) => void
  collapseChange: (active: CollapseModelValue) => void
}

export type IFormProps = IDefineProps<typeof formProps>
export type IArrayFormProps = IDefineProps<typeof arrayFormProps>
export type IFormListProps = IDefineProps<typeof formListProps>
export type IGroupFormProps = IDefineProps<typeof groupFormProps>
export type IFormItemProps = IDefineProps<typeof formItemProps>
export type IFormEmits = IDefineEmits<typeof formEmits>
export type IFormItemEmits = IDefineEmits<typeof formItemEmits>
export type IArrayFormEmits = IDefineEmits<typeof arrayFormEmits>
export type ITabsFormEmits = IDefineEmits<typeof tabsFormEmits>

/**
 * Type helper to make it easier to define columns
 * @param columns the columns of Form
 */
export function defineFormColumns<T = ExternalParam>(
  columns: IFormColumns<T>
): IFormColumns<T> {
  return columns
}

/**
 * Type helper to make it easier to define menu columns
 * @param columns the columns of Form menu
 */
export function defineFormMenuColumns(
  columns: IFormMenuColumns
): IFormMenuColumns {
  return columns
}

/**
 * Type helper to make it easier to define submit function
 * @param fun submit function
 */
export function defineFormSubmit(fun: IFormSubmit): IFormSubmit {
  return fun
}
