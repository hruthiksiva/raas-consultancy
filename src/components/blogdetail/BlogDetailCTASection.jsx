const BlogDetailCTASection = () => (
  <section style={{ backgroundColor: '#F1E1C9' }} className="py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#182028' }}>
        Need Professional Financial Advice?
      </h2>
      <p className="text-xl mb-8" style={{ color: '#182028' }}>
        Our experts are here to help you with all your financial and compliance needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="#contact" 
          className="inline-block px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          style={{ backgroundColor: '#232E3A', color: '#FFFFFF' }}
        >
          Get Free Consultation
        </a>
        <a 
          href="/blogs" 
          className="inline-block border-2 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
          style={{ backgroundColor: '#232E3A', color: '#FFFFFF', borderColor: '#232E3A' }}
        >
          Read More Articles
        </a>
      </div>
    </div>
  </section>
);

export default BlogDetailCTASection; 