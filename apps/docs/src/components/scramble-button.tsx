"use client";

import React, { useCallback } from "react";

import { useButtonState } from "@/hooks/use-button-state";
import { useScrambleText } from "@/lib/hooks";
import { cn } from "@/lib/utils";

interface ScrambleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  scrambleStates?: {
    initial: string;
    transitioning: string;
    success: string;
  };
  scrambleDuration?: number;
  successDuration?: number;
  onAction?: () => void | Promise<void>;
}

export function ScrambleButton({
  children,
  scrambleStates,
  scrambleDuration = 400,
  successDuration = 800,
  onAction,
  className,
  onClick,
  ...props
}: ScrambleButtonProps) {
  const buttonStateHook = useButtonState({
    idleText: scrambleStates?.initial ?? children?.toString() ?? "Button",
    loadingText: scrambleStates?.transitioning ?? "WAIT",
    doneText: scrambleStates?.success ?? "DONE",
    scrambleDuration,
    doneDuration: successDuration,
  });

  const displayText = useScrambleText(
    buttonStateHook.displayText,
    buttonStateHook.isScrambling,
    scrambleDuration,
  );

  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);

      if (onAction) {
        buttonStateHook.startTransition();
        await onAction();
      }
    },
    [onAction, onClick, buttonStateHook],
  );

  return (
    <button
      type="button"
      className={cn(
        "font-departure-mono border-primary-foreground/10 text-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground active:bg-accent active:text-accent-foreground flex items-center justify-center gap-2 border px-4 py-2 text-xs uppercase transition-colors outline-none",
        "focus-visible:border-accent/50 focus-visible:ring-ring/10 focus-visible:ring-[3px]",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {scrambleStates ? displayText : children}
    </button>
  );
}
