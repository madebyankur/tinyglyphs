import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const CaretDownIcon = defineComponent({
  name: 'CaretDownIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M11.5858 5.5H4.41424C3.52333 5.5 3.07716 6.57714 3.70713 7.20711L6.93936 10.4393C7.52515 11.0251 8.4749 11.0251 9.06068 10.4393L12.2929 7.20711C12.9229 6.57714 12.4767 5.5 11.5858 5.5Z"})
    ])
  }
})