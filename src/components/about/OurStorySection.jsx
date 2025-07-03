import React from 'react';
import OurStoryNewImg from '../../assets/OurStoryNew.jpg';

const OurStorySection = () => (
  <section className="py-10 md:py-16 lg:py-24" style={{ backgroundColor: '#EAE9E5' }}>
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#2F3C4E' }}>
            Our Story
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#2F3C4E' }}>
            Raaz Consultancy emerged to bridge the gap between financial expertise and human understanding. Founded by Chartered professionals with business-first insight, we blend compliance with empathy. For us, every client is not just a file — it's a founder, a dream, a journey. That belief powers how we serve.
          </p>
        </div>
        <div className="relative">
          <div className="rounded-2xl p-4 md:p-8">
            <div className="w-full h-48 sm:h-64 md:h-80 lg:h-[28rem] bg-white/20 rounded-lg flex items-center justify-center overflow-hidden">
              <img src={OurStoryNewImg} alt="Our Story" className="object-cover object-top w-full h-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurStorySection; 