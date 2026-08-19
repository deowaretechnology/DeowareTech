import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import WebsiteMockup from "../components/WebsiteMockup";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <div className="pt-32 pb-24">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <Reveal>
          <h1 className="text-4xl sm:text-6xl md:text-[84px] leading-[0.9] font-serif font-light tracking-tight mb-6 italic">Selected Work</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-charcoal/60 text-lg md:text-xl max-w-2xl font-light">
            A collection of websites built for small businesses, products, and individuals. 
            Each project is designed to be simple, effective, and tailored to its specific audience.
          </p>
        </Reveal>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-12">
          {projects.map((project, index) => {
            // Make every 3rd project take full width for an editorial layout feel
            const isFullWidth = index % 3 === 0;
            
            return (
              <div 
                key={project.id} 
                className={`group cursor-pointer ${isFullWidth ? 'md:col-span-2' : ''}`}
              >
                <Reveal delay={0.1} width="100%">
                  <div className={`overflow-hidden rounded-sm border border-charcoal/5 bg-[#EBE7E0] mb-6 ${isFullWidth ? 'h-[50vh] md:h-[70vh]' : 'h-[50vh]'} relative`}>
                    <WebsiteMockup
                      type={project.mockup as any}
                      className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand mb-2 block">{project.category}</span>
                      <h3 className="text-3xl font-serif text-charcoal italic">{project.title}</h3>
                    </div>
                    
                    <div className="md:w-1/2 flex flex-col md:items-end">
                      <p className="text-charcoal/60 text-sm md:text-right mb-4 leading-relaxed font-light">
                        {project.description}
                      </p>
                      <a 
                        href={project.liveUrl} 
                        className="text-[10px] font-bold uppercase tracking-widest text-charcoal border-b border-charcoal/20 pb-0.5 hover:border-charcoal transition-colors self-start md:self-end"
                        onClick={(e) => e.preventDefault()}
                      >
                        View Website
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
