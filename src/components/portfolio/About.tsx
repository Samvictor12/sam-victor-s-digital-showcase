import { MapPin } from "lucide-react";
import { highlights } from "@/data/portfolio-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile.jpg";

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
          Read About My Life<br />
          <span className="text-primary">Story!</span>
        </h2>

        <div
          ref={ref}
          className={`mt-12 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Image with experience badge */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={profilePhoto}
                alt="R Sam Victor"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-5 py-4 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1 h-6 bg-primary-foreground/60 rounded" />
                <div className="w-1 h-8 bg-primary-foreground/80 rounded" />
                <div className="w-1 h-5 bg-primary-foreground/60 rounded" />
                <div className="w-1 h-7 bg-primary-foreground rounded" />
              </div>
              <div className="text-3xl font-display font-bold">04+</div>
              <div className="text-sm font-medium opacity-90">Years of<br />Experience</div>
            </div>
          </div>

          {/* Bio & Skills */}
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

            {/* Skill bars */}
            <div className="space-y-4">
              {[
                { name: "React / JavaScript", level: 92 },
                { name: "Java / Spring Boot", level: 85 },
                { name: "MySQL / PostgreSQL", level: 85 },
                { name: "Docker / DevOps", level: 78 },
              ].map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                      style={{ width: visible ? `${skill.level}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
              >
                Hire Me!
              </a>
              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-foreground/20 text-foreground font-semibold hover:border-primary hover:text-primary transition-all"
              >
                About Me
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className={`rounded-xl p-6 text-center transition-all ${
                i === 1 ? "bg-primary text-primary-foreground" : "bg-card border border-border"
              }`}
            >
              <Counter target={h.value} suffix={h.suffix} />
              <p className={`text-sm mt-2 ${i === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {h.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
