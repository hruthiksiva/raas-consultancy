import FaqsHeroSection from '../components/faqs/FaqsHeroSection';
import FaqAccordion from '../components/faqs/FaqAccordion';
import FaqsContactCTASection from '../components/faqs/FaqsContactCTASection';
import FaqsAdditionalHelpSection from '../components/faqs/FaqsAdditionalHelpSection';
import FinalCTASection from '../components/home/FinalCTASection';
import FaqsSectionImg from '../assets/FaqsSection.jpg';

const FAQ_IMAGE_PLACEHOLDER = FaqsSectionImg;

const Faqs = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#182028' }}>
      {/* Hero Header */}
      <FaqsHeroSection 
        title="Frequently Asked Questions" 
        subtitle="Get answers to the most frequently asked questions about our services, processes, and how we can help your business grow."
      />

      {/* FAQs Section */}
      <section className="py-8 md:py-16 lg:py-24" style={{ backgroundColor: '#182028' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>
              {/* Common Questions */}
            </h2>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#FFFFFF' }}>
              {/* Get answers to the most frequently asked questions about our services, processes, and how we can help your business grow. */}
            </p>
          </div>

          {/* FAQs Flex Layout */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Image Placeholder (Left) */}
            <div className="flex-shrink-0 w-full md:w-[450px] h-[200px] md:h-[450px] rounded-2xl bg-gray-200 overflow-hidden mb-6 md:mb-0 md:mr-0 md:ml-0 md:self-start" style={{ backgroundColor: '#e5e7eb', alignSelf: 'flex-start' }}>
              <img
                src={FAQ_IMAGE_PLACEHOLDER}
                alt="FAQ visual"
                className="object-cover w-full h-full rounded-2xl"
                style={{ maxHeight: '450px', minHeight: '150px' }}
              />
            </div>
            {/* FAQ Accordion (Right) */}
            <div className="flex-1 w-full">
              <FaqAccordion />
            </div>
          </div>

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