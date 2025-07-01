import React from 'react';
import HomeHero from '../../assets/HomeHero.jpg';

const HeroSection = () => (
  <section
    className="relative w-full min-h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url(${HomeHero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
        Expert Financial & Tax Solutions, Tailored for You.
      </h1>
      <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed" style={{ color: '#FFFFFF' }}>
        Chartered expertise. Transparent pricing. Digital-first service for startups, MSMEs, Pvt Ltd companies, and professionals.
      </p>
      <a 
        href="#contact" 
        className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        style={{ backgroundColor: '#B69567', color: '#FFFFFF' }}
      >
        Request Free Consultation
      </a>
    </div>
  </section>
);

export default HeroSection; 