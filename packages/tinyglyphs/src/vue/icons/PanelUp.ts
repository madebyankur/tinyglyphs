import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const PanelUpIcon = defineComponent({
  name: 'PanelUpIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M4 6H12M1 12V4C1 2.34315 2.34315 1 4 1H12C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12Z","stroke-linecap":"round"})
    ])
  }
})