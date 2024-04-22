import { Ref, ref, unref, getCurrentInstance } from 'vue'
import { reactiveComputed } from '@vueuse/core'
import type { UnwrapNestedRefs } from 'vue'
import type { MaybeRef } from '../types/index'

/**
 * toggle show
 * @param state init value (default `false`)
 */
export function useShow(state: MaybeRef<boolean> = false): {
  show: Ref<boolean>
  toggleShow: () => void
} {
  const _state = unref(state)
  const show = ref(_state)

  function toggleShow() {
    show.value = !show.value
  }

  return {
    show,
    toggleShow,
  }
}

/**
 * emit value to parent
 * @param key value key
 * @param emit update function
 */
export function useEmitValue(
  key = 'modelValue',
  emit?: (name: string, ...args: unknown[]) => void,
): (value: unknown) => void {
  const instance = getCurrentInstance()
  const _emit = emit || instance?.emit

  function emitValue(value: unknown) {
    _emit && _emit(`update:${key}`, value)
  }

  return emitValue
}

type UseSplitReactive<T extends object, K extends Array<keyof T>[]> = [
  ...{
    [P in keyof K]: P extends `${number}`
      ? UnwrapNestedRefs<Pick<T, Extract<K[P], Array<keyof T>>[number]>>
      : never
  },
]

/**
 * split reactive object to multiple reactive objects
 * @param reactive the reactive object in vue
 * @param args split keys
 */
export function useSplitReactive<T extends object, K extends Array<keyof T>[]>(
  reactive: T,
  ...args: K
): UseSplitReactive<T, K> {
  return args.map((keys) =>
    reactiveComputed(() =>
      Object.fromEntries(keys.map((key) => [key, reactive[key]])),
    ),
  ) as UseSplitReactive<T, K>
}
