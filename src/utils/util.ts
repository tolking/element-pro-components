import cloneDeep from 'lodash/cloneDeep'
import merge from 'lodash/merge'
import type { IScreenSize, UnknownObject, IDefinePlugin } from '../types/index'

/**
 * determine the current screen size
 * @param width current screen width
 */
export function getScreenSize(width: number): IScreenSize {
  if (width >= 1920) {
    return 'xl'
  } else if (width >= 1200) {
    return 'lg'
  } else if (width >= 992) {
    return 'md'
  } else if (width >= 768) {
    return 'sm'
  } else {
    return 'xs'
  }
}

/**
 * deep merge two objects
 * @param obj1 object 1
 * @param obj2 object 2
 */
export function objectDeepMerge<T = UnknownObject, Q = T>(
  obj1: T,
  obj2: Q
): T & Q {
  const _obj = cloneDeep(obj1) as T & Q
  return merge(_obj, obj2)
}

/**
 * Check the integrity of the url
 * @param url checkUrl
 */
export function checkUrl(url: string): boolean {
  return /^((ht|f)tps?):\/\/?/.test(url)
}

/**
 * add install function for plugin
 * @param plugin the vue components and plugin
 */
export function withInstall<T extends { name: string }>(
  plugin: T
): IDefinePlugin<T> {
  const _plugin = plugin as IDefinePlugin<T>

  _plugin.install = (app) => {
    app.component(_plugin.name, _plugin)
  }

  return _plugin
}
