import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const SortUpIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 15V1M5 1L1 5M5 1L9 5M8 8H15M8 11H15M8 14H11" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

SortUpIcon.displayName = "SortUpIcon";