import React, { useEffect, useState } from 'react';

const Service2 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/src/data/service2.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return null;

  return (
    <section id="service2" className="py-16 md:py-24" style={{ backgroundColor: '#232E3A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
          <div className="rounded-2xl p-8">
              <div className="w-full h-80 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white/80 text-lg">{data.imageLabel}</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className={`w-16 h-16 ${data.iconBg} rounded-xl flex items-center justify-center mb-6`}>
              <div className={`w-8 h-8 ${data.iconInner} rounded`}></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#F1E1C9' }}>{data.title}</h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#FFFFFF' }}>{data.description}</p>
            <div className="space-y-4 mb-8">
              {data.features.map((feature, idx) => (
                <div className="flex items-start" key={idx}>
                  <div className={`w-6 h-6 ${data.iconBg} rounded-full flex items-center justify-center mr-3 mt-1`}>
                    <div className={`w-2 h-2 ${data.iconInner} rounded-full`}></div>
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
        </div>
      </div>
    </section>
  );
};

export default Service2; 