import { modelValueEmit } from '../utils/index'
import type { SelectDataItem } from '../Select/index'

export default {
  ...modelValueEmit,
  clear: () => true,
  'remove-tag': (value: string) => true,
  'visible-change': (state: boolean) => true,
  'node-click': (item?: SelectDataItem, node?: unknown, self?: unknown) => true,
  'check-change': (item?: SelectDataItem, node?: unknown, self?: unknown) =>
    true,
}
