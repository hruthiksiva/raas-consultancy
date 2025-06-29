import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header 
        title="Welcome to RAAS Consulting" 
        subtitle="Your trusted partner for business solutions and growth"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-lg text-gray-600">
            Content for the Home page will go here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 