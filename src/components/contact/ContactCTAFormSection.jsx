import React from 'react';
import ContactFormImg from '../../assets/ContactForm.jpg';

const ContactCTAFormSection = ({ formData, setFormData, isSubmitting, setIsSubmitting, handleInputChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        businessStage: '',
        servicesNeeded: ''
      });
    }, 2000);
  };

  return (
    <section style={{ backgroundColor: '#232E3A' }} className="py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#FFFFFF' }}>
            Get Your Free Consultation
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#FFFFFF' }}>
            {/* Ready to simplify your compliance? Fill out the form below and our team will get back to you within 24 hours. */}
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full max-w-6xl">
            {/* Image Placeholder */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div 
                className="w-full max-w-lg rounded-2xl shadow-xl flex items-center justify-center"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  minHeight: '100%',
                  height: '100%',
                  aspectRatio: '1/1',
                  padding: 0
                }}
              >
                <img 
                  src={ContactFormImg} 
                  alt="Contact Form" 
                  className="w-full h-full object-cover rounded-2xl" 
                  style={{ minHeight: '400px', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            {/* Form */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="rounded-2xl shadow-xl p-4 sm:p-8 md:p-12 w-full max-w-lg" style={{ backgroundColor: '#FFFFFF' }}>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2" style={{ color: '#232E3A' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                      placeholder="Enter your full name"
                      style={{ color: '#232E3A' }}
                    />
                  </div>
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2" style={{ color: '#232E3A' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                      placeholder="Enter your email address"
                      style={{ color: '#232E3A' }}
                    />
                  </div>
                  {/* Business Stage Field */}
                  <div>
                    <label htmlFor="businessStage" className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2" style={{ color: '#232E3A' }}>
                      Business Stage *
                    </label>
                    <select
                      id="businessStage"
                      name="businessStage"
                      value={formData.businessStage}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                      style={{ color: '#232E3A' }}
                    >
                      <option value="">Select your business stage</option>
                      <option value="idea">Just an idea</option>
                      <option value="startup">Early startup (0-2 years)</option>
                      <option value="growing">Growing business (2-5 years)</option>
                      <option value="established">Established business (5+ years)</option>
                      <option value="freelancer">Freelancer/Professional</option>
                    </select>
                  </div>
                  {/* Services Needed Field */}
                  <div>
                    <label htmlFor="servicesNeeded" className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2" style={{ color: '#232E3A' }}>
                      Services Needed *
                    </label>
                    <select
                      id="servicesNeeded"
                      name="servicesNeeded"
                      value={formData.servicesNeeded}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                      style={{ color: '#232E3A' }}
                    >
                      <option value="">Select services you need</option>
                      <option value="tax-filing">Tax Filing & Planning</option>
                      <option value="gst-compliance">GST Compliance</option>
                      <option value="company-registration">Company Registration</option>
                      <option value="bookkeeping">Bookkeeping</option>
                      <option value="compliance">ROC & Compliance</option>
                      <option value="advisory">Financial Advisory</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>
                  {/* Submit Button */}
                  <div className="pt-2 sm:pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-blue-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 ${
                        isSubmitting 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Get Free Consultation'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTAFormSection; 