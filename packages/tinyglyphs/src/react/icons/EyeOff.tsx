import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const EyeOffIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.00003 3.48155C4.87762 2.93117 -1.13821 6.88285 3.00003 10.662M13.6397 6C17.0068 9.94682 9.88064 13.1203 6.50003 12.4345M9.93702 8.5C9.75613 9.2028 9.20283 9.7561 8.50003 9.93699M7.50003 6.06301C6.79723 6.2439 6.24393 6.7972 6.06304 7.5M14 2L2.00003 14" strokeLinecap="round"/>
    </IconBase>
  )
);

EyeOffIcon.displayName = "EyeOffIcon";