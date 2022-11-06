import { computed, defineComponent, h, mergeProps, nextTick, ref } from 'vue'
import { ElButton, ElFormItem, ElStep, ElSteps } from 'element-plus'
import { isArray } from '../utils/index'
import { useCreateLabel, useFormInject, useFormMenu } from './useForm'
import { groupFormProps, stepsFormEmits } from './props'
import ProFormList from './FormList'
import type { UnknownObject } from '../types/index'

export default defineComponent({
  name: 'ProStepsForm',
  props: groupFormProps,
  emits: stepsFormEmits,
  setup(props, { emit }) {
    const form = useFormInject()
    const createLabel = useCreateLabel(props)
    const menu = useFormMenu(form?.props || {})

    const active = ref(0)
    const childProps = computed(() => {
      if (!isArray(props.columns)) return
      return props.columns[active.value].children?.reduce((all, item) => {
        return item.prop ? [...all, item.prop] : all
      }, [] as string[])
    })

    if (form) {
      form.disabled.value = true
    }

    function handleClick(value: number) {
      if (value > 0 && isArray(childProps.value)) {
        form?.formRef.value.validateField(childProps.value, (isValid) => {
          isValid && stepChange(value)
        })
      } else {
        stepChange(value)
        nextTick(() => {
          form?.formRef.value.clearValidate(childProps.value)
        })
      }
    }

    function stepChange(value: number) {
      active.value = active.value + value
      const prop = props.columns?.[active.value].prop

      if (form) {
        form.disabled.value = active.value + 1 !== props.columns?.length
        form.stepChange(prop ?? active.value)
      }
    }

    function update(value: UnknownObject) {
      emit('update:modelValue', value)
    }

    function createSteps() {
      return h(
        ElSteps,
        {
          active: active.value,
          alignCenter: true,
          class: ['pro-steps-form', !form?.props.inline && 'el-col-24'],
        },
        () =>
          props.columns?.map((item) => {
            return h(
              ElStep,
              { title: item.label },
              { title: () => createLabel(item) }
            )
          })
      )
    }

    function createDefault() {
      if (!isArray(props.columns)) return
      const item = props.columns[active.value]

      return h(
        ProFormList,
        mergeProps(props, {
          columns: item.children,
          'onUpdate:modelValue': update,
        })
      )
    }

    function createMenu() {
      if (!isArray(props.columns)) return
      return h(ElFormItem, { class: 'pro-steps-form-menu' }, () => [
        h(
          ElButton,
          mergeProps(menu.value.prevProps || {}, {
            disabled: !active.value,
            onClick: () => handleClick(-1),
          }),
          () => menu.value.prevText
        ),
        h(
          ElButton,
          mergeProps(menu.value.nextProps || {}, {
            disabled: active.value + 1 === props.columns?.length,
            onClick: () => handleClick(1),
          }),
          () => menu.value.nextText
        ),
      ])
    }

    return () => [createSteps(), createDefault(), createMenu()]
  },
})
