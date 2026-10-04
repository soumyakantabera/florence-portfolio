// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/tanstack/vite";

const repositoryName = process.env["GITHUB_REPOSITORY"]?.split("/")[1];
const isGithubActionsBuild = process.env["GITHUB_ACTIONS"] === "true";
const githubPagesBasePath = repositoryName ? `/${repositoryName}/` : "/";

export default defineConfig({
  vite: {
    base: isGithubActionsBuild ? githubPagesBasePath : "/",
    plugins: [mcpPlugin()],
  },
  nitro: false,
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
  },
});
