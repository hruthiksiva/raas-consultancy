const getIcon = (title, id) => {
  // Icon 1: Shield/Check for GST, ITR, ROC compliance
  if (id === 1 || title.includes('GST, ITR, ROC')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" width="32" height="32">
        <path d="M12 2c-.28 0-.56.06-.81.18l-7 3.11A2 2 0 0 0 3 7.06V12c0 5.25 6.13 8.92 8.19 10.06a2 2 0 0 0 1.62 0C14.87 20.92 21 17.25 21 12V7.06a2 2 0 0 0-1.19-1.77l-7-3.11A2 2 0 0 0 12 2zm0 2.18l7 3.11V12c0 4.13-4.84 7.36-7 8.47C9.84 19.36 5 16.13 5 12V7.29l7-3.11zm2.71 6.71a1 1 0 0 0-1.42 0L11 11.18l-.29-.29a1 1 0 1 0-1.42 1.42l1 1a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42z"/>
      </svg>
    );
  }
  // Icon 2: Tag for pricing
  if (id === 2 || title.toLowerCase().includes('pricing')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" width="32" height="32">
        <path d="M20.59 13.41l-8-8A2 2 0 0 0 10.17 5H5a2 2 0 0 0-2 2v5.17a2 2 0 0 0 .59 1.42l8 8a2 2 0 0 0 2.83 0l6.17-6.17a2 2 0 0 0 0-2.83zM7.5 8A1.5 1.5 0 1 1 6 9.5 1.5 1.5 0 0 1 7.5 8z"/>
      </svg>
    );
  }
  // Icon 3: User for CA consultation
  if (id === 3 || title.toLowerCase().includes('consultation')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" width="32" height="32">
        <path d="M12 12c2.7 0 8 1.34 8 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/>
      </svg>
    );
  }
  // Default: briefcase
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" width="32" height="32">
      <path d="M10.25 3A2.25 2.25 0 0 0 8 5.25V6H5.25C4.007 6 3 7.007 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V8.25A2.25 2.25 0 0 0 18.75 6H16v-.75A2.25 2.25 0 0 0 13.75 3h-3.5zm1.5 1.5h.5A.75.75 0 0 1 13 5.25V6h-2v-.75a.75.75 0 0 1 .75-.75zm-6.5 3h13.5a.75.75 0 0 1 .75.75v2.25H4V8.25a.75.75 0 0 1 .75-.75zm-.75 4.5h15v6.75a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75z"/>
    </svg>
  );
};

const USPCard = ({ 
  title, 
  description, 
  iconBgColor = "bg-blue-100", 
  iconColor = "bg-blue-600",
  className = "",
  id
}) => {
  return (
    <div className={`rounded-xl shadow-lg p-4 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300 ${className}`}
      style={{ backgroundColor: '#2F3C4E' }}>
      <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center">
        {getIcon(title, id)}
      </div>
      <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4" style={{ color: '#FFFFFF' }}>
        {title}
      </h3>
      <p className="text-sm sm:text-base" style={{ color: '#FFFFFF' }}>
        {description}
      </p>
    </div>
  );
};

export default USPCard; 