import React from 'react';
import { useNavigate } from 'react-router-dom';
import FinalCTAImg from '../../assets/FinalCTA.jpg';

const FinalCTASection = () => {
  const navigate = useNavigate();

  const handleBookCallClick = (e) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      className="relative flex items-center justify-center text-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${FinalCTAImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '400px',
        height: 'auto',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
      {/* Content */}
      <div className="relative w-full max-w-4xl py-16 md:py-24 lg:py-32">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>
          Let's simplify your finances — together.
        </h2>
        <button
          onClick={handleBookCallClick}
          className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base lg:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          style={{ backgroundColor: '#B69567', color: '#FFFFFF' }}
        >
          Book a Free Call
        </button>
      </div>
    </section>
  );
};

export default FinalCTASection; 