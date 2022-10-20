import { withInstall } from '../utils/index'
import ArrayForm from './ArrayForm'
import { arrayFormProps, arrayFormContentProps, arrayFormEmits } from './props'
import type { IDefineEmits, IDefineProps } from '../types/index'

export * from './useArrayForm'
export { default as ProArrayFormContent } from './ArrayFormContent'
export { arrayFormProps, arrayFormContentProps, arrayFormEmits } from './props'
export const ProArrayForm = withInstall(ArrayForm)
export type IArrayFormProps = IDefineProps<typeof arrayFormProps>
export type IArrayFormContentProps = IDefineProps<typeof arrayFormContentProps>
export type IArrayFormEmits = IDefineEmits<typeof arrayFormEmits>
