import { motion } from "framer-motion";
import {
  Award, BarChart3, Code, Database, Brain, Table, Briefcase,
  Calculator, Wrench, Cpu, Palette, Sparkles, Layout, FileSpreadsheet,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const CERTS = [
  { icon: BarChart3, name: "Google Data Analytics" },
  { icon: Layout, name: "Power BI Mastery" },
  { icon: Briefcase, name: "Google Business Intelligence" },
  { icon: Database, name: "Power Query" },
  { icon: Wrench, name: "Google IT Support" },
  { icon: FileSpreadsheet, name: "MS Excel Advanced (MKCL)" },
  { icon: Briefcase, name: "Google Project Management" },
  { icon: Calculator, name: "Tally Prime (MKCL)" },
  { icon: Database, name: "SQL Mastery" },
  { icon: Cpu, name: "Computer Hardware" },
  { icon: Code, name: "Python Developer" },
  { icon: Palette, name: "Graphic Design" },
  { icon: Sparkles, name: "Generative AI for ALL" },
  { icon: Table, name: "Microsoft UX Design" },
];

export function Certifications() {
  return (
    <section id="certifications" className="section-pad bg-sky/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="Verified Learning"
          title="Certifications & Training"
          subtitle="14 certifications across analytics, AI, programming, and design."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="dashboard-card flex items-center gap-4 p-4"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-cyan-accent text-primary-foreground">
                <c.icon size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground">{c.name}</h4>
                <div className="mt-0.5 flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                  <Award size={12} className="text-cyan-accent" /> Certified
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
