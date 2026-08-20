import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Work", path: "/work" },
  { title: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled ? "bg-offwhite/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black tracking-tighter">
            STUDIO<span className="text-brand">.</span>BASE
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={cn(
                  "text-[13px] font-medium uppercase tracking-widest border-b border-transparent hover:border-brand transition-all pb-1",
                  location.pathname === link.path ? "text-brand border-brand" : "text-charcoal hover:text-brand"
                )}
              >
                {link.title}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-charcoal text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand transition-colors"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-charcoal"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-offwhite flex flex-col pt-6 px-6 pb-12"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="text-2xl font-black tracking-tighter">
                STUDIO<span className="text-brand">.</span>BASE
              </span>
              <button
                className="p-2 -mr-2 text-charcoal"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-2xl font-serif">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  className={cn(
                    "transition-colors",
                    location.pathname === link.path ? "text-brand" : "text-charcoal"
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <Link
                to="/contact"
                className="block w-full py-4 text-center bg-charcoal text-white text-sm font-bold uppercase tracking-widest hover:bg-brand transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}