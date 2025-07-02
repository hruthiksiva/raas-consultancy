import FinalCTAImg from '../../assets/FinalCTA.jpg';

const BlogDetailCTASection = () => (
  <section
    style={{
      backgroundColor: '#232E3A',
      backgroundImage: `url(${FinalCTAImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    }}
    className="relative py-10 md:py-24"
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
    <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#FFFFFF' }}>
        Need Professional Financial Advice?
      </h2>
      <p className="text-base sm:text-xl mb-6 sm:mb-8" style={{ color: '#FFFFFF' }}>
        Our experts are here to help you with all your financial and compliance needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <a 
          href="/contact#contact-top" 
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          style={{ backgroundColor: '#B69567', color: '#232E3A' }}
        >
          Get Free Consultation
        </a>
        <a 
          href="/blogs" 
          className="inline-block border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-300"
          style={{ backgroundColor: '#B69567', color: '#232E3A', borderColor: '#B69567' }}
        >
          Read More Articles
        </a>
      </div>
    </div>
  </section>
);

export default BlogDetailCTASection; 