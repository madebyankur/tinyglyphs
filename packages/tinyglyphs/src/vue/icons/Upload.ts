import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const UploadIcon = defineComponent({
  name: 'UploadIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 1V11M8 1L11 4M8 1L5 4M1 11V12C1 13.6569 2.34315 15 4 15H12C13.6569 15 15 13.6569 15 12V11","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})