import React, { useState } from 'react';
import faqsData from '../../data/faqs.json';

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqsData.map((faq, index) => (
          <div key={index} className="border border-gray-600 rounded-lg overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
            <button
              className="w-full px-6 py-4 text-left hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors duration-200"
              style={{ backgroundColor: '#1F2937' }}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>{faq.question}</h3>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="#FFFFFF"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 py-4 border-t border-gray-600" style={{ backgroundColor: '#1F2937' }}>
                <p className="leading-relaxed" style={{ color: '#FFFFFF' }}>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion; 