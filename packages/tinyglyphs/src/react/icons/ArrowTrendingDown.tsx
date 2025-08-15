import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowTrendingDownIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 14L9 13M13 14L14 10M13 14L9.56413 6.7465C9.0808 5.72613 7.68596 5.58538 7.00853 6.48863L6.90809 6.62255C6.25091 7.49879 4.90666 7.39808 4.38738 6.4337L2 2" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowTrendingDownIcon.displayName = "ArrowTrendingDownIcon";