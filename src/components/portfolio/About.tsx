import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const techStack = [
  "React", "Java", "TypeScript", "Spring Boot", "Express",
  "MySQL", "PostgreSQL", "Docker", "Tailwind CSS", "Git",
];

export default function About() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-glow-purple pointer-events-none" />
      <div className="container mx-auto relative">
        <div className="text-center mb-4">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Me</span>
        </div>
        <h2 className="section-title text-center">
          Know More <span className="text-gradient">About Me</span>
        </h2>

        <div
          ref={ref}
          className={`mt-12 max-w-3xl mx-auto text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-foreground leading-relaxed text-lg">
            Software Engineer with experience in developing and implementing web applications.
            Proficient in Java Spring Boot for APIs and front-end technologies like JavaScript,
            React.js, and Tailwind CSS. Experienced in digitalization and production monitoring
            projects for industries and SMT.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Expertise spans the full stack — React for frontend, Express/Java for backend,
            MySQL/PostgreSQL for databases, Docker for deployment, and n8n for automations.
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mt-6">
            <MapPin size={16} className="text-primary" />
            <span>Chennai, India</span>
          </div>

          {/* Tech stack bubbles */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md btn-gradient hover:brightness-110 transition-all mt-10"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
