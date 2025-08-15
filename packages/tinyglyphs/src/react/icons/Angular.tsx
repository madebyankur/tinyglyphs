import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const AngularIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.98077 9.25L5.5 10.5M5.98077 9.25H10.0192M5.98077 9.25L8 4L10.0192 9.25M10.0192 9.25L10.5 10.5M1.5 3L8 1L14.5 3L13 12L8 15L3 12L1.5 3Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

AngularIcon.displayName = "AngularIcon";