import { ArrowRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function InvitationPoster() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <a
        href={siteConfig.invitationWebsite}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore Online Invitations — opens in a new tab"
        className="group block relative overflow-hidden border border-[#E4C9A8]/30 transition-all duration-500 hover:-translate-y-1 rounded-sm"
        style={{ background: "linear-gradient(150deg, #241B15 0%, #3A281C 55%, #241B15 100%)" }}
      >
        <div className="flex flex-col md:flex-row items-center min-h-[440px] md:min-h-[500px]">
          {/* Text Content */}
          <div className="w-full md:w-1/2 p-8 sm:p-10 md:p-16 z-10 flex flex-col justify-center h-full order-2 md:order-1 relative">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#E4C9A8] mb-4 block font-mono">
              A special kind of project
            </span>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 italic leading-tight text-[#F6F3EA]">
              Make your special<br />day shareable.
            </h3>
            <p className="text-[#E4C9A8]/90 text-lg mb-8 max-w-sm leading-relaxed font-light">
              Create a beautiful online invitation that your guests can open, explore and share.
            </p>
            <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-300 text-[#F6F3EA]">
              <span className="text-xs font-bold uppercase tracking-widest border-b border-[#E4C9A8]/50 group-hover:border-[#F6F3EA] pb-0.5 transition-colors">
                Explore Online Invitations
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Visual Area — hand-built invitation card, no stock image */}
          <div className="w-full md:w-1/2 h-[280px] md:h-full relative overflow-hidden order-1 md:order-2 flex items-center justify-center p-8">
            <div
              className="relative w-full max-w-[240px] aspect-[3/4] rounded-sm transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1"
              style={{
                background: "linear-gradient(160deg, #FBF6EC 0%, #F1E6D2 100%)",
                boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)",
              }}
            >
              <div className="absolute inset-0 border border-[#C9AE86] m-3 flex flex-col items-center justify-center text-center px-5">
                <p className="text-[9px] font-mono tracking-widest uppercase text-[#8A6E4B]">
                  Together with their families
                </p>
                <p className="font-serif italic text-2xl text-[#3A281C] mt-4">Aanya &amp; Rohan</p>
                <p className="text-[9px] font-mono tracking-widest uppercase text-[#8A6E4B] mt-4">
                  Invite you to celebrate
                </p>
                <div className="mt-5 h-px w-10 bg-[#C9AE86]" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
