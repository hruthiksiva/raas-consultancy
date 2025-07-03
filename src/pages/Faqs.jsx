import FaqsHeroSection from '../components/faqs/FaqsHeroSection';
import FaqAccordion from '../components/faqs/FaqAccordion';
import FaqsContactCTASection from '../components/faqs/FaqsContactCTASection';
import FaqsAdditionalHelpSection from '../components/faqs/FaqsAdditionalHelpSection';
import FinalCTASection from '../components/home/FinalCTASection';

const Faqs = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#182028' }}>
      {/* Hero Header */}
      <FaqsHeroSection 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions"
      />

      {/* FAQs Section */}
      <section className="py-8 md:py-16 lg:py-24" style={{ backgroundColor: '#182028' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>
              Common Questions
            </h2>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#FFFFFF' }}>
              Get answers to the most frequently asked questions about our services, processes, and how we can help your business grow.
            </p>
          </div>

          {/* FAQs Accordion */}
          <FaqAccordion />

          {/* Contact CTA */}
          <FaqsContactCTASection />
          {/* <FinalCTASection/> */}
        </div>
      </section>

      {/* Additional Help Section */}
      {/* <FaqsAdditionalHelpSection /> */}
    </div>
  );
};

export default Faqs; 