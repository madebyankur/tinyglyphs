import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const SortDownIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 1V15M5 15L1 11M5 15L9 11M8 2H15M8 5H15M8 8H11" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

SortDownIcon.displayName = "SortDownIcon";