import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const CodeBracketIcon = defineComponent({
  name: 'CodeBracketIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M4 5L1 8L4 11M12 5L15 8L12 11M9 2L7 14","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})