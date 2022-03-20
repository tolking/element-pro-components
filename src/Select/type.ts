import type { ExternalParam } from '../types/index'

export interface SelectConfig {
  value?: string
  label?: string
  name?: string
  disabled?: string
  children?: string
}

export type SelectDataItem = Record<string, ExternalParam>
