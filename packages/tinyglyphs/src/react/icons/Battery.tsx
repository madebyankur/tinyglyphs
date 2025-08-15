import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const BatteryIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 7V8.5M4 12H10C11.6569 12 13 10.6569 13 9V7C13 5.34315 11.6569 4 10 4H4C2.34315 4 1 5.34315 1 7V9C1 10.6569 2.34315 12 4 12Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

BatteryIcon.displayName = "BatteryIcon";