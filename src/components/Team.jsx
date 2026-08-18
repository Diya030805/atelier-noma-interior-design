import React from 'react';
import { team } from '../data/team.js';
import SectionHeading from './SectionHeading.jsx';

export default function Team() {
  return (
    <section
      id="team"
      className="bg-soft-cream py-20 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeading
          label="THE STUDIO MINDS"
          title="THE PEOPLE BEHIND THE SPACES"
        />

        {/* Responsive Grid for Team */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mt-12">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-stretch transition-all duration-300"
            >
              {/* Photo Frame with Editorial Grayscale-to-Color & Zoom */}
              <div className="overflow-hidden rounded-none aspect-[4/5] border border-deep-espresso/5 bg-warm-ivory relative shadow-sm">
                <img
                  src={member.image}
                  alt={`Professional design portrait of ${member.name}, ${member.role}`}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 contrast-105 group-hover:scale-103 transition-all duration-700 ease-out"
                />
                
                {/* Micro Label Over Photo */}
                <div className="absolute top-4 left-4 bg-warm-ivory/90 backdrop-blur-sm px-4 py-1.5 rounded-none border border-deep-espresso/5">
                  <span className="font-sans text-[9px] font-bold tracking-widest text-deep-espresso uppercase">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Text Description */}
              <div className="mt-6 flex flex-col items-start">
                <h3 className="font-serif text-2xl text-deep-espresso font-light">
                  {member.name}
                </h3>
                
                <p className="font-sans text-[11px] font-bold tracking-widest text-terracotta-beige uppercase mt-1 mb-4">
                  {member.role}
                </p>

                <p className="font-sans text-xs md:text-sm text-deep-espresso/70 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
