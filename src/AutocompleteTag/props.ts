import { autocompleteProps } from 'element-plus'
import { commonProps } from '../InputTag/props'
import { objectOmit } from '../utils'

const props = objectOmit(autocompleteProps, 'modelValue')

export default {
  ...commonProps,
  ...props,
  // TODO: miss some in autocompleteProps
  placeholder: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: undefined,
  },
  readonly: Boolean,
  name: String,
  label: {
    type: String,
  },
  suffixIcon: {
    type: String,
  },
  prefixIcon: {
    type: String,
  },
}
