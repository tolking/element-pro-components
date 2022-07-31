import { Ref, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { isFunction, throwWarn } from '../utils/index'
import type { ITabsProps, ITabsExpose, ITab } from './type'

interface UseTabs extends ITabsExpose {
  active: Ref<string>
  to: (path: string) => void
}

export function useTabs(props: ITabsProps): UseTabs {
  const route = useRoute()
  const router = useRouter()
  const active = ref('')
  const list = ref<ITab[]>([])

  watch(
    () => route.path,
    async (path, oldPath) => {
      const title = route.meta?.title || ''
      const hidden = route.meta?.hidden

      if (oldPath && !props.keepHiddenRoute) {
        const item = list.value.find((item) => item.path === oldPath)
        item?.hidden && close(oldPath)
      }

      if (isFunction(props.beforeAdd)) {
        try {
          const canAdd = await props.beforeAdd({
            route,
            oldPath,
            list,
            close,
            closeOther,
          })
          if (canAdd !== false) {
            addTab({ title, path, hidden })
          }
        } catch {
          throwWarn('[ProTabs] Failed to execute beforeAdd function')
        }
      } else {
        addTab({ title, path, hidden })
      }
    },
    { immediate: true }
  )

  function addTab(tab: ITab) {
    !list.value.find((item) => item.path === tab.path) && list.value.push(tab)
    active.value = tab.path
  }

  function to(path: string) {
    if (path !== route.path) {
      router.push(path)
    }
  }

  function close(path: string) {
    const index = list.value.findIndex((item) => item.path === path)
    list.value = list.value.filter((item) => item.path !== path)

    if (route.path === path && list.value.length) {
      if (index >= 1) {
        to(list.value[index - 1].path)
      } else {
        to(list.value[index].path)
      }
    }
  }

  function closeOther() {
    const title = route.meta?.title || ''
    list.value = [{ title, path: active.value }]
  }

  return {
    active,
    list,
    to,
    close,
    closeOther,
  }
}
