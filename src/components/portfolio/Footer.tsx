import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yogesh Gadekar. Crafted with data & care.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/GADEKAR328"
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/yogesh-gadekar-a1231b189/"
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:yogeshgadekar141@gmail.com"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
