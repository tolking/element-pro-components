import { defineComponent, h, markRaw, mergeProps } from 'vue'
import {
  ElTabs,
  ElTabPane,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
} from 'element-plus'
import { Back, Close, Refresh, Right } from '@element-plus/icons-vue'
import { useTabs, useTabsDropdown, useTabsMenu } from './useTabs'
import { tabsProps } from './props'
import type { VNode } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

export default defineComponent({
  name: 'ProTabs',
  props: tabsProps,
  setup(props, { expose, slots }) {
    const {
      active,
      list,
      to,
      refresh,
      close,
      closeOther,
      closeLeft,
      closeRight,
      closeOthers,
    } = useTabs(props)
    const {
      contextmenu,
      setDropdownRefs,
      removeDropdownRefs,
      handleVisibleChange,
      handleCommand,
    } = useTabsDropdown({
      props,
      list,
      refresh,
      closeLeft,
      closeRight,
      closeOthers,
    })
    const menu = useTabsMenu()

    expose({
      list,
      close,
      closeOther,
    })

    function createDropdown(
      item: RouteLocationNormalizedLoaded,
      index: number,
    ) {
      const menuList: VNode[] = []

      if (contextmenu.value?.refresh && props.refreshPath) {
        menuList.push(
          h(
            ElDropdownItem,
            {
              icon: markRaw(Refresh),
              command: 'refresh',
            },
            () => menu.value.refresh,
          ),
        )
      }
      if (contextmenu.value?.left) {
        menuList.push(
          h(
            ElDropdownItem,
            {
              icon: markRaw(Back),
              command: 'left',
              disabled: index === 0,
            },
            () => menu.value.left,
          ),
        )
      }
      if (contextmenu.value?.right) {
        menuList.push(
          h(
            ElDropdownItem,
            {
              icon: markRaw(Right),
              command: 'right',
              disabled: index === list.value.length - 1,
            },
            () => menu.value.right,
          ),
        )
      }
      if (contextmenu.value?.others) {
        menuList.push(
          h(
            ElDropdownItem,
            {
              icon: markRaw(Close),
              command: 'others',
              disabled: list.value.length <= 1,
            },
            () => menu.value.others,
          ),
        )
      }

      if (!menuList.length) return createItemSlot(item)

      return h(
        ElDropdown,
        {
          ref: (el) => setDropdownRefs(el, item.path),
          trigger: 'contextmenu',
          role: 'menu',
          onCommand: (command) => handleCommand(command, item, index),
          'onVisible-change': (val) => handleVisibleChange(val, item.path),
        },
        {
          default: () => createItemSlot(item),
          dropdown: () => h(ElDropdownMenu, {}, () => menuList),
        },
      )
    }

    function createItemSlot(item: RouteLocationNormalizedLoaded) {
      return slots.label
        ? slots.label({ ...item.meta, ...item }) // TODO: change to `item` in the next major version
        : item.meta.title
    }

    function createDefault() {
      return list.value.map((item, index) => {
        return h(
          ElTabPane,
          { key: item.path, name: item.path, label: item.meta.title },
          {
            label: () =>
              props.contextmenu
                ? createDropdown(item, index)
                : createItemSlot(item),
          },
        )
      })
    }

    return () =>
      h(
        ElTabs,
        mergeProps(props, {
          modelValue: active.value,
          closable: list.value.length > 1,
          class: 'pro-tabs',
          onTabChange: to,
          onTabRemove: (path: string) => {
            removeDropdownRefs(path)
            close(path)
          },
        }),
        () => createDefault(),
      )
  },
})
