import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import Button from './Button.jsx';

export default function StudioIntro({ onNavigate }) {
  return (
    <section
      id="studio"
      className="bg-soft-cream py-20 md:py-32 relative overflow-hidden"
    >
      {/* Visual Architectural Grid Accents */}
      <div className="absolute top-0 bottom-0 left-[15%] w-[1px] bg-deep-espresso/5 hidden lg:block pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-deep-espresso/5 hidden lg:block pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          label="THE STUDIO"
          title="We design quiet spaces with a strong sense of place."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mt-8">
          {/* Left Column: Bold Statement (5 Columns) */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-deep-espresso font-light italic leading-tight mb-6">
              "An interior is not just a container for objects, but an extension of the soul."
            </h3>
            <div className="h-[2px] w-12 bg-terracotta-beige"></div>
          </div>

          {/* Right Column: Detailed Narrative & Action (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8 lg:pl-12 border-l-0 lg:border-l border-deep-espresso/10">
            <p className="font-sans text-base text-deep-espresso/85 leading-relaxed">
              Atelier Noma creates residential interiors where architecture, material, furniture, light, and art exist as one considered composition. Every project begins with listening—to the building, to its surroundings, and to the people who will live there.
            </p>
            <p className="font-sans text-sm text-deep-espresso/70 leading-relaxed">
              Our approach is defined by restraint, quiet refinement, and natural material expression. Rather than imposing a signature style, we work hand-in-hand with our clients to refine their vision and draw out the natural spirit of each physical site. From monolithic travertine details to soft hand-woven linen textiles, we ensure every element serves a purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mt-4 w-full">
              <Button
                variant="secondary"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Inquire About Our Studio
              </Button>

              <div className="flex items-center gap-4 text-deep-espresso/60">
                <span className="text-2xl font-serif italic">12+</span>
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  Global Design Awards
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-beige"></span>
                <span className="text-2xl font-serif italic">150+</span>
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  Spaces Created
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
