import type { IconComponent } from "@/lib/types";

export interface IconRegistryEntry {
  name: string;
  component: IconComponent;
  importName: string;
}

export interface PackageManager {
  name: string;
  command: string;
}
