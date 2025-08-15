import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const Card2Icon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.4349 6H3.43494M4 11C4.33333 10.1667 5.1 8.60001 5.5 9.00001C6 9.50001 6 10.5 7 10.5C8 10.5 9 7.50001 10 8.50001M4 14H12C13.6569 14 15 12.6569 15 11V5C15 3.34315 13.6569 2 12 2H4C2.34315 2 1 3.34315 1 5V11C1 12.6569 2.34315 14 4 14Z" strokeLinecap="round"/>
    </IconBase>
  )
);

Card2Icon.displayName = "Card2Icon";