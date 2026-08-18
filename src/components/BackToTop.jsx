import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      data-cursor="TOP"
      title="Scroll to Top"
      className={`fixed bottom-8 right-6 md:right-10 z-40 w-12 h-12 rounded-full border border-deep-espresso/15 bg-warm-ivory text-deep-espresso flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus:ring-1 focus:ring-terracotta-beige hover:border-terracotta-beige hover:text-terracotta-beige hover:scale-105 shadow-sm ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
