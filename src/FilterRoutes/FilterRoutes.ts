import { computed, defineComponent, h, mergeProps, ref } from 'vue'
import { useRouter, RouteRecordRaw } from 'vue-router'
import { reactiveOmit } from '@vueuse/core'
import { useCurrentRoutes } from '../composables/index'
import { filterFlat } from '../utils/index'
import { ProSelect, SelectDataItem } from '../Select/index'
import { filterRoutesProps } from './props'

export default defineComponent({
  name: 'ProFilterRoutes',
  props: filterRoutesProps,
  setup(props, { slots }) {
    const router = useRouter()
    const routes = useCurrentRoutes()
    const config = reactiveOmit(props, 'routes')

    const value = ref('')

    const data = computed(() => {
      return filterFlat<RouteRecordRaw[], SelectDataItem[]>(
        routes.value,
        'redirect',
        false,
        (item) => ({
          label: item.meta?.title || item.path,
          value: item.path,
        })
      )
    })

    function handleSerach(path: string) {
      value.value = path
      router.push(path)
    }

    function createDefault({ item }: SelectDataItem) {
      if (slots.default) {
        return slots.default({ item })
      } else {
        return [
          h('p', { class: 'filter-routes-title' }, item.label),
          h('p', { class: 'filter-routes-info' }, item.value),
        ]
      }
    }

    return () =>
      h(
        ProSelect,
        mergeProps(config, {
          modelValue: value.value,
          data: data.value,
          filterable: true,
          class: 'pro-filter-routes',
          popperClass: 'pro-filter-routes-popper',
          'onUpdate:modelValue': handleSerach,
        }),
        { default: createDefault }
      )
  },
})
