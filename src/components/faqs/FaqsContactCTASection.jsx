const FaqsContactCTASection = () => (
  <div className="mt-8 md:mt-12 lg:mt-16 text-center">
    <div className="rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 border border-gray-100" style={{ backgroundColor: '#2F3C4E' }}>
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4" style={{ color: '#FFFFFF' }}>
        Still Have Questions?
      </h3>
      <p className="text-sm md:text-base mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>
        Can't find the answer you're looking for? Our team is here to help with any specific questions about your business needs.
      </p>
      <div className="flex justify-center">
        <a 
          href="/contact#contact-top" 
          className="inline-block px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          style={{ backgroundColor: '#B69567', color: '#FFFFFF' }}
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
);

export default FaqsContactCTASection; 