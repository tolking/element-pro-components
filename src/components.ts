export * from './AutocompleteTag/index'
export * from './Breadcrumb/index'
export * from './Card/index'
export * from './Checkbox/index'
export * from './CheckboxButton/index'
export * from './ColumnSetting/index'
export * from './Crud/index'
export * from './Descriptions/index'
export * from './FilterRoutes/index'
export * from './Form/index'
export * from './InputTag/index'
export * from './Layout/index'
export * from './Link/index'
export * from './Menu/index'
export * from './Radio/index'
export * from './RadioButton/index'
export * from './Search/index'
export * from './Select/index'
export * from './Table/index'
export * from './Tabs/index'
export * from './TreeSelect/index'

import { ProAutocompleteTag } from './AutocompleteTag/index'
import { ProBreadcrumb } from './Breadcrumb/index'
import { ProCard } from './Card/index'
import { ProCheckbox } from './Checkbox/index'
import { ProCheckboxButton } from './CheckboxButton/index'
import { ProColumnSetting } from './ColumnSetting/index'
import { ProCrud } from './Crud/index'
import { ProDescriptions } from './Descriptions/index'
import { ProFilterRoutes } from './FilterRoutes'
import { ProForm } from './Form/index'
import { ProInputTag } from './InputTag/index'
import { ProLayout } from './Layout/index'
import { ProLink } from './Link/index'
import { ProMenu } from './Menu/index'
import { ProRadio } from './Radio/index'
import { ProRadioButton } from './RadioButton/index'
import { ProSearch } from './Search/index'
import { ProSelect } from './Select/index'
import { ProTable } from './Table/index'
import { ProTabs } from './Tabs/index'
import { ProTreeSelect } from './TreeSelect/index'
import type { Plugin } from 'vue'

export default {
  ProAutocompleteTag,
  ProBreadcrumb,
  ProCard,
  ProCheckbox,
  ProCheckboxButton,
  ProColumnSetting,
  ProCrud,
  ProDescriptions,
  ProFilterRoutes,
  ProForm,
  ProInputTag,
  ProLayout,
  ProLink,
  ProMenu,
  ProRadio,
  ProRadioButton,
  ProSearch,
  ProSelect,
  ProTable,
  ProTabs,
  ProTreeSelect,
} as Record<string, Plugin>

declare module 'vue' {
  export interface GlobalComponents {
    ProAutocompleteTag: typeof ProAutocompleteTag
    ProBreadcrumb: typeof ProBreadcrumb
    ProCard: typeof ProCard
    ProCheckbox: typeof ProCheckbox
    ProCheckboxButton: typeof ProCheckboxButton
    ProColumnSetting: typeof ProColumnSetting
    ProCrud: typeof ProCrud
    ProDescriptions: typeof ProDescriptions
    ProFilterRoutes: typeof ProFilterRoutes
    ProForm: typeof ProForm
    ProInputTag: typeof ProInputTag
    ProLayout: typeof ProLayout
    ProLink: typeof ProLink
    ProMenu: typeof ProMenu
    ProRadio: typeof ProRadio
    ProRadioButton: typeof ProRadioButton
    ProSearch: typeof ProSearch
    ProSelect: typeof ProSelect
    ProTable: typeof ProTable
    ProTabs: typeof ProTabs
    ProTreeSelect: typeof ProTreeSelect
  }
}
