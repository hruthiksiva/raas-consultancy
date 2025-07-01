import Header from '../components/Header';
import FaqAccordion from '../components/faqs/FaqAccordion';

const Faqs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <Header 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions"
      />

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to the most frequently asked questions about our services, processes, and how we can help your business grow.
            </p>
          </div>

          {/* FAQs Accordion */}
          <FaqAccordion />

          {/* Contact CTA */}
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
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quick Response
              </h3>
              <p className="text-gray-600">
                Get answers to your questions within 24 hours through our dedicated support channels.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Our Chartered professionals provide expert advice tailored to your specific business needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Free Consultation
              </h3>
              <p className="text-gray-600">
                Schedule a free consultation to discuss your requirements and get personalized solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs; 