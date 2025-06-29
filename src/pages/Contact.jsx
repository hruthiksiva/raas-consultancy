import { useState, useEffect } from 'react';
import Header from '../components/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessStage: '',
    servicesNeeded: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "RAAS made tax season a breeze for me. They not only filed everything on time but also helped me save more through smart planning I never knew existed. Super professional and responsive!",
      author: "Ritika S.",
      role: "Freelancer"
    },
    {
      text: "We were all over the place with our finances until RAAS stepped in. Now, our books are clean, organized, and always up to date. It's like having a full finance team without the cost.",
      author: "Amit K.",
      role: "Startup Founder"
    },
    {
      text: "I turn to RAAS for every major business decision—from funding strategies to structuring deals. Their advisory is honest, founder-friendly, and tailored to small businesses like mine.",
      author: "Sneha P.",
      role: "Business Owner"
    },
    {
      text: "The reports RAAS provides are not just numbers—they're insights. Their monthly dashboards help me understand where we stand financially and plan better for the future.",
      author: "Ravindra T.",
      role: "MSME Owner"
    },
    {
      text: "Setting up my business felt overwhelming until RAAS took over the entire registration and compliance process. They handled it end-to-end while I focused on building the brand.",
      author: "Nikhil R.",
      role: "Entrepreneur"
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              CA-Led Startup Compliance & Tax Filing — Simple. Fast. Affordable.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              We help you stay compliant, save tax, and focus on scaling.
            </p>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* USP 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                GST, ITR, ROC – handled end-to-end
              </h3>
              <p className="text-gray-600">
                Complete compliance management from registration to filing, ensuring your business stays on track.
              </p>
            </div>

            {/* USP 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Transparent pricing. Zero paperwork.
              </h3>
              <p className="text-gray-600">
                Clear, fixed pricing with no hidden fees. Digital-first approach eliminates paperwork hassles.
              </p>
            </div>

            {/* USP 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Personalized CA consultation
              </h3>
              <p className="text-gray-600">
                Direct access to Chartered Accountants who understand your business and growth stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form & Testimonials Section */}
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
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    What Our Clients Say
                  </h3>
                  <p className="text-gray-600">
                    Trusted by startups and businesses across India
                  </p>
                </div>

                {/* Testimonials Container */}
                <div className="relative h-64 md:h-80">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        index === currentTestimonial
                          ? 'opacity-100 transform translate-x-0'
                          : 'opacity-0 transform translate-x-full'
                      }`}
                    >
                      <div className="h-full flex flex-col justify-center">
                        {/* Quote Icon */}
                        <div className="text-blue-400 mb-4">
                          <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 text-center italic">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-blue-600 font-semibold text-lg">
                              {testimonial.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{testimonial.author}</p>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial Indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-blue-600 w-6'
                          : 'bg-blue-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      3-220/1 Pagadamanu Street<br />
                      Greamspet, Chittoor<br />
                      517002
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+918688196461" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                      +91 86881 96461
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@raasconsulting.com" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                      info@raasconsulting.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <p className="text-gray-600">Interactive Map</p>
                <button 
                  onClick={() => window.open('https://maps.app.goo.gl/25GeRGT7Pt1iKEE58', '_blank')}
                  className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View on Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 