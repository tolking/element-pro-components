import { formProps, rowProps } from 'element-plus'
import { objectOmit } from '../utils/index'
import type { PropType } from 'vue'
import type { IFormColumns, IFormMenuColumns } from './type'

type FormKeys = Array<keyof typeof _formProps>

const _formProps = objectOmit(formProps, 'model')
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
