import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowReturnLeftIcon = defineComponent({
  name: 'ArrowReturnLeftIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 6H11C13.2091 6 15 7.79086 15 10C15 12.2091 13.2091 14 11 14H9M1 6L5 2M1 6L5 10","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})