import { tabsProps } from 'element-plus'
import { objectPick } from '../utils/index'

const props = objectPick(
  tabsProps,
  'type',
  'tabPosition',
  'beforeLeave',
  'stretch'
)

export default props
