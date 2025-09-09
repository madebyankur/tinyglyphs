import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const RefreshIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 6L2.26951 5.46099C3.33007 3.33987 5.49802 2 7.8695 2C9.8402 2 11.6959 2.92784 12.8783 4.5044L14 6M14 6H12M14 6V3.5M14 10L13.7305 10.539C12.6699 12.6601 10.502 14 8.1305 14C6.1598 14 4.30412 13.0722 3.1217 11.4956L2 10M2 10H4M2 10L2 12.5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

RefreshIcon.displayName = "RefreshIcon";