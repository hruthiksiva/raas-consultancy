import AboutHeroSection from '../components/about/AboutHeroSection';
import OurStorySection from '../components/about/OurStorySection';
import MissionVisionSection from '../components/about/MissionVisionSection';
import WhyChooseUsSection from '../components/about/WhyChooseUsSection';
import FoundersNoteSection from '../components/about/FoundersNoteSection';
import FinalCTASection from '../components/home/FinalCTASection';

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHeroSection />
      <OurStorySection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <FoundersNoteSection />
      <FinalCTASection />
    </div>
  );
};

export default About; 