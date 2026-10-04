import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  content,
  cvAssets,
  email,
  linkedinUrl,
  mcpEndpoint,
  phone,
  portraitAsset,
  type Lang,
} from "@/content/portfolio";
import unifiLogo from "@/assets/logos/unifi.svg";
import microsoftLogo from "@/assets/logos/microsoft.svg";
import googleLogo from "@/assets/logos/google.svg";
import whartonLogo from "@/assets/logos/wharton.svg";
import unileverLogo from "@/assets/logos/unilever.svg";
import sapLogo from "@/assets/logos/sap.svg";
import intuitLogo from "@/assets/logos/intuit.svg";

const mcpConfig = JSON.stringify(
  { mcpServers: { "soumyakanta-portfolio": { url: mcpEndpoint } } },
  null,
  2,
);

function CopyButton({ label, copiedLabel }: { label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(mcpConfig);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <button
      onClick={copy}
      className="shrink-0 rounded-full bg-brand/10 px-3 py-1.5 text-[11px] font-semibold text-brand transition-colors hover:bg-brand/20"
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
  { src: microsoftLogo, alt: "Microsoft" },
  { src: googleLogo, alt: "Google" },
  { src: whartonLogo, alt: "Wharton — University of Pennsylvania" },
  { src: unileverLogo, alt: "Unilever" },
  { src: sapLogo, alt: "SAP" },
  { src: intuitLogo, alt: "Intuit" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soumyakanta Bera — Finance, Data & AI Analyst · Milan" },
      {
        name: "description",
        content:
          "Finance & data analyst in Milan: FP&A reporting, credit risk, Power BI, SQL and Python. MSc Finance & Risk Management, University of Florence. Available immediately.",
      },
      { property: "og:title", content: "Soumyakanta Bera — Finance, Data & AI Analyst · Milan" },
      {
        property: "og:description",
        content:
          "Finance & data analyst in Milan: FP&A reporting, credit risk, Power BI, SQL and Python. MSc Finance & Risk Management, University of Florence. Available immediately.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const toneText = {
  brand: "text-brand",
  accent: "text-accent",
  violet: "text-violet-accent",
  green: "text-green-accent",
} as const;

const toneBgChip = {
  brand: "bg-brand/10 text-brand",
  accent: "bg-accent/15 text-amber-700",
  violet: "bg-violet-accent/10 text-violet-accent",
  green: "bg-green-accent/10 text-green-accent",
} as const;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <h2 className="font-display text-2xl font-bold tracking-tight text-ink">{title}</h2>
      {sub ? <span className="text-xs font-medium text-soft">{sub}</span> : null}
    </div>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-lang");
    if (stored === "it" || stored === "en") {
      setLang(stored);
    } else if (navigator.language?.toLowerCase().startsWith("it")) {
      setLang("it");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const switchTo = (l: Lang) => {
    setLang(l);
    window.localStorage.setItem("portfolio-lang", l);
  };

  const navItems = [
    { href: "#profile", label: t.nav.profile },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <div className="mesh-bg min-h-screen font-sans text-ink antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
          <a href="#profile" className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-brand font-display text-sm font-bold text-white">
              SB
            </span>
            <span className="font-display font-semibold tracking-tight">Soumyakanta B.</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-soft md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center rounded-full bg-white/80 p-1 ring-1 ring-black/5">
              <button
                onClick={() => switchTo("en")}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  lang === "en" ? "bg-ink text-white" : "text-soft hover:text-ink"
                }`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <button
                onClick={() => switchTo("it")}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  lang === "it" ? "bg-ink text-white" : "text-soft hover:text-ink"
                }`}
                aria-pressed={lang === "it"}
              >
                IT
              </button>
            </div>
            <a
              href={cvAssets.finance[lang].url}
              download
              className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand/90 sm:inline-block"
            >
              {t.nav.download}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="profile" className="mx-auto max-w-6xl scroll-mt-20 px-5 pt-14 pb-10 sm:px-6 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-brand ring-1 ring-brand/20">
              <span className="size-1.5 rounded-full bg-accent" />
              {t.hero.pill}
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {t.hero.h1a}
              <br />
              <span className="text-brand">{t.hero.h1b}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-soft sm:text-lg">{t.hero.lead}</p>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-soft/80">{t.hero.note}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={cvAssets.finance[lang].url}
                download
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                {t.hero.cvFinance}
              </a>
              <a
                href={cvAssets.data[lang].url}
                download
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink ring-1 ring-black/10 transition-transform hover:-translate-y-0.5"
              >
                {t.hero.cvData}
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-5 py-3 text-sm font-semibold text-brand hover:underline"
              >
                {t.hero.linkedin}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {t.hero.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-ink ring-1 ring-black/5"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px]">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand via-accent to-violet-accent opacity-25 blur-2xl" />
            <div className="absolute -left-6 top-8 -z-10 size-20 rounded-full bg-green-accent/30 blur-xl" />
            <div className="absolute -right-4 bottom-10 -z-10 size-16 rounded-full bg-accent/40 blur-lg" />
            <div className="rounded-[1.75rem] bg-gradient-to-br from-brand/25 via-accent/20 to-violet-accent/25 p-2 ring-1 ring-black/5">
              <div className="overflow-hidden rounded-[1.35rem]">
                <img
                  src={portraitAsset.url}
                  alt="Soumyakanta Bera"
                  className="aspect-[4/5] w-full bg-white object-cover"
                  loading="eager"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-mono text-[11px] text-soft">
              India → Florence → Milan
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-6">
        <Reveal>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-soft">{t.statsTitle}</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {t.stats.map((stat, i) => (
            <Reveal key={stat.big} delay={i * 80}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1">
                <p className={`font-display text-3xl font-bold ${toneText[stat.tone]}`}>{stat.big}</p>
                <p className="mt-1 text-sm font-medium">{stat.label}</p>
                <p className="mt-1 text-xs text-soft">{stat.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-12 sm:px-6">
        <Reveal>
          <SectionHeading title={t.experience.title} sub={t.experience.sub} />
        </Reveal>
        <Reveal delay={80}>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-semibold">{t.experience.role}</h3>
                <p className="mt-0.5 text-sm font-medium text-soft">{t.experience.org}</p>
              </div>
              <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                {t.experience.period}
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {t.experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-soft">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-12 sm:px-6">
        <Reveal>
          <SectionHeading title={t.projects.title} sub={t.projects.sub} />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {t.projects.items.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1">
                <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${toneText[project.tone]}`}>
                  {project.tag}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-soft">{project.desc}</p>
                <div className="mt-5 border-t border-black/5 pt-4">
                  <p className={`font-display text-2xl font-bold tracking-tight ${toneText[project.tone]}`}>
                    {project.metric}
                  </p>
                  <p className="mt-1 text-xs text-soft">{project.metricLabel}</p>
                </div>
                {project.link ? (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-mono text-[11px] text-brand hover:underline"
                  >
                    {project.link.label}
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-12 sm:px-6">
        <Reveal>
          <SectionHeading title={t.skills.title} />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 60}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <p className={`text-xs font-semibold uppercase tracking-wide ${toneText[group.tone]}`}>
                  {group.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-soft">{group.items}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education / Certifications / Languages */}
      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand/70">
                {t.education.title}
              </p>
              <div className="mt-4 space-y-5">
                {t.education.degrees.map((deg) => (
                  <div key={deg.degree} className="flex items-start gap-3">
                    {deg.school.includes("Florence") && (
                      <img
                        src={unifiLogo}
                        alt="University of Florence"
                        className="mt-0.5 h-9 w-9 shrink-0 rounded-lg bg-white object-contain p-1 ring-1 ring-black/5"
                      />
                    )}
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="font-display font-semibold leading-snug">{deg.degree}</p>
                        <span className="font-mono text-[11px] text-soft">{deg.period}</span>
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-soft">{deg.school}</p>
                      <p className="mt-1 text-xs leading-relaxed text-soft/80">{deg.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid h-full gap-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand/70">
                  {t.certifications.title}
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {t.certifications.items.map((cert) => (
                    <li key={cert} className="flex items-center gap-2 text-[13px] text-soft">
                      <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                      {cert}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-black/5 pt-4">
                  {certLogos.map((logo) => (
                    <img
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      title={logo.alt}
                      className="h-5 w-auto max-w-[88px] object-contain opacity-70 transition-opacity hover:opacity-100"
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand/70">
                  {t.languages.title}
                </p>
                <div className="mt-4 space-y-2">
                  {t.languages.items.map((l) => (
                    <div key={l.name} className="flex items-center justify-between text-[13px]">
                      <span className="font-medium">{l.name}</span>
                      <span className="text-soft">{l.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-16 sm:px-6">
        <Reveal>
          <div className="rounded-3xl bg-ink px-7 py-12 text-white sm:px-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight">{t.contact.title}</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">{t.contact.lead}</p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <a href={`mailto:${email}`} className="text-white/85 hover:underline">
                    {t.contact.emailLabel}
                  </a>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-white/85 hover:underline">
                    {t.contact.phoneLabel}
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={cvAssets.finance[lang].url}
                  download
                  className="rounded-xl bg-brand px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand/90"
                >
                  {t.contact.cvFinance}
                </a>
                <a
                  href={cvAssets.data[lang].url}
                  download
                  className="rounded-xl bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
                >
                  {t.contact.cvData}
                </a>
                <a
                  href={cvAssets.finance[lang === "en" ? "it" : "en"].url}
                  download
                  className="rounded-xl bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
                >
                  {t.contact.cvFinanceAlt}
                </a>
                <a
                  href={cvAssets.data[lang === "en" ? "it" : "en"].url}
                  download
                  className="rounded-xl bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
                >
                  {t.contact.cvDataAlt}
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 rounded-xl px-5 py-3 text-center text-sm font-semibold text-white/80 ring-1 ring-white/10 transition-colors hover:text-white"
                >
                  {t.contact.linkedin}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="mt-8 space-y-1 text-center">
          <p className="text-xs text-soft">{t.footer.copyright}</p>
          <p className="mx-auto max-w-2xl text-[11px] leading-relaxed text-soft/70">{t.footer.privacy}</p>
        </div>
      </section>
    </div>
  );
}
