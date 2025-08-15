import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const PasswordIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.5 8H4.51M8 8H8.01M11.5 8H11.51M4 3H12C13.6569 3 15 4.34315 15 6V10C15 11.6569 13.6569 13 12 13H4C2.34315 13 1 11.6569 1 10V6C1 4.34315 2.34315 3 4 3Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

PasswordIcon.displayName = "PasswordIcon";