const ContactInformationSection = () => (
  <section style={{ backgroundColor: '#232E3A' }} className="py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div>
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#B69567' }}>
            Get in Touch
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#B69567' }}>Address</h3>
                <p style={{ color: '#FFFFFF' }}>
                  3-220/1 Pagadamanu Street<br />
                  Greamspet, Chittoor<br />
                  517002
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#B69567' }}>Phone</h3>
                <a href="tel:+918688196461" style={{ color: '#FFFFFF' }} className="hover:text-blue-700 transition-colors duration-200">
                  +91 86881 96461
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#B69567' }}>Email</h3>
                <a href="mailto:info@raasconsulting.com" style={{ color: '#FFFFFF' }} className="hover:text-blue-700 transition-colors duration-200">
                  info@raasconsulting.com
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Map */}
        <div style={{ backgroundColor: '#FFFFFF' }} className="rounded-xl h-64 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <p className="text-gray-600">Interactive Map</p>
            <button 
              onClick={() => window.open('https://maps.app.goo.gl/25GeRGT7Pt1iKEE58', '_blank')}
              className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View on Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactInformationSection; 