import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const DeviceIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 12H9M12 12H12.01M1 12V4C1 2.34315 2.34315 1 4 1H12C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12ZM4 4H12V9H4V4Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

DeviceIcon.displayName = "DeviceIcon";