import { radioGroupProps } from 'element-plus'
import { isBoolean, isString, isNumber } from '../utils/index'
import { selectDataProps } from '../Select/props'

export const radioProps = {
  ...radioGroupProps,
  ...selectDataProps,
}

export const radioEmits = {
  'update:modelValue': (value?: string | number | boolean) =>
    isString(value) || isNumber(value) || isBoolean(value),
}
