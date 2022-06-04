import { tagProps, inputProps } from 'element-plus'
import { objectOmit } from '../utils/index'
import type { PropType } from 'vue'

const _tagProps = objectOmit(tagProps, 'closable')
const _inputProps = objectOmit(
  inputProps,
  'modelValue',
  'type',
  'resize',
  'autosize',
  'showPassword'
)

export const inputTagCommonProps = {
  ..._tagProps,
  modelValue: Array as PropType<string[]>,
  max: Number,
  trigger: {
    type: String as PropType<'space' | 'enter'>,
    default: 'enter',
  },
}

export const inputTagProps = {
  ...inputTagCommonProps,
  ..._inputProps,
}
