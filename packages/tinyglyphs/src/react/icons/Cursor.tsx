import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const CursorIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 9L5 12V1L12 9H8ZM8 9L10 14" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

CursorIcon.displayName = "CursorIcon";