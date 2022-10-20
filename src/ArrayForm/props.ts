import { isArray, objectOmit, objectPick } from '../utils/index'
import { formProps, formItemProps } from '../Form/props'
import type { PropType } from 'vue'
import type { UnknownObject } from '../types/index'
import type { IFormColumns } from '../Form/type'

const _formProps = objectOmit(formProps, 'modelValue')
const _formItemProps = objectPick(formItemProps, 'prop', 'indexes', 'inline')

export const arrayFormProps = {
  ..._formProps,
  modelValue: {
    type: Array as PropType<UnknownObject[]>,
    default: () => [],
  },
  max: Number,
}

export const arrayFormContentProps = {
  ..._formItemProps,
  modelValue: {
    type: Array as PropType<UnknownObject[]>,
    default: () => [],
  },
  columns: Array as PropType<IFormColumns>,
  max: Number,
}

export const arrayFormEmits = {
  'update:modelValue': (value: UnknownObject[]) => isArray(value),
}
