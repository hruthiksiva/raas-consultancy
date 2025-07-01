import ServiceHeroSection from '../components/service/ServiceHeroSection';
import ServiceOverviewSection from '../components/service/ServiceOverviewSection';
import ServiceFinalCTASection from '../components/service/ServiceFinalCTASection';

const Services = () => {
  return (
    <div className="min-h-screen">
      <ServiceHeroSection />
      <ServiceOverviewSection />
      <ServiceFinalCTASection />
    </div>
  );
};

export default Services; 