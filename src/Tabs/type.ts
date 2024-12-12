import { tabsProps } from './props'
import type { Ref } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { Awaitable } from '@vueuse/core'
import type { IDefineProps } from '../types/index'

export interface ITabContextmenuProps {
  refresh?: boolean
  left?: boolean
  right?: boolean
  others?: boolean
}

export interface ITabsExpose {
  list: Ref<RouteLocationNormalizedLoaded[]>
  close: (path: string) => void
  closeOther: () => void
}

interface BeforeAddArg extends ITabsExpose {
  oldPath?: string
  route: RouteLocationNormalizedLoaded
}

export type ITabsBeforeAdd = (arg: BeforeAddArg) => Awaitable<boolean | void>

export type ITabsProps = IDefineProps<typeof tabsProps>
