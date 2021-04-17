import { UnknownObject, SelectConfig } from './index'

export interface IRadioProps {
  modelValue: string | number | boolean | UnknownObject
  data: Record<string, boolean | string | number | UnknownObject>[]
  config: SelectConfig
}

export type IRadioButtonProps = IRadioProps
