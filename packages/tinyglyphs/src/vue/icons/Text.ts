import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const TextIcon = defineComponent({
  name: 'TextIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 2H4C2.89543 2 2 2.89543 2 4M8 2H12C13.1046 2 14 2.89543 14 4M8 2V14M8 14H6M8 14H10","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})