import React from 'react';
import * as Icons from 'lucide-react';

export default function ServiceCard({
  number,
  title,
  description,
  iconName
}) {
  // Dynamically resolve Lucide Icon
  const IconComponent = Icons[iconName] || Icons.HelpCircle;

  return (
    <div className="group bg-[#EEE7DB]/45 border border-deep-espresso/10 hover:border-deep-espresso/45 rounded-none p-8 md:p-10 transition-all duration-[400ms] ease-out hover:-translate-y-1.5 flex flex-col justify-between h-full min-h-[320px] shadow-sm select-none">
      {/* Top Section */}
      <div>
        <div className="flex items-center justify-between mb-8">
          {/* Large elegant number */}
          <span className="font-serif text-4xl text-[#A98264] opacity-50 group-hover:opacity-100 transition-opacity duration-300 italic">
            {number}
          </span>
          {/* Minimal icon container */}
          <div className="w-12 h-12 rounded-none bg-warm-ivory flex items-center justify-center text-deep-espresso/80 group-hover:scale-110 transition-transform duration-300 border border-deep-espresso/5">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>
 
        {/* Serif Title */}
        <h3 className="font-serif text-xl md:text-2xl text-deep-espresso font-light mb-4">
          {title}
        </h3>
 
        {/* Description */}
        <p className="font-sans text-xs md:text-sm text-[#6F6257] leading-relaxed">
          {description}
        </p>
      </div>
 
      {/* Action / Arrow indicator */}
      <div className="mt-8 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-deep-espresso/60 uppercase group-hover:text-terracotta-beige transition-colors duration-300">
        <span>LEARN MORE</span>
        <Icons.ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
      </div>
    </div>
  );
}
