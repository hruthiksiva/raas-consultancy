import { useState, useEffect } from 'react';
import testimonialsData from '../data/testimonials.json';

const Testimonials = ({ 
  title = "What Our Clients Say", 
  subtitle = "Trusted by startups and businesses across India",
  showHeader = true,
  showCustomHeader = false,
  customHeaderTitle = "",
  customHeaderSubtitle = "",
  className = ""
}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={className} style={{ backgroundColor: '#232E3A', width: '100%', paddingTop: '4rem', paddingBottom: '4rem' }}>
      {showHeader && (
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
            {title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#FFFFFF' }}>
            {subtitle}
          </p>
        </div>
      )}
      
      <div className={showHeader ? "max-w-4xl mx-auto" : ""}>
        <div className={showHeader ? "rounded-2xl p-8 md:p-12 relative overflow-hidden" : className} style={{ backgroundColor: '#B69567' }}>
          {/* Custom Header for Contact Page */}
          {showCustomHeader && (
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#141A1F' }}>
                {customHeaderTitle}
              </h3>
              <p style={{ color: '#141A1F' }}>
                {customHeaderSubtitle}
              </p>
            </div>
          )}
          {/* Testimonials Container */}
          <div className="relative h-64 md:h-80">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentTestimonial
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform translate-x-full'
                }`}
              >
                <div className="h-full flex flex-col justify-center">
                  {/* Quote Icon */}
                  <div className="mb-4" style={{ color: '#141A1F' }}>
                    <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl leading-relaxed mb-6 text-center italic" style={{ color: '#141A1F' }}>
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#232E3A' }}>
                      <span className="font-semibold text-lg" style={{ color: '#B69567' }}>
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#141A1F' }}>{testimonial.author}</p>
                      <p className="text-sm" style={{ color: '#141A1F' }}>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonialsData.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-[#232E3A] w-6'
                    : 'bg-[#232E3A] opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 