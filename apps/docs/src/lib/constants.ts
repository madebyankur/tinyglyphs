import type { PackageManager } from "@/lib/interfaces";

export const ANIMATION_DELAYS = {
  PAGE_FADE: 50,
  ICON_REVEAL: 300,
  COLOR_DEBOUNCE: 150,
  ICON_STAGGER: 15,
} as const;

export const TOAST_DURATION = 2000;

export const DEFAULT_VALUES = {
  COLOR: "#ffffff",
  SIZE: 24,
  STROKE_WIDTH: 1.5,
} as const;

export const packageManagers = [
  { name: "pnpm", command: "pnpm add" },
  { name: "npm", command: "npm install" },
  { name: "yarn", command: "yarn add" },
] as PackageManager[];
