export * from './composables/public'
export * from './utils/index'
export * from './types/index'
import './styles/index.css'
import type { App, ComponentOptions } from 'vue'
import { config, InstallOptions } from './utils/config'

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

const version = process.env.VERSION || '0.0.0'

const components: Record<string, ComponentOptions> = {
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
  version,
  install,
}

export default {
  version,
  install,
}
