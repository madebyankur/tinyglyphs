import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const CompassIcon = defineComponent({
  name: 'CompassIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 8H8.01M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM8.14434 5.3505L10.8284 5.17157L10.6495 7.85566C10.5495 9.35528 9.35532 10.5495 7.85571 10.6495L5.17157 10.8284L5.35053 8.14429C5.45051 6.64468 6.64472 5.45047 8.14434 5.3505Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})