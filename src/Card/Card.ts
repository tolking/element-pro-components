import { Component, computed, defineComponent, h, mergeProps } from 'vue'
import { useCol, useRow } from '../composables/index'
import { isObject } from '../utils/index'
import props from './props'

export default defineComponent({
  name: 'ProCard',
  props,
  setup(props, { slots }) {
    const { rowStyle, rowClass } = useRow(props)
    const { colStyle, colClass } = useCol(props)
    const withCard = computed(() => {
      return slots.default
        ? !!slots.default().find((item) => {
            const name = isObject(item.type)
              ? (item.type as Component)?.name
              : item.type
            return name === 'ProCard'
          })
        : false
    })

    function createHeader() {
      if (slots.header || props.header) {
        return h(
          'div',
          { class: 'pro-card__header' },
          slots.header ? slots.header() : props.header
        )
      } else {
        return undefined
      }
    }

    function createBody() {
      return h(
        'div',
        mergeProps(
          { style: props.bodyStyle },
          {
            class: [
              'pro-card__body',
              withCard.value && rowClass.value,
              props.direction && `is-direction-${props.direction}`,
            ],
            style: withCard.value && rowStyle.value,
          }
        ),
        slots.default && slots.default()
      )
    }

    function createDefault() {
      return h(
        'div',
        {
          class: [
            'pro-card',
            props.ghost && 'is-ghost',
            props.split && 'is-split',
            props.shadow && `is-${props.shadow}-shadow`,
          ],
        },
        [createHeader(), createBody()]
      )
    }

    return () => {
      if (colClass.value.join() !== 'el-col,el-col-24') {
        return h(
          'div',
          {
            class: colClass.value,
            style: colStyle.value,
          },
          createDefault()
        )
      } else {
        return createDefault()
      }
    }
  },
})
