import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowCircleDownIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 5V11M8 11L5 8M8 11L11 8M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowCircleDownIcon.displayName = "ArrowCircleDownIcon";