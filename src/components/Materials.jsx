import React, { useRef } from 'react';
import SectionHeading from './SectionHeading.jsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const materialsData = [
  {
    name: "Travertine",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    description: "Softly veined stone selected for its organic warmth, deep geological cavities, and timeless architectural character."
  },
  {
    name: "Natural Oak",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80",
    description: "Sustainably sourced wood with fine tight graining, hand-finished in natural organic oils to ensure tactile honesty."
  },
  {
    name: "Linen",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80",
    description: "Coarsely woven organic Belgian linen that filters direct tropical daylight into a soft, glowing background canvas."
  },
  {
    name: "Brushed Brass",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    description: "Unlacquered brass detailing that patinas gracefully with touch, adding a living, evolving warmth to thresholds."
  },
  {
    name: "Handmade Ceramic",
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=600&q=80",
    description: "Slightly imperfect hand-thrown clay objects, selected to anchor modern layouts in authentic, raw craftsmanship."
  },
  {
    name: "Limestone",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=600&q=80",
    description: "Chalky, matte stone block surfaces that absorb sound and reflect raw daylight with absolute visual softness."
  }
];

export default function Materials() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // width of a card + gaps
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="materials"
      className="bg-soft-cream py-20 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            label="MATERIAL PHILOSOPHY"
            title="Material is the beginning of every story."
            className="mb-0! md:mb-0!"
          />
          
          {/* Scroll Buttons for Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-none border border-deep-espresso/20 hover:border-deep-espresso hover:bg-deep-espresso hover:text-warm-ivory text-deep-espresso flex items-center justify-center transition-all duration-300 focus-ring cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-none border border-deep-espresso/20 hover:border-deep-espresso hover:bg-deep-espresso hover:text-warm-ivory text-deep-espresso flex items-center justify-center transition-all duration-300 focus-ring cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 no-scrollbar scroll-smooth"
        >
          {materialsData.map((material, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start bg-warm-ivory border border-deep-espresso/5 hover:border-deep-espresso/20 rounded-none p-5 transition-all duration-500 hover:-translate-y-1 shadow-sm select-none"
            >
              {/* Image Frame */}
              <div className="overflow-hidden rounded-none aspect-[1/1] mb-5 border border-deep-espresso/5 bg-soft-cream relative group">
                <img
                  src={material.image}
                  alt={`Close-up high-end texture photo of ${material.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-104 transition-transform duration-700"
                />
              </div>

              {/* Material Title */}
              <h3 className="font-serif text-lg text-deep-espresso font-semibold uppercase tracking-widest mb-2">
                {material.name}
              </h3>

              {/* Material Description */}
              <p className="font-sans text-xs text-deep-espresso/75 leading-relaxed">
                {material.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile-only Swipe indicator */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-[10px] tracking-widest font-bold text-deep-espresso/40 uppercase">
          <span>← Swipe horizontally to see tactile details →</span>
        </div>
      </div>
    </section>
  );
}
