import React from 'react';
import OurMission from '../../assets/OurMission.jpg';
import OurVisionNew2 from '../../assets/OurVisionNew2.jpg';
import { MissionCard, VisionCard } from '../MissionVisionCard';

const mission = {
  title: 'Our Mission',
  description: 'To simplify financial complexities for individuals, freelancers, startups, MSMEs, Pvt Ltd companies, and LLPs with ethical, transparent, and tailored solutions.'
};
const vision = {
  title: 'Our Vision',
  description: "To be India's most trusted, accessible, and forward-thinking financial consultancy, offering clarity, confidence, and compliance under one digital-first roof."
};

export const MissionSection = () => (
  <section className="py-10 md:py-16 lg:py-32" style={{ backgroundColor: '#182028' }}>
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-24">
      {/* Card Left on mobile, right on desktop */}
      <div className="w-full md:w-1/2 order-1 md:order-none flex justify-center">
        <MissionCard title={mission.title} description={mission.description} />
      </div>
      {/* Image Below on mobile, left on desktop */}
      <div className="w-full md:w-1/2 order-2 md:order-none flex justify-center">
        <div className="w-full h-40 sm:h-56 md:h-72 lg:h-96 rounded-2xl flex items-center justify-center overflow-hidden" style={{backgroundColor: '#182028'}}>
          <img src={OurMission} alt="Our Mission" className="object-cover w-full h-full rounded-2xl" />
        </div>
      </div>
    </div>
  </section>
);

export const VisionSection = () => (
  <section className="py-10 md:py-16 lg:py-32" style={{ backgroundColor: '#1F2937' }}>
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-24">
      {/* Card Left on mobile, right on desktop (row-reverse) */}
      <div className="w-full md:w-1/2 order-1 md:order-none flex justify-center">
        <VisionCard title={vision.title} description={vision.description} />
      </div>
      {/* Image Below on mobile, left on desktop (row-reverse) */}
      <div className="w-full md:w-1/2 order-2 md:order-none flex justify-center">
        <div className="w-full h-40 sm:h-56 md:h-72 lg:h-96 rounded-2xl flex items-center justify-center overflow-hidden border border-white" style={{backgroundColor: '#182028', borderWidth: '1.5px'}}>
          <img src={OurVisionNew2} alt="Our Vision" className="object-cover w-full h-full rounded-2xl" />
        </div>
      </div>
    </div>
  </section>
);

// For backward compatibility, export a combined section (optional)
const MissionVisionSection = () => (
  <>
    <MissionSection />
    <VisionSection />
  </>
);

export default MissionVisionSection; 