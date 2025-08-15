import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const BarsCenterIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 4H15M1 8H15M5 12H11" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

BarsCenterIcon.displayName = "BarsCenterIcon";