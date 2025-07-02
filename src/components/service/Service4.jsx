import React, { useEffect, useState } from 'react';
import Service4Pic from '../../assets/Service4.jpg';
import { useNavigate } from 'react-router-dom';

const Service4 = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/src/data/service4.json')
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
    <section id="service4" className="py-16 md:py-24" style={{ backgroundColor: '#232E3A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Image first on mobile, right on desktop */}
          <div className="order-1 w-full lg:order-2">
            <div className="rounded-2xl p-8">
              <div className="w-full h-80 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={Service4Pic} alt={data.imageLabel} className="object-cover w-full h-full rounded-lg" />
              </div>
            </div>
          </div>
          {/* Content second on mobile, left on desktop */}
          <div className="order-2 w-full lg:order-1">
            <div className="w-14 h-14 flex items-center justify-center mb-6">
              {/* Advisory & Reporting icon from ServiceCard.jsx */}
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>{data.title}</h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#FFFFFF' }}>{data.description}</p>
            <div className="space-y-4 mb-8">
              {data.features.map((feature, idx) => (
                <div className="flex items-start" key={idx}>
                  <div className="w-4 h-4 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: '#FFFFFF' }}>{feature.title}</h3>
                    <p style={{ color: '#FFFFFF' }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleCTA} className="inline-block px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" style={{ backgroundColor: '#B69567', color: '#FFFFFF' }}>
              {data.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service4; 