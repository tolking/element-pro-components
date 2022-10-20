import { withInstall } from '../utils/index'
import Form from './Form'

export * from './useForm'
export { default as ProFormMenu } from './FormMenu'
export { default as ProFormItem } from './FormItem'
export { default as ProFormComponent } from './FormComponent'
export * from './type'
export {
  formProps,
  formMenuProps,
  formItemProps,
  formComponentProps,
  formEmits,
  formItemEmits,
} from './props'
export const ProForm = withInstall(Form)
