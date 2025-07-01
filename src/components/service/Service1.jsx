import React, { useEffect, useState } from 'react';
import Service1Pic from '../../assets/Service1Pic.jpg';

const Service1 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/src/data/service1.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return null;

  return (
    <section id="service1" className="py-16 md:py-24" style={{ backgroundColor: '#182028' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`w-16 h-16 ${data.iconBg} rounded-xl flex items-center justify-center mb-6`}>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#F1E1C9' }}>{data.title}</h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#FFFFFF' }}>{data.description}</p>
            <div className="space-y-4 mb-8">
              {data.features.map((feature, idx) => (
                <div className="flex items-start" key={idx}>
                  <div className={`w-6 h-6 ${data.iconBg} rounded-full flex items-center justify-center mr-3 mt-1`}>
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: '#F1E1C9' }}>{feature.title}</h3>
                    <p style={{ color: '#FFFFFF' }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href={data.ctaLink} className="inline-block px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" style={{ backgroundColor: '#B69567', color: '#FFFFFF' }}>
              {data.cta}
            </a>
          </div>
          <div className="relative">
            <div className="rounded-2xl p-8">
              <div className="w-full h-80 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={Service1Pic} alt={data.imageLabel} className="object-cover w-full h-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service1; 