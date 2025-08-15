import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const AnchorIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 4.99998V15M8 4.99998L8.92308 4.38459C9.91111 3.7259 9.91111 2.27405 8.92308 1.61536C8.36411 1.24271 7.63589 1.24271 7.07692 1.61536C6.08889 2.27405 6.08889 3.7259 7.07692 4.38459L8 4.99998ZM8 15L5.12418 14.1783C2.68303 13.4808 1 11.2496 1 8.71077C1 8.31821 1.31823 7.99998 1.71079 7.99998H2M8 15L10.8758 14.1783C13.317 13.4808 15 11.2496 15 8.71077C15 8.31821 14.6818 7.99998 14.2892 7.99998H14" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

AnchorIcon.displayName = "AnchorIcon";