import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ChevronLeftIcon = defineComponent({
  name: 'ChevronLeftIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M10.5 3L5.5 8L10.5 13","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})