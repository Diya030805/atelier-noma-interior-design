import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from './Button.jsx';

export default function Navbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Safe navigation handler
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Call custom navigate prop if available, or fall back to native scroll
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // height of sticky navbar
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

  const navLinks = [
    { label: 'Home', section: 'hero' },
    { label: 'Studio', section: 'studio' },
    { label: 'Services', section: 'services' },
    { label: 'Projects', section: 'projects' },
    { label: 'Journal', section: 'journal' },
    { label: 'Contact', section: 'contact' }
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-warm-ivory/95 backdrop-blur-md border-b border-deep-espresso/10 ${
          isScrolled
            ? 'py-4 shadow-sm'
            : 'py-5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="group flex flex-col justify-center focus-ring"
          >
            <span className="font-serif text-lg md:text-xl font-medium tracking-[0.25em] text-deep-espresso transition-colors duration-300 group-hover:text-terracotta-beige">
              ATELIER NOMA
            </span>
            <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-terracotta-beige uppercase">
              INTERIORS WITH INTENTION
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.section}
                href={`#${link.section}`}
                onClick={(e) => handleLinkClick(e, link.section)}
                className="relative font-sans text-[10px] font-bold uppercase tracking-widest text-deep-espresso/70 hover:text-deep-espresso transition-all duration-300 focus-ring py-1.5 group/link"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-deep-espresso transition-all duration-300 group-hover/link:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              variant="secondary"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="h-10 px-6 text-xs"
            >
              Start a Project <ArrowRight className="w-3.5 h-3.5 ml-1 inline group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-deep-espresso p-2 hover:text-terracotta-beige transition-colors focus-ring cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-warm-ivory z-40 lg:hidden flex flex-col justify-between p-8 pt-28 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible'
        }`}
      >
        <div className="flex flex-col gap-6 mt-4">
          {navLinks.map((link, idx) => (
            <a
              key={link.section}
              href={`#${link.section}`}
              onClick={(e) => handleLinkClick(e, link.section)}
              style={{ transitionDelay: `${idx * 75}ms` }}
              className={`font-serif text-3xl font-light text-deep-espresso hover:text-terracotta-beige transition-all duration-300 py-1 border-b border-deep-espresso/5 ${
                isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className={`flex flex-col gap-8 pb-8 transition-all duration-500 delay-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="h-[1px] bg-deep-espresso/10"></div>
          
          <Button
            variant="primary"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="w-full text-center py-4"
          >
            Start a Project <ArrowRight className="w-4 h-4 ml-2 inline" />
          </Button>

          <div className="text-center">
            <p className="font-sans text-[10px] tracking-widest text-deep-espresso/60 uppercase">
              Atelier Noma · Interiors with Intention
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
