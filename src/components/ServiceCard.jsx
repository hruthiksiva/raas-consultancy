import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ServiceCard = ({ title, description, link }) => {
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
    } else {
      // For all other cases, scroll to top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Function to get appropriate icon based on service title
  const getServiceIcon = (serviceTitle) => {
    switch (serviceTitle.toLowerCase()) {
      case 'tax planning & filing':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'bookkeeping':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'registrations & compliance':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'advisory & reporting':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <Link to={link} className="block h-full" onClick={handleClick}>
      <div className="rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6 border border-gray-100 hover:border-blue-200 hover:transform hover:-translate-y-1 cursor-pointer group h-full flex flex-col" style={{ backgroundColor: '#182028' }}>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" style={{ backgroundColor: 'rgba(182, 149, 103, 0.1)' }}>
          {getServiceIcon(title)}
        </div>
        <h3 className="text-sm md:text-base lg:text-xl font-semibold mb-2 md:mb-3 transition-colors duration-300 flex-shrink-0" style={{ color: '#B69567' }}>
          {title}
        </h3>
        <p className="text-xs md:text-sm lg:text-base transition-colors duration-300 flex-grow" style={{ color: '#FFFFFF' }}>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard; 