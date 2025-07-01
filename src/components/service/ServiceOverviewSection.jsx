import React from 'react';
import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';
import Service4 from './Service4';

const ServiceOverviewSection = () => (
  <>
    <section className="py-16 md:py-24" style={{ backgroundColor: '#232E3A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#FFFFFF' }}>
            From tax planning to business advisory, we provide end-to-end financial services designed to help your business grow and thrive.
          </p>
        </div>
      </div>
    </section>
    <Service1 />
    <Service2 />
    <Service3 />
    <Service4 />
  </>
);

export default ServiceOverviewSection; 