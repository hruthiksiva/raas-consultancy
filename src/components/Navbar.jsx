import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-[#B69567]"
                style={{ color: '#FFFFFF', backgroundColor: 'transparent' }}
              >
                {item.label}
              </button>
            ))}
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
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} style={{ backgroundColor: '#182028' }}>
        <div className="px-1 pt-1 pb-2 space-y-1 sm:px-2">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-[#B69567]"
              style={{ color: '#FFFFFF', backgroundColor: 'transparent' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 