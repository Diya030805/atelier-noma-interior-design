import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function FloatingEnquireButton({ onEnquireClick }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const philosophyElement = document.getElementById('philosophy');
    if (!philosophyElement) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Trigger slightly before the section fully enters
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      const [entry] = entries;
      // Show the button once the user reaches the philosophy section
      // and keep it visible as they continue scrolling down
      if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(philosophyElement);

    // Also fallback check on scroll to handle fast scrolling
    const handleScroll = () => {
      const rect = philosophyElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-[9000] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <button
        onClick={() => onEnquireClick('contact')}
        data-cursor="CONTACT"
        className="group relative flex items-center gap-3 bg-terracotta-beige text-warm-ivory font-sans text-[11px] font-bold tracking-[0.25em] uppercase pl-6 pr-5 py-3.5 shadow-[0_12px_40px_-12px_rgba(169,130,100,0.5)] border border-terracotta-beige hover:bg-warm-ivory hover:text-deep-espresso hover:border-deep-espresso/15 transition-all duration-300 ease-out"
      >
        <span>ENQUIRE</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        
        {/* Subtle decorative inner thin border frame to enhance the editorial/architectural look */}
        <span className="absolute inset-0.5 border border-white/10 group-hover:border-deep-espresso/5 pointer-events-none transition-colors duration-300" />
      </button>
    </div>
  );
}
