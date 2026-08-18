import React from 'react';

export default function SectionHeading({
  label,
  title,
  alignment = 'left',
  className = ''
}) {
  const isCenter = alignment === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {label && (
        <div className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="w-1.5 h-1.5 rounded-none bg-terracotta-beige"></span>
          <span className="font-sans text-xs font-bold tracking-widest text-terracotta-beige uppercase">
            {label}
          </span>
          <span className="w-8 h-[1px] bg-warm-sand/50"></span>
        </div>
      )}
      {title && (
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-espresso leading-tight font-normal max-w-4xl">
          {title}
        </h2>
      )}
    </div>
  );
}
