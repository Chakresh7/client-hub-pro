import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Does my client need to create an account?",
    a: "No. They just click your magic link and they're in. Nothing to download, no password to remember. They're inside the workspace in under 10 seconds.",
  },
  {
    q: "What happens if Upwork or Fiverr suspends my account?",
    a: "Nothing happens to your Hublo data. Hublo is completely separate from those platforms. All your client conversations, files, approvals, and invoice history stay with you permanently.",
  },
  {
    q: "Can I use Hublo for clients I found outside of freelance platforms?",
    a: "Yes, absolutely. Hublo works for clients you found on Fiverr, Upwork, LinkedIn, Instagram, referrals, cold outreach — anywhere. The magic link works the same way regardless of how you found the client.",
  },
  {
    q: "Is UPI payment supported?",
    a: "Yes. Indian clients can pay your invoice directly via UPI inside the portal. International clients can pay via PayPal or card. GST-compliant invoices are generated automatically.",
  },
  {
    q: "Is my client's data secure?",
    a: "All files are stored in private encrypted cloud storage. Your client can only ever see their own project — they cannot see any other project or client of yours. We use the same security standards as banking applications.",
  },
];

export default function FAQ() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div ref={ref} className="container section-fade-in max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 tracking-tight">
          Questions we get asked a lot.
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
