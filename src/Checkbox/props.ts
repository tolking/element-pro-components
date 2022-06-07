import { useCheckboxGroupProps } from 'element-plus'
import { isArray } from '../utils/index'
import { selectDataProps } from '../Select/props'

export const checkboxProps = {
  ...useCheckboxGroupProps,
  ...selectDataProps,
}

export const checkboxEmits = {
  'update:modelValue': (value?: Array<string | number | boolean>) =>
    isArray(value),
}
