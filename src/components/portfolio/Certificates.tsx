import { certificates } from "@/data/portfolio-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award } from "lucide-react";

export default function Certificates() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="certificates" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Achievements</span>
        </div>
        <h2 className="section-title text-center">
          My <span className="text-primary">Certificates</span>
        </h2>
        <p className="section-subtitle text-center">Professional certifications</p>

        <div
          ref={ref}
          className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {certificates.map((c) => (
            <div
              key={c.name}
              className="bg-card border border-border rounded-xl p-6 max-w-sm hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-1">{c.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{c.issuer}</p>
              <p className="text-sm text-muted-foreground">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
