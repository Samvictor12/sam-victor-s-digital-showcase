import { experiences } from "@/data/portfolio-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Circle } from "lucide-react";

function TimelineCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { ref, visible } = useScrollAnimation();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex md:items-center gap-6 md:gap-0 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Desktop layout */}
      <div className={`hidden md:flex w-full items-center ${isLeft ? "" : "flex-row-reverse"}`}>
        <div className={`w-5/12 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}>
          <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow inline-block text-left">
            <div className="flex items-center gap-2 mb-2">
              {exp.current && (
                <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                  Current
                </span>
              )}
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
            <p className="text-primary font-medium text-sm mb-3">{exp.company}</p>
            <ul className="space-y-1.5">
              {exp.bullets.map((b, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center line */}
        <div className="w-2/12 flex justify-center">
          <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
        </div>

        <div className="w-5/12" />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-2" />
          <div className="w-0.5 flex-1 bg-border" />
        </div>
        <div className="glass-card rounded-xl p-5 mb-6 flex-1">
          <div className="flex items-center gap-2 mb-2">
            {exp.current && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                Current
              </span>
            )}
            <span className="text-sm text-muted-foreground">{exp.period}</span>
          </div>
          <h3 className="font-display font-semibold">{exp.role}</h3>
          <p className="text-primary font-medium text-sm mb-2">{exp.company}</p>
          <ul className="space-y-1">
            {exp.bullets.map((b, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary mt-0.5 shrink-0">•</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Experience</h2>
        <p className="section-subtitle text-center">My professional journey</p>

        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-2">
            {experiences.map((exp, i) => (
              <TimelineCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
