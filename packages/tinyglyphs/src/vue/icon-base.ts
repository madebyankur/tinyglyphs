import { computed, defineComponent, h } from "vue";

import type { IconProps } from "./types";

export interface IconBaseProps extends IconProps {
  viewBox?: string;
}

export const iconBaseProps = {
  size: {
    type: [Number, String],
    default: 16,
  },
  color: {
    type: String,
    default: "currentColor",
  },
  strokeWidth: {
    type: [Number, String],
    default: 1,
  },
  absoluteStrokeWidth: {
    type: Boolean,
    default: false,
  },
  viewBox: {
    type: String,
    default: "0 0 16 16",
  },
};

export const IconBase = defineComponent({
  name: "IconBase",
  props: iconBaseProps,
  setup(props, { slots, attrs }) {
    const actualStrokeWidth = computed(() => {
      return props.absoluteStrokeWidth
        ? Number(props.strokeWidth) * (16 / Number(props.size))
        : props.strokeWidth;
    });

    return () =>
      h(
        "svg",
        {
          width: props.size,
          height: props.size,
          viewBox: props.viewBox,
          fill: "none",
          stroke: props.color,
          "stroke-width": actualStrokeWidth.value,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: ["icon", attrs.class],
          ...attrs,
        },
        slots.default?.()
      );
  },
});
