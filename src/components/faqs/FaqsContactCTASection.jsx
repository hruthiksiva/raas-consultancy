const FaqsContactCTASection = () => (
  <div className="mt-16 text-center">
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Still Have Questions?
      </h3>
      <p className="text-gray-600 mb-6">
        Can't find the answer you're looking for? Our team is here to help with any specific questions about your business needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="#contact" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Contact Us
        </a>
        <a 
          href="#contact" 
          className="inline-block bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 border border-gray-200"
        >
          Book Free Consultation
        </a>
      </div>
    </div>
  </div>
);

export default FaqsContactCTASection; 