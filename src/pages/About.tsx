import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import WebsiteMockup from "../components/WebsiteMockup";

const stats = [
  { value: "50+", label: "Websites shipped" },
  { value: "1–2", label: "Weeks, typical build" },
  { value: "100%", label: "Mobile-first" },
];

export default function AboutSection() {
  return (
    <section className="py-24 md:py-28 border-t border-charcoal/10">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1fr] gap-14 md:gap-20 items-center">
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand mb-4 block font-mono">
              Who we are
            </span>
            <h2 className="editorial-heading text-4xl md:text-5xl mb-6 leading-[1.1]">
              We're Deoware Technology.
            </h2>
            <p className="text-charcoal/60 text-lg leading-relaxed max-w-lg font-light mb-4">
              A small, focused web studio that builds professional websites
              for small businesses, products and ideas. No jargon, no
              bloated process — just a site that works and looks like it
              was made on purpose.
            </p>
            <p className="text-charcoal/60 text-lg leading-relaxed max-w-lg font-light mb-9">
              Every project we take on gets the same attention, whether
              it's a first-time shop owner or a growing online brand.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-charcoal hover:text-brand transition-colors group"
            >
              Work with us
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-0 md:divide-y md:divide-charcoal/10 border-t border-charcoal/10 md:border-t-0">
              {stats.map((s, i) => (
                <div key={s.label} className={`py-6 md:py-8 ${i === 0 ? "md:pt-0" : ""}`}>
                  <p className="font-serif italic text-4xl md:text-5xl text-charcoal">{s.value}</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal/50 mt-2 font-mono">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}