import Testimonials from '../Testimonials';

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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get Your Free Consultation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to simplify your compliance? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* CTA Form */}
          <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>
              {/* Business Stage Field */}
              <div>
                <label htmlFor="businessStage" className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Stage *
                </label>
                <select
                  id="businessStage"
                  name="businessStage"
                  value={formData.businessStage}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
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
                <label htmlFor="servicesNeeded" className="block text-sm font-semibold text-gray-700 mb-2">
                  Services Needed *
                </label>
                <select
                  id="servicesNeeded"
                  name="servicesNeeded"
                  value={formData.servicesNeeded}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
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
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
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
          {/* Testimonials Section */}
          <div className="flex flex-col justify-center">
            <Testimonials 
              showHeader={false}
              showCustomHeader={true}
              customHeaderTitle="What Our Clients Say"
              customHeaderSubtitle="Trusted by startups and businesses across India"
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTAFormSection; 