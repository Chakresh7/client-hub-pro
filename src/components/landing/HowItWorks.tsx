import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "Win the gig",
    desc: "Close your deal on Fiverr, Upwork, LinkedIn, or anywhere. That part you already know how to do.",
  },
  {
    num: "02",
    title: "Send one magic link",
    desc: "Open Hublo. Create a project in 30 seconds. Copy the magic link. Send it to your client on WhatsApp. Done.",
  },
  {
    num: "03",
    title: "Work professionally",
    desc: "All messages, files, approvals, and payments happen inside the Hublo workspace. Your client feels taken care of.",
  },
];

export default function HowItWorks() {
  const ref = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div ref={ref} className="container section-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 tracking-tight">
          From gig won to client wowed in 3 steps.
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
          It really is this simple.
        </p>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-border" />

          {steps.map((step) => (
            <div key={step.num} className="text-center relative">
              <div className="text-6xl font-bold text-primary/10 mb-4 font-heading">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
