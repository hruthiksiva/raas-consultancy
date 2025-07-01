import React from 'react';

const FinalCTASection = () => (
  <section className="py-16 md:py-24" style={{ backgroundColor: '#141A1F' }}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#B69567' }}>
        Let's simplify your finances — together.
      </h2>
      <a 
        href="#contact" 
        className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        style={{ backgroundColor: '#B69567', color: '#FFFFFF' }}
      >
        Book a Free Call
      </a>
    </div>
  </section>
);

export default FinalCTASection; 