import type { App } from 'vue'
import ProColumnSetting from './ColumnSetting.vue'
import type { IDefineComponent, IColumnSetting } from '../types/index'

ProColumnSetting.install = (app: App) => {
  app.component(ProColumnSetting.name, ProColumnSetting)
}

export default ProColumnSetting as IDefineComponent<IColumnSetting>
