import React from 'react';
import ServiceHero from '../../assets/ServiceHero.jpg'; // Update this to ServiceHero.jpg if available

const ServiceHeroSection = () => (
  <section
    className="relative flex items-center justify-center min-h-[300px] md:min-h-[400px] lg:min-h-[500px]"
    style={{
      backgroundImage: `url(${ServiceHero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative z-10 text-center w-full">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
        Our Services
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#FFFFFF' }}>
        Discover the range of services we offer
      </p>
    </div>
  </section>
);

export default ServiceHeroSection; 