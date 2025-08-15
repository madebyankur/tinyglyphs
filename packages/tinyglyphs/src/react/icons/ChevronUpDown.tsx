import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ChevronUpDownIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 6L8 3L11 6M5 10L8 13L11 10" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ChevronUpDownIcon.displayName = "ChevronUpDownIcon";