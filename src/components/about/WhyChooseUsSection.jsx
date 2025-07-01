import React, { useEffect, useState } from 'react';
import WhyChooseUsCard from '../WhyChooseUsCard';

const WhyChooseUsSection = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/src/data/whyChooseUs.json')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#182028' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
            Why Choose Us
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#FFFFFF' }}>
            We combine professional expertise with personalized service to deliver exceptional results
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map(card => (
            <WhyChooseUsCard
              key={card.id}
              title={card.title}
              description={card.description}
              iconBg={card.iconBg}
              iconInner={card.iconInner}
            />
          ))}
        </div>
        {/* Growth-Driven Thinking - Full Width */}
        <div className="mt-12 rounded-xl p-8" style={{ backgroundColor: '#2F3C4E' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <div className="w-8 h-8 bg-white rounded"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Growth-Driven Thinking
            </h3>
            <p className="text-lg" style={{ color: '#FFFFFF' }}>
              We don't just maintain — we advise and help you scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 