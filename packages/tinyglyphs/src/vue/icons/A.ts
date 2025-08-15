import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const AIcon = defineComponent({
  name: 'AIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M4 12.5L5.2 9.50002M5.2 9.50002L7.53576 3.66062C7.70339 3.24155 8.29661 3.24155 8.46424 3.66062L10.8 9.50002M5.2 9.50002H10.8M10.8 9.50002L12 12.5","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})