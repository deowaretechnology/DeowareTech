import Reveal from "../components/Reveal";
import InvitationPoster from "../components/InvitationPoster";

export default function Services() {
  const services = [
    {
      title: "Business Websites",
      description: "Professional websites for small and local businesses.",
      details: "Perfect for shops, salons, restaurants, clinics, and local service providers. We build websites that help customers find you, understand what you offer, and get in touch.",
    },
    {
      title: "Product Websites",
      description: "Websites designed to showcase and sell products.",
      details: "Clean, minimal e-commerce or product showcase sites focused on making your items look great and driving sales.",
    },
    {
      title: "Online Business",
      description: "Websites for people starting or growing an online business.",
      details: "Whether you're a consultant, freelancer, or creator, we build platforms that establish your credibility and capture leads.",
    },
    {
      title: "Landing Pages",
      description: "Focused pages for products, services and campaigns.",
      details: "High-conversion single pages designed for a specific marketing goal, launch, or event registration.",
    },
    {
      title: "Custom Websites",
      description: "If the requirement doesn't fit a standard package, build a custom solution.",
      details: "Need something completely unique? We can design and develop custom solutions tailored exactly to your specific business model.",
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-offwhite">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <Reveal>
          <h1 className="text-4xl sm:text-6xl md:text-[84px] leading-[0.9] font-serif font-light tracking-tight mb-6 italic">Our Services</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-charcoal/60 text-lg md:text-xl max-w-2xl font-light">
            We build websites for businesses, products, and ideas. 
            Everything is designed to be simple, fast, and easy for your customers to use.
          </p>
        </Reveal>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 mb-32">
          {services.map((service, index) => (
            <div key={service.title}>
            <Reveal delay={0.1 * (index % 2)}>
              <div className="border-t border-charcoal/10 pt-8 h-full">
                <h3 className="text-3xl font-serif text-charcoal mb-4 italic font-light">{service.title}</h3>
                <p className="font-medium text-charcoal mb-4 text-lg">
                  {service.description}
                </p>
                <p className="text-charcoal/70 leading-relaxed font-light">
                  {service.details}
                </p>
              </div>
            </Reveal>
            </div>
          ))}
        </div>
      </div>

      {/* Online Invitations Special Section */}
      <div className="border-t border-charcoal/10 pt-24">
        <div className="px-6 md:px-12 max-w-7xl mx-auto text-center mb-12">
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand mb-4 block">Special Offering</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 italic font-light">Online Invitations</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto text-lg font-light">
              A dedicated service for creating beautiful, shareable digital invitations for weddings and special events.
            </p>
          </Reveal>
        </div>
        
        <InvitationPoster />
      </div>
    </div>
  );
}
