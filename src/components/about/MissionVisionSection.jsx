import React from 'react';
import OurMission from '../../assets/OurMission.jpg';
import OurVision from '../../assets/OurVision.jpg';

const mission = {
  title: 'Our Mission',
  description: 'To simplify financial complexities for individuals, freelancers, startups, MSMEs, Pvt Ltd companies, and LLPs with ethical, transparent, and tailored solutions.'
};
const vision = {
  title: 'Our Vision',
  description: "To be India's most trusted, accessible, and forward-thinking financial consultancy, offering clarity, confidence, and compliance under one digital-first roof."
};

const MissionVisionSection = () => (
  <section className="py-10 md:py-16 lg:py-32" style={{ backgroundColor: '#182028' }}>
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 space-y-16 md:space-y-24">
      {/* Mission */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24">
        {/* Image Placeholder Left */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full h-40 sm:h-56 md:h-72 lg:h-96 rounded-2xl flex items-center justify-center overflow-hidden" style={{backgroundColor: '#182028'}}>
            <img src={OurMission} alt="Our Mission" className="object-cover w-full h-full rounded-2xl" />
          </div>
        </div>
        {/* Content Right */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>
            {mission.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#FFFFFF' }}>
            {mission.description}
          </p>
        </div>
      </div>
      {/* Vision */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-24">
        {/* Image Placeholder Right */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full h-40 sm:h-56 md:h-72 lg:h-96 rounded-2xl flex items-center justify-center overflow-hidden border border-white" style={{backgroundColor: '#182028', borderWidth: '1.5px'}}>
            <img src={OurVision} alt="Our Vision" className="object-cover w-full h-full rounded-2xl" />
          </div>
        </div>
        {/* Content Left */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>
            {vision.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#FFFFFF' }}>
            {vision.description}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MissionVisionSection; 