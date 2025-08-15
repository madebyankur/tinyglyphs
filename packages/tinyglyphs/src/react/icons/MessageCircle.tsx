import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const MessageCircleIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 6H11M6 9H9M15 7.25C15 10.7018 11.866 13.5 8 13.5L4 15V12.3797C2.18652 11.2503 1 9.37388 1 7.25C1 3.79822 4.13401 1 8 1C11.866 1 15 3.79822 15 7.25Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

MessageCircleIcon.displayName = "MessageCircleIcon";