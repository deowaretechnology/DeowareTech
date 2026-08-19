import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import InvitationPoster from "../components/InvitationPoster";
import WebsiteMockup from "../components/WebsiteMockup";
import FAQ from "../components/FAQ";
import { projects } from "../data/projects";

const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <div className="pt-24 md:pt-32 pb-16">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 flex flex-col items-start z-10">
            <Reveal>
              <h1 className="text-4xl sm:text-6xl md:text-[84px] leading-[0.9] font-serif font-light tracking-tight mb-6 italic">
                Your business<br /><span className="not-italic font-bold text-charcoal">deserves a website.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-charcoal/60 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light">
                Professional websites for small businesses, products and ideas — designed simply, built properly, and made to work on every screen.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/contact" className="bg-brand text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-wider shadow-xl shadow-brand/20 hover:bg-brand-dark transition-colors">
                  Build My Website
                </Link>
                <Link to="/work" className="border border-charcoal/10 px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors">
                  See What We Build
                </Link>
              </div>
            </Reveal>
          </div>
          
          <div className="w-full md:w-1/2 relative h-[300px] sm:h-[420px] md:h-[460px] max-w-[420px] mx-auto md:max-w-none md:mx-0">
            <div className="absolute left-0 top-4 sm:top-6 w-[60%] sm:w-[58%] -rotate-6 transition-transform duration-500 hover:-translate-y-1 hover:rotate-[-4deg]">
              <Reveal delay={0.3}>
                <WebsiteMockup type="local" label="Local business" />
              </Reveal>
            </div>

            <div className="absolute right-0 top-0 w-[56%] sm:w-[55%] rotate-3 transition-transform duration-500 hover:-translate-y-1 hover:rotate-[4deg]">
              <Reveal delay={0.45}>
                <WebsiteMockup type="product" label="Product business" />
              </Reveal>
            </div>

            <div className="absolute right-4 sm:right-8 bottom-0 w-[46%] -rotate-2 transition-transform duration-500 hover:-translate-y-1 hover:rotate-[-1deg]">
              <Reveal delay={0.6}>
                <div className="relative">
                  <WebsiteMockup type="service" label="Service business" />
                  <div className="absolute -right-2 sm:-right-3 -top-3 sm:-top-4 bg-brand text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 shadow-md rotate-[5deg]">
                    Responsive
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="bg-white py-24 md:py-32">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <Reveal>
            <h2 className="editorial-heading text-4xl md:text-5xl mb-16 text-center">What can we build for you?</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group border border-charcoal/10 rounded-sm p-8 hover:border-brand/30 hover:bg-offwhite/50 transition-colors flex flex-col h-full shadow-sm bg-white relative">
              <div className="h-48 w-full bg-offwhite rounded-sm mb-8 overflow-hidden">
                <WebsiteMockup type="local" className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Business Website</h3>
              <p className="text-charcoal/70 mb-8 flex-grow font-light text-sm">For shops, salons, restaurants, clinics, local services, professionals and small companies.</p>
              <Link to="/contact" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-charcoal hover:text-brand transition-colors">
                Build a Business Website <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            {/* Service 2 */}
            <div className="group border border-charcoal/10 rounded-sm p-8 hover:border-brand/30 hover:bg-offwhite/50 transition-colors flex flex-col h-full shadow-sm bg-white relative">
              <div className="h-48 w-full bg-offwhite rounded-sm mb-8 overflow-hidden">
                <WebsiteMockup type="product" className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Product / Online Business</h3>
              <p className="text-charcoal/70 mb-8 flex-grow font-light text-sm">For people selling products or starting a small online business.</p>
              <Link to="/contact" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-charcoal hover:text-brand transition-colors">
                Build My Website <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            {/* Service 3 */}
            <div className="group border border-charcoal/10 rounded-sm p-8 hover:border-brand/30 hover:bg-offwhite/50 transition-colors flex flex-col h-full shadow-sm bg-white relative">
              <div className="h-48 w-full bg-offwhite rounded-sm mb-8 overflow-hidden">
                <WebsiteMockup type="landing" className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Landing Page</h3>
              <p className="text-charcoal/70 mb-8 flex-grow font-light text-sm">For a product, service, campaign or business launch.</p>
              <Link to="/contact" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-charcoal hover:text-brand transition-colors">
                Create a Landing Page <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Poster */}
      <InvitationPoster />

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-charcoal/10 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          <Reveal delay={0}>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-brand rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">Made for small businesses</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-brand rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">Mobile-first</span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-brand rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">Fast & clean</span>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-brand rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">Affordable & practical</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-charcoal text-offwhite py-24 md:py-32">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <Reveal>
            <h2 className="editorial-heading text-4xl md:text-5xl mb-16 text-center">How it works</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-white/20"></div>
            
            <Reveal delay={0}>
              <div className="relative z-10 flex flex-col md:items-center md:text-center">
                <div className="text-3xl font-serif text-brand bg-charcoal md:px-4 mb-4 md:mb-6">01</div>
                <h4 className="font-medium text-xl mb-2">Tell us what you need.</h4>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="relative z-10 flex flex-col md:items-center md:text-center">
                <div className="text-3xl font-serif text-brand bg-charcoal md:px-4 mb-4 md:mb-6">02</div>
                <h4 className="font-medium text-xl mb-2">We design your website.</h4>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="relative z-10 flex flex-col md:items-center md:text-center">
                <div className="text-3xl font-serif text-brand bg-charcoal md:px-4 mb-4 md:mb-6">03</div>
                <h4 className="font-medium text-xl mb-2">We build and refine it.</h4>
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="relative z-10 flex flex-col md:items-center md:text-center">
                <div className="text-3xl font-serif text-brand bg-charcoal md:px-4 mb-4 md:mb-6">04</div>
                <h4 className="font-medium text-xl mb-2">Your website goes live.</h4>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-charcoal/10">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand mb-4 block font-mono">Recent work</span>
              <h2 className="editorial-heading text-4xl md:text-5xl">A few things we've built</h2>
            </div>
            <Link to="/work" className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal/60 hover:text-brand transition-colors">
              View all work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-8">
          {featuredProjects.map((p, i) => (
            <div key={p.title}>
            <Reveal delay={i * 0.1}>
              <div className="group">
                <div className="overflow-hidden rounded-sm border border-charcoal/5 mb-5">
                  <WebsiteMockup type={p.mockup as any} className="transition-transform duration-500 group-hover:scale-105" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand mb-1.5 block font-mono">{p.category}</span>
                <h3 className="font-serif text-xl italic text-charcoal">{p.title}</h3>
              </div>
            </Reveal>
            </div>
          ))}
        </div>

        <Link to="/work" className="sm:hidden mt-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal">
          View all work <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <FAQ />

      {/* Closing CTA */}
      <section className="py-24 md:py-28 border-t border-charcoal/10">
        <div className="px-6 md:px-12 max-w-7xl mx-auto text-center">
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand mb-4 block font-mono">Ready when you are</span>
            <h2 className="editorial-heading text-4xl md:text-5xl max-w-2xl mx-auto not-italic font-light">
              Need a website for your business?
            </h2>
            <p className="mt-5 text-charcoal/60 max-w-md mx-auto font-light">
              We build it. Simple, professional and made for your customers.
            </p>
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 bg-charcoal text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-brand transition-colors"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
