import React from 'react';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function Footer({ onNavigate }) {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
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
    <footer className="bg-deep-espresso text-warm-ivory/80 pt-20 pb-12 relative overflow-hidden border-t border-warm-ivory/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-warm-ivory/10">
            
            {/* Logo & Tagline (5 Columns) */}
            <div className="md:col-span-5 flex flex-col items-start text-left gap-4">
              <a href="#hero" onClick={handleScrollToTop} className="flex flex-col items-start focus-ring">
                <span className="font-serif text-2xl font-semibold tracking-[0.25em] text-warm-ivory">
                  ATELIER NOMA
                </span>
                <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-terracotta-beige uppercase mt-1">
                  INTERIORS WITH INTENTION
                </span>
              </a>
              <p className="font-sans text-xs md:text-sm text-warm-ivory/60 max-w-sm leading-relaxed mt-2">
                An architectural interior design practice guided by natural stone cuts, raw woodwork curation, layered light staging, and the silent routines of daily life.
              </p>
            </div>

            {/* Navigation links (3 Columns) */}
            <div className="md:col-span-3 text-left">
              <h4 className="font-sans text-xs font-bold tracking-widest text-warm-ivory uppercase mb-6">
                NAVIGATION
              </h4>
              <div className="flex flex-col gap-3 font-sans text-xs font-semibold uppercase tracking-widest">
                <a href="#hero" onClick={handleScrollToTop} className="hover:text-terracotta-beige transition-colors py-1">
                  Home
                </a>
                <a href="#studio" onClick={(e) => handleLinkClick(e, 'studio')} className="hover:text-terracotta-beige transition-colors py-1">
                  Studio
                </a>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-terracotta-beige transition-colors py-1">
                  Services
                </a>
                <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="hover:text-terracotta-beige transition-colors py-1">
                  Projects
                </a>
                <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-terracotta-beige transition-colors py-1">
                  Journal
                </a>
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-terracotta-beige transition-colors py-1">
                  Contact
                </a>
              </div>
            </div>

            {/* Studio Contact / Locations (4 Columns) */}
            <div className="md:col-span-4 text-left">
              <h4 className="font-sans text-xs font-bold tracking-widest text-warm-ivory uppercase mb-6">
                STUDIO OFFICES
              </h4>
              
              <div className="space-y-4 font-sans text-xs leading-relaxed text-warm-ivory/70">
                <div>
                  <p className="font-bold text-warm-ivory tracking-wider uppercase mb-1">CONTACT EMAIL</p>
                  <a href="mailto:hello@ateliernoma.com" className="text-sm font-semibold hover:text-terracotta-beige transition-colors">
                    hello@ateliernoma.com
                  </a>
                </div>

                <div>
                  <p className="font-bold text-warm-ivory tracking-wider uppercase mb-1">MUMBAI HQ</p>
                  <p>302, Nariman Point, Marine Drive, Mumbai, 400021</p>
                </div>

                <div>
                  <p className="font-bold text-warm-ivory tracking-wider uppercase mb-1">GOA OFFICE</p>
                  <p>Monsoon Sanctuary Lodge, Anjuna, Goa, 403509</p>
                </div>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Footer Base Row */}
        <Reveal delay={200}>
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 font-sans text-xs text-warm-ivory/50">
            <div>
              <p>© 2026 Atelier Noma. All rights reserved. Created with intention.</p>
            </div>

            {/* Social Shortcut Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-warm-ivory transition-colors focus-ring p-1"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-warm-ivory transition-colors focus-ring p-1"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {/* Custom Pinterest Icon */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-warm-ivory transition-colors focus-ring font-sans font-bold text-xs"
                aria-label="Pinterest boards"
              >
                PINTEREST
              </a>
            </div>

            {/* Back to Top */}
            <div>
              <button
                onClick={handleScrollToTop}
                className="inline-flex items-center gap-2 font-sans text-[10px] font-bold tracking-widest uppercase hover:text-warm-ivory text-warm-ivory/60 transition-colors focus-ring py-2 cursor-pointer"
              >
                BACK TO TOP <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </Reveal>

      </div>
    </footer>
  );
}
