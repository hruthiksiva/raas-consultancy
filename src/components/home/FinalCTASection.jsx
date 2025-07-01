import React from 'react';

const FinalCTASection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Let's simplify your finances — together.
      </h2>
      <a 
        href="#contact" 
        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Book a Free Call
      </a>
    </div>
  </section>
);

export default FinalCTASection; 