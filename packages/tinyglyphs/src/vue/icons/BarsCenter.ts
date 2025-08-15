import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const BarsCenterIcon = defineComponent({
  name: 'BarsCenterIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 4H15M1 8H15M5 12H11","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})