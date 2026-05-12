import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  BarChart3,
  ShoppingCart,
  Users,
  Cpu,
  FileSpreadsheet,
  LineChart,
  Database,
  Mail,
  MailCheck,
  FileBadge,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Activity,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Tilt3D } from "./Tilt3D";
import omato from "@/assets/dashboard-omato.jpg";
import swiggy from "@/assets/dashboard-swiggy.jpg";
import hr from "@/assets/dashboard-hr.jpg";
import tech from "@/assets/dashboard-tech-sales.jpg";
import superstore from "@/assets/dashboard-superstore.jpg";
import pythonSales from "@/assets/project-python-sales.jpg";
import sqlBookstore from "@/assets/project-sql-bookstore.jpg";
import gmailPipeline from "@/assets/project-gmail-pipeline.jpg";
import emailAutomation from "@/assets/project-email-automation.jpg";
import certGenerator from "@/assets/project-certificate-generator.jpg";
import hiresafe from "@/assets/project-hiresafe.jpg";

const GITHUB = "https://github.com/GADEKAR328";

type Kpi = { label: string; value: string };

type Project = {
  icon: any;
  title: string;
  desc: string;
  tools: string[];
  tags: string[];
  category: string;
  insights?: string;
  image?: string;
  featured?: boolean;
  github: string;
  live: string;
};

const DASHBOARD_PROJECTS: Project[] = [
  {
    icon: ShoppingCart,
    title: "Food Delivery Power BI Dashboard",
    desc: "Interactive Power BI dashboard analyzing food delivery orders, revenue trends, restaurant performance, and customer behavior patterns.",
    tools: ["Power BI", "DAX", "Power Query"],
    tags: ["Sales Analytics", "Revenue Trends", "KPI Dashboard"],
    category: "Business Intelligence",
    insights: "Order volume, AOV, top cuisines, peak hours and city-level revenue distribution.",
    image: omato,
    featured: true,
    github: "https://github.com/GADEKAR328/Food-Delivery-App-End-To-End-Project-POWER-BI",
    live: "https://github.com/GADEKAR328/Food-Delivery-App-End-To-End-Project-POWER-BI",
  },
  {
    icon: ShoppingCart,
    title: "Grocery Store Analytics Dashboard",
    desc: "Power BI dashboard for grocery / quick-commerce data covering category sales, product mix, and customer purchase trends.",
    tools: ["Power BI", "DAX", "Excel"],
    tags: ["Customer Insights", "Sales Analytics", "KPI Dashboard"],
    category: "Business Intelligence",
    insights: "Category contribution, basket analysis, fulfilment metrics and demand patterns.",
    image: swiggy,
    featured: true,
    github: "https://github.com/GADEKAR328/Grocery-Store-Data-End-to-End-Project-POWER-BI",
    live: "https://github.com/GADEKAR328/Grocery-Store-Data-End-to-End-Project-POWER-BI",
  },
  {
    icon: Users,
    title: "HR Analytics Dashboard",
    desc: "Tableau dashboard tracking workforce metrics — attrition, demographics, performance and department-level KPIs.",
    tools: ["Tableau", "Excel"],
    tags: ["HR Analytics", "KPI Dashboard", "Business Intelligence"],
    category: "People Analytics",
    insights: "Attrition rate, headcount, tenure, and department performance breakdowns.",
    image: hr,
    featured: true,
    github: "https://github.com/GADEKAR328/Tableau---Skillcourse-HR-Analytics-Dashboard-by-YSG",
    live: "https://github.com/GADEKAR328/Tableau---Skillcourse-HR-Analytics-Dashboard-by-YSG",
  },
  {
    icon: Cpu,
    title: "Indian Tech Sales Dashboard",
    desc: "Tableau sales dashboard exploring regional performance, product trends and revenue distribution across the Indian tech market.",
    tools: ["Tableau", "SQL"],
    tags: ["Sales Analytics", "Revenue Trends", "Business Intelligence"],
    category: "Sales Intelligence",
    insights: "Region-wise revenue, top products, growth trends and channel performance.",
    image: tech,
    featured: true,
    github: "https://github.com/GADEKAR328/Tableau-Indian_Tech_Sales_Project-by-YSG",
    live: "https://github.com/GADEKAR328/Tableau-Indian_Tech_Sales_Project-by-YSG",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Sales Dashboard",
    desc: "Dynamic Excel dashboard with pivot-based KPIs, slicers and conditional formatting for end-to-end sales reporting.",
    tools: ["Excel", "Pivot Tables", "Power Query"],
    tags: ["Sales Analytics", "KPI Dashboard"],
    category: "Reporting",
    insights: "Monthly sales, target vs actual, region splits and product-level performance.",
    image: superstore,
    github: "https://github.com/GADEKAR328/MS-EXCEL-End-To-End-Dashboard",
    live: "https://github.com/GADEKAR328/MS-EXCEL-End-To-End-Dashboard",
  },
  {
    icon: LineChart,
    title: "Python Sales Data Analysis",
    desc: "Exploratory analysis of multi-region sales data using Pandas and Matplotlib — segmentation, trends and visual insights.",
    tools: ["Python", "Pandas", "Matplotlib"],
    tags: ["Sales Analytics", "Customer Insights"],
    category: "Data Analysis",
    insights: "Segment-level revenue, seasonality and category mix.",
    image: pythonSales,
    github: "https://github.com/GADEKAR328/Sales-Data-Analysis-Visualization-Python-Jupyter-Notebook",
    live: "https://github.com/GADEKAR328/Sales-Data-Analysis-Visualization-Python-Jupyter-Notebook",
  },
  {
    icon: Database,
    title: "SQL Online Bookstore Project",
    desc: "Normalized relational schema with complex analytical SQL queries for an e-commerce bookstore dataset.",
    tools: ["SQL", "PostgreSQL"],
    tags: ["ETL Workflow", "Business Intelligence"],
    category: "Data Engineering",
    insights: "Schema design, joins, aggregations and customer/order analytics.",
    image: sqlBookstore,
    github: "https://github.com/GADEKAR328/SQL_Project_Online_Book_Store",
    live: "https://github.com/GADEKAR328/SQL_Project_Online_Book_Store",
  },
];

