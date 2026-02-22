import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FinalCTA() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32">
      <div ref={ref} className="container section-fade-in text-center max-w-2xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
          Stop losing clients to chaos.
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Send your first magic link today. It takes 60 seconds to set up your
          first project.
        </p>
        <button className="bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-lg text-base hover:opacity-90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5">
          Start Free — No Credit Card
        </button>
        <p className="text-sm text-muted-foreground mt-6">
          Join 500+ Indian freelancers already using Hublo
        </p>
      </div>
    </section>
  );
}
