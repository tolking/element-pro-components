import { watch, ref, Ref } from 'vue'
import { useRoute } from 'vue-router'
import { getTitle } from '../utils/index'

export function useLang(): Ref<string> {
  const route = useRoute()
  const lang = ref()

  watch(
    () => route.path,
    (path) => {
      if (import.meta.env.SSR) return
      const html = document.getElementsByTagName('html')[0]
      const _path = path.match(/^\/([\w|-]*)\//)
      if (_path && _path[1] !== 'dev') {
        html.lang = _path[1]
        lang.value = _path[1]
      } else if (!_path) {
        html.lang = lang.value
      }
      document.title = getTitle(route.meta.title as string)
    },
    { immediate: true }
  )

  return lang
}
