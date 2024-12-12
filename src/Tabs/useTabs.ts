import { computed, nextTick, Ref, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLocale } from '../composables/index'
import { isFunction, isObject, throwWarn } from '../utils/index'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { DropdownInstance } from 'element-plus'
import type { ITabsProps, ITabsExpose } from './type'

interface UseTabs extends ITabsExpose {
  active: Ref<string>
  to: (path: string) => void
  refresh: (item: RouteLocationNormalizedLoaded) => void
  closeLeft: (item: RouteLocationNormalizedLoaded, index: number) => void
  closeRight: (item: RouteLocationNormalizedLoaded, index: number) => void
  closeOthers: (item: RouteLocationNormalizedLoaded, index: number) => void
}

export function useTabsMenu() {
  const { t } = useLocale()

  return computed(() => ({
    refresh: t('pro.tabs.refresh'),
    left: t('pro.tabs.left'),
    right: t('pro.tabs.right'),
    others: t('pro.tabs.others'),
  }))
}

export function useTabs(props: ITabsProps): UseTabs {
  const route = useRoute()
  const router = useRouter()
  const active = ref('')
  const list = ref<RouteLocationNormalizedLoaded[]>([])

  watch(
    () => route.path,
    async (path, oldPath) => {
      if (path === props.refreshPath) return
      if (oldPath && !props.keepHiddenRoute) {
        const item = list.value.find((item) => item.path === oldPath)
        item?.meta?.hidden && close(oldPath)
      }
      let canAdd: boolean | void = true

      if (isFunction(props.beforeAdd)) {
        try {
          canAdd = await props.beforeAdd({
            route,
            oldPath,
            list,
            close,
            closeOther,
          })
        } catch {
          throwWarn('[ProTabs] Failed to execute beforeAdd function')
          canAdd = false
        }
      }

      if (canAdd !== false) {
        addTab({ ...route })
      }
    },
    { immediate: true },
  )

  function addTab(tab: RouteLocationNormalizedLoaded) {
    !list.value.find((item) => item.path === tab.path) && list.value.push(tab)
    active.value = tab.path
  }

  function to(path: string) {
    if (path !== route.path) {
      const item = list.value.find((item) => item.path === path)

      router.push({
        path,
        query: item?.query,
        hash: item?.hash,
      })
    }
  }

  function refresh(item: RouteLocationNormalizedLoaded) {
    if (!props.refreshPath) return
    const path = item.path
    const index = list.value.findIndex((item) => item.path === path)
    list.value.splice(index, 1)

    router.replace(props.refreshPath).then(() => {
      list.value.splice(index, 0, item)
      router.replace({
        path,
        query: item?.query,
        hash: item?.hash,
      })
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
    const item = list.value.find((item) => item.path === route.path)
    list.value = item ? [item] : []
  }

  function closeLeft(item: RouteLocationNormalizedLoaded, index: number) {
    list.value.splice(0, index)
    to(item.path)
  }

  function closeRight(item: RouteLocationNormalizedLoaded, index: number) {
    list.value.splice(index + 1)
    to(item.path)
  }

  function closeOthers(item: RouteLocationNormalizedLoaded, index: number) {
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

  function handleCommand(
    command: string,
    item: RouteLocationNormalizedLoaded,
    index: number,
  ) {
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
