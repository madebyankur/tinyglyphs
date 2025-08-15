import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const CopyIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 3C10.5 1.89543 9.60457 1 8.5 1H4C2.34315 1 1 2.34315 1 4V8.5C1 9.60457 1.89543 10.5 3 10.5M12 15H8C6.34315 15 5 13.6569 5 12V8C5 6.34315 6.34315 5 8 5H12C13.6569 5 15 6.34315 15 8V12C15 13.6569 13.6569 15 12 15Z" strokeLinecap="round"/>
    </IconBase>
  )
);

CopyIcon.displayName = "CopyIcon";