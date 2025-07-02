const ContactHeroSection = ({ title, subtitle }) => (
  <section
    className="relative w-full"
    style={{ backgroundColor: '#182028', backgroundImage: `url('/src/assets/ContactHero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
  >
    <div className="absolute inset-0" style={{ background: 'rgba(24,32,40,0.85)' }}></div>
    <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10 md:py-24">
      <div className="text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed" style={{ color: '#FFFFFF' }}>
          {subtitle}
        </p>
      </div>
    </div>
  </section>
);

export default ContactHeroSection; 