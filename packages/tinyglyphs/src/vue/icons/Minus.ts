import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const MinusIcon = defineComponent({
  name: 'MinusIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M14 8L2 8","stroke-linecap":"round"})
    ])
  }
})