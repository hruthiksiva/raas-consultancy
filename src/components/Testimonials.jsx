import { useState, useEffect } from 'react';
import testimonialsData from '../data/testimonials.json';
// You can replace this with a real image or import
const placeholderImages = {
  1: 'https://via.placeholder.com/300x300?text=Client+1',
  2: 'https://via.placeholder.com/300x300?text=Client+2',
  3: 'https://via.placeholder.com/300x300?text=Client+3',
  4: 'https://via.placeholder.com/300x300?text=Client+4',
  // Add more as needed, fallback below
};
const defaultPlaceholder = 'https://via.placeholder.com/300x300?text=Client';

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

  const testimonial = testimonialsData[currentTestimonial];
  const imageUrl = (testimonial && placeholderImages[testimonial.id]) || defaultPlaceholder;

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
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12">
        {/* Testimonial Card (Left) */}
        <div className="flex-1 max-w-xl w-full md:w-[420px] h-[420px] rounded-2xl p-4 md:p-8 bg-[#B69567] relative overflow-hidden flex flex-col justify-end items-start">
          {/* Custom Header for Contact Page */}
          {showCustomHeader && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 text-left" style={{ color: '#141A1F' }}>
                {customHeaderTitle}
              </h3>
              <p className="text-left" style={{ color: '#141A1F' }}>
                {customHeaderSubtitle}
              </p>
            </div>
          )}
          {/* Quote Icon */}
          <div className="mb-2" style={{ color: '#FFFEF9' }}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          {/* Testimonial Text */}
          <blockquote className="text-sm md:text-base leading-relaxed mb-3 text-left italic" style={{ color: '#FFFEF9' }}>
            "{testimonial.text}"
          </blockquote>
          {/* Author Info */}
          <div>
            <p className="font-semibold text-xs md:text-sm text-left" style={{ color: '#FFFEF9' }}>{testimonial.author}</p>
            <p className="text-xs md:text-xs text-left" style={{ color: '#FFFEF9' }}>{testimonial.role}</p>
          </div>
          {/* Testimonial Indicators */}
          <div className="flex justify-start space-x-2 mt-4">
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
        {/* Image Placeholder (Right) */}
        <div className="flex-1 max-w-xl w-full md:w-[420px] h-[420px] rounded-2xl flex items-center justify-center bg-gray-200 overflow-hidden" style={{ backgroundColor: '#e5e7eb' }}>
          <img
            src={imageUrl}
            alt="Testimonial client"
            className="object-cover w-full h-full rounded-2xl"
            style={{ maxHeight: '420px', minHeight: '200px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 