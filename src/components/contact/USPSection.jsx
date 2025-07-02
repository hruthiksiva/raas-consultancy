import USPCard from '../USPCard';
import uspsData from '../../data/usps.json';

const USPSection = ({ 
  className = "",
  gridCols = "md:grid-cols-3",
  sectionClassName = "py-16 md:py-24",
}) => {
  return (
    <section className={sectionClassName} style={{ backgroundColor: '#232E3A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${gridCols} gap-8 ${className}`}>
          {uspsData.map((usp) => (
            <USPCard
              key={usp.id}
              id={usp.id}
              title={usp.title}
              description={usp.description}
              iconBgColor={usp.iconBgColor}
              iconColor={usp.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection; 