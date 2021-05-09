import type { IRouteRecordRaw } from './index'

export interface ILayoutProps {
  routes?: IRouteRecordRaw[]
  transition?: string
  collapse: boolean
  defaultOpeneds?: number[]
  uniqueOpened: boolean
}
