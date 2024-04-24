import { objectPick } from '../utils/index'
import { selectCommonProps } from '../Select/props'
import type { PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

const _selectProps = objectPick(
  selectCommonProps,
  'name',
  'id',
  'size',
  'disabled',
  'clearable',
  'noMatchText',
  'noDataText',
  'placeholder',
  'teleported',
  'clearIcon',
  'suffixIcon',
  'effect',
  'persistent',
  'validateEvent',
)

export const selectKeys = Object.keys(_selectProps) as Array<
  keyof typeof _selectProps
>

export const filterRoutesProps = {
  ..._selectProps,
  routes: Array as PropType<RouteRecordRaw[]>,
}
