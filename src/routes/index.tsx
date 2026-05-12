import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { CoreExpertise } from "@/components/portfolio/CoreExpertise";

import { FeaturedProjects } from "@/components/portfolio/FeaturedProjects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { ContactCTA } from "@/components/portfolio/ContactCTA";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yogesh Gadekar — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Yogesh Gadekar — Aspiring Data Analyst, AI Enthusiast & Dashboard Developer. SQL, Python, Power BI, Tableau, Excel. 11+ projects, 14 certifications.",
      },
      { property: "og:title", content: "Yogesh Gadekar — Data Analyst Portfolio" },
      {
        property: "og:description",
        content:
          "Premium portfolio: dashboards, AI projects, BI reporting, and analytics automation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <CoreExpertise />
      <FeaturedProjects />
      <Experience />
      <Education />
      <Certifications />
      <ContactCTA />
      <ContactForm />
      <Footer />
      <Toaster richColors position="top-center" />
    </main>
  );
}
