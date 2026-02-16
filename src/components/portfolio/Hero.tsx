import { useEffect, useState } from "react";
import { ArrowDown, Briefcase, Mail } from "lucide-react";
import { roles } from "@/data/portfolio-data";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] via-background to-[hsl(var(--hero-gradient-to)/0.15)]" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Avatar placeholder */}
        <div className="mx-auto mb-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-fade-in">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
            <span className="text-4xl font-display font-bold text-primary">RS</span>
          </div>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight mb-4 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          R Sam Victor
        </h1>

        <div
          className="h-10 flex items-center justify-center mb-8 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-xl md:text-2xl text-muted-foreground">
            {text}
          </span>
          <span className="typewriter-cursor ml-0.5 inline-block w-0 h-7" />
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in"
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
    </section>
  );
}
