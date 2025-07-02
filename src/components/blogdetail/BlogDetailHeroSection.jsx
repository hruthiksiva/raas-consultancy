const BlogDetailHeroSection = ({ title, subtitle }) => (
  <header style={{ backgroundColor: '#182028' }}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-20 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4" style={{ color: '#FFFFFF' }}>{title}</h1>
      <p className="text-base sm:text-lg mb-4 sm:mb-8" style={{ color: '#FFFFFF' }}>{subtitle}</p>
    </div>
  </header>
);

export default BlogDetailHeroSection; 