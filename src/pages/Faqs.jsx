import { useState } from 'react';
import Header from '../components/Header';

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Do you work with freelancers, startups, and individuals?",
      answer: "Yes, we specialize in serving freelancers, MSMEs, startups, and Pvt Ltd companies. We tailor our services to your unique compliance needs and business scale."
    },
    {
      id: 2,
      question: "What industries do you work with?",
      answer: "From tech startups to service providers, retail, export/import businesses, and professionals like doctors and architects — we work with a wide spectrum of clients."
    },
    {
      id: 3,
      question: "Is my data safe with Raaz Consultancy?",
      answer: "Absolutely. Confidentiality is a core value. Your documents and data are stored securely in encrypted, cloud-based environments."
    },
    {
      id: 4,
      question: "What is your pricing model?",
      answer: "We offer fixed-price services with clear deliverables — no hidden fees, no retainers."
    },
    {
      id: 5,
      question: "How soon can I get started?",
      answer: "Right away! Book a free consultation, and we'll assess your needs and start the onboarding process within 24 hours."
    },
    {
      id: 6,
      question: "Do you handle IEC code registration?",
      answer: "Yes, we provide complete IEC (Import Export Code) registration services for businesses engaged in international trade. This includes application processing, documentation, and ongoing compliance support."
    },
    {
      id: 7,
      question: "Do you assist with GST filings for LLPs?",
      answer: "Absolutely! We handle all GST-related services for LLPs including registration, monthly/quarterly returns, reconciliation, and compliance management. Our team ensures timely and accurate filings."
    },
    {
      id: 8,
      question: "What documents do I need for company incorporation?",
      answer: "For company incorporation, you'll need identity proofs, address proofs, PAN cards, and business-related documents. We provide a complete checklist and guide you through the entire process step by step."
    },
    {
      id: 9,
      question: "Do you provide virtual CFO services?",
      answer: "Yes, we offer comprehensive virtual CFO services including financial planning, cash flow management, strategic advisory, and board reporting. Our experienced professionals act as your extended finance team."
    },
    {
      id: 10,
      question: "How do you handle TDS compliance?",
      answer: "We manage complete TDS compliance including calculation, deduction, payment, and filing of returns. Our team ensures accurate TDS processing and timely submissions to avoid penalties."
    },
    {
      id: 11,
      question: "Can you help with MSME registration?",
      answer: "Yes, we provide complete MSME registration services including Udyam registration, documentation, and ongoing compliance support. We help you avail all MSME benefits and schemes."
    },
    {
      id: 12,
      question: "What is included in your bookkeeping services?",
      answer: "Our bookkeeping services include monthly financial record maintenance, bank reconciliation, expense categorization, financial reporting, and audit-ready documentation. We use cloud-based tools for real-time access."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

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
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                        openFaq === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                {openFaq === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

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