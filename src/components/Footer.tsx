import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/5 bg-white/50 text-charcoal py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="max-w-sm">
            <Link to="/" className="text-2xl font-black tracking-tighter mb-4 inline-block">
              STUDIO<span className="text-brand">.</span>BASE
            </Link>
            <p className="text-charcoal/60 text-sm leading-relaxed font-light">
              Professional websites for small businesses, products, and ideas. Designed simply, built properly.
            </p>
          </div>
          
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Get in touch</span>
            <span className="text-sm font-medium">hello@studiobase.com</span>
          </div>
        </div>
        
        <div className="flex flex-col md:text-right">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-4 block">Next Steps</span>
          <div className="flex gap-6 md:gap-8 text-xs font-bold uppercase tracking-widest flex-wrap md:justify-end">
            <Link to="/services" className="hover:text-brand transition-colors">Services</Link>
            <Link to="/work" className="hover:text-brand transition-colors">Our Work</Link>
            <Link to="/contact" className="hover:text-brand transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-charcoal/40">
        <p>&copy; {new Date().getFullYear()} STUDIO.BASE. All rights reserved.</p>
      </div>
    </footer>
  );
}
