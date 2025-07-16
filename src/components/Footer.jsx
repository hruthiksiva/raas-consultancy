import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/faqs', label: 'FAQs' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (path) => {
    navigate(path);
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/CciCzr9aGPLE5JWn9', '_blank');
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4">RAAS Consultancy</h3>
            <p className="text-gray-300 text-xs md:text-sm mb-2 md:mb-4">
              Your trusted partner for business solutions and growth. We provide comprehensive 
              consulting services to help your business thrive in today's competitive market.
            </p>
            <div className="flex space-x-2 md:space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-4 w-4 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-4 w-4 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-4 w-4 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="text-gray-300 hover:text-[#B69567] focus:text-[#B69567] transition-colors duration-200 text-left text-xs md:text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info with Map */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Contact Info</h3>
            <div className="space-y-2 md:space-y-4">
              {/* Map and Address */}
              <div className="flex items-start space-x-3">
                {/* Map Box */}
                <div 
                  className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors duration-200 flex-shrink-0"
                  onClick={handleMapClick}
                  title="Click to open in Google Maps"
                >
                  {/* Address Icon */}
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.418-4.418-7-7.418-7-10a7 7 0 1114 0c0 2.582-2.582 5.582-7 10z" />
                    <circle cx="12" cy="11" r="3" fill="white" />
                  </svg>
                </div>
                {/* Address */}
                <div 
                  className="text-gray-300 cursor-pointer hover:text-[#B69567] focus:text-[#B69567] transition-colors duration-200 text-xs md:text-sm"
                  onClick={handleMapClick}
                  title="Click to open in Google Maps"
                  tabIndex={0}
                >
                  <p className="leading-relaxed">
                    3-220/1 Pagadamanu Street<br />
                    Greamspet, Chittoor<br />
                    517002
                  </p>
                </div>
              </div>

              {/* Phone and Email */}
              <div className="space-y-1 md:space-y-2 text-gray-300">
                <p className="flex items-center text-xs md:text-sm">
                  <span className="mr-2 w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    {/* Phone Icon */}
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-1.1 1.1a16.001 16.001 0 006.586 6.586l1.1-1.1a2 2 0 011.95-.45l1.2.3A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C7.163 21 3 16.837 3 12V5z" />
                    </svg>
                  </span>
                  <a 
                    href="tel:+918688196461" 
                    className="hover:text-[#B69567] focus:text-[#B69567] transition-colors duration-200"
                  >
                    +91 86881 96461
                  </a>
                </p>
                <p className="flex items-center text-xs md:text-sm">
                  <span className="mr-2 w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    {/* Mail Icon */}
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={2} stroke="currentColor" fill="none" />
                      <path d="M3 7l9 6 9-6" strokeWidth={2} stroke="currentColor" fill="none" />
                    </svg>
                  </span>
                  <a 
                    href="mailto:raasconsultancy.ca@gmail.com" 
                    className="hover:text-[#B69567] focus:text-[#B69567] transition-colors duration-200"
                  >
                    raasconsultancy.ca@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-4 md:mt-8 pt-4 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-xs md:text-sm">
              © {currentYear} RAAS Consulting. All rights reserved.
            </p>
            <div className="flex space-x-3 md:space-x-6 mt-2 md:mt-0">
              <button
                onClick={() => handleLinkClick('/privacy-policy')}
                className="text-gray-300 hover:text-[#B69567] focus:text-[#B69567] text-xs md:text-sm transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLinkClick('/terms-of-service')}
                className="text-gray-300 hover:text-[#B69567] focus:text-[#B69567] text-xs md:text-sm transition-colors duration-200"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 