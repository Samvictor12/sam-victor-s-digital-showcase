import { projects } from "@/data/portfolio-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, ExternalLink } from "lucide-react";

export default function Projects() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Projects</h2>
        <p className="section-subtitle text-center">
          Solutions I've built to solve real-world problems
        </p>

        <div
          ref={ref}
          className={`mt-12 grid md:grid-cols-2 gap-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Placeholder image area */}
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <ExternalLink size={32} className="text-primary/40 group-hover:text-primary/70 transition-colors" />
              </div>

              <div className="p-6">
                <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-accent font-medium">
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
