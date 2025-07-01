import Header from '../components/Header';
import MissionVisionSection from '../components/about/MissionVisionSection';
import WhyChooseUsSection from '../components/about/WhyChooseUsSection';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <Header 
        title="About Us" 
        subtitle="Learn more about our company and mission"
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Raaz Consultancy emerged to bridge the gap between financial expertise and human understanding. Founded by Chartered professionals with business-first insight, we blend compliance with empathy. For us, every client is not just a file — it's a founder, a dream, a journey. That belief powers how we serve.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white/80 text-lg">Company Story Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <MissionVisionSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Founder's Note Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Founder's Note
              </h3>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic text-center leading-relaxed">
              "We blend professional expertise with personalized service — so you're not just compliant, you're confident."
            </blockquote>
            <div className="text-center mt-8">
              <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white/80 text-lg">Founder Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 