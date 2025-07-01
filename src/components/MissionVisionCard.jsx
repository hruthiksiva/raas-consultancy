import React from 'react';

const MissionVisionCard = ({ title, description, iconBg, iconInner }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
    <div className={`w-16 h-16 ${iconBg} rounded-lg flex items-center justify-center mb-6`}>
      <div className={`w-8 h-8 ${iconInner} rounded`}></div>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

export default MissionVisionCard; 