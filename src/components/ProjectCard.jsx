import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({
  id,
  title,
  location,
  category,
  year,
  image,
  onClick,
  aspectRatio = "aspect-[4/5]",
  offsetClass = ""
}) {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer flex flex-col justify-start items-stretch ${offsetClass} transition-all duration-500`}
    >
      {/* Editorial Image frame */}
      <div className={`relative overflow-hidden rounded-none ${aspectRatio} border border-soft-cream bg-soft-cream shadow-sm`}>
        <img
          src={image}
          alt={`Luxury interior architectural design of ${title} in ${location}`}
          loading="lazy"
          className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.05] transition-transform duration-700 ease-out"
        />
        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-6">
          <span className="text-warm-ivory text-xs font-bold tracking-widest uppercase">
            EXPLORE DESIGN
          </span>
          <div className="w-10 h-10 rounded-none bg-warm-ivory/90 text-deep-espresso flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Project Metadata Labeling */}
      <div className="mt-5 flex flex-col items-start gap-1 font-sans">
        <div className="flex justify-between items-baseline w-full">
          <h3 className="font-serif text-lg md:text-xl text-deep-espresso group-hover:text-terracotta-beige transition-colors duration-300 font-light">
            {title}
          </h3>
          <span className="font-sans text-[10px] font-bold tracking-widest text-terracotta-beige uppercase">
            {year}
          </span>
        </div>
        
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-deep-espresso/60">{location}</span>
          <span className="w-1 h-1 rounded-full bg-deep-espresso/25"></span>
          <span className="text-xs text-deep-espresso/50 italic">{category}</span>
        </div>
      </div>
    </div>
  );
}
