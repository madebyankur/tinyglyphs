import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const CaretRightIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.4393 9.06065L7.20711 12.2929C6.57714 12.9228 5.5 12.4767 5.5 11.5858V4.41421C5.5 3.5233 6.57714 3.07713 7.20711 3.7071L10.4393 6.93933C11.0251 7.52512 11.0251 8.47487 10.4393 9.06065Z"/>
    </IconBase>
  )
);

CaretRightIcon.displayName = "CaretRightIcon";