import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const NoteIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 15H4C2.34315 15 1 13.6569 1 12V4C1 2.34315 2.34315 1 4 1H12C13.6569 1 15 2.34315 15 4V9M9 15V10.5C9 9.67157 9.67157 9 10.5 9H15M9 15L15 9" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

NoteIcon.displayName = "NoteIcon";