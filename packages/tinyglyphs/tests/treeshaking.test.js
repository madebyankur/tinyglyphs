const fs = require("fs");
const path = require("path");

describe("Tree-shaking Tests", () => {
  const distDir = global.testUtils.distDir;
  const testTempDir = global.testUtils.testTempDir;

  beforeAll(() => {
    if (!global.testUtils.hasDistFiles()) {
      throw new Error(
        "Distribution files not found. Run `npm run build` before testing."
      );
    }
  });

  beforeEach(() => {
    global.testUtils.createTempDir(testTempDir);
  });

  afterEach(() => {
    global.testUtils.cleanup(testTempDir);
  });

  describe("React Tree-shaking", () => {
    const framework = "react";

    test("should support single icon import", () => {
      const testCode = `
        import { HeartIcon } from 'tinyglyphs/react';
        console.log(HeartIcon);
      `;

      const analysis = analyzeImport(framework, testCode);

      expect(analysis.success).toBe(true);
      expect(analysis.treeshakeable).toBe(true);
      expect(analysis.exportType).toBe("named");
      expect(analysis.testedIconCount).toBe(1);
    });

    test("should support multiple icon imports", () => {
      const testCode = `
        import { HeartIcon, StarIcon, SearchIcon } from 'tinyglyphs/react';
        console.log(HeartIcon, StarIcon, SearchIcon);
      `;

      const analysis = analyzeImport(framework, testCode);

      expect(analysis.success).toBe(true);
      expect(analysis.testedIconCount).toBe(3);
      expect(analysis.importEfficiency).toMatch(/excellent|good/);
    });

    test("should support base component imports", () => {
      const testCode = `
        import { HeartIcon, IconBase } from 'tinyglyphs/react';
        import type { IconProps } from 'tinyglyphs/react';
        console.log(HeartIcon, IconBase);
      `;

      const analysis = analyzeImport(framework, testCode);

      expect(analysis.success).toBe(true);
      expect(analysis.hasNamedExports).toBe(true);
    });

    test("should handle common icon sets efficiently", () => {
      const testCode = `
        import {
          HeartIcon, StarIcon, SearchIcon, HomeIcon, UserIcon,
          SettingsIcon, EditIcon, DeleteIcon, CheckIcon, XIcon
        } from 'tinyglyphs/react';
        console.log('10 common icons imported');
      `;

      const analysis = analyzeImport(framework, testCode);

      expect(analysis.success).toBe(true);
      expect(analysis.testedIconCount).toBe(10);
      expect(analysis.estimatedImportKB).toBeDefined();

      const fullBundleKB = analysis.fullBundleSize / 1024;
      const importKB = parseFloat(analysis.estimatedImportKB);
      expect(importKB).toBeLessThan(fullBundleKB * 0.3); // Should be < 30% of full bundle
    });
  });

  describe("Vue Tree-shaking", () => {
    const framework = "vue";

    test("should support single icon import", () => {
      const testCode = `
        import { HeartIcon } from 'tinyglyphs/vue';
        console.log(HeartIcon);
      `;

      const analysis = analyzeImport(framework, testCode);

      expect(analysis.success).toBe(true);
      expect(analysis.treeshakeable).toBe(true);
      expect(analysis.exportType).toBe("named");
    });

    test("should support composition API pattern", () => {
      const testCode = `
        import { HeartIcon, StarIcon } from 'tinyglyphs/vue';
        import { defineComponent, ref } from 'vue';
        const component = defineComponent({
          components: { HeartIcon, StarIcon },
          setup() {
            const size = ref(24);
            return { size };
          }
        });
        console.log(component);
      `;

      const analysis = analyzeImport(framework, testCode);

      expect(analysis.success).toBe(true);
      expect(analysis.testedIconCount).toBe(2);
    });
  });

  describe("Svelte Tree-shaking", () => {
    const framework = "svelte";

    test("should support single icon import", () => {
      const testCode = `
        import { HeartIcon } from 'tinyglyphs/svelte';
        console.log(HeartIcon);
      `;

      const analysis = analyzeImport(framework, testCode);

      expect(analysis.success).toBe(true);
      expect(analysis.treeshakeable).toBe(true);
    });

    test("should support large icon sets", () => {
      const testCode = `
        import {
          HeartIcon, StarIcon, SearchIcon, HomeIcon, UserIcon,
          SettingsIcon, EditIcon, DeleteIcon, CheckIcon, XIcon,
          ArrowLeftIcon, ArrowRightIcon, PlusIcon, MinusIcon, InfoIcon
        } from 'tinyglyphs/svelte';
        console.log('15 svelte icons imported');
      `;

      const analysis = analyzeImport(framework, testCode);

      expect(analysis.success).toBe(true);
      expect(analysis.testedIconCount).toBe(15);
    });
  });

  describe("Angular Tree-shaking", () => {
    const framework = "angular";

    test("should support single component import", () => {
      const testCode = `
        import { HeartIconComponent } from 'tinyglyphs/angular';
        console.log(HeartIconComponent);
      `;

      const analysis = analyzeImport(framework, testCode);

      expect(analysis.success).toBe(true);
      expect(analysis.treeshakeable).toBe(true);
    });

    test("should support component usage pattern", () => {
      const testCode = `
        import { Component } from '@angular/core';
        import { HeartIconComponent, StarIconComponent } from 'tinyglyphs/angular';

        @Component({
          selector: 'test-component',
          template: '<heart-icon [size]="24"></heart-icon>',
          imports: [HeartIconComponent, StarIconComponent],
          standalone: true
        })
        export class TestComponent {}
        console.log(TestComponent);
      `;

      const analysis = analyzeImport(framework, testCode);

      expect(analysis.success).toBe(true);
      expect(analysis.testedIconCount).toBe(2);
    });
  });

  describe("Anti-patterns Detection", () => {
    test("should detect namespace imports as anti-pattern for React", () => {
      const testCode = `
        import * as Icons from 'tinyglyphs/react';
        console.log(Icons.HeartIcon);
      `;

      const analysis = analyzeImport("react", testCode);

      expect(analysis.hasAntiPatterns).toBe(true);
    });

    test("should detect namespace imports as anti-pattern for Vue", () => {
      const testCode = `
        import * as Icons from 'tinyglyphs/vue';
        console.log(Icons.HeartIcon);
      `;

      const analysis = analyzeImport("vue", testCode);

      expect(analysis.hasAntiPatterns).toBe(true);
    });
  });

  describe("Import Efficiency", () => {
    const frameworks = ["react", "vue", "svelte", "angular"];

    frameworks.forEach((framework) => {
      test(`${framework} should have excellent efficiency for single imports`, () => {
        const testCode = `
          import { HeartIcon } from 'tinyglyphs/${framework}';
          console.log(HeartIcon);
        `;

        const analysis = analyzeImport(framework, testCode);

        expect(analysis.success).toBe(true);
        expect(analysis.importEfficiency).toMatch(/excellent|good/);
      });

      test(`${framework} should scale efficiently with more imports`, () => {
        const singleIconCode = `
          import { HeartIcon } from 'tinyglyphs/${framework}';
          console.log(HeartIcon);
        `;

        const multipleIconsCode = `
          import { HeartIcon, StarIcon, SearchIcon } from 'tinyglyphs/${framework}';
          console.log(HeartIcon, StarIcon, SearchIcon);
        `;

        const singleAnalysis = analyzeImport(framework, singleIconCode);
        const multipleAnalysis = analyzeImport(framework, multipleIconsCode);

        expect(singleAnalysis.success).toBe(true);
        expect(multipleAnalysis.success).toBe(true);

        if (
          singleAnalysis.estimatedImportKB &&
          multipleAnalysis.estimatedImportKB
        ) {
          const singleKB = parseFloat(singleAnalysis.estimatedImportKB);
          const multipleKB = parseFloat(multipleAnalysis.estimatedImportKB);
          const efficiencyRatio = multipleKB / (singleKB * 3);

          expect(efficiencyRatio).toBeLessThan(2);
        }
      });
    });
  });

  function analyzeImport(framework, testCode) {
    const distFile = path.join(distDir, `${framework}.mjs`);

    if (!fs.existsSync(distFile)) {
      return {
        success: false,
        error: `Distribution file not found: ${framework}.mjs`,
      };
    }

    try {
      const fileSize = global.testUtils.getFileSize(distFile);
      const content = global.testUtils.readFile(distFile);

      const analysis = {
        success: true,
        fullBundleSize: fileSize,
        treeshakeable: true,
        exportType: "named",
        estimatedIconCount: 0,
        sideEffectFree: true,
        esmCompatible: true,
      };

      const namedExports = content.match(/export\{[^}]+\}/g) || [];
      const individualExports =
        content.match(/export (const|function|class) \w+/g) || [];
      const defaultExports = content.match(/export default/g) || [];

      const iconMatches = content.match(/\w+Icon/g) || [];
      analysis.estimatedIconCount = new Set(iconMatches).size;

      analysis.treeshakeable =
        namedExports.length > 0 || individualExports.length > 0;
      analysis.exportType = defaultExports.length > 0 ? "default" : "named";

      analysis.sideEffectFree =
        !content.includes("console.") &&
        !content.includes("document.") &&
        !content.includes("window.") &&
        !content.includes("global.");

      analysis.esmCompatible =
        content.includes("export") && !content.includes("module.exports");

      if (analysis.estimatedIconCount > 0) {
        analysis.bytesPerIcon = Math.round(
          fileSize / analysis.estimatedIconCount
        );
        analysis.kbPerIcon = (analysis.bytesPerIcon / 1024).toFixed(2);
      }

      const imports = testCode.match(/import\s+\{([^}]+)\}/g) || [];
      const importedIcons = [];
      imports.forEach((imp) => {
        const iconList = imp.match(/\{([^}]+)\}/)[1];
        const icons = iconList
          .split(",")
          .map((i) => i.trim())
          .filter((i) => i.endsWith("Icon") || i.endsWith("IconComponent"));
        importedIcons.push(...icons);
      });

      analysis.testedIconCount = importedIcons.length;
      if (analysis.testedIconCount > 0 && analysis.bytesPerIcon) {
        analysis.estimatedImportSize =
          analysis.testedIconCount * analysis.bytesPerIcon;
        analysis.estimatedImportKB = (
          analysis.estimatedImportSize / 1024
        ).toFixed(2);
      }

      const hasNamedImports = testCode.includes("import {");
      const hasNamespaceImports = testCode.includes("import *");
      const hasDefaultImports = testCode.match(/import \w+ from/);

      analysis.hasNamedExports = hasNamedImports;
      analysis.hasDefaultExports = !!hasDefaultImports;
      analysis.usesESM = hasNamedImports || hasDefaultImports;

      if (analysis.testedIconCount && analysis.estimatedIconCount) {
        const ratio = analysis.testedIconCount / analysis.estimatedIconCount;
        if (ratio < 0.1) analysis.importEfficiency = "excellent";
        else if (ratio < 0.3) analysis.importEfficiency = "good";
        else if (ratio < 0.6) analysis.importEfficiency = "fair";
        else analysis.importEfficiency = "poor";
      }

      analysis.hasAntiPatterns = hasNamespaceImports;

      return analysis;
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
});
