import React from 'react';

const BlogDetailHeroSection = ({ title, subtitle, image }) => (
  <header
    className="relative w-full min-h-[350px] md:min-h-[500px] flex items-center justify-center"
    style={{
      backgroundColor: '#182028',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-20 text-center w-full">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4" style={{ color: '#FFFFFF' }}>{title}</h1>
      <p className="text-base sm:text-lg mb-4 sm:mb-8" style={{ color: '#FFFFFF' }}>{subtitle}</p>
    </div>
  </header>
);

export default BlogDetailHeroSection; 