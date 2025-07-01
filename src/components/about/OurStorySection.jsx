import React from 'react';

const OurStorySection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Raaz Consultancy emerged to bridge the gap between financial expertise and human understanding. Founded by Chartered professionals with business-first insight, we blend compliance with empathy. For us, every client is not just a file — it's a founder, a dream, a journey. That belief powers how we serve.
          </p>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
            <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white/80 text-lg">Company Story Image</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurStorySection; 