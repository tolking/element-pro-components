import type { PropType } from 'vue'
import type { FormRulesMap } from 'element-plus/lib/components/form/src/form.type'
import type { ComponentSize } from 'element-plus/lib/constants/index'
import type { IFormColumns, IFormMenuColumns } from './type'

export default {
  modelValue: {
    type: Object,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    default: () => ({}),
  },
  columns: {
    type: Array as PropType<IFormColumns>,
    default: undefined,
  },
  menu: {
    type: Object as PropType<IFormMenuColumns>,
    default: undefined,
  },
  rules: {
    type: Object as PropType<FormRulesMap>,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  labelPosition: {
    type: String as PropType<'right' | 'left' | 'top'>,
    default: undefined,
  },
  labelWidth: {
    type: [String, Number],
    default: '',
  },
  labelSuffix: {
    type: String,
    default: '',
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: false,
  },
  showMessage: {
    type: Boolean,
    default: true,
  },
  inlineMessage: Boolean,
  statusIcon: Boolean,
  validateOnRuleChange: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String as PropType<ComponentSize>,
  },
  disabled: Boolean,
  scrollToError: Boolean,
  gutter: {
    type: Number,
    default: undefined,
  },
  justify: {
    type: String as PropType<
      'start' | 'end' | 'center' | 'space-around' | 'space-between'
    >,
    default: undefined,
  },
  align: {
    type: String as PropType<'top' | 'middle' | 'bottom'>,
    default: undefined,
  },
}
