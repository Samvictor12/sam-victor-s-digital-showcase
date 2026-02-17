import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "@/data/portfolio-data";
import { useTheme } from "@/hooks/useTheme";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="text-2xl font-display font-bold">
          <span className="text-foreground">Cod</span>
          <span className="text-primary">e</span>
          <span className="text-foreground">r</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all"
          >
            Hire Me!
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <ul className="container mx-auto py-4 px-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-semibold text-primary"
              >
                Hire Me!
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
