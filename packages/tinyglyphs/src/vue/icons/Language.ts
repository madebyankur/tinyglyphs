import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const LanguageIcon = defineComponent({
  name: 'LanguageIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M7.5 14.5L8.55216 12.3957M8.55216 12.3957L11 7.5L13.4478 12.3957M8.55216 12.3957H13.4478M13.4478 12.3957L14.5 14.5M1 3H5.5M5.5 3V1.5M5.5 3H8.5M8.5 3H10M8.5 3C8.16667 5 6.2 9 1 9M3 5C3.5 6.33333 5.3 9 8.5 9","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})