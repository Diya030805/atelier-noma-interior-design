import React, { useState } from 'react';
import SectionHeading from './SectionHeading.jsx';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      subtitle: "Spatial Diagnosis",
      description: "Understanding the client, site history, architecture, daily lifestyle, and raw stylistic ambitions.",
      details: ["Detailed Lifestyle Questionnaire", "Site Inspection & Light Tracking", "Historical Architectural Context Analysis", "Space Planning Feasibility"]
    },
    {
      num: "02",
      title: "DEFINE",
      subtitle: "Visual Material Language",
      description: "Developing the concept, primary tones, palette, material language, and spatial direction.",
      details: ["Mood Board Development", "Physical Material Curation", "Concept Presentation & Layout Proposals", "Initial 3D Spatial Masses"]
    },
    {
      num: "03",
      title: "DESIGN",
      subtitle: "Bespoke Details",
      description: "Detailed drawings, custom furniture design, lighting layouts, finishes, and precise material specifications.",
      details: ["Full CAD Architectural Layouts", "Bespoke Joinery & Carpentry Details", "Lighting Choreography", "Sourcing Vintage Pieces & Fabrics"]
    },
    {
      num: "04",
      title: "REALIZE",
      subtitle: "The Final Polish",
      description: "Procurement management, project coordination, installation, spatial styling, and final handover.",
      details: ["Procurement & Vendor Alignment", "On-site Supervision & Curation", "Art Staging & Final Styling", "Full Turn-key Delivery"]
    }
  ];

  return (
    <section
      id="process"
      className="bg-warm-ivory py-20 md:py-32 border-t border-deep-espresso/5 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeading
          label="THE METHOD"
          title="FROM IDEA TO INTERIOR"
        />

        {/* Desktop View: Architectural Horizontal Timeline */}
        <div className="hidden lg:block relative mt-16">
          {/* Main Horizontal Timeline Line */}
          <div className="absolute top-[24px] left-0 right-0 h-[1px] bg-deep-espresso/10 z-0"></div>

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={idx}
                  className="group cursor-pointer flex flex-col items-start"
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  {/* Step Bubble & Connect Line */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-none flex items-center justify-center font-sans text-xs font-bold tracking-wider transition-all duration-500 border ${
                      isSelected 
                        ? 'bg-deep-espresso text-warm-ivory border-deep-espresso' 
                        : 'bg-warm-ivory text-deep-espresso/40 border-deep-espresso/15 group-hover:border-deep-espresso'
                    }`}>
                      {step.num}
                    </div>
                    <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                      isSelected ? 'text-terracotta-beige' : 'text-deep-espresso/30'
                    }`}>
                      PHASE {step.num}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif text-xl text-deep-espresso font-semibold uppercase tracking-wider mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-terracotta-beige font-semibold uppercase tracking-widest mb-4">
                    {step.subtitle}
                  </p>

                  {/* Step Description */}
                  <p className="font-sans text-sm text-deep-espresso/70 leading-relaxed pr-6 mb-6">
                    {step.description}
                  </p>

                  {/* Sub-steps details (visible as list with fine lines) */}
                  <ul className="space-y-2.5 w-full pr-6 font-sans text-xs text-deep-espresso/50 border-t border-deep-espresso/5 pt-4">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-terracotta-beige"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet View: Structured Vertical Timeline */}
        <div className="lg:hidden relative mt-12 space-y-12">
          {/* Central Vertical Connector Line */}
          <div className="absolute top-4 bottom-4 left-6 w-[1px] bg-deep-espresso/10 z-0"></div>

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start gap-6 relative z-10"
            >
              {/* Vertical Step Node */}
              <div className="w-12 h-12 flex-shrink-0 rounded-none bg-deep-espresso text-warm-ivory flex items-center justify-center font-sans text-xs font-bold border border-deep-espresso">
                {step.num}
              </div>

              {/* Content */}
              <div className="flex-grow pt-1 border-b border-deep-espresso/5 pb-8">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-terracotta-beige uppercase">
                    PHASE {step.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-deep-espresso/15"></span>
                  <span className="font-sans text-xs font-semibold text-deep-espresso/50 uppercase tracking-widest">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-deep-espresso font-semibold uppercase tracking-wider mb-3">
                  {step.title}
                </h3>

                <p className="font-sans text-sm text-deep-espresso/75 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Bullet List for Mobile */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-sans text-deep-espresso/60">
                  {step.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-terracotta-beige"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
