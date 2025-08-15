import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const NotepadIcon = defineComponent({
  name: 'NotepadIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M12 2.5C13.1046 2.5 14 3.39543 14 4.5V11.5C14 13.1569 12.6569 14.5 11 14.5H5C3.34315 14.5 2 13.1569 2 11.5V4.5C2 3.39543 2.89543 2.5 4 2.5M5 7.5H11M5 10.5H11M6.5 1.5V4.5M9.5 1.5V4.5","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})