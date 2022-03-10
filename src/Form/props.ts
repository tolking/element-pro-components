import { rowProps } from 'element-plus'
import { objectOmit } from '../utils/index'
import type { PropType } from 'vue'
import type { FormRulesMap } from 'element-plus/lib/components/form/src/form.type'
import type { ComponentSize } from 'element-plus/lib/constants/index'
import type { IFormColumns, IFormMenuColumns } from './type'

type FormKeys = Array<keyof typeof _formProps>

const _formProps = {
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
}
const _rowProps = objectOmit(rowProps, 'tag')

export const formKeys = Object.keys(_formProps) as FormKeys

export default {
  ..._formProps,
  ..._rowProps,
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
}
