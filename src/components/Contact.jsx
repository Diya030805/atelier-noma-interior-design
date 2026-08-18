import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle, Mail, MapPin, PhoneCall } from 'lucide-react';
import Button from './Button.jsx';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    location: '',
    budget: '40L - 75L',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // idle | loading | success

  const projectTypes = [
    'Residential',
    'Commercial / Retail',
    'Bespoke Furniture Curation',
    'Art Direction & Styling',
    'Other Architectural Consultation'
  ];

  const budgetBrackets = [
    'Under 25L',
    '25L - 50L',
    '50L - 1Cr',
    '1Cr - 3Cr',
    '3Cr+'
  ];

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "We require your name to begin a conversation.";
    if (!formData.email.trim()) {
      tempErrors.email = "An email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please provide a valid email format.";
    }
    if (!formData.location.trim()) tempErrors.location = "Please enter your site location.";
    if (!formData.message.trim()) tempErrors.message = "Tell us briefly about your spatial ambitions.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus('loading');

    // Simulate backend response delay
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Residential',
        location: '',
        budget: '50L - 1Cr',
        message: ''
      });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="bg-muted-taupe text-deep-espresso py-20 md:py-32 relative overflow-hidden"
    >
      {/* Decorative organic background shape */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta-beige/25 filter blur-3xl rounded-full -z-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Statement (5 Columns) */}
          <div className="lg:col-span-5 text-left text-deep-espresso">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-deep-espresso"></span>
              <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-deep-espresso uppercase">
                START A CONVERSATION
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
              Let’s create a space worth coming home to.
            </h2>

            <p className="font-sans text-sm md:text-base text-deep-espresso/80 leading-relaxed mb-8 max-w-md">
              Tell us about your project, your space, and what you want it to become. We partner with clients worldwide to craft calm, tactile residential architectures.
            </p>

            <div className="space-y-6 border-t border-deep-espresso/10 pt-8 font-sans">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-deep-espresso/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-deep-espresso" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-deep-espresso/50">EMAIL DIRECTLY</p>
                  <a href="mailto:hello@ateliernoma.com" className="text-sm font-semibold hover:text-warm-ivory transition-colors">
                    hello@ateliernoma.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-deep-espresso/5 flex items-center justify-center">
                  <PhoneCall className="w-4 h-4 text-deep-espresso" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-deep-espresso/50">CALL OUR STUDIO</p>
                  <a href="tel:+912255550190" className="text-sm font-semibold hover:text-warm-ivory transition-colors">
                    +91 22 5555 0190
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-deep-espresso/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-deep-espresso" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-deep-espresso/50">LOCATION</p>
                  <p className="text-sm font-semibold">
                    Mumbai · Goa · Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Curation (7 Columns) */}
          <div className="lg:col-span-7 bg-warm-ivory/95 backdrop-blur rounded-none p-6 md:p-10 shadow-lg border border-deep-espresso/15">
            {formStatus === 'success' ? (
              <div className="py-16 flex flex-col items-center text-center justify-center animate-fade-in">
                <div className="w-16 h-16 rounded-none bg-terracotta-beige/10 flex items-center justify-center text-terracotta-beige mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl text-deep-espresso font-light mb-4">
                  Enquiry Received
                </h3>
                <p className="font-sans text-sm text-deep-espresso/80 max-w-md leading-relaxed mb-8">
                  Thank you. Your enquiry has been received. We’ll be in touch shortly to schedule a spatial consultation.
                </p>
                <Button variant="secondary" onClick={() => setFormStatus('idle')}>
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-sans text-[10px] font-bold tracking-widest text-deep-espresso/60 uppercase">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Mira Sen"
                      className={`h-11 px-4 rounded-none bg-soft-cream/35 border text-sm text-deep-espresso focus:bg-warm-ivory transition-all duration-300 outline-none ${
                        errors.name ? 'border-red-500' : 'border-deep-espresso/20 focus:border-terracotta-beige'
                      }`}
                      disabled={formStatus === 'loading'}
                    />
                    {errors.name && <span className="text-[10px] text-red-600 font-semibold">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-sans text-[10px] font-bold tracking-widest text-deep-espresso/60 uppercase">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. client@domain.com"
                      className={`h-11 px-4 rounded-none bg-soft-cream/35 border text-sm text-deep-espresso focus:bg-warm-ivory transition-all duration-300 outline-none ${
                        errors.email ? 'border-red-500' : 'border-deep-espresso/20 focus:border-terracotta-beige'
                      }`}
                      disabled={formStatus === 'loading'}
                    />
                    {errors.email && <span className="text-[10px] text-red-600 font-semibold">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-sans text-[10px] font-bold tracking-widest text-deep-espresso/60 uppercase">
                      PHONE (OPTIONAL)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="h-11 px-4 rounded-none bg-soft-cream/35 border border-deep-espresso/20 text-sm text-deep-espresso focus:bg-warm-ivory focus:border-terracotta-beige transition-all duration-300 outline-none"
                      disabled={formStatus === 'loading'}
                    />
                  </div>

                  {/* Location field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="location" className="font-sans text-[10px] font-bold tracking-widest text-deep-espresso/60 uppercase">
                      PROJECT LOCATION *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g. Alibaug, Maharashtra"
                      className={`h-11 px-4 rounded-none bg-soft-cream/35 border text-sm text-deep-espresso focus:bg-warm-ivory transition-all duration-300 outline-none ${
                        errors.location ? 'border-red-500' : 'border-deep-espresso/20 focus:border-terracotta-beige'
                      }`}
                      disabled={formStatus === 'loading'}
                    />
                    {errors.location && <span className="text-[10px] text-red-600 font-semibold">{errors.location}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Project Type dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="projectType" className="font-sans text-[10px] font-bold tracking-widest text-deep-espresso/60 uppercase">
                      PROJECT TYPE
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="h-11 px-4 rounded-none bg-soft-cream/35 border border-deep-espresso/20 text-sm text-deep-espresso focus:bg-warm-ivory focus:border-terracotta-beige transition-all duration-300 outline-none cursor-pointer"
                      disabled={formStatus === 'loading'}
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget estimate dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="budget" className="font-sans text-[10px] font-bold tracking-widest text-deep-espresso/60 uppercase">
                      ESTIMATED BUDGET
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="h-11 px-4 rounded-none bg-soft-cream/35 border border-deep-espresso/20 text-sm text-deep-espresso focus:bg-warm-ivory focus:border-terracotta-beige transition-all duration-300 outline-none cursor-pointer"
                      disabled={formStatus === 'loading'}
                    >
                      {budgetBrackets.map((bracket) => (
                        <option key={bracket} value={bracket}>{bracket}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message text area */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-sans text-[10px] font-bold tracking-widest text-deep-espresso/60 uppercase">
                    TELL US ABOUT YOUR SPACE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your design aspirations, timeline requirements, or physical layout..."
                    className={`p-4 rounded-none bg-soft-cream/35 border text-sm text-deep-espresso focus:bg-warm-ivory transition-all duration-300 outline-none resize-none ${
                      errors.message ? 'border-red-500' : 'border-deep-espresso/20 focus:border-terracotta-beige'
                    }`}
                    disabled={formStatus === 'loading'}
                  ></textarea>
                  {errors.message && <span className="text-[10px] text-red-600 font-semibold">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <div className="pt-2 flex justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full sm:w-auto px-10 gap-3 group"
                    disabled={formStatus === 'loading'}
                  >
                    {formStatus === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4.5 h-4.5 border-2 border-warm-ivory border-t-transparent rounded-full animate-spin"></span>
                        Simulating Submission...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Enquiry <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
