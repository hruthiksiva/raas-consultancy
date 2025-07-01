import Header from '../components/Header';
import HeroSection from '../components/home/HeroSection';
import WhoWeAreSection from '../components/home/WhoWeAreSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FinalCTASection from '../components/home/FinalCTASection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
};

export default Home; 