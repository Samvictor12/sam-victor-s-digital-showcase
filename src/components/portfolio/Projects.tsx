import { projects } from "@/data/portfolio-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp } from "lucide-react";
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
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Portfolio</span>
        </div>
        <h2 className="section-title text-center">
          Our <span className="text-primary">Portfolio</span>
        </h2>
        <p className="section-subtitle text-center">
          Solutions I've built to solve real-world problems
        </p>

        <div
          ref={ref}
          className={`mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={projectImages[i] || projectImages[0]}
                  alt={`${p.title} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center p-6">
                <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <TrendingUp size={16} />
                  {p.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
