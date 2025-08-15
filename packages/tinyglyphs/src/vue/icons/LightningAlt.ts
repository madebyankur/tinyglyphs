import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const LightningAltIcon = defineComponent({
  name: 'LightningAltIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M4 8L7 1H12L9 6H12L5 15L7 8H4Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})