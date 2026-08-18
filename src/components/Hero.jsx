import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Button from './Button.jsx';

export default function Hero({ onNavigate }) {
  const handleScrollToSection = (sectionId) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-warm-ivory pt-24 md:pt-32 pb-16 flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle radial ambient gradient overlay across the hero section background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(247,243,236,0)_0%,rgba(216,197,174,0.08)_100%)]" />

      {/* Vertical rotating metadata label strictly matching Bold Typography style */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right pr-12 pointer-events-none hidden xl:block">
        <span className="text-[10px] uppercase tracking-[0.6em] text-deep-espresso/20 whitespace-nowrap">
          ESTABLISHED · MUMBAI · MMXXVI
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex-grow flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-8 relative z-10">
        {/* Asymmetric Part 1: Text Composition (45%) */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center items-start text-left animate-fade-in">
          {/* Micro-label */}
          <span className="text-[10px] uppercase tracking-[0.4em] mb-6 opacity-60 font-bold text-deep-espresso">
            Interior Architecture · Bespoke Living
          </span>

          {/* Bold Typography Styled Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] leading-[0.95] lg:leading-[0.9] font-serif italic -ml-1 mb-8 text-deep-espresso">
            Spaces that feel<br/>
            <span className="not-italic ml-8 sm:ml-12 md:ml-16 block text-terracotta-beige">like they belong</span>
            <span className="italic">to you.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-[400px] text-[#6F6257] leading-relaxed text-sm mb-10">
            Thoughtfully composed interiors shaped by natural materials, refined proportions, and the way you actually live. Based in Mumbai, working globally.
          </p>

          {/* Action CTAs */}
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
            <button
              onClick={() => handleScrollToSection('projects')}
              className="text-[11px] uppercase tracking-[0.2em] font-bold border-b border-deep-espresso pb-1 hover:border-terracotta-beige hover:text-terracotta-beige transition-all cursor-pointer focus-ring"
            >
              Explore Our Work →
            </button>
            <div className="hidden sm:block h-[1px] w-20 md:w-24 bg-deep-espresso/20"></div>
            <button
              onClick={() => handleScrollToSection('studio')}
              className="text-[10px] text-terracotta-beige uppercase tracking-widest font-bold hover:opacity-85 transition-all cursor-pointer focus-ring"
            >
              MEET THE STUDIO
            </button>
          </div>
        </div>

        {/* Asymmetric Part 2: Image Showcase (55%) with Overlapping Capsule Layout */}
        <div className="w-full lg:w-[55%] relative h-[420px] sm:h-[500px] md:h-[620px] flex flex-col justify-end items-stretch animate-scale-up">
          {/* Main Capsule Visual Asset (Top-Right) */}
          <div className="absolute top-0 right-0 w-[260px] sm:w-[340px] md:w-[420px] h-[360px] sm:h-[460px] md:h-[580px] bg-[#EEE7DB] rounded-[130px] sm:rounded-[170px] md:rounded-[200px] overflow-hidden shadow-2xl border border-[#EEE7DB]/40">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-[2000ms] hover:scale-103"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800")' }}
            >
              <div className="absolute inset-0 bg-black/5" />
              <div className="absolute bottom-10 left-8 md:left-10 text-warm-ivory pr-6">
                <p className="text-[9px] uppercase tracking-widest opacity-80 mb-1">Featured Residence</p>
                <p className="font-serif italic text-xl md:text-2xl">House of Quiet Light</p>
              </div>
            </div>
          </div>

          {/* Overlapping Foreground Card (Bottom-Left) */}
          <div className="absolute left-0 sm:left-4 md:-left-6 lg:-left-10 bottom-4 sm:bottom-8 md:bottom-12 w-[150px] sm:w-[190px] md:w-[240px] h-[210px] sm:h-[270px] md:h-[320px] bg-[#D8C5AE] rounded-3xl overflow-hidden border-[8px] md:border-[12px] border-warm-ivory shadow-xl z-20">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-[2000ms] hover:scale-105"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=600")' }}
            />
          </div>
        </div>
      </div>

      {/* Hero Foot / Scroll Prompt */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center mt-4">
        <div className="h-[1px] flex-grow bg-deep-espresso/15 mr-8 hidden md:block"></div>
        <button
          onClick={() => handleScrollToSection('studio')}
          className="flex items-center gap-3 text-deep-espresso/50 hover:text-terracotta-beige transition-colors duration-300 font-sans text-[10px] font-bold tracking-widest uppercase cursor-pointer py-2 focus-ring"
        >
          SCROLL TO EXPLORE <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
