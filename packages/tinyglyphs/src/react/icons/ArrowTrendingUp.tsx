import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowTrendingUpIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 2L9 3M13 2L14 6M13 2L9.56413 9.2535C9.0808 10.2739 7.68596 10.4146 7.00853 9.51137L6.90809 9.37745C6.2509 8.50121 4.90666 8.60192 4.38738 9.5663L2 14" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowTrendingUpIcon.displayName = "ArrowTrendingUpIcon";