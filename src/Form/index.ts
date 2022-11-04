import { withInstall } from '../utils/index'
import Form from './Form'

export * from './useForm'
export * from './type'
export { default as ProArrayForm } from './ArrayForm'
export { default as ProGroupForm } from './GroupForm'
export { default as ProTabsForm } from './TabsForm'
export { default as ProFormComponent } from './FormComponent'
export { default as ProFormItem } from './FormItem'
export { default as ProFormList } from './FormList'
export { formProps, formEmits } from './props'
export const ProForm = withInstall(Form)
