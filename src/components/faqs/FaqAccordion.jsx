import { useState, useEffect } from 'react';

const FaqAccordion = () => {
  const [faqs, setFaqs] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    fetch('/src/data/faqs.json')
      .then((res) => res.json())
      .then((data) => {
        // Filter out questions with IDs 1, 3, and 4
        const filteredFaqs = data.filter(faq => ![1, 3, 4].includes(faq.id));
        setFaqs(filteredFaqs);
      });
  }, []);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="space-y-3 md:space-y-4">
      {faqs.map((faq) => (
        <div 
          key={faq.id}
          className="overflow-hidden"
        >
          <button
            onClick={() => toggleFaq(faq.id)}
            className="w-full px-4 md:px-6 py-4 md:py-6 text-left flex items-center justify-between bg-transparent"
          >
            <h3 className="text-sm md:text-base lg:text-lg font-semibold pr-2 md:pr-4 leading-tight" style={{ color: '#FFFFFF' }}>
              {faq.question}
            </h3>
            <div className="flex-shrink-0">
              <svg
                className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-500 transform transition-transform duration-200 ${
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
            <div className="px-4 md:px-6 pb-4 md:pb-6">
              <div className="pt-3 md:pt-4">
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
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