import React from 'react';
import HomeHero from '../../assets/HomeHero.jpg';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleConsultationClick = (e) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
          Expert Financial & Tax Solutions, Tailored for You.
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed" style={{ color: '#FFFFFF' }}>
          Chartered expertise. Transparent pricing. Digital-first service for startups, MSMEs, Pvt Ltd companies, and professionals.
        </p>
        <button
          onClick={handleConsultationClick}
          className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base lg:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          style={{ backgroundColor: '#B69567', color: '#FFFFFF' }}
        >
          Request Free Consultation
        </button>
      </div>
    </section>
  );
};

export default HeroSection; 