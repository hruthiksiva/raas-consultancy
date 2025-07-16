import MapInteractive from '../../assets/Map-interactive.jpg';

const ContactInformationSection = () => (
  <section style={{ backgroundColor: '#232E3A' }} className="py-8 md:py-24">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Details */}
        <div>
          <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8" style={{ color: '#FFFFFF' }}>
            Get in Touch
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-sm sm:text-base" style={{ color: '#FFFFFF' }}>Address</h3>
                <p className="text-xs sm:text-base" style={{ color: '#FFFFFF' }}>
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
                <h3 className="font-semibold mb-1 text-sm sm:text-base" style={{ color: '#FFFFFF' }}>Phone</h3>
                <a href="tel:+918688196461" className="text-xs sm:text-base" style={{ color: '#FFFFFF' }}>
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
                <h3 className="font-semibold mb-1 text-sm sm:text-base" style={{ color: '#FFFFFF' }}>Email</h3>
                <a href="mailto:raasconsultancy.ca@gmail.com" className="text-xs sm:text-base" style={{ color: '#FFFFFF' }}>
                raasconsultancy.ca@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Map */}
        <div className="w-full mt-8 md:mt-0 flex flex-col items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.4019732047827!2d79.09235307484552!3d13.200060987136741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad5c117cc6a117%3A0x14bb8217fb5145a!2s3-467%2C%20Pagadaman%20St%2C%20Sanjeev%20Gandhi%20Nagar%2C%20Greamspet%2C%20Chittoor%2C%20Andhra%20Pradesh%20517002!5e0!3m2!1sen!2sin!4v1751520753890!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default ContactInformationSection; 