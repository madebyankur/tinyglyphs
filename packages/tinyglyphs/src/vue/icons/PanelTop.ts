import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const PanelTopIcon = defineComponent({
  name: 'PanelTopIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M4 6H12M6 1H4C2.34315 1 1 2.34315 1 4V12C1 13.6569 2.34315 15 4 15H6H12C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1H6Z","stroke-width":"1.5","stroke-linecap":"round"}),
      h('rect', {"width":"16","height":"16"})
    ])
  }
})