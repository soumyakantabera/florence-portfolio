import cvFinancialEn from "@/assets/cv-financial-en.pdf.asset.json";
import cvDataEn from "@/assets/cv-data-en.pdf.asset.json";
import cvFinancialIt from "@/assets/cv-financial-it.pdf.asset.json";
import cvDataIt from "@/assets/cv-data-it.pdf.asset.json";
import portrait from "@/assets/portrait.jpg.asset.json";

export type Lang = "en" | "it";

export const portraitAsset = portrait;
export const linkedinUrl = "https://www.linkedin.com/in/soumyakantabera";
export const email = "bera.soumyakanta@yahoo.com";
export const phone = "+39 347 924 9860";
export const doiUrl = "https://doi.org/10.2139/ssrn.7082778";

/** All four CVs — the "finance" and "data" tracks, each in EN and IT. */
export const cvAssets = {
  finance: { en: cvFinancialEn, it: cvFinancialIt },
  data: { en: cvDataEn, it: cvDataIt },
} as const;

export interface Stat {
  big: string;
  label: string;
  sub: string;
  tone: "brand" | "accent" | "violet";
}

export interface SkillGroup {
  label: string;
  tone: "brand" | "accent" | "violet" | "green";
  items: string;
}

export interface Project {
  tag: string;
  tone: "brand" | "accent" | "violet";
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
  link?: { href: string; label: string };
}

