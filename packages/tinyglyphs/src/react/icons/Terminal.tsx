import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const TerminalIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 4L7 8L3 12M9 12H13" strokeLinecap="round"/>
    </IconBase>
  )
);

TerminalIcon.displayName = "TerminalIcon";