import { projects } from "@/data/portfolio-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, ExternalLink } from "lucide-react";
import projectProductionMonitoring from "@/assets/project-production-monitoring.jpg";
import projectAccounting from "@/assets/project-accounting.jpg";
import projectSmt from "@/assets/project-smt.jpg";
import projectPlanning from "@/assets/project-planning.jpg";

const projectImages = [
  projectProductionMonitoring,
  projectAccounting,
  projectSmt,
  projectPlanning,
];

export default function Projects() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-glow-purple pointer-events-none" />
      <div className="container mx-auto relative">
        <div className="text-center mb-4">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Portfolio</span>
        </div>
        <h2 className="section-title text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="section-subtitle text-center">
          Solutions I've built to solve real-world problems
        </p>

        <div
          ref={ref}
          className={`mt-12 space-y-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={projectImages[i] || projectImages[0]}
                  alt={`${p.title} screenshot`}
                  className="w-full h-64 md:h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 text-xs font-semibold rounded-full btn-gradient">
                    Featured Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`p-8 flex flex-col justify-center space-y-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs rounded-full border border-primary/30 text-primary font-medium bg-primary/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                    <TrendingUp size={16} />
                    {p.metric}
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
