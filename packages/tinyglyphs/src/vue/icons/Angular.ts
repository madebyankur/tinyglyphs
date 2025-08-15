import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const AngularIcon = defineComponent({
  name: 'AngularIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M5.98077 9.25L5.5 10.5M5.98077 9.25H10.0192M5.98077 9.25L8 4L10.0192 9.25M10.0192 9.25L10.5 10.5M1.5 3L8 1L14.5 3L13 12L8 15L3 12L1.5 3Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})