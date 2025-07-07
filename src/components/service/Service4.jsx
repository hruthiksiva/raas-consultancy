import React from 'react';
import Service4Pic from '../../assets/Service4.jpg';
import service4Data from '../../data/service4.json';
import { useNavigate } from 'react-router-dom';

const Service4 = () => {
  const navigate = useNavigate();

  const handleCTA = (e) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="service4" className="py-10 md:py-24" style={{ backgroundColor: '#1F2937' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-1 w-full lg:order-1">
            <div className="rounded-2xl p-4 md:p-8">
              <div className="w-full h-40 md:h-80 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={Service4Pic} alt={service4Data.imageLabel} className="object-cover w-full h-full rounded-lg" />
              </div>
            </div>
          </div>
          <div className="order-2 w-full lg:order-2">
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center mb-4 md:mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>{service4Data.title}</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed" style={{ color: '#FFFFFF' }}>{service4Data.description}</p>
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {service4Data.features.map((feature, idx) => (
                <div className="flex items-start" key={idx}>
                  <div className="w-3 h-3 md:w-4 md:h-4 flex items-center justify-center mr-2 md:mr-3 mt-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base" style={{ color: '#FFFFFF' }}>{feature.title}</h3>
                    <p className="text-xs md:text-sm" style={{ color: '#FFFFFF' }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleCTA} className="inline-block px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-lg" style={{ backgroundColor: '#B69567', color: '#FFFFFF' }}>
              {service4Data.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service4; 