import type { MaybeArray, UnknownObject, StringObject } from './index'

export interface SelectConfig {
  value?: string
  label?: string
  name?: string
  disabled?: string
  children?: string
}

export interface SelectDataItem {
  value: string | number
  label: string
  name?: string
  disabled: boolean
  children?: SelectDataItem[]
}

export interface ISelectProps {
  modelValue: MaybeArray<string | number | boolean | StringObject>
  data: Record<string, boolean | string | number | UnknownObject>[]
  config?: SelectConfig
}
