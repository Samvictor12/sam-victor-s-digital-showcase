import { skills } from "@/data/portfolio-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Database, Globe, Wrench, Layout } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 size={20} />,
  "Frameworks": <Layout size={20} />,
  "Databases": <Database size={20} />,
  "Web Technologies": <Globe size={20} />,
  "Tools & Platforms": <Wrench size={20} />,
};

export default function Skills() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">My Skills</span>
        </div>
        <h2 className="section-title text-center">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="section-subtitle text-center">Technologies I work with daily</p>

        <div
          ref={ref}
          className={`mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {skills.map((cat) => (
            <div
              key={cat.category}
              className="group bg-card border border-border rounded-xl p-5 hover:bg-primary hover:border-primary transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 text-primary group-hover:bg-primary-foreground/20 group-hover:text-primary-foreground transition-colors">
                {categoryIcons[cat.category] || <Code2 size={20} />}
              </div>
              <h3 className="font-display font-semibold text-sm mb-2 group-hover:text-primary-foreground transition-colors">
                {cat.category}
              </h3>
              <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">
                {cat.items.map((i) => i.name).join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
