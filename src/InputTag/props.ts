import { tagProps, inputProps } from 'element-plus'
import { isArray, isString, objectOmit } from '../utils/index'
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

export const inputTagEmits = {
  'update:modelValue': (value: string[]) => isArray(value),
  input: (value: string) => isString(value),
  'tag-add': (value: string) => isString(value),
  'tag-remove': (value: string) => isString(value),
}
