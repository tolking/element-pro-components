import { autocompleteProps } from 'element-plus'
import { objectOmit } from '../utils/index'
import { inputTagCommonProps } from '../InputTag/props'

const props = objectOmit(autocompleteProps, 'modelValue')

export const autocompleteTagProps = {
  ...inputTagCommonProps,
  ...props,
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  name: String,
  label: String,
  suffixIcon: String,
  prefixIcon: String,
}
