import React, { useEffect, useState } from 'react';
import BookKeeping from '../../assets/BookKeeping.jpg';
import { useNavigate } from 'react-router-dom';

const Service2 = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/src/data/service2.json')
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
    <section id="service2" className="py-10 md:py-24" style={{ backgroundColor: '#232E3A' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-1 w-full">
            <div className="rounded-2xl p-4 md:p-8">
              <div className="w-full h-40 md:h-80 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={BookKeeping}
                  alt="Bookkeeping"
                  className="object-cover w-full h-full rounded-lg"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
            </div>
          </div>
          <div className="order-2 w-full">
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center mb-4 md:mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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

export default Service2; 