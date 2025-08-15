import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: { react: "src/react/index.ts" },
    format: ["cjs", "esm"],
    dts: true,
    outExtension: ({ format }) => ({
      js: format === "cjs" ? ".js" : ".mjs",
    }),
    splitting: true,
    sourcemap: false,
    clean: false,
    minify: true,
    treeshake: true,
    external: ["react"],
    esbuildOptions: (options) => {
      options.banner = { js: '"use client";' };
    },
    noExternal: ["clsx"],
  },
  {
    entry: { vue: "src/vue/index.ts" },
    format: ["cjs", "esm"],
    dts: true,
    outExtension: ({ format }) => ({
      js: format === "cjs" ? ".js" : ".mjs",
    }),
    splitting: true,
    sourcemap: false,
    clean: false,
    minify: true,
    treeshake: true,
    external: ["vue"],
    noExternal: ["clsx"],
  },
  {
    entry: { svelte: "src/svelte/index.ts" },
    format: ["cjs", "esm"],
    dts: false,
    outExtension: ({ format }) => ({
      js: format === "cjs" ? ".js" : ".mjs",
    }),
    splitting: true,
    sourcemap: false,
    clean: false,
    minify: true,
    treeshake: true,
    external: ["svelte"],
    noExternal: ["clsx"],
  },
  {
    entry: { angular: "src/angular/index.ts" },
    format: ["cjs", "esm"],
    dts: true,
    outExtension: ({ format }) => ({
      js: format === "cjs" ? ".js" : ".mjs",
    }),
    splitting: true,
    sourcemap: false,
    clean: false,
    minify: true,
    treeshake: true,
    external: ["@angular/core", "@angular/common"],
    noExternal: ["clsx"],
  },
]);
