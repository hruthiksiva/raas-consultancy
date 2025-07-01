import FaqsHeroSection from '../components/faqs/FaqsHeroSection';
import FaqAccordion from '../components/faqs/FaqAccordion';
import FaqsContactCTASection from '../components/faqs/FaqsContactCTASection';
import FaqsAdditionalHelpSection from '../components/faqs/FaqsAdditionalHelpSection';

const Faqs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <FaqsHeroSection 
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
          <FaqsContactCTASection />
        </div>
      </section>

      {/* Additional Help Section */}
      <FaqsAdditionalHelpSection />
    </div>
  );
};

export default Faqs; 