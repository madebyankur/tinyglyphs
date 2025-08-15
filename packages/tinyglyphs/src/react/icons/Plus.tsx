import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const PlusIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 2V14M14 8L2 8" strokeLinecap="round"/>
    </IconBase>
  )
);

PlusIcon.displayName = "PlusIcon";