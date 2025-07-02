import React from 'react';

const ServiceFinalCTASection = () => (
  <section className="py-10 md:py-24" style={{ backgroundColor: '#182028' }}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>
        Ready to Get Started?
      </h2>
      <p className="text-base md:text-xl mb-6 md:mb-8" style={{ color: '#FFFFFF' }}>
        Let's discuss how our services can help your business grow and succeed.
      </p>
      <a 
        href="#contact" 
        className="inline-block px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        style={{ backgroundColor: '#B69567', color: '#FFFFFF' }}
      >
        Get Your Free Consultation
      </a>
    </div>
  </section>
);

export default ServiceFinalCTASection; 