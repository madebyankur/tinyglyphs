import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const PauseIcon = defineComponent({
  name: 'PauseIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M5 2V14M11 2V14","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})