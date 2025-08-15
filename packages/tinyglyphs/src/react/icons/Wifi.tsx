import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const WifiIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 14H8.01M1 6C4.75156 1.98047 11.177 1.95352 14.8995 6M3 8.5C5.84249 5.94176 10.1575 5.94176 13 8.5M6 11C7.10457 9.89543 8.89543 9.89543 10 11" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

WifiIcon.displayName = "WifiIcon";