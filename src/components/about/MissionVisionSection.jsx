import React from 'react';

const mission = {
  title: 'Our Mission',
  description: 'To simplify financial complexities for individuals, freelancers, startups, MSMEs, Pvt Ltd companies, and LLPs with ethical, transparent, and tailored solutions.'
};
const vision = {
  title: 'Our Vision',
  description: "To be India's most trusted, accessible, and forward-thinking financial consultancy, offering clarity, confidence, and compliance under one digital-first roof."
};

const MissionVisionSection = () => (
  <section className="py-16 md:py-32" style={{ backgroundColor: '#182028' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Mission */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Image Placeholder Left */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full h-72 md:h-96 bg-white/20 rounded-2xl flex items-center justify-center">
            <span className="text-lg md:text-2xl text-white/80">Mission Image</span>
          </div>
        </div>
        {/* Content Right */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            {mission.title}
          </h2>
          <p className="text-lg md:text-2xl leading-relaxed" style={{ color: '#FFFFFF' }}>
            {mission.description}
          </p>
        </div>
      </div>
      {/* Vision */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
        {/* Image Placeholder Right */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full h-72 md:h-96 bg-white/20 rounded-2xl flex items-center justify-center">
            <span className="text-lg md:text-2xl text-white/80">Vision Image</span>
          </div>
        </div>
        {/* Content Left */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            {vision.title}
          </h2>
          <p className="text-lg md:text-2xl leading-relaxed" style={{ color: '#FFFFFF' }}>
            {vision.description}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MissionVisionSection; 