import { isObject } from './index'
import type { IScreenSize, UnknownObject } from '../types/index'

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
