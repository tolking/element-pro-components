import { tabsProps } from './props'
import type { Ref } from 'vue'
import type {
  RouteLocationNormalizedLoaded,
  RouteMeta,
  RouteRecordName,
} from 'vue-router'
import type { Awaitable } from '@vueuse/core'
import type { IDefineProps } from '../types/index'

export interface ITab extends RouteMeta {
  path: string
  name?: RouteRecordName | null
}

export interface ITabsExpose {
  list: Ref<ITab[]>
  close: (path: string) => void
  closeOther: () => void
}

interface BeforeAddArg extends ITabsExpose {
  oldPath?: string
  route: RouteLocationNormalizedLoaded
}

export type ITabsBeforeAdd = (arg: BeforeAddArg) => Awaitable<false | void>

export type ITabsProps = IDefineProps<typeof tabsProps>
