import React from 'react';

const WhyChooseUsCard = ({ title, description, iconBg, iconInner }) => (
  <div className="rounded-xl p-6 border border-gray-200" style={{ backgroundColor: '#B69567' }}>
    <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
      <div className={`w-6 h-6 ${iconInner} rounded`}></div>
    </div>
    <h3 className="text-xl font-semibold mb-3" style={{ color: '#FFFFFF' }}>{title}</h3>
    <p style={{ color: '#FFFFFF' }}>{description}</p>
  </div>
);

export default WhyChooseUsCard; 