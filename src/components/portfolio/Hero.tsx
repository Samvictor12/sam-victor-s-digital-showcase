import { useEffect, useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { roles } from "@/data/portfolio-data";
import profileBg from "@/assets/profile-hero-bg.png";

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
      className="relative min-h-screen h-screen flex items-center overflow-hidden"
    >
      {/* Purple glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-glow-purple rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse,hsl(330_80%_60%/0.1),transparent_70%)] rounded-full blur-2xl" />
      </div>

      {/* Profile image - right side background */}
      <div className="absolute right-0 bottom-0 h-full w-1/2 pointer-events-none select-none hidden md:block">
        <img
          src={profileBg}
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 right-28 h-[90%] w-auto object-contain opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      {/* Profile image - mobile */}
      <div className="absolute right-0 bottom-0 h-full w-full pointer-events-none select-none md:hidden">
        <img
          src={profileBg}
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-[60%] w-auto object-contain opacity-25"
        />
      </div>

      <div className="relative flex p-36 max-sm:p-4 h-full">
        <div className="flex flex-col items-start justify-between gap-6 animate-fade-in h-full py-20">
          <div>
            {/* Gradient badge */}
            <div className="inline-block px-4 py-1.5 rounded-md btn-gradient text-sm mb-6 animate-fade-in">
              Hello, I am
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight mb-2 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              R Sam Victor
            </h1>

            <p
              className="text-muted-foreground text-lg mb-2 italic animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              A Professional Full-Stack Developer and Software Engineer.
            </p>

            <div
              className="h-10 flex items-center mb-8 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="text-xl md:text-2xl text-gradient font-medium">
                {text}
              </span>
              <span className="typewriter-cursor ml-0.5 inline-block w-0 h-7" />
            </div>

            <div
              className="flex flex-wrap items-center gap-4 mb-16 animate-fade-in max-sm:hidden"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md btn-gradient hover:brightness-110 transition-all"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>
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
