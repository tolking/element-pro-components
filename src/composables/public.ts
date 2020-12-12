import { ref } from 'vue'

export function useShow(state?: boolean) {
  const show = ref(state ?? false)

  function toggleShow() {
    show.value = !show.value
  }

  return {
    show,
    toggleShow,
  }
}
