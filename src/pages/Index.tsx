import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Certificates from "@/components/portfolio/Certificates";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ScrollToTop from "@/components/portfolio/ScrollToTop";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <ScrollToTop />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
