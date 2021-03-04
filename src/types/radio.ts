import { UnknownObject, SelectConfig } from './index'

export interface IRadioProps {
  modelValue: string | number | boolean | UnknownObject
  data: UnknownObject
  config: SelectConfig & { name?: string }
}

export type IRadioButtonProps = IRadioProps
