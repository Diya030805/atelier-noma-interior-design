import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StudioIntro from './components/StudioIntro.jsx';
import Services from './components/Services.jsx';
import FeaturedProject from './components/FeaturedProject.jsx';
import ProjectsGrid from './components/ProjectsGrid.jsx';
import Materials from './components/Materials.jsx';
import Process from './components/Process.jsx';
import Team from './components/Team.jsx';
import Testimonials from './components/Testimonials.jsx';
import Journal from './components/Journal.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Shared smooth-scrolling controller taking sticky navbar offsets into account
  const handleSectionNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-warm-ivory text-deep-espresso flex flex-col justify-between selection:bg-terracotta-beige selection:text-warm-ivory">
      {/* Sticky Header Navigation bar */}
      <Navbar onNavigate={handleSectionNavigation} />

      <main className="flex-grow">
        {/* Editorial Hero Layout */}
        <Hero onNavigate={handleSectionNavigation} />

        {/* Studio Architectural Introduction */}
        <StudioIntro onNavigate={handleSectionNavigation} />

        {/* Studio core services showcase */}
        <Services />

        {/* Featured cinematic residence */}
        <FeaturedProject />

        {/* Asymmetric portfolio project grid */}
        <ProjectsGrid />

        {/* Close-up materials gallery */}
        <Materials />

        {/* Architectural timeline of the design process */}
        <Process />

        {/* Team profiles and editorial portraits */}
        <Team />

        {/* Minimalist client testimonial carousel */}
        <Testimonials />

        {/* Design journal insights and detailed story views */}
        <Journal />

        {/* High-conversion, fully validated client enquiry form */}
        <Contact />
      </main>

      {/* Structured Dark footer with links and office details */}
      <Footer onNavigate={handleSectionNavigation} />
    </div>
  );
}
