import type { Ref } from 'vue'
import { tabsProps } from './props'
import type { IDefineProps } from '../types/index'

export interface ITab {
  path: string
  title?: string
  hidden?: boolean
}

export interface ITabsExpose {
  list: Ref<ITab[]>
  close: (path: string) => void
  closeOther: () => void
}

export type ITabsProps = IDefineProps<typeof tabsProps>
