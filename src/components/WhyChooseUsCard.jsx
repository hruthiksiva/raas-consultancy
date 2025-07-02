import React from 'react';

const WhyChooseUsCard = ({ title, description, icon }) => (
  <div className="rounded-xl p-6" style={{ backgroundColor: '#232E3A' }}>
    <div className="flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3" style={{ color: '#FFFFFF' }}>{title}</h3>
    <p style={{ color: '#FFFFFF' }}>{description}</p>
  </div>
);

export default WhyChooseUsCard; 