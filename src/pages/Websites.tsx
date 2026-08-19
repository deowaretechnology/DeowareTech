import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function Websites() {
  return (
    <div className="pt-32 pb-24 bg-offwhite min-h-screen">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <Reveal>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand mb-4 block">Our Specialty</span>
          <h1 className="text-4xl sm:text-6xl md:text-[84px] leading-[0.9] font-serif font-light tracking-tight mb-6 italic">Business Websites</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-charcoal/60 text-lg md:text-xl max-w-2xl mb-10 font-light">
            A professional online presence is no longer optional. We build websites that help your local business, salon, clinic, or practice stand out.
          </p>
          <Link to="/contact" className="inline-flex px-10 py-5 bg-charcoal text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-brand transition-colors">
            Start Your Project
          </Link>
        </Reveal>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal delay={0.2} width="100%">
          <div className="w-full h-[50vh] md:h-[60vh] bg-charcoal rounded-sm overflow-hidden relative border border-charcoal/5">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(246,243,234,0.05) 0px, rgba(246,243,234,0.05) 1px, transparent 1px, transparent 34px)",
              }}
            />
            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end text-white">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 italic font-light">Built for your customers.</h3>
              <p className="max-w-md text-white/80 text-base sm:text-lg font-light">Clear navigation, fast loading times, and mobile-optimized layouts ensure your customers can always find what they need.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
