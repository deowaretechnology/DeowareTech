import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Most business websites take 1–2 weeks from the day we have everything we need — your content, logo and any preferences. Landing pages can be faster, custom projects may take longer. We'll give you a clear timeline before we start.",
  },
  {
    q: "How much does a website cost?",
    a: "It depends on what you need — a simple business site costs less than an online store with payments. Tell us about your business on the contact page and we'll give you a straightforward quote, no hidden fees.",
  },
  {
    q: "Do I need to provide the content and photos?",
    a: "Ideally yes — text and photos of your business, products or team. If you don't have everything ready, we can help you organize what you have, or suggest what's missing.",
  },
  {
    q: "Will my website work on phones?",
    a: "Yes, always. Every website we build is designed mobile-first and tested across phones, tablets and desktops before it goes live.",
  },
  {
    q: "Who owns the website once it's built?",
    a: "You do. Once the project is complete and paid for, the website and its content are yours.",
  },
  {
    q: "Do you also handle hosting and the domain?",
    a: "We can set both up for you if you don't already have them, or work with what you've already got. Either way, we'll walk you through how it all connects.",
  },
  {
    q: "What if I need changes after the site is live?",
    a: "Small fixes after launch are included for a short window. After that, we offer simple maintenance plans, or you can reach out any time for one-off updates.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-28 border-t border-charcoal/10">
      <div className="px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand mb-4 block font-mono">
            Questions
          </span>
          <h2 className="editorial-heading text-4xl md:text-5xl">Frequently asked</h2>
        </div>

        <div className="divide-y divide-charcoal/10 border-t border-b border-charcoal/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-serif text-lg md:text-xl text-charcoal">{item.q}</span>
                  <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-charcoal/15 text-charcoal group-hover:border-brand group-hover:text-brand transition-colors">
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-charcoal/65 text-[15px] leading-relaxed pb-7 max-w-2xl font-light">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-charcoal/50 mt-10">
          Still have a question? <a href="/contact" className="text-charcoal underline underline-offset-2 hover:text-brand">Get in touch</a>.
        </p>
      </div>
    </section>
  );
}
