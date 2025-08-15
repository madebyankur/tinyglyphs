import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowTopIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 13V3M8 3L4 7M8 3L12 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowTopIcon.displayName = "ArrowTopIcon";