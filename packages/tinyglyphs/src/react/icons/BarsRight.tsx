import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const BarsRightIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 4H15M1 8H15M9 12H15" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

BarsRightIcon.displayName = "BarsRightIcon";