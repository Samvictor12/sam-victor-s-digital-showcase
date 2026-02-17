import { navLinks } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4 bg-card/30">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © 2026 <span className="text-gradient font-semibold">R Sam Victor</span>. All rights reserved.
        </p>

        <ul className="flex flex-wrap justify-center gap-4">
          {navLinks.slice(1).map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
