import { motion } from "framer-motion";
import { Code2, Brain, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const GROUPS = [
  {
    icon: Code2,
    title: "Programming & Analytics",
    skills: [
      { name: "SQL & PostgreSQL", level: 92 },
      { name: "Python (Pandas, NumPy)", level: 88 },
      { name: "Excel & Power Query", level: 95 },
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 85 },
    ],
  },
  {
    icon: Brain,
    title: "Data & AI Skills",
    skills: [
      { name: "Data Cleaning & ETL", level: 92 },
      { name: "Data Visualization", level: 90 },
      { name: "Machine Learning Basics", level: 75 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Dashboard Design", level: 93 },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      { name: "Communication", level: 92 },
      { name: "Problem Solving", level: 90 },
      { name: "Presentation", level: 88 },
      { name: "Leadership", level: 85 },
    ],
  },
];

function Bar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground/80">{name}</span>
        <span className="text-xs font-semibold text-primary">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-sky">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-accent"
        />
      </div>
    </div>
  );
}

export function CoreExpertise() {
  return (
    <section id="skills" className="section-pad bg-background">
      <div className="container-x">
        <SectionHeading
          eyebrow="What I Do"
          title="Core Expertise"
          subtitle="A balanced mix of analytics tooling, AI fluency, and human skills."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="dashboard-card p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-cyan-accent text-primary-foreground">
                  <g.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-primary">{g.title}</h3>
              </div>
              <div className="space-y-4">
                {g.skills.map((s) => (
                  <Bar key={s.name} {...s} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
