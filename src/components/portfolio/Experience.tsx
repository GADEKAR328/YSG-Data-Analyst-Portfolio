import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const ITEMS = [
  {
    role: "Admin Executive · Transport Manager · Librarian",
    org: "MindSpark International School",
    period: "Full-time",
    points: [
      "Managed transport scheduling and student allocation using Excel systems",
      "Handled library data and administrative reporting workflows",
      "Built tracking dashboards for daily operational insights",
    ],
  },
  {
    role: "Assistant Professor",
    org: "NACS College",
    period: "Academic",
    points: [
      "Delivered 200+ lectures and managed academic datasets",
      "Used Excel for student performance tracking and reporting",
      "Designed automated report cards reducing manual effort",
    ],
  },
  {
    role: "Freelance Analytics Projects",
    org: "Self-employed",
    period: "Ongoing",
    points: [
      "Power BI & Tableau dashboard development for SMBs",
      "AI/automation projects: scam detection, resume parsing, certificate generation",
      "ETL pipelines using Python, SQL and Power Query",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-pad bg-sky/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          subtitle="3.4+ years across administration, education, and freelance analytics."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-cyan-accent to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {ITEMS.map((it, i) => (
              <motion.div
                key={it.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:[&>article]:col-start-2"
                }`}
              >
                <span className="absolute left-4 top-3 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-primary ring-4 ring-sky md:left-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>

                <article className="dashboard-card ml-10 p-6 md:ml-0">
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <Briefcase size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {it.period}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{it.role}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{it.org}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {it.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
