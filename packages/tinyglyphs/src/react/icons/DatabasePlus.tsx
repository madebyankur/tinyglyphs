import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const DatabasePlusIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 4C14 5.65685 11.3137 7 8 7C4.68629 7 2 5.65685 2 4M14 4C14 2.34315 11.3137 1 8 1C4.68629 1 2 2.34315 2 4M14 4V8M2 4V12C2 13.6569 4.68629 15 8 15C8.70127 15 9.37444 14.9398 10 14.8293M2 8C2 9.65685 4.68629 11 8 11C8.34071 11 8.67479 10.9858 9 10.9585M13 10.5V14.5M15 12.5H11" strokeLinecap="round"/>
    </IconBase>
  )
);

DatabasePlusIcon.displayName = "DatabasePlusIcon";