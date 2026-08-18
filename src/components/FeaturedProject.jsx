import React, { useState } from 'react';
import { ArrowRight, X, Sparkles, MapPin, Calendar, Ruler, Award } from 'lucide-react';
import Button from './Button.jsx';

export default function FeaturedProject() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="featured-project"
      className="bg-soft-cream py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Label and Intro */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta-beige"></span>
          <span className="font-sans text-xs font-bold tracking-widest text-terracotta-beige uppercase">
            FEATURED RESIDENCE
          </span>
        </div>

        {/* Title and Editorial Hook */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-deep-espresso font-light">
            House of Quiet Light
          </h2>
          <p className="font-sans text-sm md:text-base text-deep-espresso/70 max-w-md leading-relaxed">
            An award-winning coastal sanctuary crafted around raw materiality, framed views of morning fog, and the serene choreographies of light.
          </p>
        </div>

        {/* Cinematic Oversized Image Container (extending beyond container margins with subtle parallax zoom) */}
        <div className="relative group overflow-hidden rounded-none aspect-[16/9] md:aspect-[21/9] shadow-lg border border-warm-sand mb-12 cursor-pointer" onClick={() => setIsOpen(true)}>
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
            alt="Widescreen high-end kitchen and dining area at House of Quiet Light, Alibaug, India"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-103"
          />
          {/* Subtle Ambient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/35 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
          
          {/* Micro hover interaction - Click to reveal overlay hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-warm-ivory/95 backdrop-blur text-deep-espresso text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-none shadow-md flex items-center gap-2">
              CLICK TO VIEW DETAILS <Sparkles className="w-3 h-3 text-terracotta-beige" />
            </span>
          </div>
        </div>

        {/* Technical Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 py-8 border-y border-deep-espresso/10 font-sans">
          <div>
            <p className="text-[10px] font-bold tracking-widest text-deep-espresso/50 uppercase mb-2">LOCATION</p>
            <p className="font-serif text-lg md:text-xl text-deep-espresso">Alibaug, India</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-deep-espresso/50 uppercase mb-2">YEAR COMPLETED</p>
            <p className="font-serif text-lg md:text-xl text-deep-espresso">2026</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-deep-espresso/50 uppercase mb-2">TOTAL AREA</p>
            <p className="font-serif text-lg md:text-xl text-deep-espresso">4,200 SQ FT</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-deep-espresso/50 uppercase mb-2">DESIGN SCOPE</p>
            <p className="font-serif text-lg md:text-xl text-deep-espresso">Full Interior Architecture</p>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-xs font-medium text-deep-espresso/60">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Featured in International Design Digest, 2026</span>
          </div>
          <Button variant="primary" onClick={() => setIsOpen(true)}>
            View Project Details <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* FULL-SCREEN DETAILED MODAL OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-deep-espresso/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-fade-in">
          <div className="bg-warm-ivory rounded-none max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-warm-sand">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-none bg-soft-cream/80 hover:bg-soft-cream text-deep-espresso flex items-center justify-center transition-colors focus-ring cursor-pointer z-10"
              aria-label="Close project details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero */}
            <div className="relative h-64 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="House of Quiet Light detail view"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-ivory via-warm-ivory/10 to-transparent"></div>
              <div className="absolute bottom-6 left-8 md:left-12">
                <span className="bg-terracotta-beige text-warm-ivory text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-none">
                  FEATURED PROJECT
                </span>
                <h3 className="font-serif text-2xl md:text-4xl text-deep-espresso font-light mt-2">
                  House of Quiet Light
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-8 md:p-12 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="md:col-span-2 space-y-6">
                  <h4 className="font-serif text-lg text-deep-espresso italic border-b border-deep-espresso/10 pb-2">
                    Design Narrative
                  </h4>
                  <p className="font-sans text-sm md:text-base text-deep-espresso/80 leading-relaxed">
                    Designed as a sanctuary of silence, this Alibaug coastal home was crafted for a retired couple seeking complete respite from city noise. The core architectural materials are left untreated, highlighting their natural wear over time.
                  </p>
                  <p className="font-sans text-sm text-deep-espresso/70 leading-relaxed">
                    Custom-cast plaster walls catch shifting sunlight across the day. The hand-finished timber cabinetry and thick oak dining surface offer visual warmth and physical ground. Seamless stone thresholds merge the interior cleanly with wild surrounding greenery.
                  </p>
                </div>

                <div className="space-y-6 bg-soft-cream/50 p-6 rounded-none border border-deep-espresso/5">
                  <h4 className="font-serif text-lg text-deep-espresso font-medium mb-4">
                    Project Info
                  </h4>
                  <div className="space-y-4 text-xs font-sans">
                    <div className="flex justify-between py-1 border-b border-deep-espresso/5">
                      <span className="text-deep-espresso/50 font-semibold flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Location</span>
                      <span className="text-deep-espresso font-medium">Alibaug, India</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-deep-espresso/5">
                      <span className="text-deep-espresso/50 font-semibold flex items-center gap-1.5"><Calendar className="w-3 h-3" /> Completed</span>
                      <span className="text-deep-espresso font-medium">2026</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-deep-espresso/5">
                      <span className="text-deep-espresso/50 font-semibold flex items-center gap-1.5"><Ruler className="w-3 h-3" /> Area</span>
                      <span className="text-deep-espresso font-medium">4,200 sq ft</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-deep-espresso/5">
                      <span className="text-deep-espresso/50 font-semibold flex items-center gap-1.5"><Award className="w-3 h-3" /> Scope</span>
                      <span className="text-deep-espresso font-medium">Interior Architecture</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-gallery elements inside modal */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-none overflow-hidden aspect-[4/3] border border-deep-espresso/10">
                  <img
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
                    alt="Kitchen slab"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-none overflow-hidden aspect-[4/3] border border-deep-espresso/10">
                  <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
                    alt="Living area"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-deep-espresso/10 flex justify-end">
                <Button variant="secondary" onClick={() => setIsOpen(false)}>
                  Close Window
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
