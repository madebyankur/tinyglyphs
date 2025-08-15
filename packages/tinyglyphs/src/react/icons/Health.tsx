import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const HealthIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.75 7.38981H14.3422C13.3708 7.38981 12.4875 7.95241 12.0767 8.83259L9.89449 13.5087C9.69028 13.9464 9.04582 13.8689 8.95111 13.3954L8.3125 10.2023M1.75 7.38981H1.9481C3.02418 7.38981 3.97953 6.70123 4.31981 5.68038L5.65461 1.67597C5.81675 1.18955 6.51869 1.23325 6.61924 1.73603L7 3.63981M7.5625 6.45231L7.75 7.38981" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

HealthIcon.displayName = "HealthIcon";