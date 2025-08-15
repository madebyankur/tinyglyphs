import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowCircleTopIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <g clipPath="url(#clip0_59_3144)">
<path d="M8 11V5M8 5L5 8M8 5L11 8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1 8C1 4.13401 4.13401 1 8 1V1C11.866 1 15 4.13401 15 8V8C15 11.866 11.866 15 8 15V15C4.13401 15 1 11.866 1 8V8Z" strokeWidth="1.5"/>
</g>
<defs>
<clipPath id="clip0_59_3144">
<rect width="16" height="16"/>
</clipPath>
</defs>
    </IconBase>
  )
);

ArrowCircleTopIcon.displayName = "ArrowCircleTopIcon";