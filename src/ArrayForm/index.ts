import { withInstall } from '../utils/index'
import ArrayForm from './ArrayForm'

export * from './useArrayForm'
export * from './type'
export { default as ProArrayFormContent } from './ArrayFormContent'
export { arrayFormProps, arrayFormContentProps } from './props'
export const ProArrayForm = withInstall(ArrayForm)
