import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** the Menu title */
    title?: string
    /** the Menu icon */
    icon?: string
    /** whether to show in the Menu */
    hidden?: boolean
    /** whether the current route is keepAlive */
    keepAlive?: boolean
  }
}

export type { RouteRecordRaw as IRouteRecordRaw } from 'vue-router'
