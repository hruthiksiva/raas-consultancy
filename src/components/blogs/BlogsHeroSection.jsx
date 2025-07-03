const BlogsHeroSection = ({ title, subtitle }) => (
  <header style={{ backgroundColor: '#1F2937' }}>
    <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pt-8 md:pt-20 text-center">
      <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4" style={{ color: '#FFFFFF' }}>{title}</h1>
      <p className="text-base md:text-lg mb-6 md:mb-8" style={{ color: '#FFFFFF' }}>{subtitle}</p>
    </div>
  </header>
);

export default BlogsHeroSection; 