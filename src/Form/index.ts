import { withInstall } from '../utils/index'
import Form from './Form'
import type { IDefinePlugin } from '../types/index'

export * from './useForm'
export * from './type'
export { default as ProArrayForm } from './ArrayForm'
export { default as ProGroupForm } from './GroupForm'
export { default as ProTabsForm } from './TabsForm'
export { default as ProCollapseForm } from './CollapseForm'
export { default as ProStepsForm } from './StepsForm'
export { default as ProFormComponent } from './FormComponent'
export { default as ProFormItem } from './FormItem'
export { default as ProFormList } from './FormList'
export {
  formProps,
  formItemProps,
  formComponentProps,
  arrayFormProps,
  formListProps,
  groupFormProps,
  formEmits,
  formItemEmits,
  arrayFormEmits,
  tabsFormEmits,
  collapseFormEmits,
  stepsFormEmits,
} from './props'
export const ProForm: IDefinePlugin<typeof Form> = withInstall(Form)
