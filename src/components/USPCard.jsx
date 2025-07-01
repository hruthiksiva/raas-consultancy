const USPCard = ({ 
  title, 
  description, 
  iconBgColor = "bg-blue-100", 
  iconColor = "bg-blue-600",
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className={`w-16 h-16 ${iconBgColor} rounded-lg flex items-center justify-center mx-auto mb-6`}>
        <div className={`w-8 h-8 ${iconColor} rounded`}></div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default USPCard; 