import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ChevronTopIcon = defineComponent({
  name: 'ChevronTopIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M3 10.5L8 5.5L13 10.5","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})