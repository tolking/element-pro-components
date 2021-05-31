import { isObject } from './index'
import type { IScreenSize, UnknownObject } from '../types/index'

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
export function objectDeepMerge<T extends UnknownObject>(
  obj1: UnknownObject,
  obj2: UnknownObject
): T {
  const _obj: UnknownObject = { ...obj1 }

  for (const key in obj2) {
    _obj[key] =
      _obj[key] && isObject(_obj[key])
        ? objectDeepMerge(
            _obj[key] as UnknownObject,
            obj2[key] as UnknownObject
          )
        : obj2[key]
  }

  return _obj as T
}

/**
 * Select keys from object to form new object
 * @param obj object
 * @param keys pick keys
 */
export function objectPick<T extends Q, Q = UnknownObject>(
  obj: T,
  keys: Array<keyof Q>
): Q {
  const _obj = {} as Q

  keys.forEach((item) => {
    _obj[item] = obj[item]
  })

  return _obj
}

/**
 * Omit keys from object to form new object
 * @param obj object
 * @param keys pick keys
 */
export function objectOmit<T extends Q, Q = UnknownObject>(
  obj: T,
  keys: Array<keyof T>
): Q {
  const _obj = {} as Q

  for (const key in obj) {
    if (!keys.includes(key)) {
      const _key = (key as unknown) as keyof Q
      _obj[_key] = obj[_key]
    }
  }

  return _obj
}

export function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean'
}
