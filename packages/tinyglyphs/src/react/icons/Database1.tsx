import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const Database1Icon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <ellipse cx="8" cy="4" rx="6" ry="3" strokeWidth="1.5"/>
<path d="M2 8C2 9.65685 4.68629 11 8 11C8.34071 11 8.67479 10.9858 9 10.9585" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M2 12C2 13.6569 4.68629 15 8 15C8.70127 15 9.37444 14.9398 10 14.8293" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M2 4V12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 4V8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 10.5V14.5" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M15 12.5L11 12.5" strokeWidth="1.5" strokeLinecap="round"/>
    </IconBase>
  )
);

Database1Icon.displayName = "Database1Icon";