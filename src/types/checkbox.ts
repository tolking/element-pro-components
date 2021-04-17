import { UnknownObject, SelectConfig } from './index'

export interface ICheckboxProps {
  modelValue: string[] | number[] | boolean[] | UnknownObject[]
  data: Record<string, boolean | string | number | UnknownObject>[]
  config: SelectConfig
}

export type ICheckboxButtonProps = ICheckboxProps
