import React from 'react';

const WhyChooseUsCard = ({ title, description, iconBg, iconInner }) => (
  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
    <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
      <div className={`w-6 h-6 ${iconInner} rounded`}></div>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default WhyChooseUsCard; 