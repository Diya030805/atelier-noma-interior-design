import React from 'react';

export default function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  const baseStyle = "inline-flex items-center justify-center gap-3 font-sans text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ease-out focus-ring h-12 px-8 rounded-none cursor-pointer select-none";
  
  const variants = {
    primary: "bg-deep-espresso hover:bg-terracotta-beige text-warm-ivory active:translate-y-px",
    secondary: "border border-deep-espresso/40 text-deep-espresso hover:bg-deep-espresso hover:text-warm-ivory active:translate-y-px",
    text: "px-0 h-auto text-deep-espresso hover:text-terracotta-beige font-bold gap-2 border-b border-deep-espresso/50 hover:border-terracotta-beige tracking-widest"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
