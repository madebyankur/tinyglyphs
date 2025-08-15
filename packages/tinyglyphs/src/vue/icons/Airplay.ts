import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const AirplayIcon = defineComponent({
  name: 'AirplayIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M3 12C1.89543 12 1 11.1046 1 10V5C1 3.34315 2.34315 2 4 2H12C13.6569 2 15 3.34315 15 5V10C15 11.1046 14.1046 12 13 12M5.20711 14H10.7929C11.2383 14 11.4614 13.4614 11.1464 13.1464L8.35355 10.3536C8.15829 10.1583 7.84171 10.1583 7.64645 10.3536L4.85355 13.1464C4.53857 13.4614 4.76165 14 5.20711 14Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})