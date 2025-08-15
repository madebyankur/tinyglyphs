import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ChevronUpIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 10.5L8 5.5L13 10.5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ChevronUpIcon.displayName = "ChevronUpIcon";