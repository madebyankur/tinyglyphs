import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArchiveIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 8H10M2 5L2.34258 11.1664C2.4309 12.7562 3.74576 14 5.33796 14H10.662C12.2542 14 13.5691 12.7562 13.6574 11.1664L14 5M2.5 2H13.5C14.3284 2 15 2.67157 15 3.5C15 4.32843 14.3284 5 13.5 5H2.5C1.67157 5 1 4.32843 1 3.5C1 2.67157 1.67157 2 2.5 2Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArchiveIcon.displayName = "ArchiveIcon";