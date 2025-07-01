import Header from '../components/Header';
import Service1 from '../components/service/Service1';
import Service2 from '../components/service/Service2';
import Service3 from '../components/service/Service3';
import Service4 from '../components/service/Service4';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <Header 
        title="Our Services" 
        subtitle="Discover the range of services we offer"
      />

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From tax planning to business advisory, we provide end-to-end financial services designed to help your business grow and thrive.
            </p>
          </div>
        </div>
      </section>

      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our services can help your business grow and succeed.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Your Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services; 