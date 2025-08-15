import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const CardIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 6V11C1 12.6569 2.34315 14 4 14H12C13.6569 14 15 12.6569 15 11V6M1 6V5C1 3.34315 2.34315 2 4 2H12C13.6569 2 15 3.34315 15 5V6M1 6H15M4 8.75H9M4 11.25H7" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

CardIcon.displayName = "CardIcon";