import { modelValueEmit } from '../utils/index'
import { selectProps } from './props'
import type { ExternalParam, IDefineProps, IDefineEmits } from '../types/index'

export interface SelectConfig {
  value?: string
  label?: string
  name?: string
  disabled?: string
  children?: string
}

export type SelectDataItem = Record<string, ExternalParam>

export type ISelectProps = IDefineProps<typeof selectProps>
export type ISelectEmits = IDefineEmits<typeof modelValueEmit>
