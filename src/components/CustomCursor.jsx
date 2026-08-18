import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'explore'
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  
  const cursorRef = useRef(null);
  const positionRef = useRef({ x: -100, y: -100 });
  const targetPositionRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable custom cursor on devices that support a precise pointer (desktop)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      targetPositionRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const trigger = e.target.closest('[data-cursor]');
      if (trigger) {
        const cursorText = trigger.getAttribute('data-cursor') || 'EXPLORE';
        setCursorType('explore');
        setText(cursorText);
      }
    };

    const handleMouseOut = (e) => {
      const trigger = e.target.closest('[data-cursor]');
      if (trigger) {
        setCursorType('default');
        setText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Smooth inertia tracking using requestAnimationFrame (direct DOM styling for ultimate performance)
    let animationFrameId;
    const render = () => {
      const ease = 0.12; // trailing interpolation rate
      const dx = targetPositionRef.current.x - positionRef.current.x;
      const dy = targetPositionRef.current.y - positionRef.current.y;
      
      positionRef.current.x += dx * ease;
      positionRef.current.y += dy * ease;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  // Do not render anything if the cursor hasn't been active or initialized
  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform hidden md:block"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
      }}
    >
      <div
        className={`relative flex items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          cursorType === 'explore'
            ? 'w-24 h-24 bg-terracotta-beige text-warm-ivory scale-100 shadow-[0_12px_40px_-12px_rgba(169,130,100,0.45)] border-0'
            : 'w-6 h-6 border border-terracotta-beige/40 bg-transparent scale-100'
        }`}
      >
        {/* Center dot for default pointer state */}
        <div
          className={`rounded-full bg-terracotta-beige transition-all duration-300 ease-out ${
            cursorType === 'explore' ? 'w-0 h-0 opacity-0' : 'w-1.5 h-1.5 opacity-100'
          }`}
        />

        {/* Dynamic typography label inside the expanded custom circle */}
        <span
          className={`absolute font-sans text-[10px] font-bold tracking-[0.25em] text-center text-warm-ivory transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none whitespace-nowrap pl-[0.25em] ${
            cursorType === 'explore'
              ? 'opacity-100 scale-100 translate-y-0 rotate-0'
              : 'opacity-0 scale-75 translate-y-2 -rotate-6'
          }`}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
