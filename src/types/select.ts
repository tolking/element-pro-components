import { UnknownObject } from './index'

export interface SelectConfig {
  value?: string
  label?: string
  disabled?: string
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
  data: UnknownObject
  config?: SelectConfig
}
