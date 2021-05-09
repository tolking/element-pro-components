import type { UnknownObject } from './index'

export interface SelectConfig {
  value?: string
  label?: string
  name?: string
  disabled?: string
}

export interface SelectDataItem {
  value: string | number
  label: string
  name?: string
  disabled: boolean
}

export interface ISelectProps {
  modelValue:
    | string
    | number
    | boolean
    | UnknownObject
    | string[]
    | number[]
    | boolean[]
    | UnknownObject[]
  data: Record<string, boolean | string | number | UnknownObject>[]
  config?: SelectConfig
}
