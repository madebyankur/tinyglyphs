import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const Lightning2Icon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 8L7 1H12L9 6H12L5 15L7 8H4Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

Lightning2Icon.displayName = "Lightning2Icon";