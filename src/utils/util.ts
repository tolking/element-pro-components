import { Fragment } from 'vue'
import cloneDeep from 'lodash/cloneDeep'
import merge from 'lodash/merge'
import { isObject } from './index'
import type { Component, VNode } from 'vue'
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
 * @param url isURL
 */
export function isURL(url: string): boolean {
  return /^((ht|f)tps?):\/\/?/.test(url)
}

/**
 * Find the first matching Node by name from a VNode list
 * @param list VNode list
 * @param name matching name
 */
export function findNodeByName(
  list: VNode[] | undefined,
  name: string
): VNode | undefined {
  return list?.find((item) => {
    if (item.type === Fragment || item.type === 'template') {
      return findNodeByName(item.children as VNode[], name)
    } else {
      const typeName = isObject(item.type)
        ? (item.type as Component)?.name
        : item.type
      return typeName === name
    }
  })
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