const AUTOMATION_PROJECTS: Project[] = [
  {
    icon: Mail,
    title: "Gmail Data Automation Pipeline",
    desc: "Automated pipeline to extract, parse and organize Gmail data into structured datasets for downstream reporting.",
    tools: ["Python", "Gmail API", "Automation"],
    tags: ["ETL Workflow", "Automation"],
    category: "Automation",
    image: gmailPipeline,
    github: "https://github.com/GADEKAR328/Append-Excel-File-from-Gmail-Project",
    live: "https://github.com/GADEKAR328/Append-Excel-File-from-Gmail-Project",
  },
  {
    icon: MailCheck,
    title: "Email Automation System (VBA)",
    desc: "Excel + VBA system for bulk personalized email automation, reducing repetitive manual effort drastically.",
    tools: ["Excel VBA", "Outlook"],
    tags: ["Automation", "Workflow"],
    category: "Automation",
    image: emailAutomation,
    github: "https://github.com/GADEKAR328/Customer-Payment-Reminder-Automation-System",
    live: "https://github.com/GADEKAR328/Customer-Payment-Reminder-Automation-System",
  },
  {
    icon: FileBadge,
    title: "AI Certificate Generator",
    desc: "Bulk certificate generator using Excel VBA and MS Word automation to issue personalized certificates at scale.",
    tools: ["Excel VBA", "MS Word", "Automation"],
    tags: ["Automation", "Document Workflow"],
    category: "Automation",
    image: certGenerator,
    github: "https://github.com/GADEKAR328/Generate-Certificates-using-AI",
    live: "https://github.com/GADEKAR328/Generate-Certificates-using-AI",
  },
  {
    icon: ShieldAlert,
    title: "HireSafe — AI Job Scam Detection",
    desc: "NLP-based AI system that flags fraudulent job postings using ML models with a Streamlit interface.",
    tools: ["Python", "Machine Learning", "NLP", "Streamlit"],
    tags: ["AI / ML", "Classification"],
    category: "AI Project",
    image: hiresafe,
    github: "https://github.com/GADEKAR328/HireSafe-AI-Job-Scam-Detection-System",
    live: "https://github.com/GADEKAR328/HireSafe-AI-Job-Scam-Detection-System",
  },
];

