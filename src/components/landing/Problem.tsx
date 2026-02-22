import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Smartphone, DollarSign, Lock } from "lucide-react";

const cards = [
  {
    icon: Smartphone,
    title: "7 apps, 0 clarity",
    desc: "Files on Drive. Invoices on email. Updates on WhatsApp. Your client has no idea what's happening — and neither do you after 3 weeks.",
  },
  {
    icon: DollarSign,
    title: "Scope creep kills your income",
    desc: '"Just one small change, sir." No written approvals. No version history. Just your word against theirs when payment time comes.',
  },
  {
    icon: Lock,
    title: "You own nothing",
    desc: "Upwork suspends you overnight. Every client relationship, every message history — gone. It happens to top-rated Indian freelancers every single week.",
  },
];

export default function Problem() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28">
      <div ref={ref} className="container section-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 tracking-tight">
          You won the gig. Then everything exploded.
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
          Sound familiar? You're not alone.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="border border-border rounded-xl p-7 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 bg-card"
            >
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-5">
                <card.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
