import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const DeleteIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 6L9 8M9 8L11 10M9 8L11 6M9 8L7 10M1 8L4.1094 3.3359C4.6658 2.5013 5.60249 2 6.60555 2H15V14H6.60555C5.60249 14 4.6658 13.4987 4.1094 12.6641L1 8Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

DeleteIcon.displayName = "DeleteIcon";