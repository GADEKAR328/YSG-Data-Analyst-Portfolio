import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(150),
  phone: z.string().trim().min(7, "Invalid phone").max(20),
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10, "Tell me a bit more").max(1500),
});

const FIELDS = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Jane Doe" },
  { name: "email", label: "Email", type: "email", placeholder: "jane@company.com" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+91 90000 00000" },
  { name: "subject", label: "Subject", type: "text", placeholder: "Project enquiry" },
] as const;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const update = (k: string, v: string) => setValues((s) => ({ ...s, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      const body = encodeURIComponent(
        `Name: ${values.name}\nPhone: ${values.phone}\n\n${values.message}`,
      );
      const subject = encodeURIComponent(values.subject);
      window.location.href = `mailto:yogeshgadekar141@gmail.com?subject=${subject}&body=${body}`;
      toast.success("Opening your email client…");
      setValues({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="section-pad bg-background">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Send a Message"
          subtitle="Have a project, role, or idea in mind? Drop a message below."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="dashboard-card p-6 lg:col-span-2"
          >
            <h3 className="font-display text-xl font-bold text-primary">Contact Information</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer email or phone? Here are direct channels.
            </p>
            <div className="mt-6 space-y-4">
              {[
                { icon: Mail, label: "Email", value: "yogeshgadekar141@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 9096846550" },
                { icon: MapPin, label: "Location", value: "Pune, Maharashtra, India" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky text-primary">
                    <c.icon size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-sm font-medium text-foreground">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-gradient-to-br from-primary to-primary-glow p-5 text-primary-foreground">
              <div className="font-display text-lg font-bold">Available worldwide</div>
              <p className="mt-1 text-xs opacity-90">Open to remote, hybrid, and on-site roles.</p>
            </div>
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="dashboard-card space-y-4 p-6 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {FIELDS.map((f) => (
                <label key={f.name} className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-foreground/70">
                    {f.label}
                  </span>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={values[f.name]}
                    onChange={(e) => update(f.name, e.target.value)}
                    className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
                  />
                </label>
              ))}
            </div>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-foreground/70">Message</span>
              <textarea
                rows={5}
                placeholder="Tell me about your project or role…"
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                className="w-full resize-none rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01] disabled:opacity-60"
            >
              <Send size={16} /> {submitting ? "Sending…" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
