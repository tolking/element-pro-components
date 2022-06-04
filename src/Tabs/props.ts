import { tabsProps as elTabsProps } from 'element-plus'
import { objectPick } from '../utils/index'

export const tabsProps = objectPick(
  elTabsProps,
  'type',
  'tabPosition',
  'beforeLeave',
  'stretch'
)
