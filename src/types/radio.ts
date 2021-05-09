import type { SelectConfig } from './index'

export interface IRadioProps {
  modelValue: string | number | boolean
  data: Record<string, boolean | string | number>[]
  config: SelectConfig
}

export type IRadioButtonProps = IRadioProps
