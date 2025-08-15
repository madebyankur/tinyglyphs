import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const SendIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5208 2.03553L1.50001 6.98528L6.44976 9.1066M13.5208 2.03553L8.57108 14.0563L6.44976 9.1066M13.5208 2.03553L6.44976 9.1066" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

SendIcon.displayName = "SendIcon";