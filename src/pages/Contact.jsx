import { useState } from 'react';
import ContactHeroSection from '../components/contact/ContactHeroSection';
import USPSection from '../components/contact/USPSection';
import ContactCTAFormSection from '../components/contact/ContactCTAFormSection';
import ContactInformationSection from '../components/contact/ContactInformationSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessStage: '',
    servicesNeeded: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div id="contact-top" className="min-h-screen">
      {/* Hero Section */}
      <ContactHeroSection 
        title="CA-Led Startup Compliance & Tax Filing — Simple. Fast. Affordable."
        subtitle="We help you stay compliant, save tax, and focus on scaling."
      />
      {/* USP Section */}
      <USPSection />
      {/* CTA Form & Testimonials Section */}
      <ContactCTAFormSection 
        formData={formData}
        setFormData={setFormData}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        handleInputChange={handleInputChange}
      />
      {/* Contact Information Section */}
      <ContactInformationSection />
    </div>
  );
};

export default Contact; 