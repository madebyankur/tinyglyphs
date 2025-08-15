import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const TabletIcon = defineComponent({
  name: 'TabletIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M7.5 4H8.5M5 1H11C12.6569 1 14 2.34315 14 4V12C14 13.6569 12.6569 15 11 15H5C3.34315 15 2 13.6569 2 12V4C2 2.34315 3.34315 1 5 1Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})