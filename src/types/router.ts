import type { Component } from 'vue'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** the Menu title */
    title?: string
    /** the Menu icon */
    icon?: string | Component
    /** whether to show in the Menu */
    hidden?: boolean
    /** whether to use ElMenuItemGroup instead of ElSubMenu */
    group?: boolean
    /** the animation name of transition pages */
    transition?: string
  }
}
