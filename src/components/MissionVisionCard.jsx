import React from 'react';

const MissionVisionCard = ({ title, description, iconBg, iconInner }) => (
  <div className="rounded-xl shadow-lg p-8 border border-gray-100" style={{ backgroundColor: '#B69567' }}>
    <div className={`w-16 h-16 ${iconBg} rounded-lg flex items-center justify-center mb-6`}>
      <div className={`w-8 h-8 ${iconInner} rounded`}></div>
    </div>
    <h3 className="text-2xl font-bold mb-4" style={{ color: '#232E3A' }}>{title}</h3>
    <p className="leading-relaxed" style={{ color: '#141A1F' }}>{description}</p>
  </div>
);

export default MissionVisionCard; 