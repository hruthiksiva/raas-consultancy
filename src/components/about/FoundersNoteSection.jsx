import React from 'react';

const FoundersNoteSection = () => (
  <section className="py-16 md:py-24" style={{ backgroundColor: '#232E3A' }}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100" style={{ backgroundColor: '#182028' }}>
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
          </div>
          <h3 className="text-2xl font-bold mb-2" style={{ color: '#B69567' }}>
            Founder's Note
          </h3>
        </div>
        <blockquote className="text-xl md:text-2xl italic text-center leading-relaxed" style={{ color: '#FFFFFF' }}>
          "We blend professional expertise with personalized service — so you're not just compliant, you're confident."
        </blockquote>
        <div className="text-center mt-8">
          <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white/80 text-lg">Founder Image Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FoundersNoteSection; 