import { tabsProps as elTabsProps } from 'element-plus'
import { objectPick } from '../utils/index'
import type { PropType } from 'vue'
import type { ITabsBeforeAdd } from './type'

const _elTabsProps = objectPick(
  elTabsProps,
  'type',
  'tabPosition',
  'beforeLeave',
  'stretch'
)

export const tabsProps = {
  ..._elTabsProps,
  keepHiddenRoute: Boolean,
  beforeAdd: Function as PropType<ITabsBeforeAdd>,
}
