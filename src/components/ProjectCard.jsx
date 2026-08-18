import React, { useState } from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';

export default function ProjectCard({
  id,
  title,
  location,
  category,
  year,
  area,
  image,
  onClick,
  onImageClick,
  aspectRatio = "aspect-[4/5]",
  offsetClass = ""
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Construct a highly optimized, ultra-lightweight placeholder URL from Unsplash parameters
  const placeholderUrl = image ? `${image}&q=10&w=30` : '';

  return (
    <div
      onClick={onClick}
      data-cursor="EXPLORE"
      className={`group cursor-pointer flex flex-col justify-start items-stretch ${offsetClass} transition-all duration-500`}
    >
      {/* Editorial Image frame with blur-up loading staging */}
      <div className={`relative overflow-hidden rounded-none ${aspectRatio} border border-soft-cream bg-soft-cream shadow-sm`}>
        
        {/* Instant blurred low-quality placeholder */}
        {!isLoaded && placeholderUrl && (
          <img
            src={placeholderUrl}
            alt=""
            role="presentation"
            className="absolute inset-0 w-full h-full object-cover blur-[16px] scale-[1.08] transition-opacity duration-500"
          />
        )}

        {/* Main High-Resolution Image */}
        <img
          src={image}
          alt={`Luxury interior architectural design of ${title} in ${location}`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transform transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isLoaded 
              ? 'opacity-100 blur-0 scale-100 group-hover:scale-[1.05]' 
              : 'opacity-0 blur-[12px] scale-[1.05]'
          }`}
        />

        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-6">
          <span className="text-warm-ivory text-[10px] font-bold tracking-widest uppercase">
            EXPLORE DESIGN
          </span>
          
          {/* Dual Action Controls */}
          <div className="flex gap-2">
            {/* Action 1: Enlarge Lightbox */}
            {onImageClick && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onImageClick();
                }}
                title="Inspect Close-up"
                data-cursor="ZOOM"
                className="w-10 h-10 rounded-none bg-warm-ivory/90 hover:bg-terracotta-beige hover:text-warm-ivory text-deep-espresso flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            )}

            {/* Action 2: View Story Details */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              title="Read narrative"
              data-cursor="DETAILS"
              className="w-10 h-10 rounded-none bg-warm-ivory/90 hover:bg-terracotta-beige hover:text-warm-ivory text-deep-espresso flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Metadata Labeling */}
      <div className="mt-5 flex flex-col items-start gap-1 font-sans">
        <div className="flex justify-between items-baseline w-full">
          <h3 className="font-serif text-lg md:text-xl text-deep-espresso group-hover:text-terracotta-beige transition-colors duration-300 font-light">
            {title}
          </h3>
          <span className="font-sans text-[10px] font-bold tracking-widest text-[#8c7a6b] uppercase">
            {category}
          </span>
        </div>
        
        {/* Subtle, elegant physical detail strip */}
        <div className="w-full mt-2.5 pt-2.5 border-t border-deep-espresso/5 flex justify-between items-center font-sans text-[10px] uppercase tracking-wider text-deep-espresso/50">
          <span className="font-semibold text-deep-espresso/60">{area || "4,200 SQ FT"}</span>
          <span className="w-1 h-1 rounded-full bg-deep-espresso/15"></span>
          <span>{location}</span>
          <span className="w-1 h-1 rounded-full bg-deep-espresso/15"></span>
          <span className="font-medium text-terracotta-beige">{year}</span>
        </div>
      </div>
    </div>
  );
}
