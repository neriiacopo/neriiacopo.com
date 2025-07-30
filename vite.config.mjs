import path from "node:path";
import { createRequire } from "node:module";

import { defineConfig, normalizePath } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import react from "@vitejs/plugin-react";
import topLevelAwait from "vite-plugin-top-level-await";

const isCodeSandbox =
    "SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env;

const require = createRequire(import.meta.url);

const pdfjsDistPath = path.dirname(require.resolve("pdfjs-dist/package.json"));
const cMapsDir = normalizePath(path.join(pdfjsDistPath, "cmaps"));

export default defineConfig({
    plugins: [
        react(),
        topLevelAwait(),
        viteStaticCopy({
            targets: [
                {
                    src: cMapsDir,
                    dest: "",
                },
            ],
        }),
    ],
    root: "src",
    publicDir: "public",
    base: "/",
    server: {
        host: true,
        open: !isCodeSandbox,
    },
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        sourcemap: true,
    },
});
