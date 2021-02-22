# Changelog

## 0.6.2

fix

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
