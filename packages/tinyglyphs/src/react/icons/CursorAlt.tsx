import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const CursorAltIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.03555 2.03552L14.0564 6.98527L9.10662 9.10659L6.9853 14.0563L2.03555 2.03552Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

CursorAltIcon.displayName = "CursorAltIcon";