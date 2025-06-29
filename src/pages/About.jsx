import Header from '../components/Header';

const About = () => {
  return (
    <div>
      <Header 
        title="About Us" 
        subtitle="Learn more about our company and mission"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-lg text-gray-600">
            Content for the About Us page will go here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 