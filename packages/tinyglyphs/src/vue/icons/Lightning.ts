import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const LightningIcon = defineComponent({
  name: 'LightningIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M10 1L4 8H12L6 15","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})