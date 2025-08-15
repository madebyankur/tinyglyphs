"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";

function TabsRoot({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root className={cn("w-full", className)} {...props} />;
}
TabsRoot.displayName = "TabsRoot";

function TabsList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn(
        "bg-primary inline-flex items-center justify-center p-1",
        className,
      )}
      {...props}
    />
  );
}
TabsList.displayName = "TabsList";

function TabsTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Tab>) {
  return (
    <TabsPrimitive.Tab
      className={cn(
        "text-accent hover:bg-accent/5 data-[selected]:bg-accent/10 data-[selected]:text-accent data-[selected]:border-accent/10 hover:data-[selected=false]:bg-accent/10 font-departure-mono primary-foreground space-nowrap ease-in-out-quint inline-flex h-8 items-center justify-center border border-transparent px-3 text-xs font-medium transition-all duration-150 outline-none select-none disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:border-accent/50 focus-visible:ring-ring/5 focus-visible:ring-[3px]",
        className,
      )}
      {...props}
    />
  );
}
TabsTrigger.displayName = "TabsTrigger";

function TabsContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Panel>) {
  return (
    <TabsPrimitive.Panel
      className={cn(
        "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  );
}
TabsContent.displayName = "TabsContent";

function TabsIndicator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Indicator>) {
  return (
    <TabsPrimitive.Indicator
      className={cn(
        "ease-in-out-quint absolute transition-all duration-200",
        className,
      )}
      {...props}
    />
  );
}
TabsIndicator.displayName = "TabsIndicator";

export { TabsRoot, TabsList, TabsTrigger, TabsContent, TabsIndicator };
