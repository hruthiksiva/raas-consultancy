import React, { useEffect, useState } from 'react';
import MissionVisionCard from '../MissionVisionCard';

const MissionVisionSection = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/src/data/missionVision.json')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#182028' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {cards.map(card => (
            <MissionVisionCard
              key={card.id}
              title={card.title}
              description={card.description}
              iconBg={card.iconBg}
              iconInner={card.iconInner}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection; 