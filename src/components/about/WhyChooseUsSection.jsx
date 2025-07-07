import React from 'react';
import WhyChooseUsCard from '../WhyChooseUsCard';
import whyChooseUsData from '../../data/whyChooseUs.json';

const icons = [
  // 1. Graduation cap
  <svg key="1" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" width="36" height="36"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 2.18L19.09 9 12 12.82 4.91 9 12 5.18zM5 17v-2.18l7 3.82 7-3.82V17l-7 3-7-3z"/></svg>,
  // 2. Handshake
  <svg key="2" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" width="36" height="36"><path d="M19.78 14.37l-3.07-3.07a.75.75 0 0 0-1.06 0l-2.12 2.12-2.12-2.12a.75.75 0 0 0-1.06 0l-3.07 3.07a2.25 2.25 0 0 0 0 3.18l3.07 3.07a2.25 2.25 0 0 0 3.18 0l3.07-3.07a2.25 2.25 0 0 0 0-3.18z"/></svg>,
  // 3. Building
  <svg key="3" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" width="36" height="36"><path d="M3 21V7a2 2 0 0 1 2-2h2V3h2v2h2V3h2v2h2V3h2v2h2a2 2 0 0 1 2 2v14h-2v-2H5v2H3zm2-2h14v-2H5v2zm0-4h14v-2H5v2zm0-4h14V7H5v2z"/></svg>,
  // 4. Tag (pricing)
  <svg key="4" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" width="36" height="36"><path d="M20.59 13.41l-8-8A2 2 0 0 0 10.17 5H5a2 2 0 0 0-2 2v5.17a2 2 0 0 0 .59 1.42l8 8a2 2 0 0 0 2.83 0l6.17-6.17a2 2 0 0 0 0-2.83zM7.5 8A1.5 1.5 0 1 1 6 9.5 1.5 1.5 0 0 1 7.5 8z"/></svg>,
  // 5. Cloud (digital)
  <svg key="5" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" width="36" height="36"><path d="M19 18H6a4 4 0 1 1 0-8 5.5 5.5 0 0 1 10.9 1.32A4.5 4.5 0 0 1 19 18z"/></svg>,
  // 6. Shield (confidential)
  <svg key="6" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" width="36" height="36"><path d="M12 2c-.28 0-.56.06-.81.18l-7 3.11A2 2 0 0 0 3 7.06V12c0 5.25 6.13 8.92 8.19 10.06a2 2 0 0 0 1.62 0C14.87 20.92 21 17.25 21 12V7.06a2 2 0 0 0-1.19-1.77l-7-3.11A2 2 0 0 0 12 2zm0 2.18l7 3.11V12c0 4.13-4.84 7.36-7 8.47C9.84 19.36 5 16.13 5 12V7.29l7-3.11z"/></svg>
];
const growthIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" width="40" height="40"><path d="M3 17v2h18v-2H3zm2-2h2v-2h2v2h2v-4h2v4h2v-6h2v6h2v-8h2v8h2v-2h-2v-8h-2v8h-2v-6h-2v6h-2v-4h-2v4h-2v-2H5v2z"/></svg>
);

const WhyChooseUsSection = () => {
  return (
    <section className="py-8 md:py-16 lg:py-24" style={{ backgroundColor: '#EAE9E5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4" style={{ color: '#141A1F' }}>
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#141A1F' }}>
            We combine expertise with personalized service to deliver exceptional results
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {whyChooseUsData.map(item => (
            <WhyChooseUsCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
        {/* Growth-Driven Thinking - Full Width */}
        <div className="mt-8 md:mt-12 rounded-xl p-4 md:p-8" style={{ backgroundColor: '#232E3A' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4 md:mb-6 mx-auto">
              {growthIcon}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4" style={{ color: '#FFFFFF' }}>
              Growth-Driven Thinking
            </h3>
            <p className="text-base sm:text-lg" style={{ color: '#FFFFFF' }}>
              We don't just maintain — we advise and help you scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 