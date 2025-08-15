import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ItalicIcon = defineComponent({
  name: 'ItalicIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M9 2L7 14M9 2H6M9 2H12M7 14H4M7 14H10","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})