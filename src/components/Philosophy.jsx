import React from 'react';
import Reveal from './Reveal.jsx';

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="bg-warm-ivory py-24 md:py-36 relative overflow-hidden border-t border-deep-espresso/5"
    >
      {/* Background Accent Grid Line */}
      <div className="absolute top-0 bottom-0 right-[25%] w-[1px] bg-deep-espresso/5 hidden lg:block pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Vision Statement */}
          <div className="lg:col-span-5 flex flex-col justify-start items-start">
            <Reveal>
              <span className="text-[10px] font-sans font-bold tracking-[0.5em] text-terracotta-beige uppercase block mb-6">
                OUR PHILOSOPHY
              </span>
            </Reveal>
            
            <Reveal delay={100}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-deep-espresso leading-[1.1] tracking-tight mb-8">
                Spaces built on <span className="italic">silence</span>, raw earth, and honest light.
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="font-sans text-sm tracking-wider uppercase text-deep-espresso/45 font-semibold">
                — AN ARCHITECTURAL INTROSPECTIVE
              </p>
            </Reveal>
          </div>

          {/* Right Column: Three core principles written in elegant, readable narrative blocks */}
          <div className="lg:col-span-7 space-y-12 lg:pt-8">
            
            {/* Principle 1 */}
            <Reveal delay={150}>
              <div className="group">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="font-serif italic text-2xl text-terracotta-beige/60">01</span>
                  <h3 className="font-serif text-2xl text-deep-espresso font-light tracking-wide">
                    The Art of Quiet Restraint
                  </h3>
                </div>
                <p className="font-sans text-base text-deep-espresso/80 leading-relaxed pl-12">
                  We believe true luxury lies in what is left out. Our designs celebrate negative space, allowing empty volumes to act as breathing room for your thoughts. By minimizing visual clutter, we highlight the architectural soul of the site and make room for peace to settle.
                </p>
              </div>
            </Reveal>

            {/* Principle 2 */}
            <Reveal delay={250}>
              <div className="group">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="font-serif italic text-2xl text-terracotta-beige/60">02</span>
                  <h3 className="font-serif text-2xl text-deep-espresso font-light tracking-wide">
                    Honest Material Truth
                  </h3>
                </div>
                <p className="font-sans text-base text-deep-espresso/80 leading-relaxed pl-12">
                  Every material we select is authentic to its origins. We favor raw, unpolished stone with open pores, natural oil-rubbed timbers, and lime-wash plasters that age gracefully with time. These surfaces react to human touch and ambient moisture, developing a living patina.
                </p>
              </div>
            </Reveal>

            {/* Principle 3 */}
            <Reveal delay={350}>
              <div className="group">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="font-serif italic text-2xl text-terracotta-beige/60">03</span>
                  <h3 className="font-serif text-2xl text-deep-espresso font-light tracking-wide">
                    Staging of Natural Light
                  </h3>
                </div>
                <p className="font-sans text-base text-deep-espresso/80 leading-relaxed pl-12">
                  Light is our primary building material. We orchestrate openings and shadows to capture the silent shifts of the sun throughout the day. From the sharp, awakening angles of the morning light to the golden, tranquil warmth of sunset, our spaces are designed to dance with natural cycles.
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}
