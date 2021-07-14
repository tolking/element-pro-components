import type { MaybeArray, UnknownObject, SelectConfig } from './index'

export interface ITreeSelectProps {
  modelValue?: MaybeArray<string | number>
  data: Record<string, string | number | UnknownObject>[]
  config?: SelectConfig
  clearable?: boolean
  multiple?: boolean
  checkStrictly?: boolean
  filterable?: boolean
  onlySelectLeaf?: boolean
}
