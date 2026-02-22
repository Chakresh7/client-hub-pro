import { useEffect, useState } from "react";
import heroMockup from "@/assets/hero-mockup.png";

const words = ["Your", "clients", "deserve", "better", "than", "WhatsApp."];

export default function Hero() {
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWords((prev) => {
        if (prev >= words.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Dot grid background with parallax feel */}
      <div className="absolute inset-0 dot-grid-bg opacity-40" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            {words.map((word, i) => (
              <span
                key={i}
                className={`inline-block mr-[0.3em] transition-all duration-500 ${
                  i < visibleWords
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "1s" }}>
            Hublo gives every client a private, professional workspace.
            One magic link. No app. No chaos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-up" style={{ animationDelay: "1.3s" }}>
            <button className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 text-base">
              Start Free — No Credit Card
            </button>
            <a href="#how-it-works" className="text-primary font-medium hover:underline transition-all duration-200 flex items-center gap-1">
              See How It Works <span className="text-lg">→</span>
            </a>
          </div>

          <p className="text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "1.5s" }}>
            Trusted by 500+ Indian freelancers on Fiverr, Upwork & LinkedIn
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "1.7s" }}>
          <img
            src={heroMockup}
            alt="Hublo client workspace shown on laptop and phone"
            className="w-full rounded-xl shadow-2xl shadow-primary/10"
            width={1920}
            height={1080}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
