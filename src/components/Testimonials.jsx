import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const list = [
    {
      quote: "“The studio understood how we wanted the house to feel before we could put it into words.”",
      author: "— Aanya & Rohan Mehta",
      meta: "PRIVATE RESIDENCE · MUMBAI"
    },
    {
      quote: "“Atelier Noma did not just organize our spatial layout; they elevated the way we carry out our everyday family rituals.”",
      author: "— Dr. Vikram & Shalini Nair",
      meta: "MONSOON VILLA · GOA"
    },
    {
      quote: "“Every cut of travertine, lighting level, and custom linen detail feels intentional, cohesive, and incredibly calm.”",
      author: "— Kabir & Priya Sen",
      meta: "PALM COURT APARTMENT · MUMBAI"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % list.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  const active = list[activeIndex];

  return (
    <section
      id="testimonials"
      className="bg-warm-ivory py-20 md:py-32 relative overflow-hidden border-t border-deep-espresso/5"
    >
      {/* Decorative large quotes in background */}
      <div className="absolute top-12 left-10 md:left-24 text-soft-cream/45 pointer-events-none -z-10 select-none">
        <Quote className="w-48 h-48 md:w-64 md:h-64 opacity-[0.25]" strokeWidth={0.5} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          label="VOICES"
          title="TESTIMONIALS"
          alignment="center"
        />

        {/* Carousel Window */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center py-8">
          {/* Active quote container with high-contrast text and a fade keyframe */}
          <div className="min-h-[160px] md:min-h-[200px] flex items-center justify-center mb-8">
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-deep-espresso font-light leading-snug italic px-4 md:px-12 animate-fade-in transition-all duration-500">
              {active.quote}
            </blockquote>
          </div>

          {/* Author Credential */}
          <div className="flex flex-col items-center gap-1.5 font-sans mb-12">
            <cite className="not-italic font-serif text-base md:text-lg text-terracotta-beige font-medium">
              {active.author}
            </cite>
            <span className="text-[10px] font-bold tracking-widest text-deep-espresso/40 uppercase">
              {active.meta}
            </span>
          </div>

          {/* Controls Panel */}
          <div className="flex items-center gap-8 border-t border-deep-espresso/10 pt-8 w-full max-w-xs justify-between">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-none border border-deep-espresso/15 hover:border-deep-espresso hover:bg-deep-espresso hover:text-warm-ivory text-deep-espresso flex items-center justify-center transition-all duration-300 focus-ring cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Progress counter indicators */}
            <div className="flex items-center gap-2 font-sans text-xs font-bold text-deep-espresso/50">
              <span className="text-deep-espresso">{activeIndex + 1}</span>
              <span className="text-deep-espresso/20">/</span>
              <span>{list.length}</span>
              {/* Dot Indicators */}
              <div className="flex gap-1.5 ml-4">
                {list.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1 cursor-pointer focus-ring transition-all duration-300 ${
                      activeIndex === idx ? 'bg-terracotta-beige w-4 rounded-none' : 'bg-deep-espresso/15 w-2 rounded-none hover:bg-deep-espresso/35'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-none border border-deep-espresso/15 hover:border-deep-espresso hover:bg-deep-espresso hover:text-warm-ivory text-deep-espresso flex items-center justify-center transition-all duration-300 focus-ring cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
