import React from 'react';
import OurStoryImg from '../../assets/OurStory.jpg';

const OurStorySection = () => (
  <section className="py-16 md:py-24" style={{ backgroundColor: '#232E3A' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Our Story
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#FFFFFF' }}>
            Raaz Consultancy emerged to bridge the gap between financial expertise and human understanding. Founded by Chartered professionals with business-first insight, we blend compliance with empathy. For us, every client is not just a file — it's a founder, a dream, a journey. That belief powers how we serve.
          </p>
        </div>
        <div className="relative">
          <div className="rounded-2xl p-8">
            <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center overflow-hidden">
              <img src={OurStoryImg} alt="Our Story" className="object-cover w-full h-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurStorySection; 