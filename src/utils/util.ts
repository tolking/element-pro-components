import { Fragment } from 'vue'
import { isObject } from './index'
import type { Component, VNode } from 'vue'
import type { IDefinePlugin, ExternalParam } from '../types/index'

/**
 * Check the integrity of the url
 * @param url isURL
 */
export function isURL(url: string): boolean {
  return /^((ht|f)tps?):\/\/?/.test(url)
}

/**
 * whether is array
 * @param value value
 */
export function isArray(value: unknown): value is ExternalParam[] {
  return Array.isArray(value)
}

/**
 * whether is undefined
 * @param value value
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}

/**
 * Find the first matching Node by name from a VNode list
 * @param list VNode list
 * @param name matching name
 */
export function findNodeByName(
  list: VNode[] | undefined,
  name: string,
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
  plugin: T,
): IDefinePlugin<T> {
  const _plugin = plugin as IDefinePlugin<T>

  _plugin.install = (app) => {
    app.component(_plugin.name, _plugin)
  }

  return _plugin
}

/**
 * throw a warn
 * @param err warn message
 */
export function throwWarn(err: string) {
  console.warn(`[ElementProComponents Warn]: ${err}`)
}

/**
 * add a point between two parameters
 * @param first
 * @param last
 */
export function withPoint(first?: string, last?: string) {
  return `${first}${first && last ? '.' : ''}${last}`
}
