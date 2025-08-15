import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowReturnRightIcon = defineComponent({
  name: 'ArrowReturnRightIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M15 6H5C2.79086 6 1 7.79086 1 10C1 12.2091 2.79086 14 5 14H7M15 6L11 2M15 6L11 10","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})