import { defineTool } from "@lovable.dev/mcp-js";
import { cvAssets } from "@/content/portfolio";

export default defineTool({
  name: "get_cv_links",
  title: "Get CV download links",
  description:
    "List the four downloadable CVs (Finance and Data editions, in English and Italian). Paths are relative to the portfolio site.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const cvs = (["finance", "data"] as const).flatMap((track) =>
      (["en", "it"] as const).map((lang) => ({
        track,
        lang,
        filename: cvAssets[track][lang].original_filename,
        path: cvAssets[track][lang].url,
      })),
    );
    return {
      content: [{ type: "text", text: JSON.stringify(cvs, null, 2) }],
      structuredContent: { cvs },
    };
  },
});
