import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const CaretUpIcon = defineComponent({
  name: 'CaretUpIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M11.5858 10.5H4.41421C3.5233 10.5 3.07713 9.42284 3.7071 8.79288L6.93933 5.56065C7.52512 4.97486 8.47487 4.97486 9.06065 5.56065L12.2929 8.79288C12.9228 9.42285 12.4767 10.5 11.5858 10.5Z"})
    ])
  }
})