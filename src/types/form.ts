import type {
  UnknownObject,
  ComponentSize,
  IButtonProps,
  StringObject,
} from './index'

/** Form Props */
export interface ProFormProps {
  modelValue: StringObject
  columns: ProFormColumns
  menu?: ProFormMenuColumns
  rules?: UnknownObject
  inline?: boolean
  labelPosition?: 'right' | 'left' | 'top'
  labelWidth?: string
  labelSuffix?: string
  hideRequiredAsterisk?: boolean
  showMessage?: boolean
  inlineMessage?: boolean
  statusIcon?: boolean
  validateOnRuleChange?: boolean
  size?: ComponentSize
  disabled?: boolean
}

export interface ProFormColumn<T = UnknownObject> extends StringObject {
  /** whether column has a slot */
  slot?: boolean
  /** component name */
  component?: string
  /** props for component */
  props?: UnknownObject
  /** sub-form */
  children?: ProFormColumns<T>
  /** max number of sub-form */
  max?: number
  /** keys of model that passed to form */
  prop: keyof T
  /** label name */
  label?: string
  /** width of label, e.g. '50px'. Width auto is supported */
  labelWidth?: string
  /** whether the field is required or not, will be determined by validation rules if omitted */
  required?: boolean
  /** validation rules of form */
  rules?: UnknownObject | UnknownObject[]
  /** field error message, set its value and the field will validate error and show this message immediately */
  error?: string
  /** whether to show the error message */
  showMessage?: boolean
  /** inline style validate message */
  inlineMessage?: boolean
  /** control the size of components in this form-item */
  size?: ComponentSize
}

/** Form Columns Option */
export type ProFormColumns<T = UnknownObject> = ProFormColumn<T>[]

/** Form Menu Option */
export interface ProFormMenu {
  /** show submit button */
  submit?: boolean
  /** text of submit button */
  submitText?: string
  /** props of submit button */
  submitProps?: IButtonProps
  /** show reset button */
  reset?: boolean
  /** text of reset button */
  resetText?: string
  /** props of reset button */
  resetProps?: IButtonProps
}

/** Form Menu Option */
export type ProFormMenuColumns = StringObject & ProFormMenu

export interface ProFormValidateCallback {
  (isValid: boolean, invalidFields?: UnknownObject): void
}

export interface ProFormValidateFieldCallback {
  (message?: string, invalidFields?: UnknownObject): void
}

/** Form Expose Methods */
export interface ProFormExpose {
  /** validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted */
  validate: (callback?: ProFormValidateCallback) => Promise<boolean>
  /** reset all the fields and remove validation result */
  resetFields: () => void
  /** clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared */
  clearValidate: (props?: string | string[]) => void
  /** validate one or several form items */
  validateField: (
    props: string | string[],
    cb: ProFormValidateFieldCallback
  ) => void
}
