import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const WarningIcon = defineComponent({
  name: 'WarningIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 7.25V9.25M8 12H8.01M1.17647 12.7941L6.67647 2.48162C7.24117 1.42279 8.75882 1.42279 9.32353 2.48162L14.8235 12.7941C15.3564 13.7933 14.6324 15 13.5 15H2.5C1.36762 15 0.643582 13.7933 1.17647 12.7941Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})