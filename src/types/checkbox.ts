import type { SelectConfig } from './index'

export interface ICheckboxProps {
  modelValue: string[] | number[] | boolean[]
  data: Record<string, boolean | string | number>[]
  config: SelectConfig
}

export type ICheckboxButtonProps = ICheckboxProps
