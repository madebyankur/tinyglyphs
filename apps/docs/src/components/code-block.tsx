"use client";

import React from "react";

import {
  cn,
  createCopyCommandAction,
  createDownloadIconsAction,
  getCurrentCommand,
} from "@/lib/utils";

import { CommandDisplay } from "./command-display";
import { ScrambleButton } from "./scramble-button";
import { TabsList, TabsRoot, TabsTrigger } from "./tabs";

export interface PackageManager {
  name: string;
  command: string;
}

export interface CodeBlockAction {
  label: string;
  onClick: () => void | Promise<void>;
  scrambleStates?: {
    initial: string;
    transitioning: string;
    success: string;
  };
  className?: string;
}

interface CodeBlockProps {
  packageManagers?: PackageManager[];
  activePackageManager?: string;
  onPackageManagerChange?: (packageManager: string) => void;
  command?: string;
  packageName?: string;
  actions?: CodeBlockAction[];
  className?: string;
  children?: React.ReactNode;
}

export function CodeBlock({
  packageManagers,
  activePackageManager,
  onPackageManagerChange,
  command,
  packageName = "tinyglyphs",
  actions,
  className,
  children,
}: CodeBlockProps) {
  const currentCommand = getCurrentCommand(
    command,
    packageManagers,
    activePackageManager,
  );

  const defaultActions: CodeBlockAction[] = [
    createCopyCommandAction(currentCommand, packageName),
    createDownloadIconsAction(),
  ];

  const finalActions = actions || defaultActions;

  return (
    <div className={cn("w-full space-y-8", className)}>
      <div className="grid w-full gap-2 overflow-hidden">
        <div className="flex w-full flex-col items-start justify-between md:flex-row md:items-center md:justify-between">
          {packageManagers &&
            activePackageManager &&
            onPackageManagerChange && (
              <TabsRoot
                value={activePackageManager}
                onValueChange={onPackageManagerChange}
              >
                <TabsList className="w-full md:w-auto">
                  {packageManagers.map((pm) => (
                    <TabsTrigger
                      key={pm.name}
                      value={pm.name}
                      className="w-full md:w-auto"
                    >
                      {pm.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </TabsRoot>
            )}

          {currentCommand && (
            <CommandDisplay
              command={currentCommand}
              packageName={packageName}
            />
          )}

          {children}

          <div className="flex w-full items-center justify-between gap-4 md:justify-end">
            {finalActions.map((action, index) => (
              <ScrambleButton
                key={`${action.label}-${index}`}
                onAction={action.onClick}
                scrambleStates={action.scrambleStates}
                className={cn(
                  action.className,
                  index === finalActions.length - 1 && "shrink-0",
                )}
              >
                {action.label}
              </ScrambleButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
