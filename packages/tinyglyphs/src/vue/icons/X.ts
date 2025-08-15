import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const XIcon = defineComponent({
  name: 'XIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M2 14L14 2M14 14L2 2","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})