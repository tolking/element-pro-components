import { Ref, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { ITabsExpose, ITab } from '../types/index'

interface UseTabs extends ITabsExpose {
  active: Ref<string>
  to: (item: { paneName: string }) => void
}

export function useTabs(): UseTabs {
  const route = useRoute()
  const router = useRouter()
  const active = ref('')
  const list = ref<ITab[]>([])

  watch(
    () => route.path,
    (path) => {
      const title = route.meta.title as string
      addTab({ title, path })
    },
    { immediate: true }
  )

  function addTab(tab: ITab) {
    !list.value.find((item) => item.path === tab.path) && list.value.push(tab)
    active.value = tab.path
  }

  function to(item: { paneName: string }) {
    if (item.paneName !== route.path) {
      router.push(item.paneName)
    }
  }

  function close(path: string) {
    const index = list.value.findIndex((item) => item.path === path)
    list.value = list.value.filter((item) => item.path !== path)

    if (route.path === path && list.value.length) {
      if (index >= 1) {
        to({ paneName: list.value[index - 1].path })
      } else {
        to({ paneName: list.value[index].path })
      }
    }
  }

  function closeOther() {
    const title = route.meta.title as string
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
