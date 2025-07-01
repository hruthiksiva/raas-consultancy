const BlogDetailCTASection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Need Professional Financial Advice?
      </h2>
      <p className="text-xl text-blue-100 mb-8">
        Our experts are here to help you with all your financial and compliance needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="#contact" 
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Get Free Consultation
        </a>
        <a 
          href="/blogs" 
          className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
        >
          Read More Articles
        </a>
      </div>
    </div>
  </section>
);

export default BlogDetailCTASection; 