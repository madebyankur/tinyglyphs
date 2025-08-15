import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowRevertLeftIcon = defineComponent({
  name: 'ArrowRevertLeftIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M2.90991 13H6.90991M2.90991 13L1.40991 9M2.90991 13L4.23588 9.81768C5.9556 5.69035 11.3674 4.72347 14.4099 8","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})