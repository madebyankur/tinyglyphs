import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const IdentityIcon = defineComponent({
  name: 'IdentityIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M10.25 6.5H12.25M11.75 9.5H12.25M4 14H12C13.6569 14 15 12.6569 15 11V5C15 3.34315 13.6569 2 12 2H4C2.34315 2 1 3.34315 1 5V11C1 12.6569 2.34315 14 4 14ZM7.97087 9.79449L8.17041 10.0605C8.34203 10.2894 8.26451 10.6177 8.00868 10.7457L7.43463 11.0327C6.24896 11.6255 4.83011 11.4976 3.76962 10.7022C3.61349 10.5851 3.56402 10.372 3.65129 10.1974C4.49743 8.50515 6.83567 8.28089 7.97087 9.79449ZM6 5C6.82843 5 7.5 5.67157 7.5 6.5C7.5 7.32843 6.82843 8 6 8C5.17157 8 4.5 7.32843 4.5 6.5C4.5 5.67157 5.17157 5 6 5Z","stroke-linecap":"round"})
    ])
  }
})