import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const Database2Icon = defineComponent({
  name: 'Database2Icon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('ellipse', {"cx":"8","cy":"4","rx":"6","ry":"3","stroke-width":"1.5"}),
      h('path', {"d":"M2 8C2 9.30622 3.66962 10.4175 6 10.8293","stroke-width":"1.5","stroke-linecap":"round"}),
      h('path', {"d":"M2 12C2 13.4865 4.16229 14.7205 7 14.9585","stroke-width":"1.5","stroke-linecap":"round"}),
      h('path', {"d":"M2 4V12","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),
      h('path', {"d":"M14 4V7","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),
      h('rect', {"x":"9","y":"9","width":"6","height":"6","rx":"3","stroke-width":"1.5"}),
      h('path', {"d":"M12 11V12.5L13 13","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})