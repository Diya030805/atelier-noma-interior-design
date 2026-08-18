import React from 'react';
import { services } from '../data/services.js';
import ServiceCard from './ServiceCard.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Services() {
  return (
    <section
      id="services"
      className="bg-warm-ivory py-20 md:py-32 border-t border-deep-espresso/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeading
          label="WHAT WE DO"
          title="From the first sketch to the final object, every detail is considered."
        />

        {/* Responsive Grid for Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {services.map((service) => (
            <div key={service.number}>
              <ServiceCard
                number={service.number}
                title={service.title}
                description={service.description}
                iconName={service.iconName}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
