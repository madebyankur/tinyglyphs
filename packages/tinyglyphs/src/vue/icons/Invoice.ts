import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const InvoiceIcon = defineComponent({
  name: 'InvoiceIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M5 5.5H11M5 8.5H11M5 11.5H8M2 1V12C2 13.6569 3.34315 15 5 15H11C12.6569 15 14 13.6569 14 12V1L13.4142 1.58579C12.6332 2.36683 11.3668 2.36684 10.5858 1.58579L10 1L9.41421 1.58579C8.63317 2.36683 7.36684 2.36684 6.58579 1.58579L6 1L5.41421 1.58579C4.63317 2.36683 3.36684 2.36684 2.58579 1.58579L2 1Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})