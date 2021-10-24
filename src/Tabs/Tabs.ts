import { defineComponent, h } from 'vue'
import { ElTabs, ElTabPane } from 'element-plus'
import { useTabs } from '../composables/index'
import props from './props'

export default defineComponent({
  name: 'ProTabs',
  props,
  setup(props, { expose }) {
    const { active, list, to, close, closeOther } = useTabs()

    expose({
      list,
      close,
      closeOther,
    })

    return () =>
      h(
        ElTabs,
        {
          modelValue: active.value,
          closable: list.value.length > 1,
          type: props.type,
          tabPosition: props.tabPosition,
          beforeLeave: props.beforeLeave,
          stretch: props.stretch,
          class: 'pro-tabs',
          onTabClick: to,
          onTabRemove: close,
        },
        () =>
          list.value.map((item) =>
            h(ElTabPane, { name: item.path, label: item.title })
          )
      )
  },
})
