import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const PHONE_NUMBER = '+91 86881 96461';
const MAIL_ID = 'info@raasconsulting.com';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCallCard, setShowCallCard] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/faqs', label: 'FAQs' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavClick = (path) => {
    // Close mobile menu
    setIsMenuOpen(false);
    
    // Navigate to the page
    navigate(path);
    
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for clicks outside navbar
    document.addEventListener('mousedown', handleClickOutside);
    
    // Add event listener for escape key
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  // Detect mobile view
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close call card on route change
  useEffect(() => {
    setShowCallCard(false);
  }, [location.pathname]);

  // Close call card when clicking outside (desktop only)
  useEffect(() => {
    if (!showCallCard) return;
    const handleClickOutside = (event) => {
      if (!event.target.closest('#book-call-btn') && !event.target.closest('#call-card')) {
        setShowCallCard(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCallCard]);

  return (
    <nav style={{ backgroundColor: '#182028' }} className="shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('/')}
              className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity duration-200"
            >
              <span className="text-lg md:text-xl font-bold" style={{ color: '#FFFFFF' }}>RAAS Consulting</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:text-[#B69567] hover:text-[#B69567] ${isActive(item.path) ? 'text-[#B69567]' : 'text-white'}`}
                style={{ backgroundColor: 'transparent' }}
              >
                {item.label}
              </button>
            ))}
            {/* Book a call button */}
            <div className="relative ml-2">
              <button
                id="book-call-btn"
                className="px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 shadow hover:opacity-90 focus:outline-none focus:text-[#B69567] hover:text-[#B69567]"
                style={{ backgroundColor: '#FFFFFF', color: '#182028', borderRadius: '9999px' }}
                onClick={() => {
                  if (isMobile) {
                    window.location.href = `tel:${PHONE_NUMBER.replace(/\s+/g, '')}`;
                  } else {
                    setShowCallCard((prev) => !prev);
                  }
                }}
              >
                Book a call
              </button>
              {/* Call Card for Desktop */}
              {!isMobile && showCallCard && (
                <div
                  id="call-card"
                  className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg p-6 z-50 flex flex-col items-center"
                  style={{ minWidth: '250px' }}
                >
                  <span className="block text-lg font-bold mb-2" style={{ color: '#182028' }}>Contact Us</span>
                  <div className="w-full flex flex-col items-center mb-2">
                    <span className="text-base font-medium" style={{ color: '#182028' }}>Phone:</span>
                    <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-base font-semibold underline" style={{ color: '#182028' }}>{PHONE_NUMBER}</a>
                  </div>
                  <div className="w-full flex flex-col items-center">
                    <span className="text-base font-medium" style={{ color: '#182028' }}>Email:</span>
                    <a href={`mailto:${MAIL_ID}`} className="text-base font-semibold underline" style={{ color: '#182028' }}>{MAIL_ID}</a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset transition-colors duration-200"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              style={{ color: '#FFFFFF', backgroundColor: 'transparent' }}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-5 w-5 sm:h-6 sm:w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: '#FFFFFF' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-5 w-5 sm:h-6 sm:w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: '#FFFFFF' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
        style={{ backgroundColor: '#182028', boxShadow: '0 8px 24px rgba(0,0,0,0.18)' }}
      >
        <div
          className="mx-2 my-3 rounded-2xl overflow-hidden shadow-lg"
          style={{ backgroundColor: '#232E3A', maxHeight: '80vh', overflowY: 'auto' }}
        >
          <div className="flex flex-col gap-2 py-3 px-2">
            {navItems.map((item, idx) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none focus:text-[#B69567] hover:text-[#B69567] ${isActive(item.path) ? 'text-[#B69567]' : 'text-white'}`}
                style={{ backgroundColor: 'transparent' }}
              >
                {item.label}
              </button>
            ))}
            {/* Divider */}
            <div className="my-2 border-t border-gray-700" />
            {/* Book a call button inside mobile dropdown */}
            <button
              className="block w-full text-center px-4 py-3 mt-1 rounded-full font-semibold text-base transition-all duration-200 shadow focus:outline-none focus:text-[#B69567] hover:text-[#B69567]"
              style={{ backgroundColor: '#FFFFFF', color: '#182028', borderRadius: '9999px' }}
              onClick={() => window.location.href = `tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
            >
              Book a call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 