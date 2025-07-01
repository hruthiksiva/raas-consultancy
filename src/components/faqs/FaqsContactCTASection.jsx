const FaqsContactCTASection = () => (
  <div className="mt-16 text-center">
    <div className="rounded-2xl shadow-lg p-8 border border-gray-100" style={{ backgroundColor: '#232E3A' }}>
      <h3 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
        Still Have Questions?
      </h3>
      <p className="mb-6" style={{ color: '#FFFFFF' }}>
        Can't find the answer you're looking for? Our team is here to help with any specific questions about your business needs.
      </p>
      <div className="flex justify-center">
        <a 
          href="#contact" 
          className="inline-block px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          style={{ backgroundColor: '#B69567', color: '#FFFFFF' }}
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
);

export default FaqsContactCTASection; 