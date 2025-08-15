import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowDownIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 3V13M8 13L4 9M8 13L12 9" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowDownIcon.displayName = "ArrowDownIcon";