import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import getCvLinks from "./tools/get-cv-links";

export default defineMcp({
  name: "florence-portfolio",
  title: "Florence Portfolio",
  version: "0.1.0",
  instructions:
    "Public portfolio of Soumyakanta Bera (Finance, Data & AI analyst, MSc University of Florence). Use `get_profile` for background (EN or IT) and `get_cv_links` for CV downloads.",
  tools: [getProfile, getCvLinks],
});
