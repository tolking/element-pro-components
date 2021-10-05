export * from './AutocompleteTag/index'
export * from './Breadcrumb/index'
export * from './Checkbox/index'
export * from './CheckboxButton/index'
export * from './ColumnSetting/index'
export * from './Crud/index'
export * from './Form/index'
export * from './InputTag/index'
export * from './Layout/index'
export * from './Link/index'
export * from './Menu/index'
export * from './Radio/index'
export * from './RadioButton/index'
export * from './Select/index'
export * from './Table/index'
export * from './Tabs/index'
export * from './TreeSelect/index'

import ProAutocompleteTag from './AutocompleteTag/index'
import ProBreadcrumb from './Breadcrumb/index'
import ProCheckbox from './Checkbox/index'
import ProCheckboxButton from './CheckboxButton/index'
import ProColumnSetting from './ColumnSetting/index'
import ProCrud from './Crud/index'
import ProForm from './Form/index'
import ProInputTag from './InputTag/index'
import ProLayout from './Layout/index'
import ProLink from './Link/index'
import ProMenu from './Menu/index'
import ProRadio from './Radio/index'
import ProRadioButton from './RadioButton/index'
import ProSelect from './Select/index'
import ProTable from './Table/index'
import ProTabs from './Tabs/index'
import ProTreeSelect from './TreeSelect/index'

export {
  ProAutocompleteTag,
  ProBreadcrumb,
  ProCheckbox,
  ProCheckboxButton,
  ProColumnSetting,
  ProCrud,
  ProForm,
  ProInputTag,
  ProLayout,
  ProLink,
  ProMenu,
  ProRadio,
  ProRadioButton,
  ProSelect,
  ProTable,
  ProTabs,
  ProTreeSelect,
}

declare module 'vue' {
  export interface GlobalComponents {
    ProAutocompleteTag: typeof ProAutocompleteTag
    ProBreadcrumb: typeof ProBreadcrumb
    ProCheckbox: typeof ProCheckbox
    ProCheckboxButton: typeof ProCheckboxButton
    ProColumnSetting: typeof ProColumnSetting
    ProCrud: typeof ProCrud
    ProForm: typeof ProForm
    ProInputTag: typeof ProInputTag
    ProLayout: typeof ProLayout
    ProLink: typeof ProLink
    ProMenu: typeof ProMenu
    ProRadio: typeof ProRadio
    ProRadioButton: typeof ProRadioButton
    ProSelect: typeof ProSelect
    ProTable: typeof ProTable
    ProTabs: typeof ProTabs
    ProTreeSelect: typeof ProTreeSelect
  }
}
