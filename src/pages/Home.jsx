import { motion } from 'framer-motion';
import Header from '../components/Header';
import HeroSection from '../components/home/HeroSection';
import WhoWeAreSection from '../components/home/WhoWeAreSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FinalCTASection from '../components/home/FinalCTASection';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } }
};

const Home = () => {
  return (
    <motion.div
      className="min-h-screen"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <TestimonialsSection />
      <FinalCTASection />
    </motion.div>
  );
};

export default Home; 