import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal.jsx';

const faqData = [
  {
    question: "What defines the architectural approach of Atelier Noma?",
    answer: "Our practice is rooted in modern spatial restraint and natural material curation. Rather than applying superficial decor, we structure interiors around raw stone blocks, hand-rubbed sustainable timbers, and the orchestration of natural shadow lines to support quiet, intentional living."
  },
  {
    question: "How does the studio handle regional materials and craftsmanship?",
    answer: "We partner directly with regional stonemasons, carpenters, and artisanal glass blowers. This allows us to source genuine limestone, hand-finished brass, and reclaimed teak with fully traceable supply chains, embedding a sense of historical place and material truth in every space."
  },
  {
    question: "Can you manage projects outside your primary metropolitan offices?",
    answer: "Yes. While our headquarters are in Mumbai, we manage turnkey residential and cultural projects globally. We utilize advanced spatial mapping, detail scheduling, and a trusted network of global logistics partners to oversee execution from initial concept to bespoke textile dressing."
  },
  {
    question: "What is your typical project timeline from drafting to completion?",
    answer: "A complete custom residence typically spans 8 to 14 months, depending on the scale and custom architectural detailing. This duration ensures sufficient time for stone curing, bespoke timber fabrication, and the meticulous staging of custom lighting circuits."
  },
  {
    question: "Do you collaborate with external building contractors and architects?",
    answer: "We frequently collaborate with lead architects and engineering firms. Our role specializes in the complete interior architecture, spatial programming, lighting design, and curated material layouts to ensure cohesive integration with the shell building."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-soft-cream/35 border-t border-deep-espresso/5">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        {/* Editorial Section Heading */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-terracotta-beige uppercase">
              STUDIO DIALOGUE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-deep-espresso tracking-tight mt-3">
              Atelier Insights
            </h2>
            <p className="font-sans text-xs md:text-sm text-deep-espresso/60 max-w-lg mx-auto leading-relaxed mt-4">
              Answers to frequently asked questions about our custom interior architecture process, material standards, and global commissions.
            </p>
          </div>
        </Reveal>

        {/* Accordion Group */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 0.05}>
                <div 
                  className={`border-b border-deep-espresso/10 pb-4 transition-all duration-300 ${
                    isOpen ? 'border-deep-espresso/20' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-4 text-left font-serif text-lg md:text-xl font-light text-deep-espresso hover:text-terracotta-beige transition-colors duration-300 focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{item.question}</span>
                    <span 
                      className={`w-8 h-8 rounded-none border border-deep-espresso/5 flex items-center justify-center bg-warm-ivory text-deep-espresso/60 group-hover:text-terracotta-beige group-hover:border-terracotta-beige/30 transition-all duration-300 ${
                        isOpen ? 'rotate-180 bg-terracotta-beige text-warm-ivory border-terracotta-beige' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </span>
                  </button>

                  {/* Accordion Content Frame */}
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-2 pb-2' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-sans text-xs md:text-sm text-deep-espresso/70 leading-relaxed max-w-3xl pl-1 pr-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
