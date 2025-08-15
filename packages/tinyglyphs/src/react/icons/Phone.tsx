import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const PhoneIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 4H9M6 1H10C11.6569 1 13 2.34315 13 4V12C13 13.6569 11.6569 15 10 15H6C4.34315 15 3 13.6569 3 12V4C3 2.34315 4.34315 1 6 1Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

PhoneIcon.displayName = "PhoneIcon";