import { useState, useEffect } from 'react';

const FaqAccordion = () => {
  const [faqs, setFaqs] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    fetch('/src/data/faqs.json')
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div 
          key={faq.id}
          className="rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          style={{ backgroundColor: '#B69567' }}
        >
          <button
            onClick={() => toggleFaq(faq.id)}
            className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
          >
            <h3 className="text-lg font-semibold pr-4" style={{ color: '#182028' }}>
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
                <p className="leading-relaxed" style={{ color: '#FFFFFF' }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion; 