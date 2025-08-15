import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ExternalIcon = defineComponent({
  name: 'ExternalIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M15 8V12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12V4C1 2.34315 2.34315 1 4 1H8M7 9L15 1M15 1H11M15 1V5","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})