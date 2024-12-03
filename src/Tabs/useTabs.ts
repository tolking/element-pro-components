import { computed, nextTick, Ref, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DropdownInstance, useLocale } from 'element-plus'
import { isFunction, isObject, throwWarn } from '../utils/index'
import type { ITabsProps, ITabsExpose, ITab } from './type'

interface UseTabs extends ITabsExpose {
  active: Ref<string>
  to: (path: string) => void
  refresh: (item: ITab) => void
  closeLeft: (item: ITab, index: number) => void
  closeRight: (item: ITab, index: number) => void
  closeOthers: (item: ITab, index: number) => void
}

export function useTabsMenu() {
  const { t } = useLocale()
  const menu = {
    refresh: 'Refresh',
    left: 'Close Left',
    right: 'Close Right',
    others: 'Close Others',
  }

  return computed(() => {
    const refresh = t('pro.tabs.refresh')
    const left = t('pro.tabs.left')
    const right = t('pro.tabs.right')
    const others = t('pro.tabs.others')

    if (refresh && refresh !== 'pro.tabs.refresh') {
      menu.refresh = refresh
    }
    if (left && left !== 'pro.tabs.left') {
      menu.left = left
    }
    if (right && right !== 'pro.tabs.right') {
      menu.right = right
    }
    if (others && others !== 'pro.tabs.others') {
      menu.others = others
    }

    return menu
  })
}

export function useTabs(props: ITabsProps): UseTabs {
  const route = useRoute()
  const router = useRouter()
  const active = ref('')
  const list = ref<ITab[]>([])

  watch(
    () => route.path,
    async (path, oldPath) => {
      if (path === props.refreshPath) return
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
            addTab({ ...route.meta, path, name: route.name })
          }
        } catch {
          throwWarn('[ProTabs] Failed to execute beforeAdd function')
        }
      } else {
        addTab({ ...route.meta, path, name: route.name })
      }
    },
    { immediate: true },
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

  function refresh(item: ITab) {
    if (!props.refreshPath) return
    router.push(props.refreshPath).then(() => {
      router.push(item.path)
    })
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

  function closeLeft(item: ITab, index: number) {
    list.value.splice(0, index)
    to(item.path)
  }

  function closeRight(item: ITab, index: number) {
    list.value.splice(index + 1)
    to(item.path)
  }

  function closeOthers(item: ITab, index: number) {
    list.value = list.value.filter((_, i) => i === index)
    to(item.path)
  }

  return {
    active,
    list,
    to,
    refresh,
    close,
    closeOther,
    closeLeft,
    closeRight,
    closeOthers,
  }
}

interface UseTabsDropdown
  extends Pick<
    UseTabs,
    'list' | 'refresh' | 'closeLeft' | 'closeRight' | 'closeOthers'
  > {
  props: ITabsProps
}

export function useTabsDropdown({
  props,
  list,
  refresh,
  closeLeft,
  closeRight,
  closeOthers,
}: UseTabsDropdown) {
  const dropdownMap = new Map<string, DropdownInstance>()

  const contextmenu = computed(() => {
    if (isObject(props.contextmenu)) {
      return Object.assign({}, props.contextmenu)
    } else if (props.contextmenu) {
      return {
        refresh: true,
        left: true,
        right: true,
        others: true,
      }
    } else {
      return {}
    }
  })

  watch(
    list,
    (value, oldValue) => {
      if (value.length > oldValue.length) return
      nextTick(() => {
        const keys = value.map((item) => item.path)

        dropdownMap.keys().forEach((key) => {
          dropdownMap.get(key)?.handleClose()
          if (!keys.includes(key)) {
            dropdownMap.delete(key)
          }
        })
      })
    },
    { deep: true },
  )

  function setDropdownRefs(el: unknown, path: string) {
    dropdownMap.set(path, el as DropdownInstance)
  }

  function removeDropdownRefs(path: string) {
    dropdownMap.delete(path)
  }

  function handleVisibleChange(val: boolean, path: string) {
    if (!val) return
    dropdownMap.forEach((dropdown, key) => {
      key !== path && dropdown.handleClose()
    })
  }

  function handleCommand(command: string, item: ITab, index: number) {
    switch (command) {
      case 'refresh':
        refresh(item)
        break
      case 'left':
        closeLeft(item, index)
        break
      case 'right':
        closeRight(item, index)
        break
      case 'others':
        closeOthers(item, index)
        break
    }
  }

  return {
    contextmenu,
    setDropdownRefs,
    removeDropdownRefs,
    handleVisibleChange,
    handleCommand,
  }
}
