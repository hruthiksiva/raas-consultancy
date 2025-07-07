import React from 'react';

export const MissionCard = ({ title, description, iconBg, iconInner }) => (
  <div className="flex flex-col items-start">
    <div className={`w-16 h-16 flex items-center justify-center mb-6`}>
      <div className={`w-8 h-8 ${iconInner} rounded`}></div>
    </div>
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>{title}</h3>
    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#FFFFFF' }}>{description}</p>
  </div>
);

export const VisionCard = ({ title, description, iconBg, iconInner }) => (
  <div className="flex flex-col items-start">
    <div className={`w-16 h-16 flex items-center justify-center mb-6`}>
      <div className={`w-8 h-8 ${iconInner} rounded`}></div>
    </div>
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>{title}</h3>
    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#FFFFFF' }}>{description}</p>
  </div>
);

// Deprecated: Use MissionCard or VisionCard instead
const MissionVisionCard = (props) => <MissionCard {...props} />;

export default MissionVisionCard; 