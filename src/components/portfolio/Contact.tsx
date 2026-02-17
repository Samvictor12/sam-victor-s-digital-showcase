import { useState } from "react";
import { Phone, Mail, Linkedin, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
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
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact</span>
        </div>
        <h2 className="section-title text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="section-subtitle text-center">Feel free to reach out</p>

        <div
          ref={ref}
          className={`mt-12 grid md:grid-cols-2 gap-12 max-w-4xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left — contact details */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold text-foreground">Drop me a message</h3>
            <p className="text-muted-foreground">
              I'm always open to new opportunities, collaborations, or just a friendly chat.
            </p>
            <div className="space-y-4">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center shrink-0">
                    <c.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg btn-gradient hover:brightness-110 transition-all"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
