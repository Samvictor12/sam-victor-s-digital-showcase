import { skills } from "@/data/portfolio-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Skills() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">My Skills</span>
        </div>
        <h2 className="section-title text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <p className="section-subtitle text-center">Technologies I work with daily</p>

        <div
          ref={ref}
          className={`mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {skills.map((cat) => (
            <div
              key={cat.category}
              className="bg-card border border-border rounded-xl p-6 space-y-4"
            >
              <h3 className="font-display font-semibold text-foreground">{cat.category}</h3>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div key={item.name} className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{item.name}</span>
                      <span className="text-primary font-semibold">{item.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                        style={{ width: visible ? `${item.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
