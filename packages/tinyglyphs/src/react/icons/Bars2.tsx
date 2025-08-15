import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const Bars2Icon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 5H15M1 11H15" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

Bars2Icon.displayName = "Bars2Icon";