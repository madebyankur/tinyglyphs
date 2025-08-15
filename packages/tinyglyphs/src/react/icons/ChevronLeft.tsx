import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ChevronLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 3L5.5 8L10.5 13" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ChevronLeftIcon.displayName = "ChevronLeftIcon";