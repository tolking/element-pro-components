import { ref } from 'vue'

export function useShow(state?: boolean) {
  const show = ref(state ?? false)

  function toggenShow() {
    show.value = !show.value
  }

  return {
    show,
    toggenShow,
  }
}