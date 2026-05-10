import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const ITEMS = [
  {
    degree: "B.Ed.",
    field: "Education",
    school: "Vidya Pratishthan College of Education, Ahmednagar",
    year: "Jun 2023",
    marks: "75.35%",
  },
  {
    degree: "M.Sc.",
    field: "Zoology / Animal Biology",
    school: "New Arts Commerce And Science College, Ahmednagar",
    year: "Nov 2020",
    marks: "76.04%",
  },
  {
    degree: "B.Sc.",
    field: "Zoology / Animal Biology",
    school: "New Arts Commerce And Science College, Parner",
    year: "Jun 2018",
    marks: "79.31%",
  },
];

export function Education() {
  return (
    <section id="education" className="section-pad bg-background">
      <div className="container-x">
        <SectionHeading eyebrow="Academics" title="Educational Journey" />

        <div className="grid gap-5 md:grid-cols-3">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="dashboard-card overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary to-primary-glow p-5 text-primary-foreground">
                <div className="flex items-center justify-between">
                  <GraduationCap size={22} />
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold">
                    {it.year}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-3xl font-bold">{it.degree}</h3>
                <p className="text-sm opacity-90">{it.field}</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground">{it.school}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                    Marks
                  </span>
                  <span className="font-display text-lg font-bold text-primary">{it.marks}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
