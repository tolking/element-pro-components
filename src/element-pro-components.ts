import type ProAutocompleteTag from './AutocompleteTag/index'
import type ProBreadcrumb from './Breadcrumb/index'
import type ProCheckbox from './Checkbox/index'
import type ProCheckboxButton from './CheckboxButton/index'
import type ProColumnSetting from './ColumnSetting/index'
import type ProCrud from './Crud/index'
import type ProForm from './Form/index'
import type ProInputTag from './InputTag/index'
import type ProLayout from './Layout/index'
import type ProLink from './Link/index'
import type ProMenu from './Menu/index'
import type ProRadio from './Radio/index'
import type ProRadioButton from './RadioButton/index'
import type ProSelect from './Select/index'
import type ProTable from './Table/index'
import type ProTabs from './Tabs/index'
import type ProTreeSelect from './TreeSelect/index'

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

export {}
