import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import workspaceMockup from "@/assets/workspace-mockup.png";

export default function MagicLinkDemo() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle indigo gradient on right */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent pointer-events-none" />

      <div ref={ref} className="container section-fade-in relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
              No app. No password. Just click.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your client taps the link you sent on WhatsApp. In 10 seconds
              they're inside a clean workspace with your project name, all your
              files, and a direct way to message you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No app to install. No password to remember. It feels like you
              built a custom portal just for them. Because you did.
            </p>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-2xl shadow-2xl shadow-primary/5 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/40" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <div className="w-3 h-3 rounded-full bg-primary/30" />
                <div className="flex-1 mx-8">
                  <div className="h-5 bg-background rounded-md" />
                </div>
              </div>
              <img
                src={workspaceMockup}
                alt="Client view of Hublo workspace showing project files, approve button, and invoice with UPI QR code"
                className="w-full"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
