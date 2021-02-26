import { UnknownObject, SelectConfig } from './index'

export interface ICheckboxProps {
  modelValue: string[] | number[] | boolean[] | UnknownObject[]
  data: UnknownObject
  config: SelectConfig & { name?: string }
}

export type ICheckboxButtonProps = ICheckboxProps
