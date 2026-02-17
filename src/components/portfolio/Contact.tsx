import { Phone, Mail, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7200167548",
    href: "tel:+917200167548",
  },
  {
    icon: Mail,
    label: "Email",
    value: "samvictor1797@gmail.com",
    href: "mailto:samvictor1797@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sam-victor",
    href: "https://www.linkedin.com/in/sam-victor",
    external: true,
  },
];

export default function Contact() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact</span>
        </div>
        <h2 className="section-title text-center">
          Contact <span className="text-primary">Me</span>
        </h2>
        <p className="section-subtitle text-center">Feel free to reach out</p>

        <div
          ref={ref}
          className={`mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center gap-3 hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <card.icon size={22} className="text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">{card.label}</p>
              <p className="font-medium text-foreground">{card.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
