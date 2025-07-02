import React from 'react';
import { useNavigate } from 'react-router-dom';

const FinalCTASection = () => {
  const navigate = useNavigate();

  const handleBookCallClick = (e) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-8 md:py-16 lg:py-24" style={{ backgroundColor: '#141A1F' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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