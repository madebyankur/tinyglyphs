import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const PaperclipIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 8L9.00002 13C7.34317 14.6569 4.65688 14.6569 3.00003 13C1.34317 11.3431 1.34317 8.65685 3.00003 7L8.00003 2C9.1046 0.895426 10.8955 0.895428 12 2C13.1046 3.10457 13.1046 4.89543 12 6L7.00003 11C6.44774 11.5523 5.55231 11.5523 5.00003 11C4.44774 10.4477 4.44774 9.55228 5.00003 9L9.00003 5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

PaperclipIcon.displayName = "PaperclipIcon";