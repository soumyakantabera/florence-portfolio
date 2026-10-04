<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project rules

- Portfolio is a single scrolling page (`src/routes/index.tsx`) with hash-anchor navigation — the user explicitly asked for a one-page site; don't split sections into routes.
- All content lives in `src/content/portfolio.ts` as an EN/IT content model; components render from it, no copy is hardcoded in JSX.
- Language is client state persisted in `localStorage` under `portfolio-lang`; both languages are static strings, no backend.
- MCP server lives in src/lib/mcp (one tool per file), served via mcpPlugin at /mcp; public read-only tools over the static content model — no accounts exist.
