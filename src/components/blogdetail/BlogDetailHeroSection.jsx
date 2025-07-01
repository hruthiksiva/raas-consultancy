const BlogDetailHeroSection = ({ title, subtitle }) => (
  <header>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
    </div>
  </header>
);

export default BlogDetailHeroSection; 