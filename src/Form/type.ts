import {
  formProps,
  arrayFormProps,
  formListProps,
  groupFormProps,
  formItemProps,
  formComponentProps,
  formEmits,
  formItemEmits,
  arrayFormEmits,
  tabsFormEmits,
  stepsFormEmits,
} from './props'
import type { Ref, Slots } from 'vue'
import type {
  ButtonProps,
  ColProps,
  CollapseModelValue,
  FormItemProps,
  TabPaneName,
  TabPaneProps,
  CollapseItemProps,
  StepProps,
  FormInstance,
} from 'element-plus'
import type {
  IDefineProps,
  IDefineEmits,
  UnknownObject,
  ExternalParam,
  Mutable,
  ColumnProp,
  FormColumnChildren,
  ColumnComponent,
  ColumnCommonProp,
} from '../types/index'

export interface InvalidFields {
  [prop: string]: { message: string; field: string }[]
}

export interface FormColumn<T = ExternalParam>
  extends Mutable<Partial<Omit<FormItemProps, 'prop'>>>,
    Partial<Omit<ColProps, 'tag'>> {
  /** component name */
  component?: ColumnComponent | (string & NonNullable<unknown>)
  /** props for component */
  props?: UnknownObject & ColumnCommonProp
  /** the type of sub-form */
  type?: 'array'
  /** sub-form */
  children?: IFormColumns<FormColumnChildren<T>>
  /** max number of sub-form */
  max?: number
  /** keys of model that passed to form */
  prop: ColumnProp<T>
  /** whether to display the current column */
  show?: boolean
  /**
   * @deprecated The `modelKey` attribute will be removed in the next major version, please use `models` instead
   *
   * bind v-model arguments, default modelValue
   */
  modelKey?: string | [string, string]
  /** bind v-model arguments, support binding multiple arguments */
  models?: Array<{
    /** keys of model that passed to form */
    prop: string
    /** bind v-model arguments */
    key: string
    /** bind v-model event, default `onUpdate:${key}` */
    event?: string
  }>
}

export type GroupFormType = 'group' | 'tabs' | 'collapse' | 'steps'

export interface GroupFormColumn<T = ExternalParam>
  extends Partial<Omit<TabPaneProps, 'label' | 'name'>>,
    Partial<Omit<CollapseItemProps, 'title' | 'name'>>,
    Partial<Omit<StepProps, 'title'>> {
  /** the type of group-form */
  type: GroupFormType
  /** keys of model that passed to form */
  prop?: ColumnProp<T>
  /** the title of group-form */
  label?: string
  /** group-form */
  children?: IFormColumns<T>
  /** whether to display the current column */
  show?: boolean
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
  /** text of prev button */
  prevText?: string
  /** props of prev button */
  prevProps?: Partial<ButtonProps>
  /** text of next button */
  nextText?: string
  /** props of next button */
  nextProps?: Partial<ButtonProps>
}

/** Form Menu Option */
export type IFormMenuColumns = FormMenu

export type IFormSubmit = (
  done: () => void,
  isValid: boolean,
  invalidFields?: InvalidFields,
) => void

export interface IFormValidateCallback {
  (isValid: boolean, invalidFields?: InvalidFields): void
}

export interface IFormValidateFieldCallback {
  (message?: string, invalidFields?: InvalidFields): void
}

/** Form Expose Methods */
export type IFormExpose = FormInstance

export interface UseFormProvideConfig {
  props: IFormProps
  emit: IFormEmits
  slots: Readonly<Slots>
  formRef: Ref<FormInstance>
  /** disabled submit */
  disabled: Ref<boolean>
}

export interface UseFormInjectEmitsCallback {
  addItem: (indexes: number[]) => void
  removeItem: (indexes: number[]) => void
  tabsChange: (name: TabPaneName) => void
  collapseChange: (active: CollapseModelValue) => void
  stepChange: (active: TabPaneName) => void
}

export type IFormContext = UseFormProvideConfig & UseFormInjectEmitsCallback
export type IFormProps = IDefineProps<typeof formProps>
export type IArrayFormProps = IDefineProps<typeof arrayFormProps>
export type IFormListProps = IDefineProps<typeof formListProps>
export type IGroupFormProps = IDefineProps<typeof groupFormProps>
export type IFormItemProps = IDefineProps<typeof formItemProps>
export type IFormComponentProps = IDefineProps<typeof formComponentProps>
export type IFormEmits = IDefineEmits<typeof formEmits>
export type IFormItemEmits = IDefineEmits<typeof formItemEmits>
export type IArrayFormEmits = IDefineEmits<typeof arrayFormEmits>
export type ITabsFormEmits = IDefineEmits<typeof tabsFormEmits>
export type IStepsFormEmits = IDefineEmits<typeof stepsFormEmits>

/**
 * Type helper to make it easier to define columns
 * @param columns the columns of Form
 */
export function defineFormColumns<T = ExternalParam>(
  columns: IFormColumns<T>,
): IFormColumns<T> {
  return columns
}

/**
 * Type helper to make it easier to define menu columns
 * @param columns the columns of Form menu
 */
export function defineFormMenuColumns(
  columns: IFormMenuColumns,
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
