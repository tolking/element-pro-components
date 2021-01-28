import { UnknownObject } from './index'

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
