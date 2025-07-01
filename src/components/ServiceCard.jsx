import React from 'react';

const ServiceCard = ({ title, description, iconBg, iconInner }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
    <div className={`w-16 h-16 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
      <div className={`w-8 h-8 ${iconInner} rounded`}></div>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">
      {title}
    </h3>
    <p className="text-gray-600">
      {description}
    </p>
  </div>
);

export default ServiceCard; 