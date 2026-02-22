import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/month",
    features: [
      "1 active project",
      "Client magic link access",
      "Basic project messaging",
      "Up to 3 file uploads",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹599",
    period: "/month or ₹4,999/year",
    badge: "Most Popular",
    features: [
      "Unlimited projects + clients",
      "Unlimited file uploads + version history",
      "Scope lock + timestamped approvals",
      "UPI invoicing + auto GST invoice",
      "WhatsApp notifications",
      "Priority support",
    ],
    cta: "Start Pro Free for 14 Days",
    highlighted: true,
  },
];

export default function Pricing() {
  const ref = useScrollAnimation();

  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div ref={ref} className="container section-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 tracking-tight">
          Simple pricing. No surprises.
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-md mx-auto">
          Start free, upgrade when you're ready.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 flex flex-col ${
                plan.highlighted
                  ? "border-2 border-primary bg-card shadow-xl shadow-primary/10 relative"
                  : "border border-border bg-card"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                    : "border border-border hover:bg-muted"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
