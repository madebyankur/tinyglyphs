import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ToggleOffIcon = defineComponent({
  name: 'ToggleOffIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 8C1 5.23858 3.23858 3 6 3H10C12.7614 3 15 5.23858 15 8C15 10.7614 12.7614 13 10 13H6C3.23858 13 1 10.7614 1 8Z"}),
      h('path', {"d":"M4.5 8C4.5 7.17157 5.17157 6.5 6 6.5C6.82843 6.5 7.5 7.17157 7.5 8C7.5 8.82843 6.82843 9.5 6 9.5C5.17157 9.5 4.5 8.82843 4.5 8Z"})
    ])
  }
})