import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ScaleIcon = defineComponent({
  name: 'ScaleIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 3H11.5C12.3284 3 13 3.67157 13 4.5V15M10.25 5.75H10.26M8 8H8.01M5.75 10.25H5.76M3 1V11.5C3 12.3284 3.67157 13 4.5 13H15","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})