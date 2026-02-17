import { MapPin } from "lucide-react";
import { highlights } from "@/data/portfolio-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-bg.png";

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
        <div className="text-center mb-4">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Me</span>
        </div>
        <h2 className="section-title text-center">
          Know More <span className="text-primary">About Me</span>
        </h2>

        <div
          ref={ref}
          className={`mt-12 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Image */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg max-w-sm">
              <img
                src={profilePhoto}
                alt="R Sam Victor"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

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
            </p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              <span>Chennai, India</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-xl bg-card border border-border p-6 text-center"
            >
              <Counter target={h.value} suffix={h.suffix} />
              <p className="text-sm mt-2 text-muted-foreground">{h.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
