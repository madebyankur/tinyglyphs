import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const DownloadIcon = defineComponent({
  name: 'DownloadIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 10V2M8 10L11 7M8 10L5 7M1 11V12C1 13.6569 2.34315 15 4 15H12C13.6569 15 15 13.6569 15 12V11","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})