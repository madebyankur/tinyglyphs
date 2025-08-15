import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowsInIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 6L15 1M10 6V3M10 6H13M1 1L6 6M6 6H3M6 6V3M1 15L6 10M6 10V13M6 10H3M15 15L10 10M10 10H13M10 10V13" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowsInIcon.displayName = "ArrowsInIcon";