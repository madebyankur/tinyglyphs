import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const CaretUpIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.5858 10.5H4.41421C3.5233 10.5 3.07713 9.42284 3.7071 8.79288L6.93933 5.56065C7.52512 4.97486 8.47487 4.97486 9.06065 5.56065L12.2929 8.79288C12.9228 9.42285 12.4767 10.5 11.5858 10.5Z"/>
    </IconBase>
  )
);

CaretUpIcon.displayName = "CaretUpIcon";