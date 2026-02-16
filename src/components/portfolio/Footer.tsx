import { ArrowUp } from "lucide-react";
import { navLinks } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">© 2026 R Sam Victor. All rights reserved.</p>

        <ul className="flex flex-wrap justify-center gap-4">
          {navLinks.slice(1).map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
