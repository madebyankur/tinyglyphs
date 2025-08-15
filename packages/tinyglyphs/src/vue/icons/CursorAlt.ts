import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const CursorAltIcon = defineComponent({
  name: 'CursorAltIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M2.03555 2.03552L14.0564 6.98527L9.10662 9.10659L6.9853 14.0563L2.03555 2.03552Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})