const FaqsHeroSection = ({ title, subtitle }) => (
  <header style={{ backgroundColor: '#182028' }}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#B69567' }}>{title}</h1>
      <p className="text-lg mb-8" style={{ color: '#B69567' }}>{subtitle}</p>
    </div>
  </header>
);

export default FaqsHeroSection; 