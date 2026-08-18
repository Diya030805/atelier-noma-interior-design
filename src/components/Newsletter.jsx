import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('submitting');
    
    // Simulate quiet, high-end API dispatch
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  return (
    <section id="newsletter" className="py-24 bg-warm-ivory border-t border-deep-espresso/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          
          <Reveal>
            <div className="text-center space-y-4 mb-12">
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-terracotta-beige uppercase">
                CURATED DISPATCH
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-deep-espresso tracking-tight">
                Atelier Chronicles
              </h2>
              <p className="font-sans text-xs md:text-sm text-deep-espresso/60 max-w-lg mx-auto leading-relaxed">
                Receive occasional notes on material explorations, studio updates, and freshly completed residential commissions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-soft-cream/40 border border-deep-espresso/5 p-8 md:p-12 relative overflow-hidden">
              
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-6 animate-fade-in">
                  <div className="w-12 h-12 bg-terracotta-beige text-warm-ivory flex items-center justify-center rounded-none mb-4 shadow-sm">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-deep-espresso font-light">
                    Inclusion Confirmed
                  </h3>
                  <p className="font-sans text-xs text-deep-espresso/60 mt-1.5 max-w-xs">
                    You have been added to our curated roster. We honor your inbox with silence, save for meaningful dispatches.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Single-Line Elegant Input Field Group */}
                  <div className="relative flex flex-col md:flex-row items-stretch border-b border-deep-espresso/30 focus-within:border-terracotta-beige transition-colors duration-300 py-2">
                    <input
                      type="email"
                      required
                      disabled={status === 'submitting'}
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent font-sans text-sm text-deep-espresso placeholder:text-deep-espresso/30 focus:outline-none py-3 pr-4"
                      aria-label="Email address for dispatch"
                    />
                    
                    <button
                      type="submit"
                      disabled={status === 'submitting' || !email}
                      data-cursor="SUBMIT"
                      className="flex items-center justify-center gap-2 bg-deep-espresso text-warm-ivory px-8 py-3 font-sans text-[11px] font-bold tracking-widest uppercase hover:bg-terracotta-beige hover:text-warm-ivory transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      <span>{status === 'submitting' ? 'JOINING...' : 'SUBSCRIBE'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between font-sans text-[10px] text-deep-espresso/45 tracking-wider uppercase mt-4">
                    <span>• Strictly Private</span>
                    <span>• No Third Party</span>
                    <span>• Unsubscribe Anytime</span>
                  </div>
                </form>
              )}

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
