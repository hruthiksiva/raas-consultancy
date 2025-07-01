import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ServiceCard = ({ title, description, iconBg, iconInner, link }) => {
  const location = useLocation();
  
  const handleClick = (e) => {
    // If the link contains a hash and we're already on the services page, handle smooth scrolling
    if (link.includes('#') && location.pathname === '/services') {
      e.preventDefault();
      const elementId = link.split('#')[1];
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <Link to={link} className="block" onClick={handleClick}>
      <div className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:transform hover:-translate-y-1 cursor-pointer group" style={{ backgroundColor: '#182028' }}>
        <div className={`w-16 h-16 ${iconBg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <div className={`w-8 h-8 ${iconInner} rounded`}></div>
        </div>
        <h3 className="text-xl font-semibold mb-3 transition-colors duration-300" style={{ color: '#B69567' }}>
          {title}
        </h3>
        <p className="transition-colors duration-300" style={{ color: '#FFFFFF' }}>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard; 