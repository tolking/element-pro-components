import { withInstall } from '../utils/index'
import Form from './Form'

export * from './useForm'
export * from './type'
export { formProps, formEmits } from './props'
export const ProForm = withInstall(Form)
