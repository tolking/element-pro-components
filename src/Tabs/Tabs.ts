import { defineComponent, h, mergeProps } from 'vue'
import { ElTabs, ElTabPane } from 'element-plus'
import { useTabs } from './useTabs'
import { tabsProps } from './props'

export default defineComponent({
  name: 'ProTabs',
  props: tabsProps,
  setup(props, { expose, slots }) {
    const { active, list, to, close, closeOther } = useTabs(props)

    expose({
      list,
      close,
      closeOther,
    })

    function createDefault() {
      return list.value.map((item) => {
        return h(
          ElTabPane,
          { name: item.path, label: item.title },
          slots.label
            ? { label: () => slots.label && slots.label(item) }
            : undefined
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
          onTabRemove: close,
        }),
        () => createDefault()
      )
  },
})
