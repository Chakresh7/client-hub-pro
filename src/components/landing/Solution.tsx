import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";
import workspaceMockup from "@/assets/workspace-mockup.png";

const features = [
  { title: "Magic link", desc: "Client joins in 10 seconds, no signup" },
  { title: "Professional messaging", desc: "Searchable, timestamped, not WhatsApp" },
  { title: "File sharing + approvals", desc: "Version controlled, locked on approval" },
  { title: "Milestone tracking", desc: "Client sees exactly where things stand" },
  { title: "UPI invoicing", desc: "Send, track, get paid inside one place" },
];

export default function Solution() {
  const ref = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section id="features" className="py-20 lg:py-28 bg-secondary">
      <div ref={ref} className="container section-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 tracking-tight">
          One link. One workspace. Everything.
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`p-5 rounded-xl transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? "bg-background shadow-md border border-primary/20"
                    : "hover:bg-background/50"
                }`}
                onClick={() => {
                  setActiveIndex(i);
                  clearInterval(intervalRef.current);
                }}
              >
                <div className="flex items-start gap-3">
                  <span className={`mt-0.5 text-sm font-bold ${i === activeIndex ? "text-primary" : "text-muted-foreground"}`}>
                    ✦
                  </span>
                  <div>
                    <h3 className="font-semibold mb-0.5">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <img
              src={workspaceMockup}
              alt="Hublo workspace interface with messaging, file approvals, and invoicing"
              className="rounded-xl shadow-xl w-full"
              width={1024}
              height={1024}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
