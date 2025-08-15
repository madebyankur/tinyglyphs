import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const CaretLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.56068 9.06065L8.79291 12.2929C9.42288 12.9228 10.5 12.4767 10.5 11.5858V4.41421C10.5 3.5233 9.42287 3.07713 8.79291 3.7071L5.56068 6.93933C4.97489 7.52512 4.97489 8.47487 5.56068 9.06065Z"/>
    </IconBase>
  )
);

CaretLeftIcon.displayName = "CaretLeftIcon";