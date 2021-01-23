export * from './composables/public'
export * from './utils/index'
export * from './types/index'
import './styles/index.css'
import type { App } from 'vue'
import { ProDefineComponent } from './types/index'
import { config, InstallOptions } from './utils/config'

import ProAutocompleteTag from './AutocompleteTag/index'
import ProBreadcrumb from './Breadcrumb/index'
import ProCheckbox from './Checkbox/index'
import ProCheckboxButton from './CheckboxButton/index'
import ProForm from './Form/index'
import ProInputTag from './InputTag/index'
import ProLayout from './Layout/index'
import ProMenu from './Menu/index'
import ProRadio from './Radio/index'
import ProRadioButton from './RadioButton/index'
import ProSelect from './Select/index'
import ProTable from './Table/index'
import ProTabs from './Tabs/index'

const components: Record<string, ProDefineComponent> = {
  ProAutocompleteTag,
  ProBreadcrumb,
  ProCheckbox,
  ProCheckboxButton,
  ProForm,
  ProInputTag,
  ProLayout,
  ProMenu,
  ProRadio,
  ProRadioButton,
  ProSelect,
  ProTable,
  ProTabs,
}

const install = (app: App, options?: InstallOptions): void => {
  const _options = Object.assign({}, config, options)

  app.provide('ProOptions', _options)

  for (const key in components) {
    const item = components[key]
    app.component(item.name || key, item)
  }
}

export {
  ProAutocompleteTag,
  ProBreadcrumb,
  ProCheckbox,
  ProCheckboxButton,
  ProForm,
  ProInputTag,
  ProLayout,
  ProMenu,
  ProRadio,
  ProRadioButton,
  ProSelect,
  ProTable,
  ProTabs,
  install,
}

export default {
  install,
}
