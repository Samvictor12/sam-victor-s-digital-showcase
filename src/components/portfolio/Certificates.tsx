import { certificates } from "@/data/portfolio-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award } from "lucide-react";

export default function Certificates() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="certificates" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Certificates</h2>
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
              className="glass-card rounded-xl p-6 max-w-sm hover:shadow-xl transition-shadow"
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
