import type { PropType } from 'vue'
import type { ComponentSize } from 'element-plus/lib/utils/types'

export const commonProps = {
  modelValue: {
    type: Array as PropType<string[]>,
  },
  max: {
    type: Number,
  },
  trigger: {
    type: String as PropType<'space' | 'enter'>,
  },
  size: {
    type: String as PropType<ComponentSize>,
  },
  type: {
    type: String as PropType<'success' | 'info' | 'warning' | 'danger'>,
  },
  hit: {
    type: Boolean,
  },
  color: {
    type: String,
  },
  effect: {
    type: String as PropType<'light' | 'dark' | 'plain'>,
  },
  placeholder: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: undefined,
  },
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

export default {
  ...commonProps,
  maxlength: {
    type: [Number, String],
  },
  minlength: {
    type: Number,
  },
  showWordLimit: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  autofocus: Boolean,
  form: {
    type: String,
    default: '',
  },
  tabindex: {
    type: [Number, String],
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
  inputStyle: {
    type: Object,
  },
}
