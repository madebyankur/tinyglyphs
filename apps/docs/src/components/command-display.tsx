"use client";

import React, { useEffect, useState } from "react";
import { useTimeout } from "usehooks-ts";

import { useScrambleText } from "@/lib/hooks";
import { cn } from "@/lib/utils";

interface CommandDisplayProps {
  command: string;
  packageName?: string;
  className?: string;
  scrambleDuration?: number;
}

export function CommandDisplay({
  command,
  packageName,
  className,
  scrambleDuration = 500,
}: CommandDisplayProps) {
  const [isScrambling, setIsScrambling] = useState(false);
  const [previousCommand, setPreviousCommand] = useState(command);

  const scrambledCommand = useScrambleText(
    command,
    isScrambling,
    scrambleDuration,
  );

  useTimeout(
    () => setIsScrambling(false),
    isScrambling ? scrambleDuration : null,
  );

  useEffect(() => {
    if (previousCommand !== command) {
      setIsScrambling(true);
      setPreviousCommand(command);
    }
  }, [command, previousCommand]);

  return (
    <pre className={cn("flex w-full shrink-0 md:w-auto", className)}>
      <code className="text-accent-foreground font-departure-mono ease-in-out-quint flex h-full w-full items-center justify-center p-8 text-sm transition-all duration-300 md:p-4">
        <span>{scrambledCommand} </span>
        {packageName && (
          <span className="text-accent text-sm underline underline-offset-4">
            {packageName}
          </span>
        )}
      </code>
    </pre>
  );
}
