import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowCircleLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 8H11M5 8L8 5M5 8L8 11M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowCircleLeftIcon.displayName = "ArrowCircleLeftIcon";