export interface Content {
  meta: { title: string; description: string };
  nav: { profile: string; experience: string; projects: string; skills: string; contact: string; download: string };
  hero: {
    pill: string;
    h1a: string;
    h1b: string;
    lead: string;
    note: string;
    chips: string[];
    cvFinance: string;
    cvData: string;
    linkedin: string;
  };
  statsTitle: string;
  stats: Stat[];
  experience: {
    title: string;
    sub: string;
    role: string;
    org: string;
    period: string;
    bullets: string[];
  };
  projects: {
    title: string;
    sub: string;
    items: Project[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  education: {
    title: string;
    degrees: { school: string; degree: string; period: string; detail: string }[];
  };
  certifications: {
    title: string;
    items: string[];
  };
  languages: {
    title: string;
    items: { name: string; level: string }[];
  };
  contact: {
    title: string;
    lead: string;
    cvFinance: string;
    cvData: string;
    cvFinanceAlt: string;
    cvDataAlt: string;
    linkedin: string;
    emailLabel: string;
    phoneLabel: string;
  };
  footer: { copyright: string; privacy: string };
}

export const content: Record<Lang, Content> = {
  en: {
    meta: {
      title: "Soumyakanta Bera — Finance, Data & AI Analyst · Milan",
      description:
        "Finance & data analyst in Milan: FP&A reporting, credit risk, Power BI, SQL and Python. MSc Finance & Risk Management, University of Florence. Available immediately.",
    },
    nav: {
      profile: "Profile",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      download: "Download CV",
    },
    hero: {
      pill: "Available immediately · Milan, Italy",
      h1a: "Finance, Data & AI —",
      h1b: "built to cross borders.",
      lead: "International analyst from India, now based in Milan. MSc graduate in Finance & Risk Management (University of Florence), turning financial and data problems into decisions — through FP&A reporting, quantitative risk analysis and decision-ready dashboards.",
      note: "Valid Italian study residence permit — convertible to an employee work permit, outside the quota system.",
      chips: ["Financial Analysis", "FP&A Reporting", "Credit & Risk", "Power BI", "SQL", "Python", "Advanced Excel"],
      cvFinance: "Download CV — Finance (EN)",
      cvData: "Download CV — Data (EN)",
      linkedin: "LinkedIn →",
    },
    statsTitle: "At a glance",
    stats: [
      { big: "M.Sc.", label: "University of Florence", sub: "Finance & Risk Management", tone: "brand" },
      { big: "279", label: "Firms analysed", sub: "14 countries · MSc thesis", tone: "accent" },
      { big: "2", label: "Languages", sub: "English (C1) & Italian (B1)", tone: "violet" },
    ],
    experience: {
      title: "Experience",
      sub: "Selected roles",
      role: "M&A Analyst Intern",
      org: "Valdonica SRL · Tuscany, Italy",
      period: "Oct 2024 – Dec 2024",
      bullets: [
        "Supported DCF and comparable-company modelling with multi-year projections, scenarios, capex and sensitivity tables",
        "Prepared P&L reviews, KPI summaries and competitor benchmarking used in due-diligence materials",
        "Created Excel and PowerPoint due-diligence packs and presentations for senior management",
        "Analysed revenue, margin and key business drivers to support valuation",
      ],
    },
    projects: {
      title: "Flagship projects",
      sub: "Outcome-first",
      items: [
        {
          tag: "FP&A",
          tone: "brand",
          title: "Budget-vs-Actual Variance & KPI Reporting Pack",
          desc: "Independent project — redesigned the monthly FP&A reporting cycle around 12 KPIs across 12 periods, with variance bridges and management reporting.",
          metric: "4h → 30min",
          metricLabel: "management-pack preparation time",
        },
        {
          tag: "DATA · BI",
          tone: "accent",
          title: "Automated ETL & Business KPI Dashboard",
          desc: "Independent project — mapped the as-is process (~3h of manual data prep), designed the to-be solution and built a Python/SQL ETL pipeline feeding a Power BI dashboard.",
          metric: "10 metrics",
          metricLabel: "trend & exception views · data prep under 20 min",
        },
        {
          tag: "MSC THESIS",
          tone: "violet",
          title: "Inventory Buildup as an Early-Warning Signal",
          desc: "Peer-adjusted abnormal-inventory risk indicator built with panel statistical analysis — fixed effects, clustered errors, placebo falsification and multiple-testing correction.",
          metric: "17.1% vs 12.6%",
          metricLabel: "margin-distress incidence, high-stress vs all firm-years",
          link: { href: doiUrl, label: "DOI: 10.2139/ssrn.7082778" },
        },
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        {
          label: "Finance & FP&A",
          tone: "brand",
          items: "FP&A reporting · budgeting & forecasting · variance analysis · budget vs actual · P&L & margin analysis · working capital · cash flow · capex · financial statement analysis · DCF & comps · IFRS",
        },
        {
          label: "Excel & Modelling",
          tone: "accent",
          items: "Advanced Excel · PivotTables · Power Pivot · XLOOKUP · financial models · scenario & sensitivity analysis · PowerPoint · management reporting packs",
        },
        {
          label: "Credit & Risk",
          tone: "violet",
          items: "Quantitative risk indicators · panel statistical analysis · peer benchmarking · early-warning signal design · risk flagging",
        },
        {
          label: "Data & BI",
          tone: "green",
          items: "Power BI (DAX, data modelling, Power Query) · SQL · Python (pandas, NumPy, matplotlib) · ETL & data cleaning · data quality · dashboards · statistical analysis",
        },
        {
          label: "Finance Ops & ERP",
          tone: "brand",
          items: "Order-to-cash & purchase-to-pay cycles · receivables management · reconciliations · cost & management accounting · data quality controls · SAP · Gestionale",
        },
        {
          label: "Business Analysis",
          tone: "accent",
          items: "Requirements gathering · functional & gap analysis · as-is/to-be process mapping · solution design · functional documentation · stakeholder reporting · process improvement",
        },
      ],
    },
    education: {
      title: "Education",
      degrees: [
        {
          degree: "MSc Finance and Risk Management",
          school: "University of Florence, Italy",
          period: "Sep 2023 – Jul 2026",
          detail: "Financial Statement Analysis, Corporate Finance, Computational Finance, Quantitative Risk Management, Derivatives",
        },
        {
          degree: "Bachelor of Business Administration",
          school: "MAKAUT, India",
          period: "Jul 2019 – Jun 2022",
          detail: "Financial Accounting, Cost Accounting, Management Accounting, Financial Management",
        },
      ],
    },
    certifications: {
      title: "Certifications",
      items: [
        "CFI Financial Analysis & Modelling",
        "Microsoft Power BI Data Analyst",
        "Microsoft Excel Professional Certificate",
        "Google Data Analytics",
        "Google Advanced Data Analytics",
        "Wharton Business Analytics Specialization (UPenn)",
        "Unilever Supply Chain Data Analyst",
        "SAP Technology Consultant",
        "Intuit Academy Bookkeeping",
      ],
    },
    languages: {
      title: "Languages",
      items: [
        { name: "English", level: "Advanced (C1)" },
        { name: "Italian", level: "Intermediate (B1)" },
      ],
    },
    contact: {
      title: "Let's talk numbers.",
      lead: "Open to finance, FP&A, credit risk and data roles in Italy and across Europe. Based in Milan, available to start immediately.",
      cvFinance: "CV · Finance (EN)",
      cvData: "CV · Data (EN)",
      cvFinanceAlt: "CV · Finanza (IT)",
      cvDataAlt: "CV · Dati (IT)",
      linkedin: "LinkedIn →",
      emailLabel: "bera.soumyakanta@yahoo.com",
      phoneLabel: "+39 347 924 9860",
    },
    footer: {
      copyright: "© 2026 Soumyakanta Bera · Milan, Italy",
      privacy:
        "I authorise the processing of my personal data pursuant to Art. 13 of Italian Legislative Decree no. 196/2003 and Art. 13 of Regulation (EU) 2016/679.",
    },
  },
  it: {
    meta: {
      title: "Soumyakanta Bera — Analista Finanziario, Dati & AI · Milano",
      description:
        "Analista finanziario e dati a Milano: reporting FP&A, credito e rischio, Power BI, SQL e Python. Laurea magistrale in Finance & Risk Management, Università di Firenze. Disponibile da subito.",
    },
    nav: {
      profile: "Profilo",
      experience: "Esperienza",
      projects: "Progetti",
      skills: "Competenze",
      contact: "Contatti",
      download: "Scarica CV",
    },
    hero: {
      pill: "Disponibile da subito · Milano, Italia",
      h1a: "Finanza, Dati & AI —",
      h1b: "costruiti per attraversare i confini.",
      lead: "Analista internazionale dall'India, oggi a Milano. Laureato magistrale in Finance & Risk Management (Università degli Studi di Firenze), trasformo problemi finanziari e di dati in decisioni — attraverso reporting FP&A, analisi quantitativa del rischio e dashboard pronte all'uso.",
      note: "Permesso di soggiorno per studio valido — convertibile in lavoro subordinato, fuori quota (decreto flussi).",
      chips: ["Analisi Finanziaria", "Reporting FP&A", "Credito e Rischio", "Power BI", "SQL", "Python", "Excel avanzato"],
      cvFinance: "Scarica CV — Finanza (IT)",
      cvData: "Scarica CV — Dati (IT)",
      linkedin: "LinkedIn →",
    },
    statsTitle: "In sintesi",
    stats: [
      { big: "LM", label: "Università degli Studi di Firenze", sub: "Finance & Risk Management", tone: "brand" },
      { big: "279", label: "Società analizzate", sub: "14 paesi · tesi magistrale", tone: "accent" },
      { big: "2", label: "Lingue", sub: "Inglese (C1) e Italiano (B1)", tone: "violet" },
    ],
    experience: {
      title: "Esperienza",
      sub: "Ruoli selezionati",
      role: "Stage Analista M&A",
      org: "Valdonica SRL · Toscana, Italia",
      period: "Ott 2024 – Dic 2024",
      bullets: [
        "Supporto alla modellazione DCF e comparables con proiezioni pluriennali, scenari, capex e tabelle di sensibilità",
        "Preparazione di revisioni del conto economico, sintesi KPI e benchmarking competitivo per materiali di due diligence",
        "Creazione di pacchetti di due diligence in Excel e PowerPoint e presentazioni per il management",
        "Analisi di ricavi, margini e driver di business a supporto della valutazione",
      ],
    },
    projects: {
      title: "Progetti di punta",
      sub: "Risultati prima di tutto",
      items: [
        {
          tag: "FP&A",
          tone: "brand",
          title: "Pacchetto di Reporting Budget vs Consuntivo e KPI",
          desc: "Progetto indipendente — ridisegno del ciclo di reporting mensile FP&A su 12 KPI e 12 periodi, con analisi degli scostamenti, variance bridge e reporting direzionale.",
          metric: "4h → 30min",
          metricLabel: "tempo di preparazione del pacchetto direzionale",
        },
        {
          tag: "DATI · BI",
          tone: "accent",
          title: "Pipeline ETL Automatizzata e Dashboard KPI",
          desc: "Progetto indipendente — mappatura del processo as-is (~3 ore di preparazione manuale dei dati), progettazione della soluzione to-be e pipeline ETL Python/SQL che alimenta una dashboard Power BI.",
          metric: "10 metriche",
          metricLabel: "viste di trend ed eccezione · preparazione dati in meno di 20 minuti",
        },
        {
          tag: "TESI LM",
          tone: "violet",
          title: "L'Accumulo di Magazzino come Segnale di Allerta Precoce",
          desc: "Indicatore di rischio da accumulo di magazzino anomalo, corretto per i peer, tramite analisi statistica panel — effetti fissi, errori clusterizzati, falsificazione placebo e correzione per test multipli.",
          metric: "17,1% vs 12,6%",
          metricLabel: "incidenza di margin-distress, anni-impresa ad alto stress vs tutti",
          link: { href: doiUrl, label: "DOI: 10.2139/ssrn.7082778" },
        },
      ],
    },
    skills: {
      title: "Competenze",
      groups: [
        {
          label: "Finanza e FP&A",
          tone: "brand",
          items: "Reporting FP&A · budgeting e previsioni · analisi degli scostamenti · budget vs consuntivo · analisi di conto economico e marginalità · capitale circolante · flussi di cassa · capex · analisi di bilancio · DCF e multipli · IFRS",
        },
        {
          label: "Excel e Modellazione",
          tone: "accent",
          items: "Excel avanzato · tabelle pivot · Power Pivot · XLOOKUP · modelli finanziari · analisi di scenario e sensibilità · PowerPoint · pacchetti di reporting direzionale",
        },
        {
          label: "Credito e Rischio",
          tone: "violet",
          items: "Indicatori di rischio quantitativi · analisi statistica panel · benchmarking di settore · progettazione di segnali di allerta precoce · monitoraggio del rischio",
        },
        {
          label: "Dati e BI",
          tone: "green",
          items: "Power BI (DAX, data modelling, Power Query) · SQL · Python (pandas, NumPy, matplotlib) · ETL e pulizia dei dati · qualità dei dati · dashboard · analisi statistica",
        },
        {
          label: "Finance Ops & ERP",
          tone: "brand",
          items: "Cicli order-to-cash e purchase-to-pay · gestione crediti e incassi · riconciliazioni · contabilità industriale e direzionale · controlli di qualità dei dati · SAP · Gestionale",
        },
        {
          label: "Business Analysis",
          tone: "accent",
          items: "Raccolta e analisi dei requisiti · analisi funzionale e gap analysis · mappatura processi as-is/to-be · progettazione di soluzioni · documentazione funzionale · reporting agli stakeholder · miglioramento dei processi",
        },
      ],
    },
    education: {
      title: "Istruzione",
      degrees: [
        {
          degree: "Laurea Magistrale in Finance & Risk Management",
          school: "Università degli Studi di Firenze",
          period: "Set 2023 – Lug 2026",
          detail: "Analisi di Bilancio, Corporate Finance, Finanza Computazionale, Gestione Quantitativa del Rischio, Derivati",
        },
        {
          degree: "Laurea Triennale in Business Administration",
          school: "MAKAUT, India",
          period: "Lug 2019 – Giu 2022",
          detail: "Contabilità Generale, Contabilità dei Costi, Contabilità Direzionale, Financial Management",
        },
      ],
    },
    certifications: {
      title: "Certificazioni",
      items: [
        "CFI Financial Analysis & Modelling",
        "Microsoft Power BI Data Analyst",
        "Microsoft Excel Professional Certificate",
        "Google Data Analytics",
        "Google Advanced Data Analytics",
        "Wharton Business Analytics Specialization (UPenn)",
        "Unilever Supply Chain Data Analyst",
        "SAP Technology Consultant",
        "Intuit Academy Bookkeeping",
      ],
    },
    languages: {
      title: "Lingue",
      items: [
        { name: "Inglese", level: "Avanzato (C1)" },
        { name: "Italiano", level: "Intermedio (B1, in consolidamento)" },
      ],
    },
    contact: {
      title: "Parliamo di numeri.",
      lead: "Disponibile per ruoli in finanza, FP&A, credito e rischio e dati, in Italia e in Europa. A Milano, disponibile da subito.",
      cvFinance: "CV · Finanza (IT)",
      cvData: "CV · Dati (IT)",
      cvFinanceAlt: "CV · Finance (EN)",
      cvDataAlt: "CV · Data (EN)",
      linkedin: "LinkedIn →",
      emailLabel: "bera.soumyakanta@yahoo.com",
      phoneLabel: "+39 347 924 9860",
    },
    footer: {
      copyright: "© 2026 Soumyakanta Bera · Milano, Italia",
      privacy:
        "Autorizzo il trattamento dei miei dati personali ai sensi dell'Art. 13 del D.Lgs. 196/2003 e dell'Art. 13 del Regolamento (UE) 2016/679.",
    },
  },
};
