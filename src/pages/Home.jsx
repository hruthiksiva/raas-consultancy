import { useState, useEffect } from 'react';
import Header from '../components/Header';

const Home = () => {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Financial & Tax Solutions, Tailored for You.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Chartered expertise. Transparent pricing. Digital-first service for startups, MSMEs, Pvt Ltd companies, and professionals.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Simplifying Finance. Empowering Growth.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Raaz Consultancy was founded to challenge traditional norms of accounting. Where most saw numbers, we saw narratives. Trust, speed, and simplicity can go hand-in-hand with compliance. We don't just file; we fuel your clarity, growth, and peace of mind.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white/80 text-lg">Team Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions designed to drive your business forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tax Planning & Filing */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Tax Planning & Filing
              </h3>
              <p className="text-gray-600">
                Smart strategies for ITR, GST, and TDS.
              </p>
            </div>

            {/* Bookkeeping */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Bookkeeping
              </h3>
              <p className="text-gray-600">
                Cloud-based, accurate monthly tracking.
              </p>
            </div>

            {/* Registrations & Compliance */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Registrations & Compliance
              </h3>
              <p className="text-gray-600">
                Incorporation, GST, ROC, Udyam, MSME, IEC, LLP & PVT LTD compliance.
              </p>
            </div>

            {/* Advisory & Reporting */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Advisory & Reporting
              </h3>
              <p className="text-gray-600">
                Strategic finance reports and founder-led consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by startups and businesses across India
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 relative overflow-hidden">
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
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's simplify your finances — together.
          </h2>
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book a Free Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home; 