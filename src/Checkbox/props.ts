import { selectDataProps } from '../Select/props'
import { radioProps } from '../Radio/props'
import type { PropType } from 'vue'

export const checkboxProps = {
  ...selectDataProps,
  ...radioProps,
  modelValue: Array as PropType<Array<string | number | boolean>>,
  min: Number,
  max: Number,
}
