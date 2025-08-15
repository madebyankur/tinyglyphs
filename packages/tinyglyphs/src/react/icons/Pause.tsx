import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const PauseIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 2V14M11 2V14" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

PauseIcon.displayName = "PauseIcon";