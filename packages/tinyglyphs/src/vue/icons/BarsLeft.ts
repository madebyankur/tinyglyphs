import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const BarsLeftIcon = defineComponent({
  name: 'BarsLeftIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 4H15M1 8H15M1 12H7","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})