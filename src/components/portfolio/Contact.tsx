import { useState } from "react";
import { Phone, Mail, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const { toast } = useToast();
  const { ref, visible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact</span>
        </div>
        <h2 className="section-title text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="section-subtitle text-center">Let's build something great together</p>

        <div
          ref={ref}
          className={`mt-12 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all w-full justify-center"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-5">
              <a href="tel:+917200167548" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 7200167548</p>
                </div>
              </a>
              <a href="mailto:samvictor1797@gmail.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">samvictor1797@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/sam-victor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Linkedin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">sam-victor</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
