import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ChevronRightIcon = defineComponent({
  name: 'ChevronRightIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M5.5 3L10.5 8L5.5 13","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})