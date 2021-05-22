import type { Ref } from 'vue'

export interface ITab {
  title: string
  path: string
}

export interface ITabsExpose {
  list: Ref<ITab[]>
  close: (path: string) => void
  closeOther: () => void
}
