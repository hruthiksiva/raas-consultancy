import React from 'react';
import AboutHero from '../../assets/AboutHero.jpg';

const AboutHeroSection = () => (
  <section
    className="relative w-full min-h-[400px] flex items-center justify-center"
    style={{
      backgroundImage: `url(${AboutHero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 w-full flex flex-col items-center justify-center py-16 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
        About Us
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#FFFFFF' }}>
        Learn more about our company and mission
      </p>
    </div>
  </section>
);

export default AboutHeroSection; 