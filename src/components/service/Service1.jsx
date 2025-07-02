import React, { useEffect, useState } from 'react';
import Service1Pic from '../../assets/Service1Pic.jpg';
import { useNavigate } from 'react-router-dom';

const Service1 = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/src/data/service1.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return null;

  const handleCTA = (e) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="service1" className="py-10 md:py-24" style={{ backgroundColor: '#182028' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-1 w-full lg:order-2">
            <div className="rounded-2xl p-4 md:p-8">
              <div className="w-full h-40 md:h-80 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={Service1Pic} alt={data.imageLabel} className="object-cover w-full h-full rounded-lg" />
              </div>
            </div>
          </div>
          <div className="order-2 w-full lg:order-1">
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center mb-4 md:mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>{data.title}</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed" style={{ color: '#FFFFFF' }}>{data.description}</p>
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {data.features.map((feature, idx) => (
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
              {data.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service1; 