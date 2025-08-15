import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const WifiOffIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 14H8.01M14.5 5.59113C14.6363 5.72246 14.7695 5.85875 14.8995 6M1 6C3.13204 3.71567 6.12768 2.72084 9 3.03035M12 7.74073C12.3489 7.96212 12.6836 8.21521 13 8.5M3 8.5C3.74904 7.82586 4.60034 7.32937 5.5 7.01052M9.48099 10.5895C9.66561 10.7032 9.84001 10.84 10 11M15 1L1 15" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

WifiOffIcon.displayName = "WifiOffIcon";