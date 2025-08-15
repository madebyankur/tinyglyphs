import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const Terminal2Icon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <g clipPath="url(#clip0_261_2648)">
<path d="M5 5L7 7L5 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 11H11" strokeWidth="1.5" strokeLinecap="round"/>
<rect x="1" y="1" width="14" height="14" rx="3" strokeWidth="1.5"/>
</g>
<defs>
<clipPath id="clip0_261_2648">
<rect width="16" height="16"/>
</clipPath>
</defs>
    </IconBase>
  )
);

Terminal2Icon.displayName = "Terminal2Icon";