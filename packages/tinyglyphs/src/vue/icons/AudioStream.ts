import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const AudioStreamIcon = defineComponent({
  name: 'AudioStreamIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M2 10V6M8 12V4M11 13V3M14 10V6M5 15V1","stroke-linecap":"round"})
    ])
  }
})