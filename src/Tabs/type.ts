import type { Ref } from 'vue'

export interface ITab {
  path: string
  title?: string
  hidden?: boolean
}

export interface ITabsExpose {
  list: Ref<ITab[]>
  close: (path: string) => void
  closeOther: () => void
}
