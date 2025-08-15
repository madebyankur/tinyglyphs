import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowRightIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 8H13M13 8L9 4M13 8L9 12" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowRightIcon.displayName = "ArrowRightIcon";