import { Ref, ref, unref, getCurrentInstance } from 'vue'
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
  emit?: (name: string, ...args: unknown[]) => void
): (value: unknown) => void {
  const instance = getCurrentInstance()
  const _emit = emit || instance?.emit

  function emitValue(value: unknown) {
    _emit && _emit(`update:${key}`, value)
  }

  return emitValue
}
