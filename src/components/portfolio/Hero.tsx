import { useEffect, useState } from "react";
import { ArrowDown, Briefcase, Mail, Download } from "lucide-react";
import { roles } from "@/data/portfolio-data";
import profileBg from "@/assets/profile-bg.png";

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
      {/* Geometric decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-1/4 right-1/4 w-96 h-96 opacity-10" viewBox="0 0 400 400" fill="none">
          <polygon points="200,50 350,150 300,350 100,350 50,150" stroke="hsl(var(--primary))" strokeWidth="1" />
          <polygon points="200,80 320,160 280,320 120,320 80,160" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <line x1="200" y1="50" x2="200" y2="350" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <line x1="50" y1="150" x2="350" y2="150" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Profile image - right side background */}
      <div className="absolute right-0 bottom-0 h-full w-1/2 pointer-events-none select-none hidden md:block">
        <img
          src={profileBg}
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 right-8 h-[90%] w-auto object-contain opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          {/* Orange badge */}
          <div
            className="inline-block px-4 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold mb-6 animate-fade-in"
          >
            Hello, I am
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight mb-2 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            R Sam Victor
          </h1>

          <p
            className="text-muted-foreground text-lg mb-2 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            A Professional Full-Stack Developer and Software Engineer.
          </p>

          <div
            className="h-10 flex items-center mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-xl md:text-2xl text-primary font-medium">
              {text}
            </span>
            <span className="typewriter-cursor ml-0.5 inline-block w-0 h-7" />
          </div>

          <div
            className="flex flex-wrap items-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
            >
              <Download size={18} />
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border-2 border-foreground/20 text-foreground font-semibold hover:border-primary hover:text-primary transition-all"
            >
              <Briefcase size={18} />
              My Work
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex w-10 h-10 items-center justify-center rounded-full border-2 border-primary text-primary animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
