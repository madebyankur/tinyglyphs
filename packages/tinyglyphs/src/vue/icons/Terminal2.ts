import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const Terminal2Icon = defineComponent({
  name: 'Terminal2Icon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M5 5L7 7L5 9","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),
      h('path', {"d":"M8 11H11","stroke-width":"1.5","stroke-linecap":"round"}),
      h('rect', {"x":"1","y":"1","width":"14","height":"14","rx":"3","stroke-width":"1.5"}),
      h('rect', {"width":"16","height":"16"})
    ])
  }
})