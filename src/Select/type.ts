import type { ExternalParam } from '../types/index'

export interface SelectConfig {
  value?: string
  label?: string
  name?: string
  disabled?: string
  children?: string
}

export type SelectData = Record<string, ExternalParam>[]

export interface SelectDataItem {
  value: string | number | boolean
  label: string
  name?: string
  disabled?: boolean
  children?: SelectDataItem[]
}
