import React from 'react';

const HeroSection = () => (
  <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Expert Financial & Tax Solutions, Tailored for You.
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
          Chartered expertise. Transparent pricing. Digital-first service for startups, MSMEs, Pvt Ltd companies, and professionals.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Request Free Consultation
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection; 