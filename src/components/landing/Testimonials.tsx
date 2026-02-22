import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I used to spend 30 minutes every morning finding files and old WhatsApp messages. Now everything is in one place and my client actually respects my timelines.",
    name: "Rohan M.",
    role: "UI/UX Designer, Ahmedabad",
  },
  {
    quote:
      "A client tried to claim he never approved the logo I delivered. I showed him the approval timestamp in Hublo. The invoice was paid the same evening.",
    name: "Priya S.",
    role: "Freelance Content Writer, Mumbai",
  },
  {
    quote:
      "The magic link is pure genius. My client is 55 years old and has never used any tool like this. He opened it and started using it with zero help from me.",
    name: "Dev K.",
    role: "Web Developer, Surat",
  },
];

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div ref={ref} className="container section-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 tracking-tight">
          What Indian freelancers are saying.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-xl p-7 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
