import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ChevronRightIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.5 3L10.5 8L5.5 13" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ChevronRightIcon.displayName = "ChevronRightIcon";