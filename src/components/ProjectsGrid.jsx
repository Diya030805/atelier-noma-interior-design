import React, { useState } from 'react';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import SectionHeading from './SectionHeading.jsx';
import Button from './Button.jsx';
import Lightbox from './Lightbox.jsx';
import { X, MapPin, Calendar, Ruler, Award, Sparkles, Maximize2 } from 'lucide-react';

export default function ProjectsGrid() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Residential Interior', 'Apartment', 'Retreat Home', 'Creative Workspace'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const handleNextLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
    }
  };

  const handlePrevLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => (prevIndex - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  return (
    <section id="projects" className="py-24 bg-warm-ivory relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeading
          label="SELECTED PROJECTS"
          title="Spaces shaped around material, light, and everyday rituals."
        />

        {/* Category Filters (Horizontal Menu with premium typography) */}
        <div className="flex flex-wrap gap-4 md:gap-8 items-center justify-start border-b border-deep-espresso/10 pb-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-sans text-[11px] font-bold uppercase tracking-widest transition-all duration-300 py-2 border-b-2 cursor-pointer focus-ring ${
                filter === cat
                  ? 'border-terracotta-beige text-deep-espresso'
                  : 'border-transparent text-deep-espresso/40 hover:text-deep-espresso/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-serif text-xl italic text-deep-espresso/60">
              No spaces found in this category.
            </p>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance] box-border mt-12">
            {filteredProjects.map((project, idx) => {
              // Give each card an alternating height aspect-ratio to form a beautiful editorial masonry flow
              const aspectRatios = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[1/1]", "aspect-[4/3]"];
              const ratio = aspectRatios[idx % aspectRatios.length];
              return (
                <div key={project.id} className="break-inside-avoid mb-8">
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    location={project.location}
                    category={project.category}
                    year={project.year}
                    image={project.image}
                    aspectRatio={ratio}
                    onClick={() => setSelectedProject(project)}
                    onImageClick={() => {
                      const projIndex = filteredProjects.findIndex(p => p.id === project.id);
                      if (projIndex !== -1) {
                        setLightboxIndex(projIndex);
                      }
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* DYNAMIC INTERACTIVE DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-deep-espresso/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-fade-in">
          <div className="bg-warm-ivory rounded-none max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-warm-sand">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-none bg-soft-cream/80 hover:bg-soft-cream text-deep-espresso flex items-center justify-center transition-colors focus-ring cursor-pointer z-10"
              aria-label="Close project detail panel"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero with full-screen Lightbox trigger option */}
            <div 
              onClick={() => {
                const globalIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
                if (globalIndex !== -1) {
                  setLightboxIndex(globalIndex);
                }
              }}
              data-cursor="ZOOM"
              title="Click to inspect in full-screen lightbox"
              className="relative h-64 md:h-96 cursor-zoom-in group overflow-hidden"
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-ivory via-warm-ivory/10 to-transparent"></div>
              
              <div className="absolute top-6 left-6 bg-deep-espresso/70 text-warm-ivory px-3 py-1.5 flex items-center gap-2 font-sans text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-3 h-3" />
                <span>INSPECT CLOSE-UP</span>
              </div>

              <div className="absolute bottom-6 left-8 md:left-12">
                <span className="bg-terracotta-beige text-warm-ivory text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-none">
                  {selectedProject.category}
                </span>
                <h3 className="font-serif text-2xl md:text-4xl text-deep-espresso font-light mt-2">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-8 md:p-12 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="md:col-span-2 space-y-6">
                  <h4 className="font-serif text-lg text-deep-espresso italic border-b border-deep-espresso/10 pb-2">
                    Spatial Narrative
                  </h4>
                  <p className="font-sans text-sm md:text-base text-deep-espresso/80 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <p className="font-sans text-sm text-deep-espresso/70 leading-relaxed">
                    Atelier Noma managed this property from initial site drafts to bespoke textile dressing and completion. Every corner has been structured to accommodate the resident's natural light requirements, highlighting slow hand-rubbed timber treatments and pristine regional stonework surfaces.
                  </p>
                </div>

                <div className="space-y-6 bg-soft-cream/50 p-6 rounded-none border border-deep-espresso/5">
                  <h4 className="font-serif text-lg text-deep-espresso font-medium mb-4">
                    Detailed Metrics
                  </h4>
                  <div className="space-y-4 text-xs font-sans">
                    {selectedProject.details.map((detail, index) => (
                      <div key={index} className="flex justify-between py-1 border-b border-deep-espresso/5">
                        <span className="text-deep-espresso/50 font-semibold">{detail.label}</span>
                        <span className="text-deep-espresso font-medium">{detail.value}</span>
                      </div>
                    ))}
                    <div className="flex justify-between py-1 border-b border-deep-espresso/5">
                      <span className="text-deep-espresso/50 font-semibold">Curation</span>
                      <span className="text-deep-espresso font-medium">Atelier Noma</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-images detail visual grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-none overflow-hidden aspect-[4/3] border border-deep-espresso/10">
                  <img
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
                    alt="Light detailing visual"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-none overflow-hidden aspect-[4/3] border border-deep-espresso/10">
                  <img
                    src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80"
                    alt="Material detailing visual"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-deep-espresso/10 flex justify-end">
                <Button variant="secondary" onClick={() => setSelectedProject(null)}>
                  Close Explorer
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BRAND NEW ELEGANT LIGHTBOX FULL-SCREEN VIEWPORT */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredProjects}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNextLightboxImage}
          onPrev={handlePrevLightboxImage}
        />
      )}
    </section>
  );
}
