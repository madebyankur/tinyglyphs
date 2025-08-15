import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const Database2Icon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <ellipse cx="8" cy="4" rx="6" ry="3" strokeWidth="1.5"/>
<path d="M2 8C2 9.30622 3.66962 10.4175 6 10.8293" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M2 12C2 13.4865 4.16229 14.7205 7 14.9585" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M2 4V12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 4V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="9" y="9" width="6" height="6" rx="3" strokeWidth="1.5"/>
<path d="M12 11V12.5L13 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

Database2Icon.displayName = "Database2Icon";