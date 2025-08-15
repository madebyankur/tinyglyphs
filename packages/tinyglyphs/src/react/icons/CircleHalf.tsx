import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const CircleHalfIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1C6.14349 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8L15 8Z" strokeLinejoin="round"/>
    </IconBase>
  )
);

CircleHalfIcon.displayName = "CircleHalfIcon";