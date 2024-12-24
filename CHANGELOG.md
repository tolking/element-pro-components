# Changelog

## 1.4.1

feat

- Form: support binding component instances through ref (#550) (#555)
- Form: optimize ProFormComponent (#551)

fix

- Table: the load triggered multiple times when page-size is changed (#554)
- Table: pagination are not displayed when using pageCount (#558)

other

- Form: add aria-label for ArrayForm (#552)
- Form: simplify expose related code (#553)
- Table: simplify expose related code (#556)
- Layout: a11y enhancements for fold button (#557)

## 1.4.0

breaking changes

- Crud: Remove searchRules attribute, please use :search-props="{ rules: ... }" instead (#528)
- move element-plus and vue-router to peerDependencies (#530) (#536)
- Form: remove modelKey attribute (#544)
- Tabs: the label slot parameter has been changed to RouteLocationNormalizedLoaded (#546)

feat

- Search: add new components Search (#527) (#529) (#537)
- Crud: refactor search (#528) (#535)
- Tabs: add contextmenu prop (#534)
- add multi-language files (#538)
- add key fro list VNode (#542)
- Form: add models attribute (#544)
- Tabs: add query and hash when jumping (#546) (#547)

fix

- Crud: the menu styles (#533)
- error when switching to multiple languages (#531)

other

- add breakpoint debugging config for VS Code (#532)
- optimize the export type of components (#539) (#541) (#545)
- docs: update (#543)
- docs: optimize multi-language switching logic (#548)

### migration guide

Compare [1.3.1...v1.4.0](https://github.com/tolking/element-pro-components/compare/v1.3.1...v1.4.0)

- Crud: searchRules -> :search-props="{ rules: [searchRules] }"
- Form: modelKey -> models: [{ prop: [prop], key: [modelKey] }]
- Tabs:

```diff
- <template #label="{ icon, title }">
+ <template #label="{ icon, meta }">
-  <span>{{ title }}</span>
+  <span>{{ meta.title }}</span>
```

## 1.3.1

refactor

- use useSplitReactive to replace reactiveOmit and reactivePick (#515)

fix

- Table | Crud: warn error about prevIcon and nextIcon (#516)

## 1.3.0

feat

- Radro: sync label prop to value (#504)
- Checkbox: sync label prop to value (#508)

other

- change the type to module (#496)
- Select: remove the slot parameter data (#505)
- Table: remove the deprecated slots (#506)
- Form: remove the deprecated slots (#507)
- Crud: remove the deprecated slots (#509)
- Descriptions: remove the deprecated slots (#510)
- remove the deprecated function (#511)

## 1.2.12

feat

- Crud: add some slots `crud-table` `crud-dialog` `crud-search` `crud-form` `crud-detail` (#478)
- Crud: add expose function openDialog and closeDialog (#479)

## 1.2.11

feat

- Layout: add collapse-button slot (#472)
- Form: support custom v-model arguments (#473)
- Tabs: add label slot (#474)

fix

- Descriptions: avoid render header when without slot (#467)

other

- optimize CSS variables (#468)

## 1.2.10

feat

- Form: add show attribute to column (#459)

fix

- Crud: the size of button is overwritten (#460)

perf

- Table: optimize rendering of hidden table column (#456)

## 1.2.9

feat

- Form: refactor FormComponent (#446)
- add ElementProResolver from unplugin-vue-components (#447)
- type: add type helper defineComponentProps (#445)

## 1.2.8

fix

- build Error Nodejs^15 Cannot find module 'node:path' (#431)
- Form: validation error of ArrayForm (#440)
- Form: disable reset button when submit (#442)

other

- add CODE_OF_CONDUCT.md (#432)
- add issue template (#433)
- docs: add contributing.md (#436)
- add pull_request_template.md (#437)
- Form: optimization type (#438)
- update README (#439)

## 1.2.7

feat

- Form: solving the attrs (#424)

fix

- Form: the style link error (#426)
- optimize SSG about teleports (#428)

## 1.2.6

fix

- build: missing the code prompt file (#422)

## 1.2.5

feat

- Menu: support defining the group of menu (#409)
- Checkbox|Radio|Select: support nested value for config (#410)
- Form: generation the TabsForm based on columns (#413)
- Form: generation the CollapseForm based on columns (#414)
- Form: generation the StepsForm based on columns (#415)
- Form: optimize code (#416)
- Form: support bind attributes to group forms (#417)
- Crud: sync the group form changes (#418)

other

- build: change join to resolve (#412)
- docs: optimize SSG about teleports (#419)
- docs: optimize document directory (#420)

## 1.2.4

feat

- FilterRoutes: Ignore hidden routes (#396)
- Form: add array attribute for using Array Form (#402) (#404) (#406)
- Form: add inject attributes (#403)
- Form: support the generation of GroupForm through config (#405)

fix

- FilterRoutes: optimization styles (#397)
- Tabs: name attribute is not added when using beforeAdd (#407)

## 1.2.3

feat

- FilterRoutes: add new components ProFilterRoutes (#387)
- Form: add indexes for form-[prop] slots (#390)
- Form: add indexes for form-[prop]-label slots (#391)

fix

- ColumnSetting: the CheckedKeys loses reactive (#386)

other

- build: nodejs 14 is not supported replaceAll (#384)
- chore: updata dependencies (#385)
- chore: use lodash-unified replace lodash (#388)
- type: simplified the DeepPath type (#389)
- Checkbox: sync the props name change (#392)
- docs: optimize the build of docs (#393)

## 1.2.2

feat

- Tabs: record the route name (#369)
- InputTag: optimization tag styles (#378)
- Menu: optimize performance of hasMultiChild function (#368)

fix

- Menu: path error when only one route in children (#367)
- TreeSelect: lint error (#377)

other

- add attribute enum autosuggestion for web-types (#373)
- docs: split AutocompleteTag component (#381)

## 1.2.1

feat

- Tabs: add keepHiddenRoute attribute (#360)
- Tabs: add beforeAdd attribute (#361)
- Tabs: optimized style

## 1.2.0

breaking changes

- Menu: remove Link components (#344)
- Layout: styles (#347)
- Form: modify the name of the slot (#349)
- Table: modify the name of the slot (#351)
- Descriptions: modify the name of the slot (#352)
- Crud: sync the name change of the slot (#353)

feat

- ColumnSetting: add the default slot (#341)

fix

- Layout: container width error (#336)
- Crud: prevent click event (#337)

other

- ColumnSetting: sync the props change of ElTree (#340)
- Select: sync the props change of ElSelect (#342)
- Table: sync the props change of ElTable (#343)
- build: remove base attribute of Vite (#354)
- docs: optimized Code component A11y support (#338)

### migration guide

Compare [1.1.6...v1.2.0](https://github.com/tolking/element-pro-components/compare/v1.1.6...v1.2.0)

In order to customize the Menu and Layout components style, the Link component inside the Menu has been removed in the new version. Therefore, it does not support the jump of complete link routing. If you need this, you need to refer to [Menu demo](https://tolking.github.io/element-pro-components/en-US/components/menu#custom-router) or [Layout demo](https://tolking.github.io/element-pro-components/en-US/components/layout#custom-router) implementation.

In order to avoid errors caused by the same name of [prop] slots and other slots, the new version add the prefix to the [prop] slots of the Form, Table and Descriptions components (same as the Crud component [prop] slots).

## 1.1.6

feat

- Crud: rename span to detailSpan for Descriptions (#322)
- InputTag: A11y enhancements (#328)

fix

- type: override the possibly derived never value (#323)
- InputTag: styles error when focused (#325)
- AutocompleteTag: styles error when focused (#326)

## 1.1.5

fix

- fix sideEffects error (#316)

other

- optimization the emits type (#317)
- optimization the form menu (#318)

## 1.1.4

feat

- Form: prevent default submit (#308)
- type: more elegant type deduction for prop in Columns (#307)

refacto

- Layout: optimize the collapse of the menu (#309)
- composables: move the composables function (#310)
- props: export all props (#312)
- emits: export all emits (#313)

## 1.1.3

feat

- Crud: change text button to link button
- Crud | Form: cancel deep merging of menus

fix

- Card: styles error in Dark Mode
- AutocompleteTag: styles error

other

- use objectPick from lodash

## 1.1.2

feat

- support Dark Mode
- sync the ElButton change from ElementPlus v2.2.0
- docs: support toggle Light or Dark mode

fix

- Menu: styles error when collapse
- utils: the warn information disappears after build

other

- Crud: optimization type
- test: jest -> vitest
- workflows: npm -> pnpm

## 1.1.1

fix

- Crud: lost the styles of descriptions
- Crud: type error

## 1.1.0

breaking changes

- adjust the implementation of breakpoints
- build: modify the built name element-pro-components to index
- Crud: adjust slots name

```
[prop]-header -> table-[prop]-header
append -> table-append
expand -> table-expand
[prop]-error -> form-[prop]-error
[prop]-label -> form-[prop]-label
```

feat

- Crud: add view detail through Descriptions
- Crud: add slots `detail` `detail-title` `detail-extra` `detail-[prop]` `detail-[prop]-label` `dialog-top` `dialog-bottom`
- Crud: add emits `add` `edit` `detail`
- Descriptions: add the default slot

fix

- docs: route jump error when with hash
- InputTag ｜ AutocompleteTag: tag can close when form is disabled
- sync the CSS var change

## 1.0.1

feat

- Layout: when the breakpoint is xs, close the sidebar when the menu is clicked
- InputTag|AutocompleteTag: add emits `input` `tag-add` `tag-remove`
- docs: extended demo capabilities
  - Edit on StackBlitz
  - View on Github
  - Copy code

fix

- TreeSelect: some config ​​are not converted
- styles: add width for Card
- fix: exports error

## 1.0.0

breaking changes

- Table|Crud|Form: remove global config
- Layout: reimplement the KeepAlive
- Layout: remove the props `fixed-main`
- Layout: remove the slots `main-top` `main-bottom`
- InputTag: change the trigger default value `space` to `enter`
- Select|TreeSelect|Descriptions: rename the slot parameter data to item
- rename `useScreenSize` to `useSharedBreakpoint`

feat

- Card: add a new component Card
- Descriptions: add `render` and `renderLabel` in columns
- Checkbox|Radio|Select|TreeSelect: cancel the conversion of the data
- Layout: support transition form RouteMeta
- Layout: add default slot to custom RouterView
- Select|TreeSelect: sync props change from element-plus
- add composables function `useBreakpointWidth` to get reactive Dialog width
- sync css var change from element-plus
- sync ComponentSize change from element-plus
- styles: add cjs form SSR
- styles: compressed CSS by cssnano

fix

- Form: style error when used gutter
- Layout: the KeepAlive and Transition do not work

### migration guide

Compare [0.18.3...v1.0.0](https://github.com/tolking/element-pro-components/compare/v0.18.3...v1.0.0)

To support both Transition and KeepAlive, the Layout component had to be refactored. The original internal card-like has been removed.

- It is recommended to use the new Card component to wrap your pages.
- If you don't care about KeepAlive, you can use default slots to override RouterView to implement global Card wrapping, [demo](https://github.com/tolking/element-pro-components/blob/main/demo/Layout/router-view.vue).

The global configuration has been removed, it is recommended to use related components to pass parameters or internationalization.

## 0.18.3

feat

- sync css var change from element-plus

other

- type: optimization type

## 0.18.2

breaking changes

- rename checkUrl to isURL

feat

- InputTag|AutocompleteTag: sync the style chang

other

- refacto: rewite props

## 0.18.1

fix

- Descriptions: the columns error

feat

- Descriptions: add props align and labelAlign

other

- sync ComponentSize change from element
- Tabs|Breadcrumb|Menu|Radio: import props from element-plus

## 0.18.0

breaking changes

- updata element-plus to v2
- Table|Crud: flat the props of pagination
- Table|Crud: remove the `size-change` `current-change` `prev-click` `next-click` event, use `load` replace
- change `popperAppendToBody` to `teleported`

fix

- InputTag: styles error

feat

- Table|Crud: add `load` event
- Form|Crud: add `scrollToField` for Methods
- sync the props change from element-plus v2

other

- type: optimized the type of emits

## 0.17.1

fix

- Menu: nested route slot error
- Menu: style error when collapse
- Layout: styles error when mode="horizontal"

## 0.17.0

breaking changes

- global configuration injection via components is no longer supported
- Form|Table|Crud: remove InstallOptions

fix

- Menu: style error when collapse

feat

- sync components size chang from element-plus
- optimize composable function

other

- import some types from element-plus
- optimized build

## 0.16.4

feat

- add defineOptions
- Form: add define function (`defineFormColumns` `defineFormMenuColumns` `defineFormSubmit`)
- Table: add define function (`defineTableColumns` `defineTableMenuColumns` `defineTableSelectionColumns` `defineTableIndexColumns` `defineTableExpandColumns`)
- Crud: add define function (`defineCrudColumns` `defineCrudMenuColumns` `defineCrudBeforeOpen` `defineCrudBeforeClose` `defineCrudSearch` `defineCrudSubmit`)
- Descriptions: add define function (`defineDescriptionsColumns`)

other

- type: add IsAny to check any

## 0.16.3

fix

- sync package name changes from @element-plus/icons-vue
- sync css-variables name changes from Element
- sync useLocale changes from Element

other

- refactor some function

## 0.16.2

fix

- sync css variable name changes from Element
- sync hook name change from Element
- Form|Layout: remove warning message

other

- type: optimization type DeepKeyof

## 0.16.1

fix

- Form: clear the default value

feat

- Form: add loading for slots menu-left and menu-right
- Crud: add loading for slots form-menu-left and form-menu-right

## 0.16.0

fix

- Form: missing icon on plus^1.2.0

feat

- Descriptions: support get nested value
- Table: support get nested value
- Form: support get and set nested value
- Crud: support get and set nested value

other

- type: optimization type DeepKeyof

## 0.15.0

breaking changes

- remove function findRouterPath

fix

- Menu: styles error
- ColumnSetting: missing icon on plus^1.2.0

feat

- Descriptions: add ProDescriptions
- Breadcrumb: realized by route.matched
- add components as icon in router

## 0.14.1

fix

- Crud: loss props to Table
- Layout: the header z-index too high
- Form: missing item in label slots

feat

- Select: add default slots

## 0.14.0

breaking changes

- remove useVModel, use useVModel form vueuse replace
- rename the GlobalComponents file element-pro-components to components
- rename findRouterItemListByPath to findRouterPath

fix

- Menu: error style on horizontal mode
- Table: display undefined when no value
- Select|TreeSelect|Radio|Checkbox: cannot choose value 0

feat

- Layout: add prop fixed-header, fixed-main, mode and more
- Tabs: close when leaving hidden router
- Breadcrumb: add use router alias name to lookup
- InputTag|AutocompleteTag: add max to limit the number of tag
- Table: add root node

other

- refactor(all components): optimize type by render
- types: optimization type

## 0.13.2

breaking changes

- use useWindowSize from vueuse replace resize-observer-polyfill
- use useAttrs from element-plus replace old useAttrs

fix

- Menu: missing style
- Form: the default slot is not displayed
- Crud: search slot error
- Crud: show menuColumns when without slot

feat

- Form: support i18n
- Crud: support i18n

other

- type: optimization type

## 0.13.1

fix

- Table: missing size in slot parameter
- Crud: slots error
- Form: styles error on children form

other

- type: optimization type

## 0.13.0

breaking changes

- Table: remove useTableSlotList
- Form: remove useFormSlotList
- Crud: remove useCrudAttrs

feat

- Table: Improve slot performance by render
- Form: Improve slot performance by render
- Crud: Improve slot performance by render
- chore: synchronize changes in element row and col
- type: add GlobalComponents (If you use VS Code with typescript to develop, You will need it)

```diff
// tsconfig.json
{
  "include": [
+   "node_modules/element-pro-components/types/element-pro-components.d.ts"
  ]
}
```

fix

- Menu: horizontal style error

## 0.12.0

breaking changes

- It is recommended to use component icons instead of font icons. reference [use-icon](https://tolking.github.io/element-pro-components/en-US/guide/router#use-icon)
- Use css-variables of element-plus to replace a lot of original css-variables. [Compare](https://github.com/tolking/element-pro-components/commit/d22b10187403b37b83b34136e65d53ffc83076a1#diff-ca526a7b1a2c5b894cbb9a7a2dea0320aa294e4885e86ab038dd013c4c8336a6)

feat

- Link: add components ProLink
- styles: add introduce styles through js

fix

- types: type error when building

## 0.11.2

fix

- styles: unconverted css-variables

## 0.11.1

feat

- TreeSelect: add prop only-select-leaf
- Layout: change the button of menu

fix

- Menu: routes lose reactive

other

- perf: use shallowRef replace ref

## 0.11.0

feat

- TreeSelect: add ProTreeSelect

fix

- styles: missing css style
- Form: styles error

## 0.10.1

feat

- Form: support load local component

fix

- Menu: display error when use hidden
- Crud: expand slot does not carry content
- Form: grid layout style error on element-plus 1.0.2-beta.53

## 0.10.0

breaking changes

- remove slots `left-header` `right-header` `bottom-header` in Layout
- remove `style.css`, need to use `styles/index.css` instead

```diff
- import 'element-pro-components/lib/style.css'
+ import 'element-pro-components/lib/styles/index.css'
```

feat

- refactor styles: support imports styles on demand

## 0.9.4

feat

- Form: bind the native component value

fix

- Table: error when show Array in data

## 0.9.3

breaking changes

- type: rename DeepTypeof to DeepKeyof

fix

- Crud: reset form data when closed dialog

## 0.9.2

feat

- Form: support use slots in columns by `props.slots`
- Form: optimization the children form styles
- Form: support use component input and textarea
- Table: add render in columns
- Table: change the default styles of pagination
- Select: add option group

fix

- Crud: resetForm not work when close edit form
- type: DeepTypeof error
- Install config is not merged when on demand

## 0.9.1

breaking changes

- remove funtion filterRouterByHidden

feat

- Tabs: add expose function
- optimize router

## 0.9.0

breaking changes

- change the utils function filterSlotDeep to filterFlat

feat

- ProColumnSetting: add ProColumnSetting to control the column of `Table` and `Crud`
- Crud: add action slot
- Table: add hide for columns

## 0.8.3

breaking changes

- Layout: will remove slots `left-header` `right-header` `bottom-header`, use `header-left` `header-right` `header-bottom` replace

feat

- Layout: add slots `footer` `main-top` `main-bottom` `header-left` `header-right` `header-bottom`

## 0.8.2

feat

- Crud: auto width for dialog

fix

- \_self does not exist on vue 3.0.11
- error tip on vue 3.0.11

## 0.8.1

feat

- Form: add grid layout form Form

## 0.8.0

breaking changes

- change the order of submit arg

```diff
export type ICrudSubmit = (
-  formType: ICrudFormType,
  close: () => void,
  done: () => void,
+ formType: ICrudFormType,
  isValid: boolean,
  invalidFields?: UnknownObject
) => void
```

feat

- Crud: add event `searchReset`

fix

- Form: disabled reset button when click submit
- Crud: miss ElButton
- Crud: error when menu is true
- Crud: miss search menu when menu is false
- Crud: miss form menu

other

- add Crud for vetur
- refactor docs

## 0.7.0

breaking changes

- Form: remove menu slot
- adjustment type prefix (Pro to I)

feat

- Crud: add ProCrud
- Form: add default buttons
- Form: add install options
- Form: add loading for submit button
- Form: add menu-left and menu-right slot
- add global menu config
- export components props type
- export all composables and types

fix

- Layout: routes is not work
- Menu: the meta may be undefined
- referencing functions directly from element-plus generates errors

## 0.6.1

fix

- Form|Table: loss of reactivity

## 0.6.0

breaking changes

- remove `index.min.css` `index.css`, need to use `style.css` instead
- remove `useHover` `useScroll` `useResize`
- change `usrFilterAttrs` to `useAttrs`

fix

- Layput: Table widening causes width error
- Form: display on phone when use inline
- Table|Tabs: whitout install function

other

- optimize export type

## 0.5.1

fix

- fix exports error

## 0.5.0

feat

- Layput: add prop for Menu, add transition animation
- Table: ignore pagination when without `total`, expose Table meahods
- Form: optimize the display on phone, expose form methods

fix

- Form: rules not work on sub-form

## 0.4.0

feat

- InputTag|AutocompleteTag: add `trigger` `type` `hit` `color` `effect` prop

fix

- `filterRouterByHidden` without check the deep children

other

- InputTag|AutocompleteTag: remover `tag` prop
- add tags and attributes components for vetur

## 0.3.0

feat

- add ProAutocompleteTag
- add ProCheckbox
- add ProCheckboxButton
- add ProRadio
- add ProRadioButton
- add ProSelect

fix

- without types

## 0.2.0

feat

- add ProTable
- add ProForm

## 0.1.0

rebuild

- vue2 -> vue3
- element-ui -> element-plus
- js -> ts
