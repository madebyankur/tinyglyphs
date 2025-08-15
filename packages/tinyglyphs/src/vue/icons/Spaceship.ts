import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const SpaceshipIcon = defineComponent({
  name: 'SpaceshipIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M7.44975 8.1066L8.57107 14.0563L9.44414 12.5922C10.9642 10.0431 12.1222 7.29498 12.8849 4.42678L13.5208 2.03553L11.5203 2.54101C8.34902 3.34227 5.31938 4.625 2.53692 6.34449L1.5 6.98528L7.44975 8.1066Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})