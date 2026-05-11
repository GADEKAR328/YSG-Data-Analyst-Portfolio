import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, FolderKanban, Award, Briefcase } from "lucide-react";
import profile from "@/assets/profile-yogesh.jpg";
import { Particles } from "./Particles";

const STATS = [
  { icon: FolderKanban, value: "11+", label: "Projects" },
  { icon: Award, value: "14", label: "Certifications" },
  { icon: Briefcase, value: "3.4+", label: "Years Exp." },
];

export function Hero() {
  return (
    <section id="home" className="hero-bg relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <Particles />

      {/* decorative blurred blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-card mx-auto flex flex-col items-center rounded-3xl p-8 md:p-12 text-center"
          >
            <div className="relative mb-6">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-cyan-accent blur-xl opacity-60"
              />
              <img
                src={profile}
                alt="Yogesh Gadekar — Data Analyst"
                width={160}
                height={160}
                className="glow-ring relative h-36 w-36 rounded-full object-cover ring-4 ring-white md:h-40 md:w-40"
              />
            </div>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Available for Opportunities
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold leading-tight text-primary md:text-6xl"
            >
              Yogesh <span className="gradient-text">Gadekar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-3 text-base font-medium text-foreground/70 md:text-lg"
            >
              Data Analyst <span className="text-cyan-accent">|</span> Power BI{" "}
              <span className="text-cyan-accent">|</span> Tableau{" "}
              <span className="text-cyan-accent">|</span> SQL{" "}
              <span className="text-cyan-accent">|</span> Python
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-5 max-w-xl text-sm text-muted-foreground md:text-base"
            >
              Building dashboards, automation systems, and business intelligence solutions
              using data-driven workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-7 flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href="/Yogesh_Gadekar_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-sky"
              >
                <Mail size={16} /> Contact Me
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/GADEKAR328"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/yogesh-gadekar"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 grid w-full grid-cols-3 gap-3 md:gap-4"
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-white/70 p-3 text-center backdrop-blur md:p-4"
                >
                  <s.icon className="mx-auto mb-1 text-primary" size={18} />
                  <div className="font-display text-xl font-bold text-primary md:text-2xl">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground md:text-xs">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
