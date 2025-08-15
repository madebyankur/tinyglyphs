import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const Bars3Icon = defineComponent({
  name: 'Bars3Icon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 4H15M1 8H15M1 12H15","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})