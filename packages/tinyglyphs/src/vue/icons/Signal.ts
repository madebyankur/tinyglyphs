import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const SignalIcon = defineComponent({
  name: 'SignalIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M14.3995 11.7112C13.7634 9.33745 12.5138 7.17292 10.776 5.4352C9.0383 3.69748 6.87378 2.44778 4.5 1.81173M10.0711 13.1152C9.61675 11.4196 8.72411 9.87352 7.48288 8.63229C6.24165 7.39105 4.69555 6.49842 3 6.0441M5.74264 14.5191C5.47005 13.5018 4.93447 12.5741 4.18973 11.8294C3.44499 11.0846 2.51733 10.5491 1.5 10.2765M1 15H1.01","stroke-linecap":"round"})
    ])
  }
})