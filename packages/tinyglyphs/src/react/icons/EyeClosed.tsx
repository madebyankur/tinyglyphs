import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const EyeClosedIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 6C5.83287 8.41644 10.1671 8.41644 15 6M8 12H8.01M11.5 11.5H11.51M4.5 11.5H4.51M1 10H1.01M15 10H15.01" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

EyeClosedIcon.displayName = "EyeClosedIcon";