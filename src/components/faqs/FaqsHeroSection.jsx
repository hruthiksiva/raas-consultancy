const FaqsHeroSection = ({ title, subtitle }) => (
  <header style={{ backgroundColor: '#182028' }}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-20 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" style={{ color: '#FFFFFF' }}>{title}</h1>
      <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8" style={{ color: '#FFFFFF' }}>{subtitle}</p>
    </div>
  </header>
);

export default FaqsHeroSection; 