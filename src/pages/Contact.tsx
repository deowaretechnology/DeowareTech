import { useState, type FormEvent } from "react";
import { ArrowRight, MessageSquare, Mail } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-offwhite min-h-screen">
      <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column - Copy */}
        <div className="w-full lg:w-1/2">
          <Reveal>
            <h1 className="text-4xl sm:text-6xl md:text-[84px] leading-[0.9] font-serif font-light tracking-tight mb-6 italic">
              Tell us what you want to build.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-charcoal/60 text-lg md:text-xl leading-relaxed mb-12 max-w-md font-light">
              Have a business, product or idea that needs a website? Tell us a little about it and we'll take it from there.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-8">
              <div>
                <span className="block text-sm font-medium text-charcoal/50 mb-2 uppercase tracking-wider">Direct Message</span>
                <a href="#" className="inline-flex items-center text-xl font-medium text-charcoal hover:text-brand transition-colors">
                  <MessageSquare className="w-5 h-5 mr-3" />
                  WhatsApp
                </a>
              </div>
              <div>
                <span className="block text-sm font-medium text-charcoal/50 mb-2 uppercase tracking-wider">Email</span>
                <a href="mailto:hello@example.com" className="inline-flex items-center text-xl font-medium text-charcoal hover:text-brand transition-colors">
                  <Mail className="w-5 h-5 mr-3" />
                  hello@example.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-1/2">
          <Reveal delay={0.3} width="100%">
            <div className="bg-white rounded-sm p-8 md:p-12 shadow-sm border border-charcoal/5">
              {isSubmitted ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-6">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">Message Received</h3>
                  <p className="text-charcoal/70 text-lg max-w-sm">
                    Thank you for reaching out. We'll get back to you shortly to discuss your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-charcoal">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="px-4 py-3 bg-offwhite border border-charcoal/10 rounded-sm focus:outline-none focus:border-brand transition-colors text-sm"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="business" className="text-sm font-medium text-charcoal">Business / Brand</label>
                      <input 
                        type="text" 
                        id="business"
                        className="px-4 py-3 bg-offwhite border border-charcoal/10 rounded-sm focus:outline-none focus:border-brand transition-colors text-sm"
                        placeholder="Jane's Cafe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-charcoal">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="px-4 py-3 bg-offwhite border border-charcoal/10 rounded-sm focus:outline-none focus:border-brand transition-colors text-sm"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-medium text-charcoal">WhatsApp / Phone</label>
                      <input 
                        type="tel" 
                        id="phone"
                        className="px-4 py-3 bg-offwhite border border-charcoal/10 rounded-sm focus:outline-none focus:border-brand transition-colors text-sm"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="needs" className="text-sm font-medium text-charcoal">What do you need?</label>
                    <select 
                      id="needs" 
                      className="px-4 py-3 bg-offwhite border border-charcoal/10 rounded-sm focus:outline-none focus:border-brand transition-colors appearance-none text-sm"
                    >
                      <option value="business">Business Website</option>
                      <option value="product">Product / E-commerce</option>
                      <option value="landing">Landing Page</option>
                      <option value="custom">Custom Web Project</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-sm font-medium text-charcoal">Estimated Budget</label>
                    <select 
                      id="budget" 
                      className="px-4 py-3 bg-offwhite border border-charcoal/10 rounded-sm focus:outline-none focus:border-brand transition-colors appearance-none text-sm"
                    >
                      <option value="small">Under $1,000</option>
                      <option value="medium">$1,000 - $3,000</option>
                      <option value="large">$3,000+</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-charcoal">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      required
                      className="px-4 py-3 bg-offwhite border border-charcoal/10 rounded-sm focus:outline-none focus:border-brand transition-colors resize-none text-sm"
                      placeholder="Tell us a bit about your business and what you're looking for..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 py-5 bg-charcoal text-white font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-brand transition-colors flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Let\'s Build It'} <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
