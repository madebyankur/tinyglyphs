import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const SwatchIcon = defineComponent({
  name: 'SwatchIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M9 11L12.9393 7.06066C13.5251 6.47487 13.5251 5.52513 12.9393 4.93934L11 3C10.4477 2.44772 9.55228 2.44772 9 3M8 15H13.5C14.3284 15 15 14.3284 15 13.5V10C15 9.44772 14.5523 9 14 9M4 12H4.01M4 15C2.34315 15 1 13.6569 1 12V2.5C1 1.67157 1.67157 1 2.5 1H5.5C6.32843 1 7 1.67157 7 2.5V12C7 13.6569 5.65685 15 4 15Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})