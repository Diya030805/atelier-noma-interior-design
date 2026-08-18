import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Share2, Check } from 'lucide-react';

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev
}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [copied, setCopied] = useState(false);

  // Keyboard navigation control
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && onNext) {
        setIsZoomed(false);
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        setIsZoomed(false);
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  if (currentIndex === null || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const imageUrl = typeof currentImage === 'string' ? currentImage : currentImage.image;
  const title = typeof currentImage === 'string' ? 'Architectural Detailing' : currentImage.title;
  const subtitle = typeof currentImage === 'string' ? 'Atelier Noma curation' : `${currentImage.location} • ${currentImage.category}`;

  const toggleZoom = () => {
    setIsZoomed(prev => !prev);
  };

  const handleCopyLink = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?project=${encodeURIComponent(title)}`;
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  // Pinterest Pin sharing endpoint
  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(`Luxury architectural design highlight from Atelier Noma - ${title}`)}`;

  return (
    <div
      id="lightbox-viewport"
      className="fixed inset-0 bg-deep-espresso/95 backdrop-blur-md z-[11000] flex flex-col justify-between p-4 md:p-8 animate-fade-in"
      onClick={(e) => {
        // Close if clicking the background backdrop directly
        if (e.target.id === 'lightbox-viewport' || e.target.id === 'image-wrap') {
          onClose();
        }
      }}
    >
      {/* Lightbox Top bar: Metadata & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full z-10 py-3 gap-3 md:gap-0 border-b border-warm-ivory/10">
        <div className="text-left font-sans text-warm-ivory">
          <span className="font-serif text-lg md:text-xl font-light italic text-warm-ivory/90 leading-none">
            {title}
          </span>
          <p className="text-[10px] uppercase tracking-widest text-warm-ivory/40 mt-1">
            {subtitle}
          </p>
        </div>

        {/* Share and Action items group */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 w-full md:w-auto justify-between md:justify-end">
          
          {/* Subtle Editorial Share Links */}
          <div className="flex items-center gap-3 font-sans text-[10px] tracking-widest font-bold uppercase text-warm-ivory/40">
            <span className="hidden sm:inline">SHARE:</span>
            
            {/* Pinterest Link */}
            <a
              href={pinterestShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="PINTEREST"
              className="text-warm-ivory/70 hover:text-terracotta-beige transition-colors duration-300 border-b border-transparent hover:border-terracotta-beige pb-0.5"
              title="Pin on Pinterest"
            >
              PINTEREST
            </a>
            
            <span className="text-warm-ivory/20">•</span>

            {/* Instagram / Copy Link Anchor */}
            <button
              onClick={handleCopyLink}
              data-cursor="COPY_LINK"
              className="text-warm-ivory/70 hover:text-terracotta-beige transition-colors duration-300 border-b border-transparent hover:border-terracotta-beige pb-0.5 flex items-center gap-1.5 focus:outline-none"
              title="Copy link to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-terracotta-beige" />
                  <span className="text-terracotta-beige">LINK COPIED</span>
                </>
              ) : (
                <>
                  <span>INSTAGRAM / COPY</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2.5 ml-auto md:ml-0">
            {/* Zoom Toggle */}
            <button
              onClick={toggleZoom}
              data-cursor={isZoomed ? 'ZOOM_OUT' : 'ZOOM_IN'}
              className="w-10 h-10 bg-warm-ivory/5 hover:bg-warm-ivory/10 border border-warm-ivory/10 text-warm-ivory flex items-center justify-center transition-colors focus:outline-none"
              title={isZoomed ? 'Zoom Out' : 'Zoom In'}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              data-cursor="CLOSE"
              className="w-10 h-10 bg-warm-ivory/5 hover:bg-warm-ivory/10 border border-warm-ivory/10 text-warm-ivory flex items-center justify-center transition-colors focus:outline-none"
              title="Close Lightbox"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        id="image-wrap"
        className="relative flex-grow flex items-center justify-center overflow-hidden my-4"
      >
        {/* Navigation - Previous Arrow */}
        {onPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
              onPrev();
            }}
            data-cursor="PREV"
            className="absolute left-2 md:left-6 w-12 h-12 bg-warm-ivory/5 hover:bg-warm-ivory/10 border border-warm-ivory/10 text-warm-ivory rounded-none flex items-center justify-center transition-all z-10 focus:outline-none"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Render Image with zoom states */}
        <div 
          className={`relative max-w-full max-h-[75vh] transition-all duration-500 ease-out flex items-center justify-center ${
            isZoomed ? 'overflow-auto cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={toggleZoom}
        >
          <img
            src={imageUrl}
            alt={title}
            className={`object-contain max-w-full max-h-[75vh] select-none shadow-2xl transition-transform duration-300 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
          />
        </div>

        {/* Navigation - Next Arrow */}
        {onNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
              onNext();
            }}
            data-cursor="NEXT"
            className="absolute right-2 md:right-6 w-12 h-12 bg-warm-ivory/5 hover:bg-warm-ivory/10 border border-warm-ivory/10 text-warm-ivory rounded-none flex items-center justify-center transition-all z-10 focus:outline-none"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Lightbox Footer: Progress counter & keyboard hint */}
      <div className="flex justify-between items-center w-full z-10 py-3 border-t border-warm-ivory/10 font-sans text-[10px] text-warm-ivory/40 tracking-wider uppercase">
        <span>IMAGE {currentIndex + 1} OF {images.length}</span>
        <span className="hidden md:inline">USE LEFT / RIGHT ARROWS • CLICK TO ZOOM</span>
      </div>

    </div>
  );
}
