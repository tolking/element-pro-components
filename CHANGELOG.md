# Changelog

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
