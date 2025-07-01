const ContactHeroSection = ({ title, subtitle }) => (
  <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  </section>
);

export default ContactHeroSection; 