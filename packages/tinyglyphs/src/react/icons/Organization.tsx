import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const OrganizationIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 15H12C13.6569 15 15 13.6569 15 12V7C15 5.34315 13.6569 4 12 4M4 5H7M4 8H7M4 11H7M12 8H12.01M12 11H12.01M1 4V12C1 13.6569 2.34315 15 4 15H7C8.65685 15 10 13.6569 10 12V4C10 2.34315 8.65685 1 7 1H4C2.34315 1 1 2.34315 1 4Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

OrganizationIcon.displayName = "OrganizationIcon";