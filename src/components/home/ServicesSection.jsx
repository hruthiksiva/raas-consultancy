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
    <section className="py-16 md:py-24" style={{ backgroundColor: '#141A1F', color: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
            Our Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#FFFFFF' }}>
            Comprehensive financial solutions designed to drive your business forward
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              iconBg={service.iconBg}
              iconInner={service.iconInner}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 