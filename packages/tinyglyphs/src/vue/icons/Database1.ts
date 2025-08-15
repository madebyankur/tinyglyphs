import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const Database1Icon = defineComponent({
  name: 'Database1Icon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('ellipse', {"cx":"8","cy":"4","rx":"6","ry":"3","stroke-width":"1.5"}),
      h('path', {"d":"M2 8C2 9.65685 4.68629 11 8 11C8.34071 11 8.67479 10.9858 9 10.9585","stroke-width":"1.5","stroke-linecap":"round"}),
      h('path', {"d":"M2 12C2 13.6569 4.68629 15 8 15C8.70127 15 9.37444 14.9398 10 14.8293","stroke-width":"1.5","stroke-linecap":"round"}),
      h('path', {"d":"M2 4V12","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),
      h('path', {"d":"M14 4V8","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),
      h('path', {"d":"M13 10.5V14.5","stroke-width":"1.5","stroke-linecap":"round"}),
      h('path', {"d":"M15 12.5L11 12.5","stroke-width":"1.5","stroke-linecap":"round"})
    ])
  }
})