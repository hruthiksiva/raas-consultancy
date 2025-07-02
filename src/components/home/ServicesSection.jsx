import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard';

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/src/data/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="py-8 md:py-16 lg:py-24" style={{ backgroundColor: '#141A1F', color: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4" style={{ color: '#FFFFFF' }}>
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#FFFFFF' }}>
            Comprehensive financial solutions designed to drive your business forward
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 