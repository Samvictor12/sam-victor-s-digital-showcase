import { MapPin, TrendingUp } from "lucide-react";
import { highlights } from "@/data/portfolio-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const { ref, visible } = useScrollAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [visible, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-display font-bold text-primary">
        {count}{suffix}
      </div>
    </div>
  );
}

export default function About() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center">
          Passionate about building scalable, innovative web solutions
        </p>

        <div
          ref={ref}
          className={`mt-12 grid md:grid-cols-2 gap-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              Software Engineer with experience in developing and implementing web applications.
              Proficient in Java Spring Boot for APIs and front-end technologies like JavaScript,
              React.js, and Tailwind CSS. Experienced in digitalization and production monitoring
              projects for industries and SMT.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Expertise spans the full stack — React for frontend, Express/Java for backend,
              MySQL/PostgreSQL for databases, Docker for deployment, and n8n for automations.
              Adept at working with cross-functional teams to deliver high-quality solutions.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
              <MapPin size={16} className="text-primary" />
              Chennai, Tamil Nadu, India
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((h) => (
              <div key={h.label} className="glass-card rounded-xl p-6 text-center">
                <Counter target={h.value} suffix={h.suffix} />
                <p className="text-sm text-muted-foreground mt-2">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
