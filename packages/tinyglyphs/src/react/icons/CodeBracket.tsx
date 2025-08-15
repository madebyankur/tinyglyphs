import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const CodeBracketIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5L1 8L4 11M12 5L15 8L12 11M9 2L7 14" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

CodeBracketIcon.displayName = "CodeBracketIcon";