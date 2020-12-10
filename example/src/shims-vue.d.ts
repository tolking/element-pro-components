declare module '*.vue' {
  import { ComponentOptions, Plugin } from 'vue'
  const comp: ComponentOptions & Plugin
  export default comp
}
