import React, { useState } from 'react';
import { journal } from '../data/journal.js';
import SectionHeading from './SectionHeading.jsx';
import Button from './Button.jsx';
import { X, Clock, Eye, Sparkles } from 'lucide-react';

export default function Journal() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section
      id="journal"
      className="bg-soft-cream py-20 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeading
          label="FROM THE JOURNAL"
          title="Insights on space, material restraint, and quiet living."
        />

        {/* Articles Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12">
          {journal.map((post, idx) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="group cursor-pointer flex flex-col justify-between bg-warm-ivory border border-deep-espresso/5 hover:border-deep-espresso/15 rounded-none p-5 transition-all duration-[400ms] ease-out hover:-translate-y-1 shadow-sm"
            >
              <div>
                {/* Image Wrap */}
                <div className="overflow-hidden rounded-none aspect-[3/2] mb-6 border border-deep-espresso/5 bg-soft-cream relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-deep-espresso/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Metadata Row */}
                <div className="flex items-center gap-3 font-sans text-[10px] font-bold tracking-widest text-terracotta-beige uppercase mb-4">
                  <span>{post.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-deep-espresso/15"></span>
                  <span className="text-deep-espresso/50">{post.date}</span>
                </div>

                {/* Heading */}
                <h3 className="font-serif text-xl md:text-2xl text-deep-espresso font-light mb-3 leading-snug group-hover:text-terracotta-beige transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-xs md:text-sm text-[#6F6257] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Action */}
              <div className="mt-4 flex items-center gap-2 text-xs font-bold tracking-widest text-deep-espresso/60 uppercase border-t border-deep-espresso/5 pt-4 group-hover:text-terracotta-beige transition-colors duration-300">
                <span>READ ARTICLE</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* FULL READABLE ARTICLE MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-deep-espresso/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-fade-in">
          <div className="bg-warm-ivory rounded-none max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-warm-sand">
            {/* Close */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-none bg-soft-cream/80 hover:bg-soft-cream text-deep-espresso flex items-center justify-center transition-colors focus-ring cursor-pointer z-10"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner Cover */}
            <div className="relative h-56 md:h-80">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-ivory to-transparent" />
              <div className="absolute bottom-6 left-8 md:left-12">
                <span className="bg-terracotta-beige text-warm-ivory text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-none">
                  {activeArticle.category}
                </span>
                <h3 className="font-serif text-2xl md:text-4xl text-deep-espresso font-light mt-2 max-w-xl">
                  {activeArticle.title}
                </h3>
              </div>
            </div>

            {/* Read Content */}
            <div className="p-8 md:p-12 pt-4">
              <div className="flex items-center gap-6 text-xs text-deep-espresso/50 font-sans mb-8 border-b border-deep-espresso/10 pb-4">
                <span className="flex items-center gap-1.5"><Clock className="w-4.5 h-4.5" /> 5 Min Read</span>
                <span className="flex items-center gap-1.5"><Eye className="w-4.5 h-4.5" /> 1,240 Views</span>
                <span>Published on {activeArticle.date}</span>
              </div>

              {/* Rich text simulator */}
              <div className="space-y-6 font-sans text-sm md:text-base text-deep-espresso/80 leading-relaxed">
                <p className="font-serif text-lg italic text-deep-espresso/90 border-l-2 border-terracotta-beige pl-4">
                  {activeArticle.excerpt}
                </p>

                <p>
                  At Atelier Noma, we treat spaces not as sterile white boxes, but as living extensions of the environments in which they exist. Whether sourcing regional stone in Rajasthan, selecting local timbers in Maharashtra, or staging unlacquered metal joints, our design decisions always begin with physical research into the core building blocks of visual continuity.
                </p>

                <h4 className="font-serif text-xl text-deep-espresso font-medium pt-4">
                  The Weight of Authentic Materials
                </h4>

                <p>
                  Natural textures carry an implicit history and density that human eyes and hands understand instantly. Clear, unvarnished wood grains and natural minerals do not seek to cover up their inherent lines or cavities. Instead, they catch natural daylight in unique, unrepeatable visual rhythms.
                </p>

                <p>
                  By prioritizing these slow-finished objects over quick-drying synthetic substitutes, we build residential spaces that age with incredible grace. This tactile focus ensures that our rooms feel comfortable, grounding, and fully complete right from the first day.
                </p>
              </div>

              <div className="mt-12 pt-6 border-t border-deep-espresso/10 flex justify-between items-center">
                <span className="text-[10px] font-bold tracking-widest text-deep-espresso/40 uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-terracotta-beige" /> ATELIER NOMA JOURNAL SYSTEM
                </span>
                <Button variant="secondary" onClick={() => setActiveArticle(null)}>
                  Close Reading
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
