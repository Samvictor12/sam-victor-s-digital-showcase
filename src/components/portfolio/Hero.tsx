import { useEffect, useState } from "react";
import { ArrowDown, Briefcase, Mail } from "lucide-react";
import { roles } from "@/data/portfolio-data";
import profilePhoto from "@/assets/profile.jpg";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Profile image - left side, full view */}
          <div className="w-full md:w-5/12 flex-shrink-0 animate-fade-in">
            <img
              src={profilePhoto}
              alt="R Sam Victor - Full-Stack Software Engineer"
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
          </div>

          {/* Text content - right side */}
          <div className="flex-1 text-center md:text-left">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight mb-4 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              R Sam Victor
            </h1>

            <div
              className="h-10 flex items-center justify-center md:justify-start mb-8 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="text-xl md:text-2xl text-muted-foreground">
                {text}
              </span>
              <span className="typewriter-cursor ml-0.5 inline-block w-0 h-7" />
            </div>

            <div
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-16 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Briefcase size={18} />
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium hover:bg-muted transition-colors"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>

            <a
              href="#about"
              className="inline-flex animate-bounce text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
