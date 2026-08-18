import React, { useEffect, useState } from 'react';

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setProgress(0);
        return;
      }
      const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const percentage = (scrollPosition / totalHeight) * 100;
      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    // Use passive listener for optimized scrolling performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Trigger initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      id="reading-progress-bar-track"
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-deep-espresso/[0.03] z-[10000] pointer-events-none"
    >
      <div
        id="reading-progress-bar-fill"
        className="h-full bg-terracotta-beige will-change-[width] transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
