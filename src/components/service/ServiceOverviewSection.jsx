import React from 'react';
import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';
import Service4 from './Service4';

const ServiceOverviewSection = () => (
  <>
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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