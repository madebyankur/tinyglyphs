import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const File1Icon = defineComponent({
  name: 'File1Icon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M9.5 1H5C3.34315 1 2 2.34315 2 4V12C2 13.6569 3.34315 15 5 15H11C12.6569 15 14 13.6569 14 12V5.5M9.5 1L14 5.5M9.5 1V4C9.5 4.82843 10.1716 5.5 11 5.5H14M6.5 10L7.5 11L9.5 8.5","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})