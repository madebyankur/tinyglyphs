import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const BluetoothIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 4L8.5 7.97059M8.5 7.97059L8.53333 8M8.5 7.97059V8.02941M8.5 7.97059V1L12.5 4.5L8.53333 8M8.53333 8L12.5 11.5L8.5 15V8.02941M8.53333 8L8.5 8.02941M8.5 8.02941L4 12" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

BluetoothIcon.displayName = "BluetoothIcon";