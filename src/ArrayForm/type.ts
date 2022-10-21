import { arrayFormContentEmits } from '../Form/props'
import { arrayFormProps, arrayFormContentProps, arrayFormEmits } from './props'
import type { IDefineEmits, IDefineProps } from '../types/index'

export type IArrayFormProps = IDefineProps<typeof arrayFormProps>
export type IArrayFormContentProps = IDefineProps<typeof arrayFormContentProps>
export type IArrayFormEmits = IDefineEmits<typeof arrayFormEmits>
export type IArrayFormContentEmits = IDefineEmits<typeof arrayFormContentEmits>

export interface IArrayFormContext {
  add: (indexes: number[]) => void
  remove: (indexes: number[]) => void
}
