import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArchiveIcon = defineComponent({
  name: 'ArchiveIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M6 8H10M2 5L2.34258 11.1664C2.4309 12.7562 3.74576 14 5.33796 14H10.662C12.2542 14 13.5691 12.7562 13.6574 11.1664L14 5M2.5 2H13.5C14.3284 2 15 2.67157 15 3.5C15 4.32843 14.3284 5 13.5 5H2.5C1.67157 5 1 4.32843 1 3.5C1 2.67157 1.67157 2 2.5 2Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})