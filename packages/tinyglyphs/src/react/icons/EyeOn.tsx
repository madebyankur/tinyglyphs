import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const EyeOnIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.72593 6.85926C4.64821 2.26709 11.3518 2.26709 14.2741 6.85926V6.85926C14.717 7.55526 14.717 8.44474 14.2741 9.14074V9.14074C11.3518 13.7329 4.64821 13.7329 1.72593 9.14074V9.14074C1.28301 8.44474 1.28301 7.55526 1.72593 6.85926V6.85926Z"/>
<rect x="6" y="6" width="4" height="4" rx="2"/>
<path d="M1 3.5V3.5C5.18741 0.508993 10.8126 0.508993 15 3.5V3.5" strokeLinecap="round" strokeDasharray="0 4"/>
    </IconBase>
  )
);

EyeOnIcon.displayName = "EyeOnIcon";