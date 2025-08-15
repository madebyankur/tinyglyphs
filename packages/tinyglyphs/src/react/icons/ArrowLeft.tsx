import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 8H13M3 8L7 4M3 8L7 12" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowLeftIcon.displayName = "ArrowLeftIcon";