const KPI_SAMPLES: Kpi[][] = [
  [
    { label: "Revenue", value: "▲" },
    { label: "Orders", value: "●" },
    { label: "AOV", value: "◆" },
  ],
  [
    { label: "Sales", value: "▲" },
    { label: "Basket", value: "●" },
    { label: "SKUs", value: "◆" },
  ],
  [
    { label: "Headcount", value: "▲" },
    { label: "Attrition", value: "▼" },
    { label: "Tenure", value: "●" },
  ],
  [
    { label: "Revenue", value: "▲" },
    { label: "Regions", value: "●" },
    { label: "Growth", value: "◆" },
  ],
];

function DashboardCard({ p, i }: { p: Project; i: number }) {
  const kpis = KPI_SAMPLES[i] ?? KPI_SAMPLES[0];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: i * 0.08 }}
      className="perspective-1000"
    >
      <Tilt3D max={6} className="group dashboard-card relative overflow-hidden rounded-[var(--radius-xl)] shine">
        {/* gradient frame on hover */}
        <div className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-br from-primary/0 via-cyan-accent/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/40 group-hover:via-cyan-accent/40 group-hover:to-primary/40 group-hover:opacity-100" />
      <div className="relative">
        {p.featured && (
          <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-primary/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg backdrop-blur">
            <Sparkles size={11} /> Featured Project
          </span>
        )}
        <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-md backdrop-blur">
          {p.tools[0]}
        </span>

        {p.image ? (
          <div className="aspect-[16/9] overflow-hidden bg-muted">
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/30 to-transparent" />
          </div>
        ) : (
          <div className="grid aspect-[16/9] place-items-center bg-gradient-to-br from-sky to-white">
            <p.icon size={56} className="text-primary/70" />
          </div>
        )}

        {/* KPI strip */}
        <div className="grid grid-cols-3 gap-2 border-y border-border bg-sky/40 px-4 py-3">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="flex items-center justify-between rounded-md bg-white px-2.5 py-1.5 text-[10px] font-semibold text-primary shadow-sm"
            >
              <span className="uppercase tracking-wider text-muted-foreground">{k.label}</span>
              <span className="text-cyan-accent">{k.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-cyan-accent">
          <Activity size={12} /> {p.category}
        </div>
        <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

        <div className="mt-4 grid gap-2 text-xs">
          <div>
            <span className="font-semibold text-foreground">Tools: </span>
            <span className="text-muted-foreground">{p.tools.join(" · ")}</span>
          </div>
          {p.insights && (
            <div>
              <span className="font-semibold text-foreground">Insights: </span>
              <span className="text-muted-foreground">{p.insights}</span>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 rounded-full border border-primary/15 bg-sky/60 px-3 py-1 text-[11px] font-semibold text-primary"
            >
              <TrendingUp size={10} /> {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
          >
            <ExternalLink size={13} /> View Project
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Github size={13} /> GitHub
          </a>
        </div>
      </div>
      </Tilt3D>
    </motion.div>
  );
}

function CompactCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      className="perspective-1000"
    >
      <Tilt3D max={5} className="dashboard-card group relative overflow-hidden rounded-[var(--radius-xl)] shine">
        <div className="absolute inset-y-0 left-0 z-10 w-1 bg-gradient-to-b from-primary to-cyan-accent" />
      {p.image && (
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <div className="p-5">
      <div className="mb-3 flex items-center justify-between">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-sky text-primary">
          <p.icon size={18} />
        </div>
        <span className="rounded-full bg-sky px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
          {p.category}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
      <p className="mt-1.5 text-xs text-muted-foreground">{p.desc}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.tools.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-white px-2 py-0.5 text-[10px] font-semibold text-foreground/70"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <a
          href={p.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          <ExternalLink size={11} /> View
        </a>
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-[11px] font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Github size={11} /> GitHub
        </a>
      </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-pad bg-background">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          subtitle="Dashboard & BI work first — followed by automation and AI projects."
        />

        <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <BarChart3 size={14} /> Dashboard & Data Analytics
        </div>
        <div className="grid gap-7 md:grid-cols-2">
          {DASHBOARD_PROJECTS.map((p, i) => (
            <DashboardCard key={p.title} p={p} i={i} />
          ))}
        </div>

        <div className="mt-16 mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <Cpu size={14} /> Automation & AI Projects
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {AUTOMATION_PROJECTS.map((p, i) => (
            <CompactCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
