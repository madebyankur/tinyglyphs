import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowCircleBottomIcon = defineComponent({
  name: 'ArrowCircleBottomIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 5V11M8 11L5 8M8 11L11 8","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),
      h('path', {"d":"M1 8C1 4.13401 4.13401 1 8 1V1C11.866 1 15 4.13401 15 8V8C15 11.866 11.866 15 8 15V15C4.13401 15 1 11.866 1 8V8Z","stroke-width":"1.5"}),
      h('rect', {"width":"16","height":"16"})
    ])
  }
})