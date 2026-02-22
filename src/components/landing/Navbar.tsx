import { useEffect, useState } from "react";

const navLinks = ["Features", "How it works", "Pricing", "Blog"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-heading font-bold tracking-tight text-foreground">
          Hublo
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 hidden sm:block">
            Login
          </button>
          <button className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5">
            Start Free
          </button>
        </div>
      </div>
    </nav>
  );
}
