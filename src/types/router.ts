import type {
  RouteMeta,
  _RouteRecordBase,
  RouteComponent,
  RouteLocationNormalized,
  RouteRecordRedirectOption,
} from 'vue-router'
import { StringObject } from './index'

type Lazy<T> = () => Promise<T>

type RawRouteComponent = RouteComponent | Lazy<RouteComponent>

type _RouteRecordProps =
  | boolean
  | StringObject
  | ((to: RouteLocationNormalized) => StringObject)

interface RouteRecordSingleView extends _RouteRecordBase {
  component: RawRouteComponent
  components?: never
  props?: _RouteRecordProps
}

interface RouteRecordMultipleViews extends _RouteRecordBase {
  components: Record<string, RawRouteComponent>
  component?: never
  props?: Record<string, _RouteRecordProps> | boolean
}

interface RouteRecordRedirect extends _RouteRecordBase {
  redirect: RouteRecordRedirectOption
  component?: never
  components?: never
}

interface IRouteMeta extends RouteMeta {
  title?: string
  icon?: string
  hidden?: boolean
  keepAlive?: boolean
}

type ReplaceMeta<T> = {
  [Q in keyof T]: Q extends 'meta'
    ? IRouteMeta
    : Q extends 'children'
    ? ReplaceMeta<T>[]
    : T[Q]
}

export type IRouteRecordRaw =
  | ReplaceMeta<RouteRecordSingleView>
  | ReplaceMeta<RouteRecordMultipleViews>
  | ReplaceMeta<RouteRecordRedirect>
