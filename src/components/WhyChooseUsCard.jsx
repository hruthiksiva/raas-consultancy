import React from 'react';

const WhyChooseUsCard = ({ title, description, icon }) => (
  <div className="rounded-xl p-3 sm:p-4 md:p-6" style={{ backgroundColor: '#232E3A' }}>
    <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-2 sm:mb-3 text-center" style={{ color: '#FFFFFF' }}>{title}</h3>
    <p className="text-xs sm:text-sm md:text-base text-center leading-relaxed" style={{ color: '#FFFFFF' }}>{description}</p>
  </div>
);

export default WhyChooseUsCard; 