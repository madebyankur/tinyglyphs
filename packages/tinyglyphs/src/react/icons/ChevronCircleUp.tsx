import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ChevronCircleUpIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 9.5L8 6.5L11 9.5M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" strokeLinecap="round"/>
    </IconBase>
  )
);

ChevronCircleUpIcon.displayName = "ChevronCircleUpIcon";