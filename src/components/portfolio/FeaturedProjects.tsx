import { motion } from "framer-motion";
import { Github, ExternalLink, ShieldAlert, FileSearch, BarChart3, FileBadge, LineChart, Database } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const PROJECTS = [
  {
    icon: ShieldAlert,
    title: "HireSafe — AI Job Scam Detection",
    desc: "NLP-based AI system that flags fraudulent job postings using machine learning models and a Streamlit interface.",
    tech: ["Python", "Machine Learning", "NLP", "Streamlit"],
    github: "https://github.com/GADEKAR328",
  },
  {
    icon: FileSearch,
    title: "AI Resume Analyzer",
    desc: "Parses resumes with OCR and matches candidates to job descriptions using semantic similarity scoring.",
    tech: ["Python", "AI", "OCR", "NLP"],
    github: "https://github.com/GADEKAR328",
  },
  {
    icon: BarChart3,
    title: "Smart Dashboard Analytics",
    desc: "End-to-end BI suite with automated KPIs, drill-downs, and dynamic filters built across Power BI and Excel.",
    tech: ["Power BI", "SQL", "Excel"],
    github: "https://github.com/GADEKAR328",
  },
  {
    icon: FileBadge,
    title: "Certificate Automation System",
    desc: "Bulk certificate generator using Excel VBA and MS Word automation — reduced manual effort by 95%.",
    tech: ["Excel VBA", "MS Word", "Automation"],
    github: "https://github.com/GADEKAR328",
  },
  {
    icon: LineChart,
    title: "Python Sales Data Analysis",
    desc: "Exploratory analysis, segmentation, and visualization of multi-region sales data with actionable insights.",
    tech: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/GADEKAR328",
  },
  {
    icon: Database,
    title: "SQL Online Bookstore",
    desc: "Designed a normalized relational schema and authored complex analytical queries for an e-commerce dataset.",
    tech: ["SQL", "PostgreSQL", "Schema Design"],
    github: "https://github.com/GADEKAR328",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-pad bg-background">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          subtitle="A curated set of analytics, AI, and automation projects."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="dashboard-card relative overflow-hidden p-6 pl-7"
            >
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary to-cyan-accent" />
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky text-primary">
                  <p.icon size={20} />
                </div>
                <div className="flex gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-lg border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                    aria-label="GitHub"
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground transition-transform hover:scale-105"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/15 bg-sky/60 px-3 py-1 text-[11px] font-semibold text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
