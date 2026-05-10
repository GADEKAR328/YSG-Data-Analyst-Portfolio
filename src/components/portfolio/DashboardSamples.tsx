import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import omato from "@/assets/dashboard-omato.jpg";
import swiggy from "@/assets/dashboard-swiggy.jpg";
import hr from "@/assets/dashboard-hr.jpg";
import tech from "@/assets/dashboard-tech-sales.jpg";
import superstore from "@/assets/dashboard-superstore.jpg";

const DASHBOARDS = [
  { src: omato, title: "Omato Food Delivery", tag: "Power BI" },
  { src: swiggy, title: "Swiggy Instamart", tag: "Power BI" },
  { src: hr, title: "HR Analytics", tag: "Tableau" },
  { src: tech, title: "Indian Tech Sales", tag: "Tableau" },
  { src: superstore, title: "Superstore Sales", tag: "Excel" },
];

export function DashboardSamples() {
  return (
    <section id="dashboards" className="section-pad bg-sky/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="Visual Storytelling"
          title="Dashboard Work Samples"
          subtitle="Selected BI dashboards built across Power BI, Tableau, and Excel."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {DASHBOARDS.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={d.src}
                  alt={d.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-5 text-primary-foreground">
                  <div className="mb-1 inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                    {d.tag}
                  </div>
                  <div className="font-display text-xl font-bold">{d.title}</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <h3 className="font-display text-base font-bold text-foreground">{d.title}</h3>
                <span className="rounded-full bg-sky px-3 py-1 text-[11px] font-semibold text-primary">
                  {d.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
