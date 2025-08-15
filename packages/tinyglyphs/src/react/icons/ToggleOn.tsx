import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ToggleOnIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 8C1 5.23858 3.23858 3 6 3H10C12.7614 3 15 5.23858 15 8C15 10.7614 12.7614 13 10 13H6C3.23858 13 1 10.7614 1 8Z"/>
<path d="M8.5 8C8.5 7.17157 9.17157 6.5 10 6.5C10.8284 6.5 11.5 7.17157 11.5 8C11.5 8.82843 10.8284 9.5 10 9.5C9.17157 9.5 8.5 8.82843 8.5 8Z"/>
    </IconBase>
  )
);

ToggleOnIcon.displayName = "ToggleOnIcon";