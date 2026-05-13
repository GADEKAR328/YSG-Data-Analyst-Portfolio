import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const LINKS = [
  { icon: Mail, label: "Email", href: "mailto:yogeshgadekar141@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yogesh-gadekar-a1231b189/" },
  { icon: Github, label: "GitHub", href: "https://github.com/GADEKAR328" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919096846550" },
];

export function ContactCTA() {
  return (
    <section className="cta-bg relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="container-x relative py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center text-primary-foreground"
        >
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            Let's Collaborate
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Let's Build Something <span className="text-cyan-accent">Amazing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base opacity-90">
            Open to data analyst roles, dashboard projects, and AI collaborations. Reach out
            on any channel — I respond within 24 hours.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-all hover:scale-105 hover:bg-white hover:text-primary"
              >
                <l.icon size={16} /> {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
