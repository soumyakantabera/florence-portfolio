import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { content, linkedinUrl, email, doiUrl } from "@/content/portfolio";

export default defineTool({
  name: "get_profile",
  title: "Get portfolio profile",
  description:
    "Return Soumyakanta Bera's portfolio: summary, experience, projects, skills, education, certifications and languages.",
  inputSchema: {
    lang: z.enum(["en", "it"]).default("en").describe("Language: 'en' (English) or 'it' (Italian)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ lang }) => {
    const c = content[lang];
    const profile = {
      name: "Soumyakanta Bera",
      headline: `${c.hero.h1a} ${c.hero.h1b}`,
      summary: c.hero.lead,
      highlights: c.hero.chips,
      stats: c.stats.map((s) => ({ value: s.big, label: s.label, detail: s.sub })),
      experience: {
        role: c.experience.role,
        organization: c.experience.org,
        period: c.experience.period,
        bullets: [...c.experience.bullets],
      },
      projects: c.projects.items.map((p) => ({
        title: p.title,
        category: p.tag,
        description: p.desc,
        outcome: `${p.metric} ${p.metricLabel}`,
        link: p.link?.href ?? null,
      })),
      skills: c.skills.groups.map((g) => ({ group: g.label, items: g.items })),
      education: c.education.degrees.map((d) => ({ ...d })),
      certifications: [...c.certifications.items],
      languages: c.languages.items.map((l) => ({ ...l })),
      contact: { email, linkedin: linkedinUrl, publication: doiUrl },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: { profile },
    };
  },
});
