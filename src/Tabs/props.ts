import { tabsProps as elTabsProps } from 'element-plus'
import { objectPick } from '../utils/index'

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
}
