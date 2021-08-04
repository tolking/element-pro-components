import { watch, ref, Ref } from 'vue'
import { useRoute } from 'vue-router'
import { langs } from '../utils/index'

export function useLang(): Ref<string> {
  const route = useRoute()
  const lang = ref()

  watch(
    () => route.path,
    (path) => {
      const _path = path.match(/^\/([\w|-]*)\//)
      lang.value = _path && _path[1] !== 'dev' ? _path[1] : langs[0].key
    },
    { immediate: true }
  )

  return lang
}
