import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const LogoutIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 11C9 12.6569 7.65685 14 6 14H4C2.34315 14 1 12.6569 1 11V5C1 3.34315 2.34315 2 4 2H6C7.65685 2 9 3.34315 9 5M5 8H15M15 8L13 6M15 8L13 10" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

LogoutIcon.displayName = "LogoutIcon";