import React from 'react';

const WhoWeAreSection = () => (
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
);

export default WhoWeAreSection; 