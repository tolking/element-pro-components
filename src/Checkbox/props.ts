import { checkboxGroupProps } from 'element-plus'
import { isArray } from '../utils/index'
import { selectDataProps } from '../Select/props'

type CheckboxGroupKeys = Array<keyof typeof checkboxGroupProps>

export const checkboxGroupKeys = Object.keys(
  checkboxGroupProps,
) as CheckboxGroupKeys

export const checkboxProps = {
  ...checkboxGroupProps,
  ...selectDataProps,
}

export const checkboxEmits = {
  'update:modelValue': (value?: Array<string | number | boolean>) =>
    isArray(value),
}
