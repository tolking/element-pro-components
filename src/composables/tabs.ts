import { Ref, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface ProTab {
  title: string
  path: string
}

export function useTabs(): {
  active: Ref<string>
  list: Ref<ProTab[]>
  to: (item: { paneName: string }) => void
  close: (path: string) => void
} {
  const route = useRoute()
  const router = useRouter()
  const active = ref('')
  const list = ref<ProTab[]>([])

  watch(
    () => route.path,
    (path) => {
      const title = route.meta.title
      addTab({ title, path })
    },
    { immediate: true }
  )

  function addTab(tab: ProTab) {
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

  return {
    active,
    list,
    to,
    close,
  }
}
