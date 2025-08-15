import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const VueIcon = defineComponent({
  name: 'VueIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 1L8 15L15 1M4.5 1L8 8L11.5 1","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})