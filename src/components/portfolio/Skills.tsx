import { skills } from "@/data/portfolio-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, visible } = useScrollAnimation();

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Skills</h2>
        <p className="section-subtitle text-center">Technologies I work with daily</p>

        <div
          ref={ref}
          className={`mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {skills.map((cat, ci) => (
            <div key={cat.category} className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-display font-semibold text-lg mb-4 text-primary">
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.items.map((item, ii) => (
                  <SkillBar
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    delay={ci * 100 + ii * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
