import React from 'react';
import WhoWeAre from '../../assets/WhoWeAre.jpg';

const WhoWeAreSection = () => (
  <section className="py-8 md:py-16 lg:py-24" style={{ backgroundColor: '#182028' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>
            Simplifying Finance. Empowering Growth.
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#FFFFFF' }}>
            Raaz Consultancy was founded to challenge traditional norms of accounting. Where most saw numbers, we saw narratives. Trust, speed, and simplicity can go hand-in-hand with compliance. We don't just file; we fuel your clarity, growth, and peace of mind.
          </p>
        </div>
        <div className="relative">
        <div className="rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-8">
            <div className="w-full h-48 md:h-72 lg:h-80 rounded-lg flex items-center justify-center overflow-hidden">
              <img src={WhoWeAre} alt="Who We Are" className="object-cover w-full h-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAreSection; 