import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ChevronCircleTopIcon = defineComponent({
  name: 'ChevronCircleTopIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M5 9.5L8 6.5L11 9.5","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),
      h('path', {"d":"M1 8C1 4.13401 4.13401 1 8 1V1C11.866 1 15 4.13401 15 8V8C15 11.866 11.866 15 8 15V15C4.13401 15 1 11.866 1 8V8Z","stroke-width":"1.5"}),
      h('rect', {"width":"16","height":"16"})
    ])
  }
})