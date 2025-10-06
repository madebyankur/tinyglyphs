import { useMemo } from "react";
import * as TinyGlyphsIcons from "tinyglyphs/react";

import type { IconRegistryEntry } from "@/lib/interfaces";
import type { IconComponent } from "@/lib/types";

export const useIconRegistry = (): IconRegistryEntry[] => {
  return useMemo(() => {
    const entries = Object.entries(TinyGlyphsIcons);
    const iconEntries: IconRegistryEntry[] = [];

    for (const [exportName, component] of entries) {
      if (
        exportName.endsWith("Icon") &&
        component &&
        typeof component !== "undefined"
      ) {
        const displayName = exportName.replace(/Icon$/, "");
        const svgName = displayName === "Icon" ? "@" : displayName;
        const importName = `${displayName}Icon`;

        iconEntries.push({
          name: svgName,
          component: component as IconComponent,
          importName,
        });
      }
    }

    return iconEntries.sort((a, b) => a.name.localeCompare(b.name));
  }, []);
};
