import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServiceHeroSection from '../components/service/ServiceHeroSection';
import ServiceOverviewSection from '../components/service/ServiceOverviewSection';
import ServiceFinalCTASection from '../components/service/ServiceFinalCTASection';
import FinalCTASection from '../components/home/FinalCTASection';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle anchor links when the page loads
    if (location.hash) {
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <ServiceHeroSection />
      <ServiceOverviewSection />
      {/* <ServiceFinalCTASection /> */}
      <FinalCTASection/>
    </div>
  );
};

export default Services; 