import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowTrendingUpIcon = defineComponent({
  name: 'ArrowTrendingUpIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M13 2L9 3M13 2L14 6M13 2L9.56413 9.2535C9.0808 10.2739 7.68596 10.4146 7.00853 9.51137L6.90809 9.37745C6.2509 8.50121 4.90666 8.60192 4.38738 9.5663L2 14","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})